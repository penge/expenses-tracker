import { Component, Input, TemplateRef } from '@angular/core';
import { NbDialogRef, NbDialogService, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { Transaction, TransactionType } from 'src/app/api/schema';
import { TransactionsService } from 'src/app/api/transactions.service';
import { TransactionCurrencyPipe } from 'src/app/pipes';

@Component({
  selector: 'app-manage-transactions',
  templateUrl: './manage-transactions.component.html',
  styleUrls: ['./manage-transactions.component.scss']
})
export class ManageTransactionsComponent {
  @Input() type: TransactionType = 'Income';
  pickedDate = new Date();

  @Input() categories: string[] = [];
  selectedCategory = '';

  info = '';
  value: number | undefined;

  get addButtonStatus() {
    return this.type === 'Income' ? 'success' : 'danger';
  }

  constructor(
    private dialogService: NbDialogService,
    private transactionsService: TransactionsService,
    private toastrService: NbToastrService,
    private transactionCurrencyPipe: TransactionCurrencyPipe
  ) {}

  openDialog(dialog: TemplateRef<any>) {
    this.pickedDate = new Date();
    this.selectedCategory = this.categories.at(0) || '';
    this.info = '';
    this.value = undefined;

    this.dialogService.open(dialog, { autoFocus: false });
  }

  canAddTransaction() {
    return this.pickedDate
      && this.type
      && this.selectedCategory
      && this.info
      && typeof this.value === 'number';
  }

  addTransaction(dialogRef: NbDialogRef<any>) {
    if (typeof this.value !== 'number') {
      return;
    }

    const transaction: Omit<Transaction, 'balance'> = {
      timestamp: this.pickedDate.getTime(),
      type: this.type,
      category: this.selectedCategory,
      info: this.info,
      value: this.value * (this.type === 'Income' ? 1 : -1)
    }

    this.transactionsService.addTransaction(transaction);

    this.toastrService.show(
      '',
      `${this.transactionCurrencyPipe.transform(transaction.value)} (${transaction.category})`,
      {
        position: NbGlobalPhysicalPosition.TOP_RIGHT,
        status: this.addButtonStatus,
        icon: '',
        duration: 5000,
      }
    );

    dialogRef.close();
  }
}
