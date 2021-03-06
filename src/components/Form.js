import React from 'react'
import Styles from '../styles/Form.module.css'

function Form({children, className, ...rest}) {
    return (
      <form className={`${className} ${Styles.form}`} action="#" {...rest}>
        {children}
      </form>
    );
}

export default Form
