

// import React, { useState } from 'react';

// interface ExpenseFormProps {
//   addExpense: (expense: { description: string, amount: string }) => void;
// }

// const ExpenseForm: React.FC<ExpenseFormProps> = ({ addExpense }) => {
//   const [expense, setExpense] = useState('');
//   const [description, setDescription] = useState('');


// const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Check if expense or description is empty
//     if (!expense || !description) {
//       alert("Please fill in both the description and the amount.");
//       return;
//     }
  
//     // Check if the expense amount is a valid number and is not negative
//     if (parseFloat(expense) < 0) {
//       alert("Expense amount cannot be negative.");
//       return;
//     }
  
//     // Proceed to add the expense if everything is valid
//     addExpense({ description, amount: expense });
//     setExpense('');
//     setDescription('');
//   };
  
  

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Expense Description"
//       />
//       <input
//         type="number"
//         value={expense}
//         onChange={(e) => setExpense(e.target.value)}
//         placeholder="Amount"
//       />
//       <button type="submit">Add Expense</button>
//     </form>
//   );
// };

// export default ExpenseForm;



// import React, { useState } from 'react';

// interface ExpenseFormProps {
//   addExpense: (expense: { description: string; amount: string }) => void;
// }

// const ExpenseForm: React.FC<ExpenseFormProps> = ({ addExpense }) => {
//   const [expense, setExpense] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (expense && description) {
//       addExpense({ description, amount: expense });
//       setExpense('');
//       setDescription('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-4">
//       <div className="row">
//         <div className="col-md-6">
//           <input
//             type="text"
//             className="form-control mb-2"
//             placeholder="Expense Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div className="col-md-4">
//           <input
//             type="number"
//             className="form-control mb-2"
//             placeholder="Amount"
//             value={expense}
//             onChange={(e) => setExpense(e.target.value)}
//           />
//         </div>
//         <div className="col-md-2">
//           <button type="submit" className="btn btn-primary w-100">
//             Add Expense
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

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
        <div className="col-md-2">
          <select
            className="form-control mb-2"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
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
