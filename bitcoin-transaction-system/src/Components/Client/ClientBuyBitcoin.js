import { connect } from "react-redux"
import { postBuyBitcoin } from "../../State/Actions/ClientActions"

const BuyBitcoin = (props) => {

}

const mapStateToProps = (state) => {
    return {
        client: state.clientReducer.client,
        loading: state.clientReducer.loading,
        error: state.clientReducer.error
    }
}
const mapDispatchToProps = postBuyBitcoin

export default connect(mapStateToProps, mapDispatchToProps)(BuyBitcoin)