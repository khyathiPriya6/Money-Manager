// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="money-details-container">
      <div className="each-container balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img-style"
        />
        <div className="each-container-text-style">
          <p className="category-name">Your Balance</p>
          <p className="amount-value" testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="each-container income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img-style"
        />
        <div className="each-container-text-style">
          <p className="category-name">Your Income</p>
          <p className="amount-value" typeid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="each-container expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="img-style"
        />
        <div className="each-container-text-style">
          <p className="category-name">Your Expenses</p>
          <p className="amount-value" testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
