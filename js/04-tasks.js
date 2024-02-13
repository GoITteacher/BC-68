const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length,
      amount,
      type,
    };

    return transaction;
  },

  deposit(amount) {
    if (amount <= 0) return;

    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) return;

    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const elem of this.transactions) {
      if (elem.type === type) {
        total += elem.amount;
      }
    }
    return total;
  },
};

account.deposit(200);
account.withdraw(100);
account.deposit(500);
account.withdraw(-200);
account.deposit(100);

const totalDeposit = account.getTransactionTotal(Transaction.DEPOSIT);
const totalWithdraw = account.getTransactionTotal(Transaction.WITHDRAW);

console.log(totalDeposit);
console.log(totalWithdraw);
