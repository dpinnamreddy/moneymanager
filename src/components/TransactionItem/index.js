// Write your code here
import './index.css'

const TransactionItem = props => {
  const {history, deleteTransaction} = props
  const {id, title, amount, type} = history

  const delTrans = () => {
    deleteTransaction(id)
  }

  return (
    <li key={id}>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button type="button" onClick={delTrans} testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
