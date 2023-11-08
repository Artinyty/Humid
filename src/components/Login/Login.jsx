import React from "react";
import s from './Login.module.css'
import { Form, Field } from 'react-final-form'

const onSubmit = (values) => {
  // Handle form submission here
  console.log("Form values:", values);
}

const LoginForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <Field type="text" placeholder="Login" name={'Login'} component={'input'} />
          </div>
          <div>
            <Field type="password" placeholder="Password" name={'password'} component={'input'} />
          </div>
          <div>
            <div>
              <Field type="checkbox" name={'RememberMe'} component={'input'} /> Remember me
            </div>
          </div>
          <div>
            <button type="submit">Login</button> {/* Use "submit" instead of "onsubmit" for button type */}
          </div>
        </div>
      </form>
    )}
  />
)

const Login = (props) => {
  return (
    <div>
      <h1>Login:</h1>
      <LoginForm />
    </div>
  )
}

export default Login;
