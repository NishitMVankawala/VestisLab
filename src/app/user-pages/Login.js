import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link, Redirect } from 'react-router-dom';

import { Form } from 'react-bootstrap';
import { login } from "../../actions/auth";

import GoogleLogin from '../../components/GoogleLogin';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters")
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {
      console.log("onSubmit called >>>");
      console.log(JSON.stringify(data, null, 2));
      const email = data.email;
      const password = data.password;
      console.log(email, password);
      dispatch(login(email, password))
        .then(() => {
          props.history.push("/dashboard");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    },
  });
  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  // const onSubmit = data => {
  //   console.log("onSubmit >>>");
  //   console.log(JSON.stringify(data, null, 2));
  //   // e.preventDefault();
  //   setLoading(true);
  //   // form.current.validateAll();
  //   // if (checkBtn.current.context._errors.length === 0) {
  //     dispatch(login(username, password))
  //       .then(() => {
  //         props.history.push("/dashboard");
  //         window.location.reload();
  //       })
  //       .catch(() => {
  //         setLoading(false);
  //       });
  //   // } else {
  //   //   setLoading(false);
  //   // }
  // };


  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-5 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={require("../../assets/images/logo.svg")} alt="logo" />
              </div>
              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>
              {/* <Form className="pt-3" onSubmit={handleLogin} ref={form}> */}
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <input
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <div className="text-danger">
                    {formik.errors.email ? formik.errors.email : null}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <div className="text-danger">
                    {formik.errors.password ? formik.errors.password : null}
                  </div>
                </div>
                
                <div className="mt-3">
                  <button className="btn btn-primary btn-block" disabled={loading}>
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>SIGN IN</span>
                  </button>
                </div>
                {/* <div className="mt-3">
                  <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard" disabled={loading}>
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    SIGN IN
                  </Link>
                </div> */}
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Keep me signed in
                    </label>
                  </div>
                  <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
                </div>
                {/* <div className="mb-2">
                  <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                    <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                  </button>
                </div> */}
                
                <div className="mb-2">
                  <GoogleLogin />
                  {/* <GoogleLogout /> */}
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Don't have an account? <Link to="/user-pages/register-1" className="text-primary">Create</Link>
                </div>
                {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
              {/* </Form> */}
              </form>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}


export default Login
