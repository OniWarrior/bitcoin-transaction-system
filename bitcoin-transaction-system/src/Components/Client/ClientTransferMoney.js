import { connect } from "react-redux"
import { postMoneyTransfer } from "../../State/Actions/ClientActions"
import ClientTransferMoneyFormSchema from '../../FormSchemas/ClientTransferMoneyFormSchema'
import { useTransferValidation } from '../../Hooks/useTransferValidation.js'
import SignedInValidation from '../SignedInNavigation.js'
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const TransferMoney = (props) => {
    const navigate = useNavigate()
    const[transfer,errors,setTransfer] = useTransferValidation(ClientTransferMoneyFormSchema)
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
        <div className = "transfer-container">
            <SignedInValidation />
            <div className="transfer-box">
                <div className="transfer-container">
                    <Form className = "form-container" onSubmit = {onFormSubmit}>
                        <h1> Trasnfer Money</h1>
                        <div className="input-group">
                            <label className="label-transfer">
                                Trasnfer Amount:
                                <input className="transfer-money-box"
                                    id = "transfer_amount"
                                    type = "text"
                                    name = "transfer_amount"
                                    placeholder="Transfer Amount"
                                    required
                                    onChange={change}
                                    />
                            </label>
                            <div className="errors">
                                <p>{errors.transfer_amount}</p>
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
        client:state.clientReducer.client,
        loading:state.clientReducer.loading,
        error:state.clientReducer.error
    }
}

const mapDispatchToProps = postMoneyTransfer

export default connect (mapStateToProps, mapDispatchToProps)(TransferMoney)