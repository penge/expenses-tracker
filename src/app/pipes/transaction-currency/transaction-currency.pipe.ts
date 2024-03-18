import { Injectable, Pipe, PipeTransform } from '@angular/core';

const DASH = '-';
const EN_DASH = '–';

@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'transactionCurrency'
})
export class TransactionCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    return new Intl.NumberFormat('en-US', {
      signDisplay: 'exceptZero'
    }).format(value).replace(DASH, EN_DASH)
  }
}
