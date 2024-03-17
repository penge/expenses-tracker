import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, map, tap } from 'rxjs';
import { sum, round, countBy } from 'lodash-es';
import * as dayjs from 'dayjs';
import allTransactions from './dummy/transactions';
import { Transaction, TransactionType, View, TransactionsView, TransactionPeriod } from './schema';
import getPeriod from './get-period';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private transations = signal(allTransactions);
  private transactions$ = toObservable(this.transations);

  constructor() {
    const transactionsItem = localStorage.getItem('transactions');
    if (transactionsItem) {
      this.transations.set(JSON.parse(transactionsItem));
    }
  }

  getYears(): Observable<number[]> {
    return this.transactions$.pipe(
      map((transactions) => [...new Set(
        transactions.map((t) => dayjs(t.timestamp).year())
      )])
    );
  }

  getBallance(year: number): Observable<number> {
    return this.transactions$.pipe(
      map((transactions) => transactions.filter(((t) => dayjs(t.timestamp).year() === year))),
      map((transactions) => transactions.reduce((acc, curr) => acc + curr.value, 0))
    );
  }

  getTransactionsView(year: number, view: View): Observable<TransactionsView> {
    return this.getTransactions(year).pipe(
      map((transactions) => transactions.reduce((acc, curr) => {
          const period = getPeriod(curr.timestamp, view);
          if (period === -1) {
            return acc;
          }

          const transactionPeriod: TransactionPeriod = {
            period,
            income: curr.type === 'Income' ? curr.value : 0,
            expense: curr.type === 'Expense' ? curr.value : 0,
            balance: curr.value,
          }

          const existingTransactionPeriod = acc.find((item) => item.period === period);
          if (existingTransactionPeriod) {
            existingTransactionPeriod.income += transactionPeriod.income;
            existingTransactionPeriod.expense += transactionPeriod.expense;
            existingTransactionPeriod.balance += transactionPeriod.balance;
          } else {
            acc = [...acc, transactionPeriod];
          }

          return acc;
        }, [] as TransactionPeriod[]).sort((a, b) => a.period - b.period)),

      map((data) => {
        const transactionView: TransactionsView = {
          view,
          data,
          totals: {
            income: round(sum(data.map((item) => item.income)), 2),
            expense: round(sum(data.map((item) => item.expense)), 2),
            balance: round(sum(data.map((item) => item.balance)), 2),
          }
        };

        return transactionView;
      })
    );
  }

  getTransactions(year: number): Observable<Transaction[]> {
    let balance = 0;
    return this.transactions$.pipe(
      tap(() => { balance = 0; }),
      map((transactions) => transactions.filter((t) => dayjs(t.timestamp).year() === year)),
      map((transactions) => transactions.reverse().map((t) => ({
          ...t,
          balance: (balance += t.value)
        })).reverse()
      )
    );
  }

  getCategories(year: number, type: TransactionType): Observable<Record<string, number>> {
    return this.getTransactions(year).pipe(
      map((transactions) => transactions.filter((t) => t.type === type)),
      map((transactions) => countBy(transactions, 'category'))
    );
  }

  addTransaction(transaction: Omit<Transaction, 'balance'>): void {
    const updatedTransactions = [transaction, ...this.transations()];

    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    this.transations.set(updatedTransactions);
  }
}
