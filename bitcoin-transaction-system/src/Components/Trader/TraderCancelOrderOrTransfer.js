import { connect } from "react-redux"
import SignedInNavigation from "../SignedInNavigation"
import TraderOrderCard from "./TraderOrderCard"
import TraderTransferCard from "./TraderTransferCard"
import '../../Styles/TraderOrderCard.css'
import '../../Styles/TraderTransferCard.css'
import { cancelTransferOrTransaction } from "../../State/Actions/TraderActions"
import { useNavigate } from "react-router"
import '../../Styles/TraderCancelOrderOrTransac.css'




const CancelOrderOrTransfer = (props) => {


    const navigate = useNavigate()




    const onCancelButton = (e, orderORTransfer) => {
        e.preventDefault()
        props.cancelTransferOrTransaction(orderORTransfer, navigate)


    }

    return (
        <div className="orders-transfers-container">
            <SignedInNavigation />
            <div className="box-container">
                <div className="orders-list">
                    <h1>Transactions</h1>
                    {props.orders ? (
                        props.orders.map(order => (
                            <div className="order-form-card-container" key={order.order_id}>
                                <TraderOrderCard transfer={order} />
                                <button className="order-submit" onClick={(e) => onCancelButton(e, order)}>
                                    Cancel Transaction
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>Loading transactions...</p>
                    )}
                </div>



                <div className="transfers-list">
                    <h1>Transfers</h1>
                    {props.transfers ? (
                        props.transfers.map(transfer => (
                            <div className="transfer-form-card-container" key={transfer.transac_id}>
                                <TraderTransferCard transfer={transfer} />
                                <button className="transfer-submit" onClick={(e) => onCancelButton(e, transfer)}>
                                    Cancel Transfers
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>Loading transfers...</p>
                    )}
                </div>
            </div>
        </div>
    );

}


const mapStateToProps = (state) => {
    return {
        trader: state.traderReducer.trader,
        orders: state.ordersReducer.orders,
        transfers: state.transfersReducer.transfers,
        loading: state.traderReducer.loading,
        error: state.traderReducer.error
    }
}
const mapDispatchToProps = { cancelTransferOrTransaction }

export default connect(mapStateToProps, mapDispatchToProps)(CancelOrderOrTransfer)