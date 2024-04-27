import * as yup from 'yup'



const ClientBuyBitcoinFormSchema = yup.object().shape({
    Bitcoin_balance: yup.number()
        .required('The amount of bitcoin must be entered.')
        .typeError('You must specify a number')
        .min(1, 'The amount cannot be negative'),
    comm_type: yup.string()
        .required("Please select a commission type")
        .oneOf(['Bitcoin', 'USD'], "Commission type must be either 'Bitcoin' or 'USD'"),


})

export default ClientBuyBitcoinFormSchema