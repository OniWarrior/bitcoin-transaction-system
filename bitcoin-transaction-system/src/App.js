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
import CancelOrderOrTransfer from "./Components/Trader/TraderCancelOrderOrTransfer";
import FoundClient from "./Components/Trader/TraderFoundClient";
import CancelLog from "./Components/Trader/TraderCancelLog";

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
          <ProtectedRoute path='/ClientDashboard/BitcoinWallet' Component={BitcoinWallet}></ProtectedRoute>
          <ProtectedRoute path='/ClientDashboard/BuyBitcoin' Component={BuyBitcoin}></ProtectedRoute>
          <ProtectedRoute path='/ClientDashboard/SellBitcoin' Component={SellBitcoin}></ProtectedRoute>
          <ProtectedRoute path='/ClientDashboard/Orders' Component={PastOrders}></ProtectedRoute>
          <ProtectedRoute path='/ClientDashboard/TransferMoney' Component={TransferMoney}></ProtectedRoute>
          <ProtectedRoute exact path='/TraderDashboard' Component={TraderDashboard}></ProtectedRoute>
          <ProtectedRoute path='/TraderDashboard/Cancel-Log' Component={CancelLog}></ProtectedRoute>
          <ProtectedRoute path='/TraderDashboard/TraderClientSearch' Component={TraderClientSearch}></ProtectedRoute>
          <ProtectedRoute path='/TraderDashboard/TraderClientSearch/clients/search' Component={FoundClient}></ProtectedRoute>
          <ProtectedRoute path='/TraderDashboard/TraderClientSearch/clients/:client_id/TraderBuyBitcoin' Component={TraderBuyBitcoin}></ProtectedRoute>
          <ProtectedRoute path='/TraderDashboard/TraderClientSearch/clients/:client_id/TraderSellBitcoin' Component={TraderSellBitcoin}></ProtectedRoute>
          <ProtectedRoute path='/TraderDashboard/TraderClientSearch/clients/:client_id/payments-and-transactions' Component={CancelOrderOrTransfer}></ProtectedRoute>
          <ProtectedRoute exact path='/ManagerDashboard' Component={ManagerDashboard}></ProtectedRoute>
          <ProtectedRoute path='/ManagerDashboard/total-daily-transactions' Component={RetrieveTotDailyTransacs}></ProtectedRoute>
          <ProtectedRoute path='/ManagerDashboard/total-weekly-transactions' Component={RetrieveTotWeeklyTransacs}></ProtectedRoute>
          <ProtectedRoute path='/ManagerDashboard/total-monthly-transactions' Component={RetrieveTotMonthlyTransacs}></ProtectedRoute>
        </Routes>

      </header>
    </div>
  );
}

export default App;
