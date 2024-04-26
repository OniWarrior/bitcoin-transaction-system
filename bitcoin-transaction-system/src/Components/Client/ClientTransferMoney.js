import { connect } from "react-redux"
import { postMoneyTransfer } from "../../State/Actions/ClientActions"
import ClientTransferMoneyFormSchema from '../../FormSchemas/ClientTransferMoneyFormSchema'
import { useTransferValidation } from '../../Hooks/useTransferValidation.js'
import SignedInValidation from '../SignedInNavigation.js'



const TransferMoney = (props) => {

    return (
        <div className="transfer-container">
            <SignedInValidation />

        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        client: state.clientReducer.client,
        loading: state.clientReducer.loading,
        error: state.clientReducer.error
    }
}

const mapDispatchToProps = postMoneyTransfer

export default connect(mapStateToProps, mapDispatchToProps)(TransferMoney)