import React from "react";

import '../../Styles/PastOrderCard.css'



const PastOrderCard = (props) => {


    // format date
    const formattedDate = props.client.date.slice(0, 10)
    return (
        <div className="order-card">
            <h2>Past Order</h2>
            <h3>Order id</h3>
            <p>{props.client.order_id}</p>
            <h3>Date</h3>
            <p>{formattedDate}</p>
            <h3>Commission Paid</h3>
            <p>{props.client.comm_paid}</p>
            <h3>Commission Type</h3>
            <p>{props.client.comm_type}</p>
            <h3>Bitcoin Balance</h3>
            <p>{props.client.Bitcoin_balance}</p>
        </div>
    )

}


export default PastOrderCard


