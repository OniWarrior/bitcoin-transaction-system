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




    const goToDaily = (e) => {
        e.preventDefault()
        props.getTotalDailyTransactions(daily)
        navigate('/ManagerDashboard/total-daily-transactions')
    }

    const goToWeekly = (e) => {
        e.preventDefault()
        props.getTotalWeeklyTransactions(weekly)
        navigate('/ManagerDashboard/total-weekly-transactions')
    }

    const goToMonthly = (e) => {
        e.preventDefault()
        props.getTotalMonthlyTransactions(monthly)
        navigate('/ManagerDashboard/total-monthly-transactions')
    }

    return (
        <div className="manager-dashboard-container">
            <SignedInNavigation />
            <div className="dashboard-header">
                <h2>Manager Dashboard</h2>
            </div>
            <div className="manager-card-container">
                <button id='go-to-daily-card' className="dashboard-card" onClick={goToDaily}>Daily Transactions</button>
                <button id='go-to-weekly-card' className="dashboard-card" onClick={goToWeekly}>Weekly Transactions</button>
                <button id='go-to-monthly-card' className="dashboard-card" onClick={goToMonthly}>Monthly Transactions</button>
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