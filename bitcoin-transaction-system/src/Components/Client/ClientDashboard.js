import { connect } from "react-redux"
import { getBitcoinWallet } from "../../State/Actions/ClientActions";
import React from "react";
import SignedInNavigation from "../SignedInNavigation";
import '../../Styles/ClientDashboard.css'
import { getPastOrders } from "../../State/Actions/ClientActions";
import { useNavigate } from "react-router";

const ClientDashboard = (props) => {
    //local state vars
    const navigate = useNavigate()

    return (
        <div className="client-dash">
            <SignedInNavigation />
            <div className="client-box">
                <div className="client-container">
                    
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

export default connect (mapStateToProps)(ClientDashboard)