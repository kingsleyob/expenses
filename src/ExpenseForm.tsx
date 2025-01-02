
// export default ExpenseForm;
import React, { useState } from 'react';

interface ExpenseFormProps {
  addExpense: (expense: { description: string; amount: string; currency: string }) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ addExpense }) => {
  const [expense, setExpense] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('USD');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (expense && description) {
      addExpense({ description, amount: expense, currency });  // Pass expense as string
      setExpense('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Expense Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Amount"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
        </div>
        {/* <div className="col-md-2">
          <select
            className="form-control mb-2"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div> */}
        {/* "From Currency" Tab (Now fixed to USD) */}
        <div className="col-md-2">
          <div className="currency-tab">USD</div> {/* Display USD statically */}
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
