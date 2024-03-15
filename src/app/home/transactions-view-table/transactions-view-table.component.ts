import { Component, Input } from '@angular/core';
import { TransactionsView } from 'src/app/api/schema';

@Component({
  selector: 'app-transactions-view-table',
  templateUrl: './transactions-view-table.component.html',
  styleUrls: ['./transactions-view-table.component.scss']
})
export class TransactionsViewTableComponent {
  @Input() transactionsView: TransactionsView = {
    view: 'monthly',
    data: [],
    totals: {
      income: 0,
      expense: 0,
      balance: 0
    }
  };
}
