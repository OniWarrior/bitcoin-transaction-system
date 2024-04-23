import * as yup from 'yup'


const TotalWeeklyFormSchema = yup.object().shape({

    start_day: yup.string()
        .trim()
        .required('please enter a date of the day. Ex enter 5 if the day is the 5th'),
    start_month: yup.string()
        .trim()
        .required('Please enter a single value for the month. ex enter 11 if the month is November'),
    start_year: yup.string()
        .trim()
        .required('please enter a value of the year. Ex enter 2024 if the year is 2024'),


    end_day: yup.string()
        .trim()
        .required('please enter a date of the day. Ex enter 5 if the day is the 5th'),
    end_month: yup.string()
        .trim()
        .required('Please enter a single value for the month. ex enter 11 if the month is November'),
    end_year: yup.string()
        .trim()
        .required('please enter a value of the year. Ex enter 2024 if the year is 2024')


})

export default TotalWeeklyFormSchema