// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, balance, expenses} = props
  return (
    <div className="summary-card">
      <div className="summary">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div className="summary-text">
          <p>Your Balance</p>
          <p testid="balanceAmount">{balance}</p>
        </div>
      </div>
      <div className="summary">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div className="summary-text">
          <p>Your Income</p>
          <p testid="incomeAmount">{income}</p>
        </div>
      </div>
      <div className="summary">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div className="summary-text">
          <p>Your Expenses</p>
          <p testid="expensesAmount">{expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
