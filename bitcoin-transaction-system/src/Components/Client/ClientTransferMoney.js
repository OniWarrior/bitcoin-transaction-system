import { connect } from "react-redux"
import { postMoneyTransfer } from "../../State/Actions/ClientActions"
import ClientTransferMoneyFormSchema from '../../FormSchemas/ClientTransferMoneyFormSchema'
import { useTransferValidation } from '../../Hooks/useTransferValidation.js'
import SignedInValidation from '../SignedInNavigation.js'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form } from "react-router-dom"
import '../../Styles/ClientTranfser.css'


const TransferMoney = (props) => {
    const navigate = useNavigate()
    const [transfer,errors,setTransfer] = useTransferValidation(ClientTransferMoneyFormSchema)
    const initialDisabled = true
    const [disabled, setDisabled] = useState(initialDisabled)

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

    const onFormSubmit = (event) =>{
        event.preventDefault()
        props.postMoneyTransfer(transfer, navigate)
    }

    return(
        <div >
            <SignedInValidation />
            <div className="transfer-box">
                <div className="transfer-container">
                    <Form className = "form-transfer-container" onSubmit = {onFormSubmit}>
                        <div className="transfer-header">
                        <h1>Transfer Money</h1>

                        </div>

                        <div className="input-transfer-group">
                            <label className="label-transfer">
                                Transfer Amount:
                                <input className="transfer-money-box"
                                    id = "amount_paid"
                                    type = "number"
                                    name = "number_paid"
                                    placeholder="Transfer Amount"
                                    required
                                    onChange={change}
                                    />
                            </label>
                            <div className="errors">
                                <p>{errors.amount_paid}</p>
                            </div>
                            <button className="transfer-submit"
                                    type="submit"
                                    disabled={handleDisabled}
                            >Transfer</button>
                        </div>
                    </Form>
                </div>
            </div>
            
        </div>
    )

}

const mapStateToProps = (state) =>{
    return{
        client: state.clientReducer.client,
        loading: state.clientReducer.loading,
        error: state.clientReducer.error
    }
}

const mapDispatchToProps =  postMoneyTransfer 

export default connect (mapStateToProps, mapDispatchToProps)(TransferMoney)