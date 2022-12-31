// Write your code here
import './index.css'

const TransactionItem = props => {
  const {moneyValues, deleteTransaction} = props
  const {id, title, amount, type} = moneyValues

  const clickDelete = () => {
    deleteTransaction(id)
  }
  return (
    <li className="history-item-container">
      <p className="history-item-cell">{title}</p>
      <p className="history-item-cell">{amount}</p>
      <p className="history-item-cell">{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        className="delete-style"
        onClick={clickDelete}
        testid="delete"
      />
    </li>
  )
}

export default TransactionItem
