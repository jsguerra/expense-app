import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense({ onAddExpense }) {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    onAddExpense(expenseData);
    setShowForm(prevState => !prevState);
  }

  const showFormHandler = (e) => {
    e.preventDefault();
    setShowForm(prevState => !prevState);
  }

  return (
    <div className='new-expense'>
      {!showForm && <ExpenseForm onClickCancel={showFormHandler} onSaveExpenseData={saveExpenseDataHandler} />}
      {showForm && <button onClick={showFormHandler}>Add New Expense</button>}
    </div>
  )
};
