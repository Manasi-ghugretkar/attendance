import React from 'react'
import Inputfield from '../reuseableComponent/inputfield.js';
import Button from "../reuseableComponent/button.js";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import errorToast from "../reuseableComponent/errorToast.jsx";
import successToast from "../reuseableComponent/successToast.jsx";
import { ToastContainer } from 'react-toastify';
import './style.css'

export default function Newpassword(props) {

    const schema = yup.object().shape({
        newPassword: yup.string().required('this field is required'),
        confirmPassword: yup.string().required('this field is required')
    });

    const formik = useFormik(
        {
            initialValues: {
                newPassword: '',
                confirmPassword: ''
            },

            onSubmit: (data) => {
                axios({
                    url: 'http://127.0.0.1:5000//newPassword',
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    data: data
                }).then((response) => {
                    console.log(response)
                    successToast("successfully register student");


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
        <>
            <div className="up-container">
                <div className="newpass_container">

                    <form onSubmit={formik.handleSubmit} >
                        <div className="bottom_newpass_container">
                            <center>
                                <h2 style={{ fontFamily: "cursive", fontSize: 30 }}>Enter your New password!</h2>
                            </center>
                            <div className="new_small_container"></div>
                            <center>
                                <Inputfield
                                    lable="Enter New Password"
                                    name="newPassword"
                                    value={formik.values.newPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.newPassword}
                                    touched={formik.touched.newPassword}
                                >
                                </Inputfield>
                                <Inputfield
                                    lable="Confirm Password"
                                    name="confirmPassword"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.confirmPassword}
                                    touched={formik.touched.confirmPassword}
                                ></Inputfield>
                                <Button
                                    type="submit"
                                    title="submit"
                                    isDisabled={formik.dirty && formik.isValid} >
                                </Button>
                            </center>
                        </div>
                    </form>

                    <ToastContainer />
                </div>
            </div>

        </>
    )
}
