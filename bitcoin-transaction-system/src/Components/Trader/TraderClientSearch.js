import { connect } from "react-redux"
import React from "react";
import SignedInNavigation from "../SignedInNavigation";
import '../../Styles/Find.css'
import { useNavigate } from "react-router";
import { getClient } from "../../State/Actions/TraderActions";
import { useFindValidation } from '../../Hooks/useFindValidation'
import TraderFindFormSchema from '../../FormSchemas/TraderFindFormSchema'
import { useState } from "react";
import { Form } from "react-bootstrap";

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
            <div className="client-search-container">
                <Form className="form-client-find-container" onSubmit={onFormSubmit}>


                    <div className="client-find-inputs">

                        <h1>Find Client</h1>

                        <label className="label-find-first-name">
                            First Name:
                            <input className="find-first-name-box"
                                id="first_name"
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                onChange={change}
                            />
                        </label>
                        <div className="errors">
                            <p>{errors.first_name}</p>
                        </div>
                        <label className="label-find-last-name">
                            Last Name:
                            <input className="find-last-name-box"
                                id="last_name"
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                onChange={change}
                            />
                        </label>
                        <div className="errors">
                            <p>{errors.last_name}</p>
                        </div>
                        <label className="label-find-email">
                            Email:
                            <input className="find-email-box"
                                id="email"
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={change}
                            />
                        </label>
                        <div className="errors">
                            <p>{errors.email}</p>
                        </div>

                        <button className="find-client-submit"
                            type="submit"
                            disabled={handleDisabled}
                        >Find Client</button>
                    </div>


                </Form>
            </div>
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