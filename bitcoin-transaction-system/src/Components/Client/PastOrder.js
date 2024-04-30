import React from "react";
import { connect } from "react-redux";
import '../../Styles/PastOrderCard.css'

const PastOrderCard=(props)=>{
    return(
        <div className="order-card">
            <h2>Past Order</h2>
            <p>{props.client.order_id}</p>
            <p>{props.client.client_id}</p>
            <p>{props.client.date}</p>
            <p>{props.client.comm_paid}</p>
            <p>{props.client.comm_type}</p>
            <p>{props.client.Bitcoin_balance}</p>

        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        client:state.clientReducer.client,
        loading:state.clientReducer.loading,
        error:state.clientReducer.error
    }
}
export default connect(mapStateToProps)(PastOrderCard)