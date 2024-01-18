import { Component } from '@angular/core';
import { TransactionsService } from '../services/transactions/transactions.service';
import { ITransaction } from '../services/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.scss'],
})
export class EarningsComponent {
  transactions: ITransaction[] = [];
  transactionForm: FormGroup;
  totalAmount = 0;

  constructor(
    private transactionsService: TransactionsService,
    private formBuilder: FormBuilder
  ) {
    this.transactionForm = this.formBuilder.group({
      transactionDate: [
        new Date().toISOString().substring(0, 10),
        Validators.required,
      ],
    });
    this.loadTransactions();
  }

  loadTransactions() {
    this.transactions = this.transactionsService.getTransactionByDate(
      this.transactionForm.value.transactionDate
    );
    this.transactions.forEach(record => this.totalAmount += record.amount)
  }
}
