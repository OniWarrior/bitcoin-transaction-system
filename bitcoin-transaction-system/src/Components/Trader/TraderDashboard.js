
import { connect } from "react-redux"
import React from "react";
import SignedInNavigation from "../SignedInNavigation";
import '../../Styles/TraderDashboard.css'
import { useNavigate } from "react-router";


const TraderDashboard = () => {
    const navigate = useNavigate()

    const goToCancelLog = (e) => {
        e.preventDefault()
        // Replace this with an api call
        navigate('/Cancel-Log')
    }

    const goToClientSearch = (e) => {
        e.preventDefault()
        navigate('/TraderClientSearch')
    }





}

export default TraderDashboard