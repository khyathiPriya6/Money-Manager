import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails/index'

import TransactionItem from '../TransactionItem/index'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactions: [],
    title: '',
    amount: '',
    option: transactionTypeOptions[0].optionId,
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, option} = this.state
    const transactionType = transactionTypeOptions.find(
      eachItem => eachItem.optionId === option,
    )

    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type: transactionType.displayText,
    }

    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction],
      title: '',
      amount: '',
      option: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransaction = id => {
    const {transactions} = this.state
    const updatedTransactions = transactions.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({transactions: updatedTransactions})
  }

  changeInTitle = event => {
    this.setState({title: event.target.value})
  }

  changeInAmount = event => {
    this.setState({amount: event.target.value})
  }

  changeInOption = event => {
    this.setState({option: event.target.value})
  }

  calculateIncome = () => {
    const {transactions} = this.state
    let incomeAmount = 0
    transactions.forEach(eachAmount => {
      if (eachAmount.type === 'Income') {
        incomeAmount += eachAmount.amount
      }
    })
    return incomeAmount
  }

  calculateExpenses = () => {
    const {transactions} = this.state
    let expensesAmount = 0
    transactions.forEach(eachAmount => {
      if (eachAmount.type === 'Expenses') {
        expensesAmount += eachAmount.amount
      }
    })
    return expensesAmount
  }

  calculateBalance = () => {
    let incomeAmount = 0
    let expensesAmount = 0
    let balanceAmount = 0
    const {transactions} = this.state
    transactions.forEach(eachAmount => {
      if (eachAmount.type === 'Expenses') {
        expensesAmount += eachAmount.amount
      } else {
        incomeAmount += eachAmount.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {title, amount, option, transactions} = this.state
    const balanceAmount = this.calculateBalance()
    const incomeAmount = this.calculateIncome()
    const expensesAmount = this.calculateExpenses()
    return (
      <div className="app-container">
        <div className="welcome-back-container">
          <h1 className="name-style">Hi, Richard</h1>
          <p className="welcome-para-style">
            Welcome back to your<span className="app-name">Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </div>
        <div className="bottom-part">
          <form
            className="add-transactions-form"
            onSubmit={this.addTransaction}
          >
            <h2 className="add-transaction-heading">Add Transaction</h2>
            <div className="input-containers">
              <label htmlFor="title-id" className="input-label">
                TITLE
              </label>
              <input
                id="title-id"
                type="text"
                placeholder="TITLE"
                className="title-style"
                value={title}
                onChange={this.changeInTitle}
              />
            </div>
            <div className="input-containers">
              <label htmlFor="amount-id" className="input-label">
                AMOUNT
              </label>
              <input
                id="amount-id"
                type="text"
                placeholder="AMOUNT"
                className="title-style"
                value={amount}
                onChange={this.changeInAmount}
              />
            </div>
            <div className="input-containers">
              <label htmlFor="select-id" className="input-label">
                TYPE
              </label>
              <select
                id="select"
                className="title-style"
                value={option}
                onChange={this.changeInOption}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button className="add-btn" type="submit">
              ADD
            </button>
          </form>
          <div className="history-container">
            <h2 className="history-heading">History</h2>
            <div className="history-table-container">
              <ul>
                <li className="history-head">
                  <p className="history-item">Title</p>
                  <p className="history-item">Amount</p>
                  <p className="history-item">Type</p>
                </li>
                {transactions.map(eachItem => (
                  <TransactionItem
                    moneyValues={eachItem}
                    key={eachItem.id}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
