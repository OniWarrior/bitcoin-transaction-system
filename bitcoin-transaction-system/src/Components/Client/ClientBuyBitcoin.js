import { connect } from "react-redux"
import { useNavigate } from "react-router"
import { postBuyBitcoin } from "../../State/Actions/ClientActions"
import ClientBuyBitcoinFormSchema from '../../FormSchemas/ClientBuyBitcoinFormSchema'
import { useBuyBitcoinValidation } from "../../Hooks/useBuyBitcoinValidation"
import { useState } from "react"
import '../../Styles/BuyBitcoin.css'
import SignedInNavigation from "../SignedInNavigation"
import { Form } from "react-bootstrap"

const BuyBitcoin = (props) => {
    const navigate = useNavigate()
    const [order, errors, SetOrder] = useBuyBitcoinValidation(ClientBuyBitcoinFormSchema)
    const initialDisabled = true
    const [disabled, setDisabled] = useState(initialDisabled)

    const change = (e) => {
        e.preventDefault()
        SetOrder(e, ClientBuyBitcoinFormSchema)
    }

    const handleDisabled = (event) => {
        event.preventDefault()
        if (order.Bitcoin_balance > 0 && order.comm_type) {
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

    const onFormSubmit = (event) => {
        event.preventDefault()

        const updatedOrder = {
            ...order,
            Bitcoin_price: props.bitcoin.price
        };

        props.postBuyBitcoin(updatedOrder, navigate)

    }

    return (
        <div >
            <SignedInNavigation />
            <div className="buy-bitcoin-box">

                <Form className="form-buy-bitcoin-container" onSubmit={onFormSubmit}>
                    <div className="buy-bitcoin-header">
                        <h1>Buy Bitcoin</h1>

                    </div>

                    <div className="input-buy-bitcoin-group">
                        <div className="buy-input">
                            <label className="label-bitcoin-price">
                                Current Price Of Bitcoin:

                                <h3>{props.bitcoin.price}</h3>
                            </label>
                            <hr />

                            <label className="label-buy-bitcoin">
                                Bitcoin Amount:
                                <input className="buy-bitcoin-amount-box"
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
                                <div className="comm-type-header">
                                    <h2>Commission Type</h2>
                                </div>
                                <label className='label-buy-bitcoin-input-group' htmlFor="comm_type" >
                                    USD:
                                    <input className='form-check-input'
                                        id='USD'
                                        type='radio'
                                        name='comm_type'
                                        value='USD'
                                        onChange={change}
                                    />
                                </label>

                                <label className='label-input-group' htmlFor="comm_type" >
                                    Bitcoin:
                                    <input className='form-check-input'
                                        id='Bitcoin'
                                        type='radio'
                                        name='comm_type'
                                        value='Bitcoin'
                                        onChange={change}
                                    />
                                </label>

                                <div className='errors'>
                                    <p>{errors.comm_type}</p>
                                </div>

                                <label className='label-buy-bitcoin-login'>
                                    Email:
                                    <input className='email-box'
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

                                <label className='label-buy-bitcoin-login'>
                                    Password:
                                    <input
                                        id='password'
                                        type='password'
                                        name='password'
                                        placeholder='password'
                                        required
                                        onChange={change}
                                    />
                                </label>
                                <div className='errors'>
                                    <p>{errors.password}</p>
                                </div>
                            </div>
                        </div>
                        <button className="buy-bitcoin-submit"
                            type="submit"
                            disabled={handleDisabled}
                        >Buy</button>
                    </div>

                </Form>
            </div>
        </div>



    )

}

const mapStateToProps = (state) => {
    return {
        bitcoin: state.bitcoinReducer.bitcoin,
        client: state.clientReducer.client,
        login: state.loginReducer.login,
        error: state.clientReducer.error,
        login_error: state.loginReducer.error
    }
}


const mapDispatchToProps = { postBuyBitcoin }

export default connect(mapStateToProps, mapDispatchToProps)(BuyBitcoin)