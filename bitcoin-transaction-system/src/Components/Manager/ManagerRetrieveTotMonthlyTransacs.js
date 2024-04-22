import React from "react"

import SignedInNavigation from "../SignedInNavigation"
import { connect } from "react-redux"


const RetrieveTotMonthlyTransacs = (props) => {

}

const mapStateToProps = (state) => {
    return {
        totalTransactions: state.managerReducer.totalTransactions,
        loading: state.managerReducer.loading,
        error: state.managerReducer.error
    }
}

export default connect(mapStateToProps)(RetrieveTotMonthlyTransacs)