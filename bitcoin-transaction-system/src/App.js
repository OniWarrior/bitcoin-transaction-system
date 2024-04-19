import React from "react";
import "../src/Styles/App.css";
import { Routes, Route } from 'react-router-dom'
import Home from '../src/Components/Home';
import Login from "./Components/Login";
import Signup from "./Components/Signup";

// Client components
import ClientDashboard from "./Components/Client/ClientDashboard";
import BuyBitcoin from "./Components/Client/ClientBuyBitcoin";
import SellBitcoin from "./Components/Client/ClientSellBitcoin";
import PastOrders from "./Components/Client/ClientPastOrders";
import BitcoinWallet from "./Components/Client/ClientBitcoinWallet";
import TransferMoney from "./Components/Client/ClientTransferMoney";

// Traders components
import TraderDashboard from "./Components/Trader/TraderDashboard";
import TraderBuyBitcoin from "./Components/Trader/TraderBuyBitcoin";
import TraderSellBitcoin from "./Components/Trader/TraderSellBitcoin";
import TraderClientSearch from "./Components/Trader/TraderClientSearch";
import RetrieveOrdersAndTransfers from "./Components/Trader/TraderRetrieveClientTransfersAndTransactions";
import CancelOrderOrTransfer from "./Components/Trader/TraderCancelOrderOrTransfer";


// Manager components
import ManagerDashboard from "./Components/Manager/ManagerDashboard";
import RetrieveTotDailyTransacs from "./Components/Manager/ManagerRetrieveTotDailyTransacs";
import RetrieveTotWeeklyTransacs from "./Components/Manager/ManagerRetrieveTotWeeklyTransacs";
import RetrieveTotMonthlyTransacs from "./Components/Manager/ManagerRetrieveTotMonthlyTransacs";
import ProtectedRoute from "./Components/Utils/ProtectedRoute";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/Login" Component={Login}></Route>
          <Route path="/Signup" Component={Signup}></Route>
          <ProtectedRoute exact path="/ClientDashboard" Component={ClientDashboard}></ProtectedRoute>



        </Routes>

      </header>
    </div>
  );
}

export default App;
