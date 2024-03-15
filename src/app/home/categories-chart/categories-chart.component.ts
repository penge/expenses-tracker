import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories-chart',
  template: '<div [id]="chartDiv"></div>'
})
export class CategoriesChartComponent {
  @Input() chartDiv: string = '';
  @Input() categories: Record<string, number> = {};

  ngOnChanges() {
    const drawChart = () => {
      const data = google.visualization.arrayToDataTable([
        ['Category', 'Count'],
        ...Object.entries(this.categories)
      ]);

      const chart = new google.visualization.PieChart(document.getElementById(this.chartDiv)!);
      chart.draw(data, { width: 600, height: 400 });
    }

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
  }
}

