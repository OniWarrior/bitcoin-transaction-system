import * as yup from 'yup'



const ClientTransferMoneyFormSchema = yup.object().shape({
    amount_paid: yup.number()
                .required('Money input is required')
                .typeError('You must specify a number')
                .min(1,"The ammount cannot be negative")
})

export default ClientTransferMoneyFormSchema