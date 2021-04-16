import React from 'react'
import Inputfield from '../reuseableComponent/inputfield.js'
import Button from "../reuseableComponent/button.js";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import errorToast from "../reuseableComponent/errorToast.jsx";
import successToast from "../reuseableComponent/successToast.jsx";
import { ToastContainer } from 'react-toastify';
import "./style.css"


export default function Otp(props) {







    const schema = yup.object().shape({
        username: yup.string().required('this field is required')
    });

    const formik = useFormik(
        {
            initialValues: {
                otp: ''
            },
            onSubmit: (data) => {



                axios({
                    url: 'http://127.0.0.1:5000//otp',
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
                <div className="otp_container">


                    <form onSubmit={formik.handleSubmit} >
                        <div >
                            <h2 style={{ fontFamily: "cursive", fontSize: 30 }}>Enter OTP</h2>
                            <Inputfield
                                lable="Enter OTP"
                                name="otp"
                                value={formik.values.otp}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.otp}
                                touched={formik.touched.otp} /><br></br>
                            <Button name="submit"
                                type="submit"
                                title="submit"
                                isDisabled={formik.dirty}
                            /></div>
                    </form>


                </div>
            </div>
            <ToastContainer />
        </>
    )
}

