import { useState } from 'react'
import './App.css'
import logo from './logo.svg'

function App() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')

  const [expenses, setExpenses] = useState([])

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <h2>Add new item:</h2>
      <div class="fields">
        <div class="row">
          <label>
            <span>Name:</span>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </label>
        </div>
        <div class="row">
          <label>
            <span>Date:</span>
            <input
              value={date}
              placeholder="MM/DD/YYYY"
              onChange={(e) => {
                setDate(e.target.value)
              }}
            />
          </label>
          <label>
            <span>Amount:</span>
            <input
              value={amount}
              type="number"
              onChange={(e) => {
                setAmount(e.target.value)
              }}
            />
          </label>
        </div>
        <button
          onClick={() => {
            setExpenses((x) => [...x, { name, date, amount }])
          }}
        >
          Add Expense
        </button>
        <div>
          <div class="row">
            <div class="cell">Name</div>
            <div class="cell">Date</div>
            <div class="cell">Amount</div>
          </div>
          {expenses.map((x, i) => {
            return (
              <div class="row">
                <div class="cell">{x.name}</div>
                <div class="cell">{x.date}</div>
                <div class="cell">{x.amount}</div>
                <button
                  onClick={() => {
                    setExpenses(expenses.filter((_x, j) => i != j))
                  }}
                >
                  x
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
