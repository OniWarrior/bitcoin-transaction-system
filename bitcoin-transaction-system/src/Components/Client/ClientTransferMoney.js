import { connect } from "react-redux"
import { postMoneyTransfer } from "../../State/Actions/ClientActions"


const TransferMoney = (props) => {

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