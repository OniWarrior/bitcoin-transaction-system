import { connect } from "react-redux"
import { getBitcoinWallet } from "../../State/Actions/ClientActions";
import React from "react";
import SignedInNavigation from "../SignedInNavigation";
import '../../Styles/ClientDashboard.css'
import { getPastOrders } from "../../State/Actions/ClientActions";
import { useNavigate } from "react-router";
import { fetchLatestCryptocurrency } from "../../State/Actions/BitcoinActions";

const ClientDashboard = (props) => {
    // local state vars
    const navigate = useNavigate()

    const goToWallet = (e) => {
        e.preventDefault()
        // This is the api call to retrieve the bitcoin
        // wallet of the client.
        props.getBitcoinWallet(navigate)
    }

    const goToPastOrders = (e) => {
        e.preventDefault()
        props.getPastOrders(navigate)
    }

    const goToBuyBitcoin = (e) => {
        e.preventDefault()
        // fetch current bitcoin price
        props.fetchLatestCryptocurrency()

        // redirect to buy bitcoin
        navigate('/ClientDashboard/BuyBitcoin')



    }

    const goToSellBitcoin = (e) => {
        e.preventDefault()
        // fetch current bitcoin price
        props.fetchLatestCryptocurrency()

        // redirect to sell bitcoin
        navigate('/ClientDashboard/SellBitcoin')

    }

    const goToMoneyTransfer = (e) => {
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
                            <hr />

                            <button className="card-button" onClick={goToWallet}>Go to Wallet</button>


                        </div>

                    </div>
                    <div className="client-card">
                        <div className="client-card-group">
                            <h2>Get Past Orders</h2>
                            <hr />

                            <button className="card-button" onClick={goToPastOrders}>Go to Past Orders</button>

                        </div>

                    </div>
                    <div className="client-card">
                        <div className="client-card-group">
                            <h2>Buy Bitcoin</h2>
                            <hr />

                            <button className="card-button" onClick={goToBuyBitcoin}>Buy Bitcoin</button>


                        </div>

                    </div>
                    <div className="client-card">
                        <div className="client-card-group">
                            <h2>Sell Bitcoin</h2>
                            <hr />
                            <button className="card-button" onClick={goToSellBitcoin}>Sell Bitcoin</button>

                        </div>

                    </div>
                    <div className="client-card">
                        <div className="client-card-group">
                            <h2>Transfer Money To Trader</h2>
                            <hr />

                            <button className="card-button" onClick={goToMoneyTransfer}>Money Transfer</button>


                        </div>

                    </div>

                </div>
            </div>


        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        client: state.clientReducer.client,
        loading: state.clientReducer.loading,
        error: state.clientReducer.error
    }
}


const mapDispatchToProps = { getBitcoinWallet, getPastOrders, fetchLatestCryptocurrency }
export default connect(mapStateToProps, mapDispatchToProps)(ClientDashboard)