import React from 'react'
import DropDown from '../reuseableComponent/dropdown.js'
import Button from '../reuseableComponent/button.js'
import "./style.css"
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import errorToast from "../reuseableComponent/errorToast.jsx";
import successToast from "../reuseableComponent/successToast.jsx";

export default function Inputcontainer(props) {

  const branch = ["CS", "E&C", "E&E", "MECH", "CIVIL"]
  const sem = ["FIRST", "SECOUND", "THIRD", "FOURTH", "FIFTH", "SIXTH", "SEVENTH", "EIGHTH"]
  const division = ["A", "B", "C"]
  const reportType = ["long", "overview"]
  const Subject = ["os","Data structure","DBMS","Python","unix"]

  const schema = yup.object().shape({
    branch: yup.string().required('this field is required'),
    sem: yup.string().required('this field is required'),
    division: yup.string().required('this field is required'),
    reportType: yup.string().required('this field is required'),
    Subject: yup.string().required('this field is required')

  });

  const formik = useFormik(
    {
      initialValues: {
        branch: '',
        sem: '',
        division: '',
        Subject:'',
        reportType: ''
      },

      onSubmit: (data) => {
        console.log(data);
        var reportType = data.reportType;
        props.sendFunction(reportType)
        //   axios({
        //     url: 'http://127.0.0.1:5000//TeacherDashboard',
        //     method: 'post',
        //     headers: { 'Content-Type': 'application/json' },
        //     data: data
        //   }).then((response) => {
        //     console.log(response)
        //     successToast("successfully register teacher");


        //   }).catch((error) => {
        //     console.log(error)
        //     errorToast("something went wrong");
        //   })

      },

      validationSchema: schema
    }
  )




  return (
    console.log(formik),
    <div>
      <form onSubmit={formik.handleSubmit} >
        <div className="dropdownContainer">
          <DropDown
            sub="Branch"
            data={branch}
            name="branch"
            width={150}
            value={formik.values.branch}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.branch}
            touched={formik.touched.branch}>
          </DropDown>
          <DropDown
            sub="Division"
            data={division}
            name="division"
            width={150}
            value={formik.values.division}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.division}
            touched={formik.touched.division}></DropDown>
          <DropDown
            sub="Sem"
            data={sem}
            name="sem"
            width={150}
            value={formik.values.sem}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.sem}
            touched={formik.touched.sem} ></DropDown>
            <DropDown
            sub="Subject"
            data={Subject}
            name="Subject"
            width={150}
            value={formik.values.Subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.Subject}
            touched={formik.touched.Subject} ></DropDown>
          <DropDown
            sub="ReportType"
            data={reportType}
            name="reportType"
            width={150}
            value={formik.values.reportType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.reportType}
            touched={formik.touched.reportType}>
          </DropDown>
          <Button
            type="submit"
            title="submit"
            isDisabled={formik.dirty && formik.isValid}>
          </Button>
        </div>
      </form>

    </div>
  )
}