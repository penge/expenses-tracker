import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbInputModule,
  NbFormFieldModule,
  NbIconModule,
  NbButtonModule,
  NbSpinnerModule,
  NbSelectModule,
 } from '@nebular/theme';
 import {
  TransactionDatePipe,
  TransactionCurrencyPipe
} from './pipes';
import { FormFieldPasswordComponent } from './login/form-field-password/form-field-password.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { TransactionsTableComponent } from './home/transactions-table/transactions-table.component';
import { BalanceComponent } from './home/balance/balance.component';
import { TransactionsViewTableComponent } from './home/transactions-view-table/transactions-view-table.component';
import { CategoriesChartComponent } from './home/categories-chart/categories-chart.component';
import { TransactionsViewChartComponent } from './home/transactions-view-chart/transactions-view-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldPasswordComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    TransactionsTableComponent,
    TransactionDatePipe,
    TransactionCurrencyPipe,
    BalanceComponent,
    TransactionsViewTableComponent,
    CategoriesChartComponent,
    TransactionsViewChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbButtonModule,
    NbSpinnerModule,
    NbSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
