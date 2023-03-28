import { useState } from "react";
import "./App.css";
import logo from "./assets/images/logo.svg";
import Graph from "./Graph";

function App() {
  const [count, setCount] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(921.48);
  const [monthSpending, setMonthSpending] = useState(478.33);
  const [monthSpendingChange, setMonthSpendingChange] = useState("+2.4");

  return (
    <div className="App">
      <div className="balance">
        <span>My balance</span>
        <img className="logo" src={logo} alt="" />
        <span className="currentBalance">${currentBalance}</span>
      </div>
      <div className="chart">
        <h1 className="heading">Spending - Last 7 days</h1>
        <div className="graph">
          <Graph />
        </div>
        <div className="graph-text-container">
          <span className="chart-text">Total this month</span>
          <span className="monthSpending">${monthSpending}</span>
        </div>
        <div className="graph-text-container">
          <span className="chart-text monthSpendingChange">
            {monthSpendingChange}%
          </span>
          <span className="chart-text">from last month</span>
        </div>
      </div>
    </div>
  );
}

export default App;
