
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';

// Mocking axios for the currency conversion test only
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { rates: { EUR: 0.85 } } }))  // Mocked response
}));


// Test for rendering the Expense Tracker header
test('renders Expense Tracker header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Expense Tracker/i);
  expect(headerElement).toBeInTheDocument();
});

// Test for adding an expense
test('adds an expense when the form is submitted', () => {
  render(<App />);

  // Simulate user typing in the expense description
  fireEvent.change(screen.getByPlaceholderText('Expense Description'), { target: { value: 'Groceries' } });

  // Simulate user typing in the expense amount
  fireEvent.change(screen.getByPlaceholderText('Amount'), { target: { value: '50' } });

  // Submit the form
  fireEvent.click(screen.getByText('Add Expense'));

  // Check if the expense is rendered
  expect(screen.getByText('Groceries: $50')).toBeInTheDocument();
});

// Test for removing an expense
test('removes an expense when delete button is clicked', () => {
  const expenses = [{ description: 'Groceries', amount: 50, currency: 'USD' }];
  const removeExpenseMock = jest.fn();

  render(<ExpenseList expenses={expenses} removeExpense={removeExpenseMock} />);

  // Click the delete button
  fireEvent.click(screen.getByText('Delete'));

  // Check if removeExpenseMock was called
  expect(removeExpenseMock).toHaveBeenCalled();
});

// Test for total expenses calculation
test('calculates and displays the total expenses correctly', () => {
  const total = 150; // Example total
  render(<ExpenseSummary total={total} />);

  // Check if the total is displayed correctly
  expect(screen.getByText('Total Expenses: $150')).toBeInTheDocument();
});

// Edge Case: Test for empty expense submission
test('does not allow adding an empty expense', () => {
  render(<App />);

  // Try to submit an empty expense
  fireEvent.change(screen.getByPlaceholderText('Expense Description'), { target: { value: '' } });
  fireEvent.change(screen.getByPlaceholderText('Amount'), { target: { value: '' } });

  fireEvent.click(screen.getByText('Add Expense'));

  // Ensure that the expense was not added
  expect(screen.queryByText('Groceries: $0')).not.toBeInTheDocument();
});

// Edge Case: Test for non-numeric expense amount
test('does not allow non-numeric expense amount', () => {
  render(<App />);

  // Try to enter a non-numeric expense amount
  fireEvent.change(screen.getByPlaceholderText('Expense Description'), { target: { value: 'Test Expense' } });
  fireEvent.change(screen.getByPlaceholderText('Amount'), { target: { value: 'abc' } });

  fireEvent.click(screen.getByText('Add Expense'));

  // Ensure that the expense was not added
  expect(screen.queryByText('Test Expense: $NaN')).not.toBeInTheDocument();
});

// Edge Case: Test for negative expense amount
test('does not allow negative expense amount', () => {
  render(<App />);

  // Try to enter a negative expense amount
  fireEvent.change(screen.getByPlaceholderText('Expense Description'), { target: { value: 'Test Expense' } });
  fireEvent.change(screen.getByPlaceholderText('Amount'), { target: { value: '-50' } });

  fireEvent.click(screen.getByText('Add Expense'));

  // Ensure that the expense was not added
  expect(screen.queryByText('Test Expense: $-50')).not.toBeInTheDocument();
});

// Edge Case: Test for multiple expenses with the same description and amount
test('allows adding multiple expenses with the same description and amount', () => {
  const expenses = [
    { description: 'Groceries', amount: 50, currency: 'USD' },
    { description: 'Groceries', amount: 50, currency: 'USD' },
  ];

  render(<ExpenseList expenses={expenses} removeExpense={() => {}} />);

  // Ensure both expenses are rendered
  const expenseItems = screen.getAllByText('Groceries: $50');

  // Ensure both expenses are rendered
  expect(expenseItems.length).toBe(2);  // There should be two elements with this text
});
