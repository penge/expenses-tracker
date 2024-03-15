import { Injectable, signal, computed } from '@angular/core';
import allTransactions from './dummy/transactions';
import * as dayjs from 'dayjs';
import { sum, round, countBy } from 'lodash-es';
import { Transaction, TransactionType, View, TransactionsView, TransactionPeriod } from './schema';
import getPeriod from './get-period';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private transactions = signal(allTransactions);
  private years = computed(() => [...new Set(
    this.transactions().map((t) => dayjs(t.timestamp).year())
  )]);

  getYears() {
    return this.years;
  }

  getBallance(year: number) {
    return this.transactions()
      .filter((t) => dayjs(t.timestamp).year() === year)
      .reduce((acc, curr) => acc + curr.value, 0);
  }

  getTransactionsView(year: number, view: View): TransactionsView {
    const data = this.getTransactions(year).reduce((acc, curr) => {
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
    }, [] as TransactionPeriod[]).sort((a, b) => a.period - b.period);

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
  }

  getTransactions(year: number): Transaction[] {
    const transactions = this.transactions()
      .filter((t) => dayjs(t.timestamp).year() === year)

    let balance = 0;
    const transactionsWithBalance = [...transactions].reverse().map((t) => ({
        ...t,
        balance: (balance += t.value)
      })).reverse();

    return transactionsWithBalance;
  }

  getCategories(year: number, type: TransactionType): Record<string, number> {
    return countBy(this.getTransactions(year).filter((t) => t.type === type), 'category');
  }
}
