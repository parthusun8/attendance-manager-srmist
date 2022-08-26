import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

const baseURL = "https://academia-api.azurewebsites.net/";


function Login({setter}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  

  async function get_attendance_details(token) {
    const headers = {
      "x-access-token": token,
    };
    console.log(headers);
    axios
      .post(baseURL + "course-user", {
        'x-access-token' : token
      }, {headers: headers})
      .then((response) => {
        const a = response.data;
        // courseSetter(a.courses);
        // MarksSetter(a.internal_marks);
        // ttsetter(a['time-table']);
        // userSetter(a.user);

        setter(a.courses, a.internal_marks, a['time-table'], a.user, true);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }
  
  async function send() {
    console.log(email, password);
    if (email.length < 6) {
      alert("Wrong NetId");
    } else {
      axios
        .post(baseURL + "login", {
          username:
            email[0] + email[1] + email[2] + email[3] + email[4] + email[5],
          password: password,
        })
        .then((response) => {
          // console.log("Logged In", response.data);
          const a = response.data;
          try {
            if (a.message) {
              alert(a.message);
            } else if (a.token) {
              setToken(a.token);
              get_attendance_details(a.token);
            }
          } catch (e) {
            console.log(e);
          }
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    }
  }

  return (
    <div className="container">
        <div className="login--card--container">
          <div className="center">
            <h1>Login</h1>
            <form
              method="post"
              className="form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="txt_field">
                <input
                  type="text"
                  required
                  className="input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(email);
                  }}
                />
                <span></span>
                <label>Email or NetId</label>
              </div>
              <div className="txt_field">
                <input
                  type="password"
                  required
                  className="input"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    console.log(password);
                  }}
                />
                <span></span>
                <label>Password</label>
              </div>
              <button className="button" onClick={send}>
                Login
              </button>
              <div className="info--footer">
                <i className="fa-solid fa-circle-info"> </i>
                We do not save your login info
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}

export default Login;
