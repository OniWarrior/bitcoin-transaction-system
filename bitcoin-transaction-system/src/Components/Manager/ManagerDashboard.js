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



}

export default ManagerDashboard