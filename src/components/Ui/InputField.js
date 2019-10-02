import React from 'react';
import objstr from 'obj-str'

import styles from './InputField.css';

const InputField = ({ type, placeholder, field, form, form: { touched, errors }, ...props }) => {
  return (
    <div className={styles.container}>
      <input
        className={objstr({
          [styles.input]: true,
          [styles.inputValid]: touched[field.name] && !errors[field.name],
          [styles.inputError]: touched[field.name] && errors[field.name]
        })}
        type={type}
        placeholder={placeholder}
        { ...field }
        { ...props }
      />
      {
        touched[field.name] &&
        errors[field.name] && 
          <div className={styles.symbol}>
            X
          </div>
      }
    </div>
  );
};

export default InputField;
