import React from 'react';
import './App.css';
// Import Components
import Header from './components/Header'
import Balance from './components/Balance'
import AccountSummary from './components/AccountSummary'
import TransactionHistory from "./components/TransactionHistory"
import AddTransaction from "./components/AddTransaction"
// IMPORT GLOBAL PROVIDER
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (

    <GlobalProvider>
      <div >
      <Header/>
      <div className = "Container">
      <Balance/>
      <br/>
      <AccountSummary/>
      <TransactionHistory></TransactionHistory>
      <AddTransaction></AddTransaction>
    </div>
    </div>
    </GlobalProvider>
    
  
    
  );
}

export default App;
