
import React from "react"
import { useNavigate, Link } from "react-router"
import '../Styles/Nav.css'


const SignedInNavigation = () => {

    const navigate = useNavigate()
    const userType = localStorage.getItem('user_type')

    let homePath = '/'

    switch (userType) {

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


                </div>
            )

        default:
            navigate('/')

    }



}

export default SignedInNavigation