import { connect } from "react-redux";
import { getBitcoinWallet } from "../../State/Actions/ClientActions";

const BitcoinWallet = (props) => {

}

const mapStateToProps = (state) => {
    return {
        client: state.clientReducer.client,
        loading: state.clientReducer.loading,
        error: state.clientReducer.error

    }
}

const mapDispatchToProps = { getBitcoinWallet }

export default connect(mapStateToProps, mapDispatchToProps)(BitcoinWallet)
