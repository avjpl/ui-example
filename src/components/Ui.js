import React from 'react';
import { Formik, Field } from 'formik';

import InputFeild from './Ui/InputField';

import styles from './Ui.css';

const validateEmail = value => {
  let errorMessage;
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{2,4}$/i.test(value)) {
    errorMessage = 'Invalid email address';
  }
  return errorMessage;
};

const validatePassword = value => {
  console.log(value)
  console.log(value.length);
  let errorMessage;
  if (value.length < 6) {
    errorMessage = 'Password needs to more than 6 characters';
  }
  return errorMessage;
};

const Ui = () => {
  return (
    <>
      <p>Ui Elements</p>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.info(JSON.stringify(values, null, 2));
            actions.resetForm();
          }, 1000);
        }}
      >
        {({ handleSubmit }) => {
          return (
            <form className={styles.loginForm} onSubmit={ handleSubmit }>
              <Field name='email' validate={validateEmail}>
                { (props) => <InputFeild type='text' placeholder='Email' {...props} /> }
              </Field>
              <Field name='password' validate={validatePassword} >
                { (props) => <InputFeild type='password' placeholder='Password' {...props} /> }
              </Field>
              <button
                type="submit"
                class={`${styles.pushButton} ${styles.blue}`}
              >
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </>
  )
};

export default Ui;
