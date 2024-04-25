import { connect } from "react-redux"
import PastOrderCard from "./PastOrder"
import SignedInNavigation from "../SignedInNavigation"

const PastOrders = (props) => {

    return (
        <div className="past-orders-list">
            <SignedInNavigation />

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


export default connect(mapStateToProps)(PastOrders)