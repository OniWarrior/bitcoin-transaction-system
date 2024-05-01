import React from "react"
import SignedNavigation from "../SignedInNavigation"
import { postTraderBuyBitcoinTransaction } from "../../State/Actions/TraderActions"
import { connect } from "react-redux"
import { useNavigate } from "react-router"
import '../../Styles/TraderBuy.css'
import SignedInNavigation from "../SignedInNavigation"

const TraderBuyBitcoin = (props) => {
    const navigate = useNavigate()

    const buy = (e) => {
        e.preventDefault()

        const formattedRequest = {
            email: props.trader.email,
            Bitcoin_price: props.bitcoin.price
        }

        props.postTraderBuyBitcoinTransaction(formattedRequest, navigate)
    }



    return(
        <div>
            <SignedInNavigation />
            <div className="trader-buy-container">
                <div className="trader-buy-box">
                    <div className="trader-button-container">
                        <h1>Buy Bitcoin Using USD FIAT in Transfer Account</h1>
                        <button className="trader-buy-submit" onCLick={buy}>Buy Bitcoin</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        trader: state.tradeReducer.trader,
        bitcoin: state.bitcoinReducer.bitcoin,
        loading: state.traderReducer.loading,
        error: state.traderReducer.error
    }
}

const mapDispatchToProps = { postTraderBuyBitcoinTransaction}

export default connect (mapStateToProps, mapDispatchToProps)(TraderBuyBitcoin)