import React from "react"
import '../../State/ManagerWeekly.css'
import SignedInNavigation from "../SignedInNavigation"
import { connect } from "react-redux"

const RetrieveTotWeeklyTransacs = (props) => {
    if (props.loading) {
        return (
            <h1>...Loading</h1>
        )
    }
    else {
        return (
            <div >
                <SignedInNavigation />
                <div className="daily-box">

                    <div className="daily-card">
                        <h1>Total Daily Transactions</h1>
                        <hr />
                        <p>{props.totalTransactions}</p>
                    </div>
                </div>


            </div>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        totalTransactions: state.managerReducer.totalTransactions,
        loading: state.managerReducer.loading,
        error: state.managerReducer.error
    }
}

export default connect(mapStateToProps)(RetrieveTotWeeklyTransacs)