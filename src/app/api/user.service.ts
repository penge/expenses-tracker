import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionType } from './schema';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private incomeCategories = signal([] as string[]);
  private expenseCategories = signal([] as string[]);

  private incomeCategories$ = toObservable(this.incomeCategories);
  private expenseCategories$ = toObservable(this.expenseCategories);

  constructor() {
    const incomeCategoriesItem = localStorage.getItem('incomeCategories');
    if (incomeCategoriesItem) {
      this.incomeCategories.set(JSON.parse(incomeCategoriesItem));
    }

    const expenseCategoriesItem = localStorage.getItem('expenseCategories');
    if (expenseCategoriesItem) {
      this.expenseCategories.set(JSON.parse(expenseCategoriesItem));
    }
  }

  getIncomeCategories(): Observable<string[]> {
    return this.incomeCategories$;
  }

  getExpenseCategories(): Observable<string[]> {
    return this.expenseCategories$;
  }

  setCategories(type: TransactionType, categories: string[]) {
    if (type === 'Income') {
      localStorage.setItem('incomeCategories', JSON.stringify(categories));
      this.incomeCategories.set(categories);
    }

    if (type === 'Expense') {
      localStorage.setItem('expenseCategories', JSON.stringify(categories));
      this.expenseCategories.set(categories);
    }
  }
}
