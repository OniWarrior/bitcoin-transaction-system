import { connect } from "react-redux"
import { getPastOrders } from "../../State/Actions/ClientActions"

const PastOrders = (props) => {

}

const mapStateToProps = (state) =>{
    return{
        client:state.clientReducer.client,
        loading:state.clientReducer.loading,
        error:state.clientReducer.error
    }
}

const mapDispatchtoProps = getPastOrders

export default connect (mapStateToProps, mapDispatchtoProps)(PastOrders)