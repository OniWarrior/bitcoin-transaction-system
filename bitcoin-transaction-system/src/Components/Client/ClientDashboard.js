import { connect } from "react-redux"
import { getBitcoinWallet } from "../../State/Actions/ClientActions";
import React from "react";
import SignedInNavigation from "../SignedInNavigation";
import '../../Styles/ClientDashboard.css'
import { getPastOrders } from "../../State/Actions/ClientActions";
import { useNavigate } from "react-router";


const ClientDashboard = (props) => {
    // local state vars
    const navigate = useNavigate()


    return (
        <div className="client-dash">
            <SignedInNavigation />
            <div className="client-box">
                <div className="client-container">
                    <div className="client-card">
                        <div className="client-card-group">
                            <h2>Get Bitcoin Wallet</h2>
                            <hr />

                        </div>

                    </div>
                    <div className="client-card">
                        <div className="client-card-group">
                            <h2>Get Past Orders</h2>
                            <hr />

                        </div>

                    </div>
                    <div className="client-card">
                        <div className="client-card-group">
                            <h2>Buy Bitcoin</h2>
                            <hr />

                        </div>

                    </div>
                    <div className="client-card">
                        <div className="client-card-group">
                            <h2>Sell Bitcoin</h2>
                            <hr />

                        </div>

                    </div>
                    <div className="client-card">
                        <div className="client-card-group">
                            <h2>Transfer Money To Trader</h2>
                            <hr />

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


const mapDispatchToProps = { getBitcoinWallet }
export default connect(mapStateToProps, mapDispatchToProps)(ClientDashboard)