import './App.css';
import React from 'react';
import {Formik} from "formik";
import  * as Yup from "yup";
import Axios from 'axios';

const Form = () => {

  const submitRegistration = values => {
      Axios.post('http://localhost:3001/api/insert', {
          userName: values.name, 
          userLastName: values.lastName,
          userEmail: values.email,
          userPassword: values.password,
      }).then(() => alert('succesful transfer'));
  };

  const validationSchema = Yup.object().shape({
      name: Yup.string().typeError('Should be a string').required('Necessarily'),
      password: Yup.string().typeError('Should be a string').required('Necessarily'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password')],'passwords do not match').required('Necessarily'),
      email: Yup.string().email('enter correct email').required('Necessarily'),
  })

  return (
<div>
  <Formik
  initialValues={{
      name: '',
      password: '',
      confirmPassword: '',
      email: '',
  }}

  validateOnBlur
  onSubmit={values => submitRegistration(values)}
  validationSchema={validationSchema}
  >
      {({values, errors, touched, handleChange, handleBlur, 
      isValid, handleSubmit, dirty}) => (<div className={`form`}>
          <p>
              <label htmlFor={`name`}>First name</label> <br/>
              <input
                  className={`input`}
                  type={`text`}
                  name={`name`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
              />
          </p>

          {touched.name && errors.name && <p className={`error`}>{errors.name}</p>}

          <p>
              <label htmlFor={`lastName`}>Last name</label> <br/>
              <input
                  className={`input`}
                  type={`text`}
                  name={`lastName`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
              />
          </p>

          {touched.lastName && errors.lastName && <p className={`error`}>{errors.lastName}</p>}

          <p>
              <label htmlFor={`password`}>Password</label> <br/>
              <input
                  className={`input`}
                  type={`password`}
                  name={`password`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}

              />
          </p>
          {touched.password && errors.password && <p className={`error`}>{errors.password}</p>}
          <p>
              <label htmlFor={`confirmPassword`}>Confirm password</label> <br/>
              <input
                  className={`input`}
                  type={`password`}
                  name={`confirmPassword`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}

              />
          </p>
          {touched.confirmPassword && errors.confirmPassword && <p className={`error`}>{errors.confirmPassword}</p>}
          <p>
              <label htmlFor={`email`}> Email</label> <br/>
              <input
                  className={`input`}
                  type={`email`}
                  name={`email`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
              />
          </p>
          {touched.email && errors.email && <p className={`error`}>{errors.email}</p>}


          <button
          disabled={!isValid && !dirty}
          onClick={handleSubmit}
          type={`submit`}
          >Submit
          </button>
      </div>)}
  </Formik>
</div>

  )
}

export default Form;


