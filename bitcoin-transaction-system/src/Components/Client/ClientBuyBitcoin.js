import { connect } from "react-redux"


const BuyBitcoin = (props) => {

}

const mapStateToProps = (state) =>{
    return{
        client:state.clientReducer.client,
        loading:state.clientReducer.loading,
        error:state.clientReducer.error
    }
}

export default connect(mapStateToProps)(BuyBitcoin)