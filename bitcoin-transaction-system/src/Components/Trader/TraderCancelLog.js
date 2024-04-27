import { connect } from "react-redux"
import SignedInNavigation from "../SignedInNavigation"


const CancelLog = (props) => {

}

const mapStateToProps = (state) => {
    return {
        trader: state.traderReducer.trader,
        loading: state.traderReducer.loading,
        error: state.traderReducer.error
    }
}

export default connect(mapStateToProps)(CancelLog)