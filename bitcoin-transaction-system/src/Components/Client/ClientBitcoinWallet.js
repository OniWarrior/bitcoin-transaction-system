import { connect } from "react-redux";
import SignedInNavigation from "../SignedInNavigation";


// This will display the retrieved
// bitcoin wallet balance after the 
// api call is completed
const BitcoinWallet = (props) => {

    return (
        <div className="bitcoin-wallet-container">
            <SignedInNavigation />

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



export default connect(mapStateToProps)(BitcoinWallet)
