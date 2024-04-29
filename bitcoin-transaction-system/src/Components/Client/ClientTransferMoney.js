import { connect } from "react-redux"
import { postMoneyTransfer } from "../../State/Actions/ClientActions"
import ClientTransferMoneyFormSchema from '../../FormSchemas/ClientTransferMoneyFormSchema'
import { useTransferValidation } from '../../Hooks/useTransferValidation.js'
import SignedInValidation from '../SignedInNavigation.js'
import { useState } from "react"


const TransferMoney = (props) => {
    const[transfer,errors,setTransfer] = useTransferValidation(ClientTransferMoneyFormSchema)
    const initialDisabled = true
    const [disabled, setDisabled] = useState(true)

    const change = (event) =>{
        event.preventDefault()
        setTransfer(event,ClientTransferMoneyFormSchema)
    }

    const handleDisabled = (event) => {
        event.preventDefault()
        if(transfer.transfer_amount > 0){
            setDisabled(()=>({
                disabled: !disabled
            }))
        }
        else{
            setDisabled(()=>({
                disabled : disabled
            }))
        }
    }

    return(
        <div className = "transfer-container">
            <SignedInValidation />
        </div>
    )

}

const mapStateToProps = (state) =>{
    return{
        client:state.clientReducer.client,
        loading:state.clientReducer.loading,
        error:state.clientReducer.error
    }
}

const mapDispatchToProps = postMoneyTransfer

export default connect (mapStateToProps, mapDispatchToProps)(TransferMoney)