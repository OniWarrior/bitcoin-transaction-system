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
        e.preventDefault()

        navigate(path);
    };

    const buttons = {
        Client: [
            { path: '/ClientDashboard', label: 'dash' },
            { path: '/ClientDashboard/BitcoinWallet', label: 'wallet' },
            { path: '/ClientDashboard/BuyBitcoin', label: 'buy' },
            { path: '/ClientDashboard/SellBitcoin', label: 'sell' },
            { path: '/ClientDashboard/TransferMoney', label: 'transfer' },
            { path: '/ClientDashboard/Orders', label: 'order' },
        ],
        Trader: [
            { path: '/TraderDashboard', label: 'dash' },
            { path: '/TraderDashboard/TraderClientSearch', label: 'search' },
            { path: '/TraderDashboard/Cancel-Log', label: 'cancel-log' },
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