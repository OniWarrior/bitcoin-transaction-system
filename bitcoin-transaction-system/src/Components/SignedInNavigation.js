
import React from "react"
import { useNavigate, Link } from "react-router"
import '../Styles/Nav.css'
import jwt_decode from "jwt-decode";


const SignedInNavigation = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    let user_type = ''

    if (token) {
        const decoded = jwt_decode(token)
        user_type = decoded.user_type
    }

    const logOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        navigate('/')

    }

    // render signed in navigation based upon user type
    switch (user_type) {

        case "Client":

            const goToDashboard = (e) => {
                e.preventDefault()
                navigate('/ClientDashboard')

            }

            const goToWallet = (e) => {
                e.preventDefault()
                navigate('/ClientDashboard/BitcoinWallet')

            }
            const goToBuy = (e) => {
                e.preventDefault()
                navigate('/ClientDashboard/BuyBitcoin')
            }

            const goToSell = (e) => {
                e.preventDefault()
                navigate('/ClientDashboard/SellBitcoin')
            }

            const goToTransfer = (e) => {
                e.preventDefault()
                navigate('/ClientDashboard/TransferMoney')
            }

            const goToOrders = (e) => {
                e.preventDefault()
                navigate('/ClientDashboard/Orders')
            }



            return (
                <div className="nav-container">
                    <div className="row-nav">
                        <button className="button-home" onClick={goToDashboard}></button>
                        <button className="button-buy" onClick={goToBuy}></button>
                        <button className="button-sell" onClick={goToSell}></button>
                        <button className="button-wallet" onClick={goToWallet}></button>
                        <button className="button-transfer" onClick={goToTransfer}></button>
                        <button className="button-order" onClick={goToOrders}></button>
                        <button className="button-log-out" onClick={logOut}></button>
                    </div>

                </div>
            )
        case "Trader":
            const goToTraderDashboard = (e) => {
                e.preventDefault()
                navigate('/TraderDashboard')

            }


            const goToTraderSearch = (e) => {
                e.preventDefault()
                navigate('/TraderDashboard/TraderClientSearch')
            }

            const goToCancelLog = (e) => {
                e.preventDefault()
                navigate('/TraderDashboard/Cancel-Log')
            }

            return (
                <div className="nav-container">
                    <div className="row-nav">
                        <button className="button-home" onClick={goToTraderDashboard}></button>
                        <button className="button-search" onClick={goToTraderSearch}></button>
                        <button className="button-cancel-log" onClick={goToCancelLog}></button>
                        <button className="button-log-out" onClick={logOut}></button>
                    </div>

                </div>

            )

        case "Manager":
            const goToManDashboard = (e) => {
                e.preventDefault()
                navigate('/ManagerDashboard')

            }


            const goToTotDaily = (e) => {
                e.preventDefault()
                navigate('/ManagerDashboard/total-daily-transactions')
            }

            const goToTotWeekly = (e) => {
                e.preventDefault()
                navigate('/ManagerDashboard/total-weekly-transactions')
            }

            const goToTotMonthly = (e) => {
                e.preventDefault()
                navigate('/ManagerDashboard/total-monthly-transactions')
            }

            return (
                <div className="nav-container">
                    <div className="row-nav">
                        <button className="button-home" onClick={goToManDashboard}></button>
                        <button className="button-daily" onClick={goToTotDaily}></button>
                        <button className="button-weekly" onClick={goToTotWeekly}></button>
                        <button className="button-monthly" onClick={goToTotMonthly}></button>
                        <button className="button-log-out" onClick={logOut}></button>
                    </div>

                </div>


            )


        default:
            navigate('/')

    }



}

export default SignedInNavigation