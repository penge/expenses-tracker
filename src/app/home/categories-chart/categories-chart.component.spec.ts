import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesChartComponent } from './categories-chart.component';

describe('CategoriesComponent', () => {
  let component: CategoriesChartComponent;
  let fixture: ComponentFixture<CategoriesChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesChartComponent]
    });
    fixture = TestBed.createComponent(CategoriesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
