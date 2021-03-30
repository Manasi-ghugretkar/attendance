import React from 'react';

import Login from "../reuseableComponent/login.js"
 import Select from "../reuseableComponent/dropdown.js";
import Submit from "../reuseableComponent/button.js";
import TextFields from "../reuseableComponent/inputfield.js";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import errorToast from "../reuseableComponent/errorToast.jsx";
import successToast from "../reuseableComponent/successToast.jsx";
import { ToastContainer } from 'react-toastify';
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 200,
    },
  },
}));

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


function TextFieldSizes() {

  const classes = useStyles();

   const branch = ["CS", "E&C", "E&E", "MECH", "CIVIL"]
  
  const schema = yup.object().shape({
    name: yup.string().required('this field is required'),
    email: yup.string().required('this field is required').email(),
    phoneno: yup.string().required('this field is required').matches(phoneRegExp, "invalid phone number"),
     branch: yup.string().required('this field is required'),
    password: yup.string().required('this field is required').min(8, 'minimum it should contain 8 characters')
  });



  const formik = useFormik(
    {
      initialValues: {
         name: '',
         branch: '',
         phoneno: '',
         email: '',
         password: '',
      },

      onSubmit: (data) => {
        axios({
          url: 'http://127.0.0.1:5000//registerTeacher',
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          data: data
        }).then((response) => {
          console.log(response)
          successToast("successfully register teacher");


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
        <div>
          <center>
            <div
              style={{
                padding: 10,
                borderRadius: 10
              }}>

              <div>
                <Login bgcolor="#e040fb" color="black" lable="Teacher Register form"/>
              </div>

              <div className={classes.root}>
                <div>
                  <TextFields
                    lable="user name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.name}
                    touched={formik.touched.name}
                  />
                  <TextFields
                    lable="email id"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email}
                    touched={formik.touched.email}
                  />
                </div>
                <div>
                  <TextFields
                    lable="subject"
                    name="subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.subject}
                    touched={formik.touched.subject}
                  />
                  <TextFields
                    lable="phone no"
                    name="phoneno"
                    value={formik.values.phoneno}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.phoneno}
                    touched={formik.touched.phoneno}
                  />
                </div>
                 <div>
                  <Select
                    sub="branch"
                    data={branch}
                    name="branch"
                    value={formik.values.branch}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.branch}
                    touched={formik.touched.branch}
                  />  
                  <TextFields
                    lable="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                  />
                </div>
                {/* <BasicTextFields 
          lable="confirmPassword" 
          name="confirmPassword" 
          value={formik.values.confirmPassword} 
          onChange={formik.handleChange} 
          /><br></br> */}
              </div>
              <Submit
                type="submit"
                title="submit"
                isDisabled={formik.dirty && formik.isValid} />
                <Link to="/Login"><h4>go back to signin</h4></Link>
             </div>
          </center>
        </div>
      </form>
      <ToastContainer />
    </div>

  );
}
export default TextFieldSizes;