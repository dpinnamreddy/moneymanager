import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

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
class MoneyManger extends Component {
  state = {
    historyList: [],
    title: '',
    amount: '',
    type: 'Income',
    balance: 0,
    income: 0,
  }

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateAmount = e => {
    this.setState({amount: e.target.value})
  }

  updateType = e => {
    this.setState({type: e.target.value})
  }

  onSubmitTransactions = e => {
    e.preventDefault()
    const {title, amount, type} = this.state
    const newState = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    const addAm = type === 'Income' ? amount : -amount
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newState],
      title: '',
      amount: '',
      type: 'Income',
      balance: parseInt(prevState.balance + addAm),
      income: parseInt(prevState.income + (type === 'Income' ? amount : 0)),
    }))
  }

  deleteTransaction = id => {
    this.setState(prevState => {
      const toDelTrans = prevState.historyList.filter(
        history => history.id === id,
      )
      const ty = toDelTrans[0].type
      const amt = toDelTrans[0].amount
      const addAm = ty === 'Income' ? -amt : +amt
      return {
        historyList: prevState.historyList.filter(history => history.id !== id),
        balance: prevState.balance + addAm,
        income: prevState.income + ty === 'Income' ? -amt : 0,
      }
    })
  }

  render() {
    const {historyList, title, amount, type, balance, income} = this.state
    const expenses = balance - income
    return (
      <div className="container">
        <div className="name-card">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <MoneyDetails
          balance={balance}
          income={income}
          expenses={Math.abs(expenses)}
          key={uuidv4()}
        />
        <div className="bottom-card">
          <div className="side-card">
            <h1>Add Transaction</h1>
            <form onSubmit={this.onSubmitTransactions}>
              <label htmlFor="title">TITLE</label>
              <br />
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                onChange={this.updateTitle}
                value={title}
              />
              <br />
              <label htmlFor="amount">AMOUNT</label>
              <br />
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                onChange={this.updateAmount}
                value={amount}
              />
              <br />
              <label htmlFor="type">TYPE</label>
              <br />
              <select
                id="type"
                name="type"
                onChange={this.updateType}
                value={type}
              >
                {transactionTypeOptions.map(transactionType => (
                  <option value={transactionType.optionId}>
                    {transactionType.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button type="submit">Add</button>
            </form>
          </div>
          <div className="right-card">
            <h1>History</h1>
            <ul className="inside-right-card">
              <li>
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p>&nbsp;</p>
              </li>
              {historyList.map(history => (
                <TransactionItem
                  history={history}
                  deleteTransaction={this.deleteTransaction}
                  key={history.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManger
