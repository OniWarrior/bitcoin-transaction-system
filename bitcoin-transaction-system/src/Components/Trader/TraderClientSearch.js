import { connect } from "react-redux"
import React from "react";
import SignedInNavigation from "../SignedInNavigation";
import '../../Styles/TraderClientSearch.css'
import { useNavigate } from "react-router";
import { getClient } from "../../State/Actions/TraderActions";

const TraderClientSearch = () => {
    const navigate = useNavigate()
    const [client, errors, setClient]

}

const mapStateToProps = (state) => {
    return {
        trader: state.traderReducer.trader,
        loading: state.traderReducer.loading,
        error: state.traderReducer.error
    }
}

const mapDispatchToProps = { getClient }
export default connect(mapStateToProps, mapDispatchToProps)(TraderClientSearch)