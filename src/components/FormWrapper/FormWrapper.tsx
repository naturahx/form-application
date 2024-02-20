import React, { FC } from "react";
import styles from './FormWrapper.module.css'


interface FormWrapperProps {
  children: React.ReactNode;
}

const FormWrapper:FC<FormWrapperProps> = ({children}) => {
  return (
    <div className={styles.container}>
    <form className={styles.form}>{children}</form>
    </div>
  )
}

export default FormWrapper