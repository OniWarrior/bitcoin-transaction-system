import { connect } from "react-redux"
import SignedInNavigation from "../SignedInNavigation"

const CancelLog = (props) => {

}

const mapStateToProps=(state)=>{
    return{
        trader: state.tradeReducer.trader,
        loading: state.tradeReducer.loading,
        error: state.tradeReducer.error
    }
}

export default connect(mapStateToProps)(CancelLog)