import * as yup from 'yup'


const TotalMonthlyFormSchema = yup.object().shape({
    month: yup.string()
        .trim()
        .required('Please enter a single value of the month. ex 5 if the month is May'),
    year: yup.string()
        .trim()
        .required('Please enter a value of the year. ex 2024 if the year is 2024')
})


export default TotalMonthlyFormSchema