

import React from 'react';

interface ExpenseSummaryProps {
  total: number;
}

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ total }) => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Total Expenses</h5>
        <p className="card-text">Total Expenses: ${total}</p>
      </div>
    </div>
  );
};

export default ExpenseSummary;
