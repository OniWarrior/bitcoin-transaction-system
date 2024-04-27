import { connect } from "react-redux"
import SignedInNavigation from "../SignedInNavigation"
import CancelCard from '../Trader/CancelCard'

const CancelLog = (props) => {

    if (!props.trader || props.trader.length === 0) {
        return <div>No Cancelled  Orders Or Transfers</div>
    }

    return (
        <div className="cancelled-container">
            <SignedInNavigation />
            <div className="cancelled-list">
                <h1>Cancelled Orders Or Transfers</h1>
                {
                    props.trader.map(cancelled => (
                        <CancelCard key={cancelled.log_id} trader={cancelled} />
                    ))
                }
            </div>

        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        trader: state.traderReducer.trader,
        loading: state.traderReducer.loading,
        error: state.traderReducer.error
    }
}

export default connect(mapStateToProps)(CancelLog)