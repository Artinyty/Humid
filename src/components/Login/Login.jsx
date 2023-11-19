//оригинал
import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Input } from "../Common/FormsControls/FormsControls.js";
import { required } from "../utils/validation/validators.js";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer.js";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
  const { handleSubmit } = props;

  const onSubmit = (values) => {
    // console.log("Form values:", values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <Field type="text" placeholder="Email" name={'email'} validate={[required]} component={Input} autocomplete={'email'} />
        </div>
        <div>
          <Field type="password" placeholder="Password" name={'password'} validate={[required]} component={Input} autocomplete={'current-password '} />
        </div>
        <div>
          <div>
            <Field type="checkbox" name={'rememberMe'} component={Input} autocomplete={'off'} /> Remember me
          </div>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    props.login(formData.email, formData.password, formData.rememberMe);
  }
  if (props.isAuth) {
    return <Navigate to={'/profile'} />
  }

  return (
    <div>
      <h1>Login:</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);
































//Это через библиотеку react-final-form
// import React from "react";
// import s from './Login.module.css'
// import { Form, Field } from 'react-final-form'
// import { Input } from "../Common/FormsControls/FormsControls.js";
// import { required } from "../utils/validation/validators.js";



// const onSubmit = (values) => {
//   console.log("Form values:", values);
// }

// const LoginForm = () => (
//   <Form
//     onSubmit={onSubmit}
//     render={({ handleSubmit }) => (
//       <form onSubmit={handleSubmit}>
//         <div>
//           <div>
//             <Field type="text" placeholder="Login" name='Login' validate={[required]} component={Input} />
//           </div>
//           <div>
//             <Field type="password" placeholder={"Password"} name='password' validate={[required]} component={Input} />
//           </div>
//           <div>
//             <div>
//               <Field type="checkbox" name='RememberMe' component={Input} /> Remember me
//             </div>
//           </div>
//           <div>
//             <button type="submit">Login</button> {/* Use "submit" instead of "onsubmit" for button type */}
//           </div>
//         </div>
//       </form>
//     )}
//   />
// )

// const Login = (props) => {
//   return (
//     <div>
//       <h1>Login:</h1>
//       <LoginForm />
//     </div>
//   )
// }

// export default Login;