import React from "react";
import imageform from "../../assets/login-form.svg";
import imgBackground from "../../assets/login-bg.svg";
import imgPerson from "../../assets/login-person.svg";
import screen1 from "../../assets/login-screen1.svg";
import screen2 from "../../assets/login-screen2.svg";
import screen3 from "../../assets/login-screen3.svg";
import imgIcons from "../../assets/login-icons.svg";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <div className="login">
        <div className="left">
          <img className="background" src={imgBackground} alt="imgBackground" />
          <img className="person" src={imgPerson} alt="imgPerson" />
          <img className="screen1" src={screen1} alt="screen1" />
          <img className="screen2" src={screen2} alt="screen2" />
          <img className="screen3" src={screen3} alt="screen3" />
          <img className="icons" src={imgIcons} alt="imgIcons" />
        </div>
        <div className="wrapper">
          <img src={imageform} alt="imageform" />
          <form>
            <h2>Login</h2>
            <label style={{ top: "50px" }} htmlFor="username">
              Mobile Number
            </label>
            <br />
            <input name="username" id="username" type="number" />
            <br />
            <label
              style={{ top: "120px" }}
              className="password"
              htmlFor="password"
            >
              Password
            </label>
            <br />
            <input name="password" id="password" type="password" />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
