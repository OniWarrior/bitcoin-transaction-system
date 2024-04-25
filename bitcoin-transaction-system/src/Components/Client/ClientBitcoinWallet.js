


const BitcoinWallet = (props) => {

}
const mapStateToProps = (state) => {
    return {
        client: state.clientReducer.client,
        loading: state.clientReducer.loading,
        error: state.clientReducer.error
    }
}

export default BitcoinWallet;