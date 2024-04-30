import { connect } from "react-redux"
import { getBitcoinWallet } from "../../State/Actions/ClientActions";
import React from "react";
import SignedInNavigation from "../SignedInNavigation";
import '../../Styles/ClientDashboard.css'
import { getPastOrders } from "../../State/Actions/ClientActions";
import { useNavigate } from "react-router";
<<<<<<< Updated upstream
import { fetchLatestCryptocurrency } from "../../State/Actions/BitcoinActions";
=======
import { fetchLatestCryptoCurrencyForClient} from "../../State/Actions/BitcoinActions.js";
>>>>>>> Stashed changes

const ClientDashboard = (props) => {
    //local state vars
    const navigate = useNavigate()

    const goToWallet=(e)=>{
        e.preventDefault()
        props.getBitcoinWallet(navigate)
    }

    const goToPastOrders=(e)=>{
        e.preventDefault()
        props.getPastOrders(navigate)
    }

    const goToBuyBitcoin=(e)=>{
        e.preventDefault()
<<<<<<< Updated upstream
        props.fetchLatestCryptocurrency()
        navigate('/ClientDashboard/BuyBitcoin')
=======
        props.fetchLatestCryptoCurrencyForClient(navigate)
>>>>>>> Stashed changes
    }

    const goToSellBitcoin=(e)=>{
        e.preventDefault()
<<<<<<< Updated upstream
        props.fetchLatestCryptocurrency()
        navigate('/ClientDashboard/SellBitcoin')
=======
        props.fetchLatestCryptoCurrencyForClient(navigate)
>>>>>>> Stashed changes
    }

    const goToMoneyTransfer=(e)=>{
        e.preventDefault()
        navigate('/ClientDashboard/TransferMoney')
    }

    return (
        <div className="client-dash">
            <SignedInNavigation />
            <div className="client-box">
                <div className="client-container">
                    <div className="client-card">
                        <div className="client-card-group">
                            <h2>Get Bitcoin Wallet</h2>
                            <hr/>

                            <button className="card-button" onClick={goToWallet}> Go to Wallet </button>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-card-group">
                            <h2>Get Past Orders</h2>
                            <hr/>

                            <button className="card-button" onClick={goToPastOrders}>Go to Past Orders</button>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-card-group">
                            <h2>Buy Bitcoin</h2>
                            <hr/>

                            <button className="card-button" onClick={goToBuyBitcoin}>Buy Bitcoin</button>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-card-group">
                            <h2>Sell Bitcoin</h2>
                            <hr/>

                            <button className="card-button" onClick={goToSellBitcoin}>Sell Bitcoin</button>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-card-group">
                            <h2>Transfer Money To Trader</h2>
                            <hr/>

                            <button className="card-button" onClick={goToMoneyTransfer}>Money Transfer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        client:state.clientReducer.client,
        loading:state.clientReducer.loading,
        error:state.clientReducer.error
    }
}

<<<<<<< Updated upstream
const mapDispatchToProps = { getBitcoinWallet, getPastOrders, fetchLatestCryptocurrency }
=======
const mapDispatchToProps = { getBitcoinWallet, getPastOrders,fetchLatestCryptoCurrencyForClient}
>>>>>>> Stashed changes
export default connect (mapStateToProps, mapDispatchToProps)(ClientDashboard)