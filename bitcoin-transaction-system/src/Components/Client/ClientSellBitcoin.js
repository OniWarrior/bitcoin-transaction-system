import { connect } from "react-redux"
import { postSellBitcoin } from "../../State/Actions/ClientActions"


const SellBitcoin = (props) => {

}



const mapStateToProps = (state) => {
    return {
        client: state.clientReducer.client,
        loading: state.clientReducer.loading,
        error: state.clientReducer.error
    }
}

const mapDispatchToProps = postSellBitcoin

export default connect(mapStateToProps, mapDispatchToProps)(SellBitcoin)