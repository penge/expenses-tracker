import { Component, Input } from '@angular/core';
import { TransactionsView } from 'src/app/api/schema';

@Component({
  selector: 'app-transactions-view-chart',
  template: '<div [id]="chartDiv"></div>'
})
export class TransactionsViewChartComponent {
  @Input() chartDiv: string = '';
  @Input() transactionsView: TransactionsView = {
    view: 'monthly',
    data: [],
    totals: {
      income: 0,
      expense: 0,
      balance: 0
    }
  };

  ngOnChanges() {
    if (!this.transactionsView.data.length) {
      return;
    }

    const drawChart = () => {
      const data = google.visualization.arrayToDataTable([
        [this.transactionsView.view, 'Income', 'Expense', 'Balance'],
        ...this.transactionsView.data.map((item) => (
          [item.period, item.income, item.expense, item.balance]
        ))
      ]);

      const chart = new google.visualization.ComboChart(document.getElementById(this.chartDiv)!);
      chart.draw(data, {
        width: 900,
        height: 400,
        hAxis: {
          ticks:  this.transactionsView.data.map((item) => item.period)
        },
        seriesType: 'bars',
        series: {
          2: { type: 'line' }
        }
      });
    }

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
  }
}

