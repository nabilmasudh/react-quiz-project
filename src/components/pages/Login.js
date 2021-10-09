import React from 'react'
import Illustration from '../Illustration';
import TextInput from '../TextInput';
import Button from '../Button';
import Styles from '../../styles/Login.module.css'
import Form from '../Form';
import { Link } from 'react-router-dom';


function Login() {
    return (
      <>
        <h1>Login to your account</h1>
        <div className="column">
          <Illustration />
          <Form className={`${Styles.login}`} action="#">
            <TextInput
              type="text"
              placeholder="Enter email"
              icon="alternate_email"
            />

            <TextInput
              type="password"
              placeholder="Enter password"
              icon="lock"
            />

            <Button>
              <span>Submit Now</span>
            </Button>

            <div className="info">
              Don't have an account? <Link to="/signup">Signup</Link> instead.
            </div>
          </Form>
        </div>
      </>
    );
}

export default Login
