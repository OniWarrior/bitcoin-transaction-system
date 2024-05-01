import React, { useState } from "react"
import SignedInNavigation from "../SignedInNavigation"
import { postTraderSellBitcoinTransaction } from "../../State/Actions/TraderActions"
import { connect } from "react-redux"
import { useNavigate } from "react-router"
import '../../Styles/TraderSell.css'
import TraderSellFormSchema from '../../FormSchemas/TraderSellFormSchema'
import { useTraderSellBitcoinValidation } from "../../Hooks/useTraderSellValidation"
import { Form } from "react-bootstrap"

const TraderSellBitcoin = (props) => {
    const navigate = useNavigate()
    const [order, errors, setOrder] = useTraderSellBitcoinValidation(TraderSellFormSchema)
    const initialDisabled = true
    const [disabled, setDisabled] = useState(initialDisabled)

    const change = (e) => {
        e.preventDefault()
        setOrder(e, TraderSellBitcoin)
    }

    const handleDisabled = (event) => {
        event.preventDefault()
        if(order.Bitcoin_balance > 0 && order.email) {
            setDisabled(() => ({
                disabled: ! disabled
            }))
        }
        else {
            setDisabled(() => ({
                disabled: disabled
            }))
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        const updatedOrder = {
            ...order,
            Bitcon_price: props.bitcoin.price
        };
        props.postTraderSellBitcoinTransaction(updatedOrder,navigate)

    }

    return (
        <div >
            <SignedInNavigation />
            <div className="trader-sell-bitcoin-box">

                <Form className="form-trader-sell-bitcoin-container" onSubmit={onFormSubmit}>
                    <div className="trader-sell-bitcoin-header">
                        <h1>Sell Bitcoin</h1>

                    </div>

                    <div className="input-trader-sell-bitcoin-group">
                        <div className="trader-sell-input">
                            <label className="label-bitcoin-price">
                                Current Price Of Bitcoin:

                                <h3>${props.bitcoin.price}</h3>
                            </label>
                            <hr />

                            <label className="label-sell-bitcoin">
                                Bitcoin Amount:
                                <input className="trader-sell-bitcoin-amount-box"
                                    id="Bitcoin_balance"
                                    type="number"
                                    name="Bitcoin_balance"
                                    placeholder="How many Bitcoin"
                                    required
                                    onChange={change}
                                />
                            </label>

                            <div className="errors">
                                <p>{errors.Bitcoin_balance}</p>
                            </div>
                            <div className="inner-group">
                                
                                <label className='label-sell-bitcoin-login'>
                                    Email:
                                    <input className='trader-email-box'
                                        id='email'
                                        type='text'
                                        name='email'
                                        placeholder='email'
                                        required
                                        onChange={change}
                                    />
                                </label>
                                <div className='errors'>
                                    <p>{errors.email}</p>
                                </div>

                            </div>
                        </div>
                        <button className="sell-bitcoin-submit"
                            type="submit"
                            disabled={handledDisabled}
                        >Sell</button>
                    </div>
                    
                </Form>
            </div>
        </div>
    )
}

const mapStateToprops = (state) =>{
    return {
        bitcoin: state.bitcoinReducer.bitcoin,
        trader: state.traderReducer.trader,
        login: state.loginReducer.login,
        error: state.traderReducer.error,
        login_error: state.loginReducer.error
    }
}

const mapDispatchToProps = { postTraderSellBitcoinTransaction }
export default connect(mapStateToProps, mapDispatchToProps)(TraderSellBitcoin)