import React from "react"

import SignedInNavigation from "../SignedInNavigation"
import { connect } from "react-redux"




const RetrieveTotDailyTransacs = (props) => {




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
                    <h1>Total Daily Transactions</h1>
                    <div className="daily-card">


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


export default connect(mapStateToProps)(RetrieveTotDailyTransacs)



