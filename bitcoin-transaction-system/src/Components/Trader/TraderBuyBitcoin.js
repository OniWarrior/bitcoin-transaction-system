import React from "react"
import SignedInNavigation from "../SignedInNavigation"
import { postTraderBuyBitcoinTransaction } from "../../State/Actions/TraderActions"
import { connect } from "react-redux"
import { useNavigate } from "react-router"
import '../../Styles/TraderBuy.css'

const TraderBuyBitcoin = (props) => {
    const navigate = useNavigate()

    const buy = (e) => {
        e.preventDefault()

        // format the info to be sent
        const formattedRequest = {
            email: props.trader.email,
            Bitcoin_price: props.bitcoin.price
        }

        props.postTraderBuyBitcoinTransaction(formattedRequest, navigate)
    }

    return (
        <div>
            <SignedInNavigation />
            <div className="trader-buy-container">
                <div className="trader-buy-box">
                    <div className="trader-button-container">
                        <h1>Buy Bitcoin Using USD FIAT In Transfer Account</h1>
                        <button className="trader-buy-submit" onClick={buy}>Buy Bitcoin</button>

                    </div>

                </div>
            </div>
        </div>
    )

}


const mapStateToProps = (state) => {
    return {
        trader: state.traderReducer.trader,
        bitcoin: state.bitcoinReducer.bitcoin,
        loading: state.traderReducer.loading,
        error: state.traderReducer.error
    }
}

const mapDispatchToProps = { postTraderBuyBitcoinTransaction }



export default connect(mapStateToProps, mapDispatchToProps)(TraderBuyBitcoin)