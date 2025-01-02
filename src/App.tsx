import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';
import CurrencyConversion from './CurrencyConversion';

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<{ description: string; amount: number; currency: string }[]>([]);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [toCurrency, setToCurrency] = useState('EUR'); // User can change the target currency, but fromCurrency is always USD

  const addExpense = (expense: { description: string; amount: string; currency: string }) => {
    setExpenses([...expenses, { ...expense, amount: parseFloat(expense.amount) }]);
  };

  const removeExpense = (index: number) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const total = expenses.length
    ? expenses.reduce((acc, exp) => acc + exp.amount, 0)
    : 0;

  const handleConversion = (convertedAmount: number) => {
    setConvertedAmount(convertedAmount);
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="text-center mb-4">Expense Tracker</h1>

        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} removeExpense={removeExpense} />

        {/* Display "USD" statically without the dropdown */}
        <div className="mb-4">
          <label>From Currency: </label>
          <div className="currency-tab">USD</div> {/* USD displayed as static text */}
        </div>

        {/* Allow users to change the 'To Currency' */}
        <div className="mb-4">
          <label htmlFor="toCurrency">To Currency</label>
          <select
            id="toCurrency"
            className="form-control"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}  // Only allow users to change the target currency
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            {/* Add more currencies as needed */}
          </select>
        </div>

        <CurrencyConversion
          amount={total}
          fromCurrency="USD"  // From currency is always USD
          toCurrency={toCurrency}
          onConversionComplete={handleConversion}
        />

        <ExpenseSummary total={total} />
        {convertedAmount > 0 && (
          <div>
            <h3>Converted Total: {convertedAmount.toFixed(2)} {toCurrency}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
