import { connect } from "react-redux"
import PastOrderCard from "./PastOrder"
import SignedInNavigation from "../SignedInNavigation"
import '../../Styles/PastOrdersList.css'

const PastOrders = (props) => {
    if(!props.client || props.client.length===0)
    {
        return <div>No Past Orders</div>
    }
    return (
        <div className="past-orders-list">
            <SignedInNavigation />
            <div className="past-orders-list">
                <h1>Past Orders</h1>
                {
                    props.client.map(order=>{
                        <PastOrderCard key={order.order_id} client={order}/>
                    })
                }
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

export default connect (mapStateToProps)(PastOrders)