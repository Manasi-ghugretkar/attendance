import React from 'react'
import Input from '../reuseableComponent/inputfield';
//import Button from './forgot_button.jsx';
import Button from "../reuseableComponent/button.js";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import errorToast from "../reuseableComponent/errorToast.jsx";
import successToast from "../reuseableComponent/successToast.jsx";
import { ToastContainer } from 'react-toastify';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(2),
            width: 200,
        },
    },
}));


export default function Forgotpass(props) {

    const classes = useStyles();

    const schema = yup.object().shape({
        email: yup.string().required('this field is required').email()
    });

    const formik = useFormik(
        {
            initialValues: {
                email: ''
            },

            validationSchema: schema
        }
    )

    return (
        console.log(formik),
        <div>
            <form onSubmit={formik.handleSubmit} >
                <div className={classes.root} >
                    <Input
                        name="email"
                        lable="email address"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.email}
                        touched={formik.touched.email}
                    />
                    <Button name="submit"
                        type="submit"
                        title="submit"
                        isDisabled={formik.dirty } 
                    />
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}
