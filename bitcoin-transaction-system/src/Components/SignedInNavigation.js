import '../Styles/Nav.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { getCancelLog } from '../State/Actions/TraderActions';
import { connect } from 'react-redux';
import { getBitcoinWallet } from '../State/Actions/ClientActions';
import { fetchLatestCryptocurrencyForClientBuy } from '../State/Actions/BitcoinActions';
import { fetchLatestCryptocurrencyForClientSell } from '../State/Actions/BitcoinActions';
import { getPastOrders } from '../State/Actions/ClientActions';


const SignedInNavigation = (props) => {
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
        if (path === '/TraderDashboard/Cancel-Log') {

            props.getCancelLog(navigate)
        }
        else if (path === '/ClientDashboard/BitcoinWallet') {
            props.getBitcoinWallet(navigate)
        }
        else if (path === '/ClientDashboard/BuyBitcoin') {
            props.fetchLatestCryptocurrencyForClientBuy(navigate)
        }
        else if (path === '/ClientDashboard/SellBitcoin') {
            props.fetchLatestCryptocurrencyForClientSell(navigate)
        }
        else if (path === '/ClientDashboard/Orders') {
            props.getPastOrders(navigate)

        }

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

const mapStateToProps = (state) => {
    return {

        trader: state.traderReducer.trader,
        trader_loading: state.traderReducer.loading,
        error: state.traderReducer.error,
        client: state.clientReducer.client,
        client_loading: state.clientReducer.loading,
        client_error: state.clientReducer.error
    }
}

const mapDispatchToProps = {
    getCancelLog,
    fetchLatestCryptocurrencyForClientBuy,
    fetchLatestCryptocurrencyForClientSell,
    getBitcoinWallet,
    getPastOrders
}
export default connect(mapStateToProps, mapDispatchToProps)(SignedInNavigation)