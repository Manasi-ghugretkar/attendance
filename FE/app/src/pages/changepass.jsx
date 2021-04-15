import React from 'react'
import Input from '../reuseableComponent/inputfield.js';
//import Button from "./forgot_button.jsx";
import Button from "../reuseableComponent/button.js";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import errorToast from "../reuseableComponent/errorToast.jsx";
import successToast from "../reuseableComponent/successToast.jsx";
import { ToastContainer } from 'react-toastify';
import { makeStyles } from "@material-ui/core/styles";
//import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(2),
            width: 200,
        },
    },
}));


export default function Changepass() {

    const classes = useStyles();

    const schema = yup.object().shape({
        username:yup.string().required('this field is required'),
        currentpass: yup.string().required('this field is required'),
        newpass: yup.string().required('this field is required'),
        confirmpass: yup.string().required('this field is required')
    });

    const formik = useFormik(
        {
            initialValues: {
                username:'',
                currentpass: '',
                newpass: '',
                confirmpass: ''
            },

            onSubmit: (data) => {
                axios({
                    url: 'http://127.0.0.1:5000//forgotpass',
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
        <div>
            <form onSubmit={formik.handleSubmit} >
                <div className={classes.root} >
                <div>
                        <Input
                            lable="user name"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.username}
                            touched={formik.touched.username} />
                    </div>
                    <div>
                        <Input
                            lable="current password"
                            name="currentpass"
                            value={formik.values.currentpass}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.currentpass}
                            touched={formik.touched.currentpass} />
                    </div>
                    <div>
                        <Input
                            name="newpass"
                            lable="new password"
                            value={formik.values.newpass}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.newpass}
                            touched={formik.touched.newpass} /></div>
                    <div>
                        <Input
                            name="confirmpass"
                            lable="confirm password"
                            value={formik.values.confirmpass}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.confirmpass}
                            touched={formik.touched.confirmpass} />
                    </div>
                    <div><Button name="submit"
                        type="submit"
                        title="submit"
                        isDisabled={formik.dirty } />
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}
