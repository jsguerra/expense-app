import { useState } from 'react';
import Card from "../UI/Card";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

function Expenses({ expenses }) {
  const [selectYear, setSelectYear] = useState(2020);

  const yearHandler = (yearSelected) => {
    setSelectYear(yearSelected);
  }

  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === parseInt(selectYear));

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectYear}
        onSaveYear={yearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
