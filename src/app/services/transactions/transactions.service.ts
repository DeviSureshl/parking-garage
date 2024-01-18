import { Injectable } from '@angular/core';
import { ITransaction } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  transactions: ITransaction[] = [];

  constructor() {
    const transactionFromStorage =
      localStorage.getItem('dnb-parking-transactions') || '[]';
    this.transactions = JSON.parse(transactionFromStorage);
  }

  getTransactions() {
    return this.transactions;
  }

  getTransactionByDate(date: string) {
    return this.transactions.filter((record) =>
      record.paymentDate.includes(date)
    );
  }

  addTransaction(newTransaction: ITransaction) {
    this.transactions.push(newTransaction);
    localStorage.setItem(
      'dnb-parking-transactions',
      JSON.stringify(this.transactions)
    );
  }
}
