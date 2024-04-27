import { connect } from "react-redux"
import { useNavigate } from "react-router"
import { postBuyBitcoin } from "../../State/Actions/ClientActions"
import ClientBuyBitcoinFormSchema from '../../FormSchemas/ClientBuyBitcoinFormSchema'
import { useBuyBitcoinValidation } from "../../Hooks/useBuyBitcoinValidation"
import { useState } from "react"


const BuyBitcoin = (props) => {
    const navigate = useNavigate()
    const [order, errors, SetOrder] = useBuyBitcoinValidation(ClientBuyBitcoinFormSchema)
    const initialDisabled = true
    const [disabled, setDisabled] = useState(initialDisabled)

    const change = (e) => {
        e.preventDefault()
        SetOrder(e, ClientBuyBitcoinFormSchema)
    }

    const handleDisabled = (event) => {
        event.preventDefault()
        if (order.Bitcoin_balance > 0) {
            setDisabled(() => ({
                disabled: !disabled
            }))
        }
        else {
            setDisabled(() => ({
                disabled: disabled
            }))
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        props.postBuyBitcoin(order, navigate)

    }

}

const mapStateToProps = (state) => {
    return {
        client: state.clientReducer.client,
        loading: state.clientReducer.loading,
        error: state.clientReducer.error
    }
}
const mapDispatchToProps = postBuyBitcoin

export default connect(mapStateToProps, mapDispatchToProps)(BuyBitcoin)