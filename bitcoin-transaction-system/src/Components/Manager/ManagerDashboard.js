import React from "react"
import '../../Styles/Manager.css'
import { useNavigate } from "react-router"
import SignedInNavigation from '../SignedInNavigation'


const ManagerDashboard = () => {

    const navigate = useNavigate()

    const goToDaily = (e) => {
        e.preventDefault()
        navigate('/ManagerDashboard/total-daily-transactions')
    }

    const goToWeekly = (e) => {
        e.preventDefault()
        navigate('/ManagerDashboard/total-weekly-transactions')
    }

    const goToMonthly = (e) => {
        e.preventDefault()
        navigate('/ManagerDashboard/total-monthly-transactions')
    }

    return (
        <div className="manager-dashboard-container">
            <SignedInNavigation />
            <div className="dashboard-header">
                <h2>Manager Dashboard</h2>
            </div>
            <div className="manager-card-container">

            </div>


        </div>
    )





}

export default ManagerDashboard