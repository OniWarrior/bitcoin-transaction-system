import React from "react"
import SignedInNavigation from "../SignedInNavigation"
import { connect } from "react-redux"
import { useNavigate } from "react-router"
import '../../Styles/Found.css'
import { fetchLatestCryptocurrencyForTraderBuy } from "../../State/Actions/BitcoinActions";
import { fetchLatestCryptocurrencyForTraderSell } from "../../State/Actions/BitcoinActions";
import { getTransfersAndTransactions } from "../../State/Actions/TraderActions";


const FoundClient = (props) => {
    const navigate = useNavigate()

    const goToBuy = (e) => {
        e.preventDefault()
        props.fetchLatestCryptocurrencyForTraderBuy(navigate,props.trader.client_id)
    }

    const goToSell = (e) => {
        e.preventDefault()
        props.fetchLatestCryptocurrencyForTraderSell(navigate,props.trader.client_id)
    }

    const goToCancel = (e) => {
        e.preventDefault()
        props.getTransfersAndTransactions(props.trader.client_id, navigate)
    }
    return (
        <div >
            <SignedInNavigation />
            <div className="client-found-box">
                <div className="client-found-container">
                    <div className="big-client-found-container">
                        <div className="big-client-info-container">
                            <h1>Found Client</h1>
                            <hr />

                            <h2>{props.trader.first_name}</h2>
                            <h2>{props.trader.last_name}</h2>
                            <h2>{props.trader.email}</h2>
                        </div>
                        <div className="big-button-container">
                            <button className="big-button" onClick={goToBuy}>Buy Bitcoin</button>
                            <button className="big-button" onClick={goToSell}>Sell Bitcoin</button>
                            <button className="big-button" onClick={goToCancel}>Cancel Transaction</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {
        trader: state.traderReducer.trader,
        loading: state.traderReducer.loading,
        error: state.traderReducer.error,
    }
}

const matchDispatchToProps = {
    fetchLatestCryptocurrencyForTraderBuy,
    fetchLatestCryptocurrencyForTraderSell,
    getTransfersAndTransactions
}

export default connect(mapStateToProps, mapDispatchToProps)(FoundClient)