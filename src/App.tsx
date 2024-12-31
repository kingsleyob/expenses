// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import App from './App';  // Importing the App component

// function AppComponent() {  // Renamed local function to AppComponent
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default AppComponent;  // Export the renamed component

import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
      </header>
    </div>
  );
};

export default App;
