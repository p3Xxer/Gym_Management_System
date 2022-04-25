import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import image from "../Images/home.jpg"
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [manager_Email, setManager_Email] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeManager_Email = (e) => {
    const manager_Email = e.target.value;
    setManager_Email(manager_Email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(manager_Email, password).then(
        (response) => {
          navigate("/profile/" + response.id);
          // console.log(response);


          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <img src={image} id="imgt2" />
      {/* <br />
      <br />
      <br /> */}
      <div className="card card-container custom">
        {/* <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        /> */}

        <Form onSubmit={handleLogin} ref={form}>
          <br />
          <label className="abc" htmlFor="manager_Email">Email</label>
          <Input
            type="text"
            className="form-control fkk"
            name="manager_Email"
            placeholder="Email"
            value={manager_Email}
            onChange={onChangeManager_Email}
            validations={[required]}
          />

          <br />
          <label className="abc" htmlFor="password">Password</label>
          <Input
            type="password"
            className=" fkk form-control"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
            validations={[required]}
          />
          <br />
          <br />
          <div className="form-group">
            <button className="butt" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
