import { connect } from "react-redux"
import React from "react";
import SignedInNavigation from "../SignedInNavigation";
import '../../Styles/Find.css'
import { useNavigate } from "react-router";
import { getClient } from "../../State/Actions/TraderActions";
import { useFindValidation } from '../../Hooks/useFindValidation'
import TraderFindFormSchema from '../../FormSchemas/TraderFindFormSchema'
import { useState } from "react";

const TraderClientSearch = (props) => {
    const navigate = useNavigate()
    const [client, errors, setClient] = useFindValidation(TraderFindFormSchema)
    const initialDisabled = true
    const [disabled, setDisabled] = useState(initialDisabled)

    const change = (e) => {
        e.preventDefault()
        setClient(e, TraderFindFormSchema)
    }

    const handleDisabled = (event) => {
        event.preventDefault()
        if (client.email.length > 0) {
            setDisabled(() => ({
                disabled: !disabled
            }))
        }
        else {
            setDisabled(() => ({
                disabled: disabled
            }))
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        props.getClient(client, navigate)


    }

    return (
        <div>
            <SignedInNavigation />
        </div>
    )

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