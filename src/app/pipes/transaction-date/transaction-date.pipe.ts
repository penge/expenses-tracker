import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'transactionDate'
})
export class TransactionDatePipe implements PipeTransform {
  transform(timestampMs: number): string {
    return formatDate(timestampMs, 'MM/dd', 'en-US')
  }
}
