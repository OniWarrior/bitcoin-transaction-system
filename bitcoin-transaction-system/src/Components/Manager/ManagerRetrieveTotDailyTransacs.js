import React from "react"
import { getTotalDailyTransactions } from "../../State/Actions/ManagerActions"
import SignedInNavigation from "../SignedInNavigation"
import { connect } from "react-redux"
import { useNavigate } from "react-router"


const RetrieveTotDailyTransacs = (props) => {
    return (
        <div className="daily-container">

        </div>
    )


}



const mapStateToProps = (state) => {
    return {
        totalTransactions: state.managerReducer.totalTransactions,
        loading: state.managerReducer.loading,
        error: state.managerReducer.error
    }
}

const mapDispatchToProps = { getTotalDailyTransactions }



export default connect(mapStateToProps, mapDispatchToProps)(RetrieveTotDailyTransacs)