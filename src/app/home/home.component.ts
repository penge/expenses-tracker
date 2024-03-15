import { Component, Signal } from '@angular/core';
import { TransactionsService } from '../api/transactions.service';
import { Transaction, TransactionsView, View } from '../api/schema';

type Maybe<T> = T | undefined;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  years: Signal<number[]>;
  selectedYear: Maybe<number>;
  selectedYearBalance: Maybe<number>;
  selectedView: View = 'weekly';
  selectedYearTransactionsView: Maybe<TransactionsView>;
  selectedYearTransactions: Maybe<Transaction[]>;
  selectedYearIncomeCategories: Maybe<Record<string, number>>;
  selectedYearExpenseCategories: Maybe<Record<string, number>>;

  constructor(private transactionsService: TransactionsService) {
    this.years = transactionsService.getYears();
    this.selectedYear = this.years().at(-0);
    this.updateSelectedYearData();
  }

  changeSelectedYear(year: number) {
    this.selectedYear = year;
    this.updateSelectedYearData();
  }

  changeSelectedView(view: View) {
    this.selectedView = view;
    this.updateSelectedViewData();
  }

  private updateSelectedYearData() {
    if (!this.selectedYear) {
      return;
    }

    this.selectedYearBalance = this.transactionsService.getBallance(this.selectedYear);
    this.selectedYearTransactions = this.transactionsService.getTransactions(this.selectedYear);
    this.updateSelectedViewData();
  }

  private updateSelectedViewData() {
    if (!this.selectedYear) {
      return;
    }

    this.selectedYearTransactionsView = this.transactionsService.getTransactionsView(this.selectedYear, this.selectedView);
    this.selectedYearIncomeCategories = this.transactionsService.getCategories(this.selectedYear, 'Income');
    this.selectedYearExpenseCategories = this.transactionsService.getCategories(this.selectedYear, 'Expense');
  }
}
