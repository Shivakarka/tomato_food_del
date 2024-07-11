import React, { useContext, useState } from "react";
import "./loginPopup.css";
import { assets } from "../../assets/assets.ts";
import { StoreContext } from "../../context/StoreContext.tsx";
import axios from "axios";

const LoginPopup = ({
  setShowLogin,
}: {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currState, setCurrState] = useState("Sign Up");
  const { url, setToken } = useContext(StoreContext)!;
  const [error, setError] = useState({
    state: false,
    message: "",
  });

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error: any) {
      console.log(error);
      setError({
        state: true,
        message: error.response.data.message,
      });
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currState !== "Login" && (
            <input
              name="name"
              onChange={changeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            onChange={changeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={changeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
          {error.state && <p className="loginError">{error.message}</p>}
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? &nbsp;
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? &nbsp;
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
