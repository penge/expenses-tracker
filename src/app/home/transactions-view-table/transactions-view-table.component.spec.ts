import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsViewTableComponent } from './transactions-view-table.component';

describe('TransactionsViewTableComponent', () => {
  let component: TransactionsViewTableComponent;
  let fixture: ComponentFixture<TransactionsViewTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsViewTableComponent]
    });
    fixture = TestBed.createComponent(TransactionsViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
