import { connect } from "react-redux"
import React from "react";
import SignedInNavigation from "../SignedInNavigation";
import '../../Styles/Found.css'
import { useNavigate } from "react-router";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { fetchLatestCryptocurrencyForTraderBuy } from "../../State/Actions/BitcoinActions";
import { fetchLatestCryptocurrencyForTraderSell } from "../../State/Actions/BitcoinActions";
import { getTransfersAndTransactions } from "../../State/Actions/TraderActions";


const FoundClient = (props) => {
    const navigate = useNavigate()


    // get price of bitcoin then nav to trader buy
    const goToBuy = (e) => {
        e.preventDefault()
        props.fetchLatestCryptocurrencyForTraderBuy(navigate, props.client_id)
    }

    // get price of bitcoin then nav to trader sell
    const goToSell = (e) => {
        e.preventDefault()
        props.fetchLatestCryptocurrencyForTraderSell(navigate, props.client_id)
    }

    // get transfers and transactions and nav to cancel transfer and/or transacs

    const goToCancel = (e) => {
        e.preventDefault()
        props.getTransfersAndTransactions(props.client_id, navigate)
    }

    return (
        <div>
            <SignedInNavigation />

        </div>
    )




}

const mapStateToProps = (state) => {
    return {
        trader: state.traderReducer.trader,
        loading: state.traderReducer.loading,
        error: state.traderReducer.error
    }

}

const mapDispatchToProps = {
    fetchLatestCryptocurrencyForTraderBuy,
    fetchLatestCryptocurrencyForTraderSell
}

export default connect(mapStateToProps, mapDispatchToProps)(FoundClient)