import React from "react"
import '../../Styles/ManagerDaily.css'
import SignedInNavigation from "../SignedInNavigation"
import { connect } from "react-redux"




const RetrieveTotDailyTransacs = (props) => {





    return (
        <div >
            <SignedInNavigation />
            <div className="daily-box">

                <div className="daily-card">
                    <h1>Total Daily Transactions</h1>
                    <hr />
                    <p>{props.totalTransactions.count}</p>
                </div>
            </div>


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


export default connect(mapStateToProps)(RetrieveTotDailyTransacs)



