import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm({ onSaveExpenseData, onClickCancel }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            value={enteredTitle}
            onChange={titleChangeHandler}
            type='text'
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            type='number' min='0.01' step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            type='date' min='2019-01-01' max='2022-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={onClickCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
};
