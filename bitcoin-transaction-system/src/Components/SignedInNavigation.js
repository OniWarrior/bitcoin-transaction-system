import '../Styles/Nav.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const SignedInNavigation = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    let user_type = '';

    if (token) {
        const decoded = jwtDecode(token);
        user_type = decoded.user_type;
    }



    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/');
    }

    const navigateTo = (path) => (e) => {
        e.preventDefault();
        navigate(path);
    };

    const buttons = {
        Client: [
            { path: '/ClientDashboard', label: 'Dashboard' },
            { path: '/ClientDashboard/BitcoinWallet', label: 'Wallet' },
            { path: '/ClientDashboard/BuyBitcoin', label: 'Buy' },
            { path: '/ClientDashboard/SellBitcoin', label: 'Sell' },
            { path: '/ClientDashboard/TransferMoney', label: 'Transfer' },
            { path: '/ClientDashboard/Orders', label: 'Orders' },
        ],
        Trader: [
            { path: '/TraderDashboard', label: 'Dashboard' },
            { path: '/TraderDashboard/TraderClientSearch', label: 'Search' },
            { path: '/TraderDashboard/Cancel-Log', label: 'Cancel Log' },
        ],
        Manager: [
            { path: '/ManagerDashboard', label: 'dash' },
        ],
    };

    return (
        <div className="nav-container">
            <div className="row-nav">
                {buttons[user_type]?.map((button, index) => (
                    <button key={index} className={`button-${button.label.toLowerCase()}`} onClick={navigateTo(button.path)}>

                    </button>
                ))}
                <button className="button-log-out" onClick={logOut}></button>
            </div>
        </div>
    );
};

export default SignedInNavigation;