import { Component, WritableSignal, effect, signal } from '@angular/core';
import { TransactionsService } from '../api/transactions.service';
import { Transaction, TransactionsView, View } from '../api/schema';

type Maybe<T> = T | undefined;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  years: Maybe<number[]>;

  selectedYear: WritableSignal<number> = signal(-1);
  selectedView: WritableSignal<View> = signal('weekly');

  balance: Maybe<number>;
  transactionsView: Maybe<TransactionsView>;
  transactions: Maybe<Transaction[]>;

  incomeCategories: Maybe<Record<string, number>>;
  expenseCategories: Maybe<Record<string, number>>;

  incomeCategoryNames: Maybe<string[]>;
  expenseCategoryNames: Maybe<string[]>;

  constructor(private transactionsService: TransactionsService) {
    transactionsService.getYears().subscribe((years) => {
      this.years = years;
      this.selectedYear.set(years.at(-0) || -1);
    });

    effect(() => {
      this.transactionsService.getBallance(this.selectedYear()).subscribe((balance) => {
        this.balance = balance;
      });

      this.transactionsService.getTransactions(this.selectedYear()).subscribe((transactions) => {
        this.transactions = transactions;
      });

      this.transactionsService.getTransactionsView(this.selectedYear(), this.selectedView()).subscribe((transactionsView) => {
        this.transactionsView = transactionsView;
      });

      this.transactionsService.getCategories(this.selectedYear(), 'Income').subscribe((categories) => {
        this.incomeCategories = categories;
        this.incomeCategoryNames = Object.keys(categories);
      });

      this.transactionsService.getCategories(this.selectedYear(), 'Expense').subscribe((categories) => {
        this.expenseCategories = categories;
        this.expenseCategoryNames = Object.keys(categories);
      });
    });
  }

  changeSelectedYear(year: number) {
    this.selectedYear.set(year);
  }

  changeSelectedView(view: View) {
    this.selectedView.set(view);
  }
}
