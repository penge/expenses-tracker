import { TransactionCurrencyPipe } from './transaction-currency.pipe';

describe('TransactionCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new TransactionCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
