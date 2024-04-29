import * as yup from 'yup'



const ClientTransferMoneyFormSchema = yup.object().shape({
    trasnfer_amount:yup.number()
                .required('Transfer amount is required')
                .typeError('You must input a number')
                .min(1,"The input has to be greater than 0")
})

export default ClientTransferMoneyFormSchema