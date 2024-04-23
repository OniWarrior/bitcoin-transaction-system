import React from "react"
import '../../Styles/ManagerDashboard.css'
import { useNavigate } from "react-router"
import SignedInNavigation from '../SignedInNavigation'
import { getTotalDailyTransactions, getTotalWeeklyTransactions, getTotalMonthlyTransactions } from "../../State/Actions/ManagerActions"
import { connect } from "react-redux"
import TotalDailyFormSchema from '../../FormSchemas/TotalDailyFormSchema'
import TotalWeeklyFormSchema from '../../FormSchemas/TotalWeeklyFormSchema'
import TotalMonthlyFormSchema from '../../FormSchemas/TotalMonthlyFormSchema'
import { useDailyValidation } from '../../Hooks/useDailyValidation'
import { useWeeklyValidation } from '../../Hooks/useWeeklyValidation'
import { useMonthlyValidation } from '../../Hooks/useMonthlyValidation'
import { useState } from 'react'
import { Form } from "react-bootstrap"

const ManagerDashboard = (props) => {

    const navigate = useNavigate()

    // state vars for the daily, weekly, monthly forms and buttons
    const [daily, dailyError, setDaily] = useDailyValidation(TotalDailyFormSchema)
    const [weekly, weeklyError, setWeekly] = useWeeklyValidation(TotalWeeklyFormSchema)
    const [monthly, monthlyError, setMonthly] = useMonthlyValidation(TotalMonthlyFormSchema)
    const initialDailyDisabled = true
    const initialWeeklyDisabled = true
    const initialMonthlyDisabled = true
    const [dailyDisabled, setDailyDisabled] = useState(initialDailyDisabled)
    const [weeklyDisabled, setWeeklyDisabled] = useState(initialWeeklyDisabled)
    const [monthlyDisabled, setMonthlyDisabled] = useState(initialMonthlyDisabled)



    const changeDaily = (event) => {
        setDaily(event, TotalDailyFormSchema)
    }

    const changeWeekly = (event) => {
        setWeekly(event, TotalWeeklyFormSchema)
    }

    const changeMonthly = (event) => {
        setMonthly(event, TotalMonthlyFormSchema)
    }

    // handler to submit daily form for total daily transacs
    const goToDaily = (e) => {
        e.preventDefault()
        props.getTotalDailyTransactions(daily, navigate)

    }

    // handler to submit weekly form for total weekly transacs
    const goToWeekly = (e) => {
        e.preventDefault()
        props.getTotalWeeklyTransactions(weekly, navigate)

    }

    // handler to submit monthly form for total monthly transacs
    const goToMonthly = (e) => {
        e.preventDefault()
        props.getTotalMonthlyTransactions(monthly, navigate)

    }

    // this handles the disability of the submit button for daily form
    const handleDailyDisabled = (e) => {
        e.preventDefault()
        if (daily.month && daily.day && daily.year) {
            setDailyDisabled(() => ({
                disabled: !dailyDisabled

            }))
        }
        else {
            setDailyDisabled(() => ({
                disabled: dailyDisabled
            }))
        }


    }

    // this handles the disability of the submit button for weekly form
    const handleWeeklyDisabled = (e) => {
        e.preventDefault()
        if (weekly.start_month && weekly.start_day && weekly.start_year &&
            weekly.end_month && weekly.end_day && weekly.end_year) {
            setWeeklyDisabled(() => ({
                disabled: !weeklyDisabled
            }))
        }
        else {
            setWeeklyDisabled(() => ({
                disabled: weeklyDisabled
            }))
        }
    }

    // this handles the disability of the submit button for the montly form
    const handleMonthlyDisabled = (e) => {
        e.preventDefault()
        if (monthly.month && monthly.year) {
            setMonthlyDisabled(() => ({
                disabled: !monthlyDisabled
            }))
        }
        else {
            setMonthlyDisabled(() => ({
                disabled: monthlyDisabled

            }))
        }
    }

    return (
        <div className="manager-dashboard-container">
            <SignedInNavigation />
            <div className="dashboard-header">
                <h2>Manager Dashboard</h2>
            </div>
            <div className="manager-card-container">
                <div className="header-container">
                    <h2>Total Transactions</h2>

                </div>

                <div className="manager-card">

                    <Form className="form-container" onSubmit={goToDaily}>

                        <div className="input-group">
                            <h2>Total Daily Transactions</h2>
                            <label className="label-month">
                                Month:
                                <input className="month-box"
                                    id='month'
                                    type="text"
                                    name="month"
                                    placeholder="month-enter numeric value"
                                    required
                                    onChange={changeDaily}
                                />
                            </label>
                            <div className="errors">
                                <p>{dailyError.month}</p>
                            </div>
                            <label className="label-day">
                                Day:
                                <input className="day-box"
                                    id='day'
                                    type="text"
                                    name="day"
                                    placeholder="day-enter numeric value"
                                    required
                                    onChange={changeDaily}
                                />
                            </label>
                            <div className="errors">
                                <p>{dailyError.day}</p>
                            </div>

                            <label className="label-year">
                                Year:
                                <input className="year-box"
                                    id='year'
                                    type="text"
                                    name="year"
                                    placeholder="year-enter numeric value"
                                    required
                                    onChange={changeDaily}
                                />
                            </label>
                            <div className="errors">
                                <p>{dailyError.year}</p>
                            </div>

                            <button
                                type='submit'
                                className='log-submit'
                                disabled={handleDailyDisabled}
                            >
                                Submit
                            </button>


                        </div>

                    </Form>

                </div>

                <div className="manager-card">
                    <Form className="form-container" onSubmit={goToWeekly}>
                        <div className="input-group">
                            <h2>Total Weekly Transactions</h2>
                            <h2>Start Date</h2>
                            <label className="label-month">
                                Month:
                                <input className="month-box"
                                    id='start_month'
                                    type="text"
                                    name="start_month"
                                    placeholder="month-enter numeric value"
                                    required
                                    onChange={changeWeekly}
                                />

                            </label>
                            <div className="errors">
                                <p>{weeklyError.start_month}</p>
                            </div>
                            <label className="label-day">
                                Day:
                                <input className="day-box"
                                    id='start_day'
                                    type="text"
                                    name='start_day'
                                    placeholder="day-enter numeric value"
                                    onChange={changeWeekly}

                                />
                            </label>
                            <div className="errors">
                                <p>{weeklyError.start_day}</p>
                            </div>

                            <label className="label-year">
                                Year:
                                <input className="year-box"
                                    id='start_year'
                                    type="text"
                                    name="start_year"
                                    placeholder="year-enter numeric value"
                                    onChange={changeWeekly}

                                />
                            </label>
                            <div className="errors">
                                <p>{weeklyError.start_year}</p>
                            </div>

                        </div>

                        <div className="input-group">
                            <h2>End Date</h2>
                            <label className="label-month">
                                Month:
                                <input className="month-box"
                                    id='end_month'
                                    type="text"
                                    name="end_month"
                                    placeholder="month-enter numeric value"
                                    required
                                    onChange={changeWeekly}
                                />

                            </label>
                            <div className="errors">
                                <p>{weeklyError.end_month}</p>
                            </div>
                            <label className="label-day">
                                Day:
                                <input className="day-box"
                                    id='end_day'
                                    type="text"
                                    name='end_day'
                                    placeholder="day-enter numeric value"
                                    onChange={changeWeekly}

                                />
                            </label>
                            <div className="errors">
                                <p>{weeklyError.end_day}</p>
                            </div>

                            <label className="label-year">
                                Year:
                                <input className="year-box"
                                    id='end_year'
                                    type="text"
                                    name="end_year"
                                    placeholder="year-enter numeric value"
                                    onChange={changeWeekly}

                                />
                            </label>
                            <div className="errors">
                                <p>{weeklyError.end_year}</p>
                            </div>

                            <button
                                type='submit'
                                className='log-submit'
                                disabled={handleWeeklyDisabled}
                            >
                                Submit
                            </button>


                        </div>

                    </Form>

                </div>

                <div className="manager-card">
                    <Form className="form-container" onSubmit={goToMonthly}>

                        <div className="input-group">
                            <h2>Total Monthly Transactions</h2>
                            <label className="label-month">
                                Month:
                                <input className="month-box"
                                    id="monthly_month"
                                    type="text"
                                    name="month"
                                    placeholder="month-enter numeric value"
                                    required
                                    onChange={changeMonthly}
                                />
                            </label>
                            <div className="errors">
                                <p>{monthlyError.month}</p>
                            </div>

                            <label className="label-year">
                                Year:
                                <input className="year-box"
                                    id="monthly_year"
                                    type="text"
                                    name="year"
                                    placeholder="year-enter numeric value"
                                    required
                                    onChange={changeMonthly}
                                />
                            </label>
                            <div className="errors">
                                <p>{monthlyError.year}</p>
                            </div>

                            <button
                                type='submit'
                                className='log-submit'
                                disabled={handleMonthlyDisabled}
                            >
                                Submit
                            </button>

                        </div>

                    </Form>

                </div>

            </div>


        </div>
    )





}

const mapStateToProps = (state) => {
    return {
        totalTransactions: state.managerReducer.totalTransactions,
        loading: state.managerReducer.loading,
        error: state.managerReducer.error
    }
}

const mapDispatchToProps = { getTotalDailyTransactions, getTotalMonthlyTransactions, getTotalWeeklyTransactions }



export default connect(mapStateToProps, mapDispatchToProps)(ManagerDashboard)