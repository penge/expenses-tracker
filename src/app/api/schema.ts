export type TransactionType = 'Income' | 'Expense';

export interface Transaction {
  timestamp: number
  type: TransactionType
  category: string
  info: string
  value: number
  balance: number
}

export type View = 'monthly' | 'weekly';

export type TransactionPeriod = {
  period: number
  income: number
  expense: number
  balance: number
};

export type TransactionsView = {
  view: View
  data: TransactionPeriod[]
  totals: {
    income: number
    expense: number
    balance: number
  }
}
