import { connect } from "react-redux";
import { getBitCointWallet } from "../../State/Actions/ClientActions";
import SignedInNavigation from "../SignedInNavigation";
import '../../Styles/BitcoinWallet.css'

const BitcoinWallet = (props) => {
    return (
        <div className="bitcoin-wallet-container">
            <SignedInNavigation />
            <div className="wallet-box">
                
                <div className="wallet-card">
                    <h1>Current Bitcoin Balance</h1>
                    <hr />
                    <p>{props.client}</p>
                </div>
            </div>

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

const mapDispatchToProps = { getBitCointWallet }

export default connect(mapStateToProps)(BitcoinWallet);