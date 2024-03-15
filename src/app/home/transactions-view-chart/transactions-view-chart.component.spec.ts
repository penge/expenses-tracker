import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsViewChartComponent } from './transactions-view-chart.component';

describe('TransactionsViewChartComponent', () => {
  let component: TransactionsViewChartComponent;
  let fixture: ComponentFixture<TransactionsViewChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsViewChartComponent]
    });
    fixture = TestBed.createComponent(TransactionsViewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
