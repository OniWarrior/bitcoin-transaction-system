import { connect } from "react-redux"
import { useNavigate } from "react-router"
import { postBuyBitcoin } from "../../State/Actions/ClientActions"


const BuyBitcoin = (props) => {
    const navigate = useNavigate()
    const [order, errors, SetOrder] =

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