
import { connect } from "react-redux"
import React from "react";
import SignedInNavigation from "../SignedInNavigation";
import '../../Styles/TraderDashboard.css'
import { useNavigate } from "react-router";
import { getCancelLog } from "../../State/Actions/TraderActions";


const TraderDashboard = (props) => {
    const navigate = useNavigate()

    const goToCancelLog = (e) => {
        e.preventDefault()
        props.getCancelLog(navigate)
    }

    const goToClientSearch = (e) => {
        e.preventDefault()
        navigate('/TraderDashboard/TraderClientSearch')
    }

    return (
        <div>
            <SignedInNavigation />
            <div className="trader-box">
                <div className="trader-container">
                    <div className="trader-card">
                        <div className="trader-card-group">
                            <h2>Got To Client Search</h2>
                            <hr />

                            <button className="card-button" onClick={goToClientSearch}>Client Search</button>

                        </div>
                    </div>
                    <div className="trader-card">
                        <div className="trader-card-group">
                            <h2>Go To Cancel Log</h2>
                            <hr />

                            <button className="card-button" onClick={goToCancelLog}>Cancel Log</button>

                        </div>
                    </div>
                </div>
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

const mapDispatchToProps = { getCancelLog }

export default connect(mapStateToProps, mapDispatchToProps)(TraderDashboard)