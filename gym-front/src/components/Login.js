import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import image from "../Images/home.jpeg"
import "./Login.css"
import { useEffect } from "react";
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
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget[1].value);
    const password = e.currentTarget[1].value;
    setPassword(password);
    const manager_Email = e.currentTarget[0].value;
    setManager_Email(manager_Email);
    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(manager_Email, password).then(
        (response) => {
          
          console.log(response);
          if(response.role==="user"){

          navigate("/profile/" + response.id);
          // console.log(response);
          }
          else navigate("/showbranch");


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
    <div className="containerx">
      <img src={image} id="imgt" />
     <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        zIndex: -5,
        zLayers:0.1,
        fpsLimit: 1000,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode:"grab"
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 8,
            },
            repulse: {
              distance: 200,
              duration: 10,
            },
          },
        },
        particles: {
          color: {
            value: "",
          },
          links: {
            color: "#ff0000",
            distance: 150,
            enable: true,
            opacity: 0.8,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
      {/* <br />
      <br />
      <br /> */}
      <div className="screen ">
        {/* <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        /> */}
        <div class="screen__content">
        <Form onSubmit={handleLogin} ref={form} style={{width: "320px", padding: "30px", paddingTop: "100px"}}>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
          <Input
            type="text"
            className="login__input"
            name="manager_Email"
            placeholder="Email"
            
            value={manager_Email}
            validations={[required]}
          />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
          <Input
            type="password"
            className="login__input"
            name="password"
            placeholder="Password"
            
            value={password}
            validations={[required]}
          />
				</div>
				<button class="button login__submit" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				

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
      <div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
      </div>
    </div>
  );
};

export default Login;
