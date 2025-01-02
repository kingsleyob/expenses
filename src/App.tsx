
// import React, { useState } from 'react';
// import './App.css';
// import ExpenseForm from './ExpenseForm';
// import ExpenseList from './ExpenseList';
// import ExpenseSummary from './ExpenseSummary';

// const App: React.FC = () => {
//   const [expenses, setExpenses] = useState<{ description: string; amount: string }[]>([]);

//   const addExpense = (expense: { description: string, amount: string }) => {
//     setExpenses([...expenses, expense]);
//   };

//   const removeExpense = (index: number) => {
//     const updatedExpenses = expenses.filter((_, i) => i !== index);
//     setExpenses(updatedExpenses);
//   };

//   const total = expenses.length
//     ? expenses.reduce((acc, exp) => acc + parseFloat(exp.amount), 0)
//     : 0;

//   return (
//     <div className="App">
//       <h1>Expense Tracker</h1>
//       <ExpenseForm addExpense={addExpense} />
//       <ExpenseList expenses={expenses} removeExpense={removeExpense} />
//       <ExpenseSummary total={total} />
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import ExpenseForm from './ExpenseForm';
// import ExpenseList from './ExpenseList';
// import ExpenseSummary from './ExpenseSummary';

// const App: React.FC = () => {
//   const [expenses, setExpenses] = useState<{ description: string; amount: string }[]>([]);

//   const addExpense = (expense: { description: string; amount: string }) => {
//     setExpenses([...expenses, expense]);
//   };

//   const removeExpense = (index: number) => {
//     const updatedExpenses = expenses.filter((_, i) => i !== index);
//     setExpenses(updatedExpenses);
//   };

//   const total = expenses.length
//     ? expenses.reduce((acc, exp) => acc + parseFloat(exp.amount), 0)
//     : 0;

//   return (
//     <div className="App">
//       {/* Main container */}
//       <div className="container mt-5">
//         {/* Header */}
//         <h1 className="text-center mb-4">Expense Tracker</h1>
        
//         {/* Expense Form */}
//         <ExpenseForm addExpense={addExpense} />

//         {/* Expense List */}
//         <ExpenseList expenses={expenses} removeExpense={removeExpense} />

//         {/* Expense Summary */}
//         <ExpenseSummary total={total} />
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';
import CurrencyConversion from './CurrencyConversion';

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<{ description: string; amount: number; currency: string }[]>([]);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const addExpense = (expense: { description: string; amount: string; currency: string }) => {
    // Convert amount to a number before adding to expenses state
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
        <CurrencyConversion
          amount={total}
          fromCurrency={fromCurrency}
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
