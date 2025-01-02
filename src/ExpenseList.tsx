// import React from 'react';

// interface ExpenseListProps {
//   expenses: string[];
//   removeExpense: (index: number) => void;
// }

// const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, removeExpense }) => {
//   return (
//     <ul>
//       {expenses.map((expense, index) => (
//         <li key={index}>
//           {expense} <button onClick={() => removeExpense(index)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ExpenseList;

// import React from 'react';

// interface ExpenseListProps {
//   expenses: { description: string; amount: string }[];
//   removeExpense: (index: number) => void;
// }

// const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, removeExpense }) => {
//   return (
//     <ul>
//       {expenses.map((expense, index) => (
//         <li key={index}>
//           {expense.description}: ${expense.amount}{' '}
//           <button onClick={() => removeExpense(index)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ExpenseList;

interface ExpenseListProps {
  expenses: { description: string; amount: number; currency: string }[]; // Expect amount as number
  removeExpense: (index: number) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, removeExpense }) => {
  return (
    <ul className="list-group mb-4">
      {expenses.map((expense, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {expense.description}: ${expense.amount} {/* `amount` is now a number */}
          <button onClick={() => removeExpense(index)} className="btn btn-danger btn-sm">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
