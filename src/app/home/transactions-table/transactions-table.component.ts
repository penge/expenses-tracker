import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/api/schema';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent {
  @Input() transactions: Transaction[] = [];
}
