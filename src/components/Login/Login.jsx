
import React from "react";
import { Formik, Form, Field } from "formik";
import { Input } from "../Common/FormsControls/FormsControls.js";
import { required } from "../utils/validation/validators.js";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer.js";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const onSubmit = (values) => {
    console.log("Form values:", values);
  };

  return (
    <Formik initialValues={{ email: "", password: "", rememberMe: false }} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <div>
              <Field
                type="text"
                placeholder="Email"
                name={'email'}
                validate={[required]}
                component={Input}
              />

            </div>
            <div>
              <Field
                type="password"
                placeholder="Password"
                name={'password'}
                validate={[required]}
                component={Input}
              />
            </div>
            <div>
              <div>
                <label>
                  <Field type="checkbox" name="rememberMe" />
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const Login = ({ isAuth, login }) => {
  const onSubmit = (formData) => {
    console.log(formData);
    login(formData.email, formData.password, formData.rememberMe);
  };

  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login:</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);


//Оригинал
// import React from "react";
// import { Field, reduxForm } from 'redux-form';
// import { Input } from "../Common/FormsControls/FormsControls.js";
// import { required } from "../utils/validation/validators.js";
// import { connect } from "react-redux";
// import { login } from "../../Redux/auth-reducer.js";
// import { Navigate } from "react-router-dom";

// const LoginForm = (props) => {
//   const { handleSubmit } = props;

//   const onSubmit = (values) => {
//     console.log("Form values:", values);
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <div>
//           <Field type="text" placeholder="Email" name={'email'} validate={[required]} component={Input} />
//         </div>
//         <div>
//           <Field type="password" placeholder="Password" name={'password'} validate={[required]} component={Input} />
//         </div>
//         <div>
//           <div>
//             <Field type="checkbox" name={'rememberMe'} component={Input} /> Remember me
//           </div>
//         </div>
//         <div>
//           <button type="submit">Login</button>
//         </div>
//       </div>
//     </form>
//   );
// }

// const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

// const Login = (props) => {
//   const onSubmit = (formData) => {
//     console.log(formData);
//     props.login(formData.email, formData.password, formData.rememberMe);
//   }
//   if (props.isAuth) {
//     return <Navigate to={'/profile'} />
//   }

//   return (
//     <div>
//       <h1>Login:</h1>
//       <LoginReduxForm onSubmit={onSubmit} />
//     </div>
//   );
// }
// const mapStateToProps = (state) => ({
//   isAuth: state.auth.isAuth
// })

// export default connect(mapStateToProps, { login })(Login);
