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
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/ClientDashboard" element={<ClientDashboard />} />
            <Route path="/ClientDashboard/BitcoinWallet" element={<BitcoinWallet />} />
            <Route path="/ClientDashboard/BuyBitcoin" element={<BuyBitcoin />} />
            <Route path="/ClientDashboard/SellBitcoin" element={<SellBitcoin />} />
            <Route path="/ClientDashboard/Orders" element={<PastOrders />} />
            <Route path="/ClientDashboard/TransferMoney" element={<TransferMoney />} />
            <Route path="/TraderDashboard" element={<TraderDashboard />} />
            <Route path="/TraderDashboard/Cancel-Log" element={<CancelLog />} />
            <Route path="/TraderDashboard/TraderClientSearch" element={<TraderClientSearch />} />
            <Route path="/TraderDashboard/TraderClientSearch/clients/search" element={<FoundClient />} />
            <Route path="/TraderDashboard/TraderClientSearch/clients/:client_id/TraderBuyBitcoin" element={<TraderBuyBitcoin />} />
            <Route path="/TraderDashboard/TraderClientSearch/clients/:client_id/TraderSellBitcoin" element={<TraderSellBitcoin />} />
            <Route path="/TraderDashboard/TraderClientSearch/clients/:client_id/payments-and-transactions" element={<CancelOrderOrTransfer />} />
            <Route path="/ManagerDashboard" element={<ManagerDashboard />} />
            <Route path="/ManagerDashboard/daily" element={<RetrieveTotDailyTransacs />} />
            <Route path="/ManagerDashboard/weekly" element={<RetrieveTotWeeklyTransacs />} />
            <Route path="/ManagerDashboard/monthly" element={<RetrieveTotMonthlyTransacs />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
