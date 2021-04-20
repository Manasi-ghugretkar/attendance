import React from 'react';
import Header from "../reuseableComponent/login.js";
import Inputfield from "../reuseableComponent/inputfield.js";
import Dropdown from "../reuseableComponent/dropdown.js";
import Button from "../reuseableComponent/button.js";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import errorToast from "../reuseableComponent/errorToast.jsx";
import successToast from "../reuseableComponent/successToast.jsx";
import { Link } from 'react-router-dom';
import './style.css'

export default function Login(props) {

    localStorage.setItem('IS_LOGGED_IN', 'false')
    console.log(localStorage.getItem('IS_LOGGED_IN'));

    const userType = ['student', 'faculty', 'admin']

    const schema = yup.object().shape({
        name: yup.string().required('this field is required'),
        password: yup.string().required('this field is required'),
        userType: yup.string().required('this field is required')
    });


    const formik = useFormik(
        {
            initialValues: {
                name: '',
                password: '',
                userType: ''
            },
            onSubmit: (data) => {
                console.log(data);
                axios({
                    url: 'http://127.0.0.1:5000//login',
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    data: data
                }).then((response) => {
                    console.log(response)
                    if (response.data.message === "valid user")
                        successToast("successfully login");
                    else
                        errorToast("Invalid user name or password");

                    if (response.data.status === 1) {
                        localStorage.setItem('IS_LOGGED_IN', 'true')
                        console.log(localStorage.getItem('IS_LOGGED_IN'));
                    }
                    else {
                        localStorage.setItem('IS_LOGGED_IN', 'false')
                    }



                }).catch((error) => {
                    console.log(error)
                    errorToast("something went wrong");
                })


            },

            validationSchema: schema
        }
    )


    return (
        console.log(formik),
        <div className="container">
            <div className="container2">

            <form onSubmit={formik.handleSubmit} >
                <center className="header">
                    <Header
                        lable="Sign in "
                        bgcolor="#1a237e"
                        color="white"
                        fontSize="bold"
                    ></Header>
                    <div >
                        <Inputfield
                            lable="user name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.name}
                            touched={formik.touched.name}

                        ></Inputfield>
                    </div>
                    <div >
                        <Inputfield
                            lable="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.password}
                            touched={formik.touched.password}
                        ></Inputfield>
                    </div>
                    <div >
                        <Dropdown
                            data={userType}
                            sub="User Type"
                            width={218}
                            name="userType"
                            value={formik.values.userType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.userType}
                            touched={formik.touched.userType}
                        ></Dropdown>
                    </div>
                    <Button
                        type="submit"
                        title="submit"
                        isDisabled={formik.dirty && formik.isValid}
                    ></Button>
                    <Link to="/forgotpassword"><h4>Forgot password?or reset the password?</h4></Link>


                </center>
            </form>
            <ToastContainer />
            </div>
        </div>
    );
}
