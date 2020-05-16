import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button'
import MonthlyCost from './components/monthlyCost'
import Amount from './components/amount'
import Repayment from './components/repayment'


function App() {
  return (
    <div className="App">
      <MonthlyCost />
      <Amount />
      <Repayment />
      <Button />
    </div>
  );
}

export default App;
