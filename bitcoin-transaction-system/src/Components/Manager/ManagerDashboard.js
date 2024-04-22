import React from "react"
import '../../Styles/Manager.css'
import { useNavigate } from "react-router"
import SignedInNavigation from '../SignedInNavigation'
import { getTotalDailyTransactions, getTotalWeeklyTransactions, getTotalMonthlyTransactions } from "../../State/Actions/ManagerActions"
import { connect } from "react-redux"
import TotalDailyFormSchema from '../../FormSchemas/TotalDailyFormSchema'
import TotalWeeklyFormSchema from '../../FormSchemas/TotalWeeklyFormSchema'
import TotalMonthlyFormSchema from '../../FormSchemas/TotalMonthlyFormSchema'
import { useDailyValidation } from '../../Hooks/useDailyValidation'
import { useWeeklyValidation } from '../../Hooks/useWeeklyValidation'
import { useMonthlyValidation } from '../../Hooks/useMonthlyValidation'
import { useState } from 'react'
import { Form } from "react-bootstrap"

const ManagerDashboard = (props) => {

    const navigate = useNavigate()

    // state vars for the daily, weekly, monthly forms and buttons
    const [daily, dailyError, setDaily] = useDailyValidation(TotalDailyFormSchema)
    const [weekly, weeklyError, setWeekly] = useWeeklyValidation(TotalWeeklyFormSchema)
    const [monthly, monthlyError, setMonthly] = useMonthlyValidation(TotalMonthlyFormSchema)
    const initialDailyDisabled = true
    const initialWeeklyDisabled = true
    const initialMonthlyDisabled = true
    const [dailyDisabled, setDailyDisabled] = useState(initialDailyDisabled)
    const [weeklyDisabled, setWeeklyDisabled] = useState(initialWeeklyDisabled)
    const [monthlyDisabled, setMonthlyDisabled] = useState(initialMonthlyDisabled)



    // handler to submit daily form for total daily transacs
    const goToDaily = (e) => {
        e.preventDefault()
        props.getTotalDailyTransactions(daily, navigate)

    }

    // handler to submit weekly form for total weekly transacs
    const goToWeekly = (e) => {
        e.preventDefault()
        props.getTotalWeeklyTransactions(weekly, navigate)

    }

    // handler to submit monthly form for total monthly transacs
    const goToMonthly = (e) => {
        e.preventDefault()
        props.getTotalMonthlyTransactions(monthly, navigate)

    }

    return (
        <div className="manager-dashboard-container">
            <SignedInNavigation />
            <div className="dashboard-header">
                <h2>Manager Dashboard</h2>
            </div>
            <div className="manager-card-container">
                <div className="manager-card">
                    <Form className="form-container" onSubmitCapture={goToDaily}>
                        <h2>Total Daily Transactions</h2>
                        <div className="input-group">


                        </div>

                    </Form>

                </div>

                <div className="manager-card">
                    <Form className="form-container" onSubmitCapture={goToWeekly}>
                        <div className="input-group">

                        </div>

                    </Form>

                </div>

                <div className="manager-card">
                    <Form className="form-container" onSubmitCapture={goToMonthly}>
                        <div className="input-group">

                        </div>

                    </Form>

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

const mapDispatchToProps = { getTotalDailyTransactions, getTotalMonthlyTransactions, getTotalWeeklyTransactions }



export default connect(mapStateToProps, mapDispatchToProps)(ManagerDashboard)