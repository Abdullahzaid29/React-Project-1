import React, { useState } from "react";
import axios from "axios";
import Main from "./main";
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export default function () {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(false);

  let history = useHistory();
  const notify = () => {
    // toast("Wow so easy!");
    // Axios({
    //   method: "POST",
    //   data: {
    //     username: loginUsername,
    //     password: loginPassword,
    //   },
    //   withCredentials: true,
    //   url: "http://localhost:3001/login",
    // }).then((res) => console.log(res));
    axios
      .post("http://localhost:3001/login", {
        username: loginUsername,
        password: loginPassword,
      })
      .then((res) => res)
      .then((data) => {
        console.log(data.data.message);
        if (data.data.message == "Successfully loggin") {
          // setUser(true)
          toast.success("Logged In!!", {
            // position: toast.POSITION.TOP_RIGHT,
            // autoClose: 1000,
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClose: () => history.push("/main"),
          });
          // return    history.push("/main");
          console.log("sucess");
        } else if (data.data.message == "failure") {
          toast.error("Invalid Credentials", {
            // position: "top-right",
            // autoClose: 1000,
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClose: () => history.push("/"),
          });
          // return    history.push("/login");
        }
      });
  };
  return (
    <div className="container">
      <div
        className="row"
        style={{
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="col-lg-6 col-md-8 col-sm-12" style={{ width: "400px" }}>
          <h3
            style={{
              "margin-top": "200px",
              fontFamily: "Montserrat",
              fontSize: "32px",
              fontWeight: "700",
            }}
            className="text-center txt-dark mt-50"
            id="title"
          >
            Sign In
          </h3>
          <h6
            className="text-center txt-dark nonecase-font"
            style={{
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: "500",
              marginBottom: "25px",
            }}
          >
            Enter your details below
          </h6>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1" style={{ marginBottom: "5px" }}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="username"
                onChange={(e) => setLoginUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label
                for="exampleInputPassword1"
                style={{ marginBottom: "5px", marginTop: "5px" }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
          </form>
          <button
            style={{
              "border-radius": "3.1rem",
              "margin-top": "20px",
              alignItems: "center",
              justifyContent: "center",
              "margin-left": "20%",
              backgroundColor: "#F5CA48",
              borderColor: "white",
              color: "black",
              fontFamily: "Montserrat",
              fontWeight: "600",
            }}
            className="w-50 btn btn-lg btn btn-success"
            type="submit"
            onClick={notify}
          >
            Login
          </button>
          <div style={{ marginTop: "10px" }}>
            <p className="text-center text-muted mt-8 mb-0">
              Don't have an account?{" "}
              <a href="/register" className="ftext-dark-50 fw-bold">
                <u>Sign Up</u>
              </a>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>

      {/* {<main className="form-signin w-100 m-auto">

<h3 style={{"margin-top":"200px"}}className="text-center txt-dark mt-50" id="title">Sign In</h3>
  <h6 className="text-center nonecase-font text-secondary">Enter your details below</h6>
  <form className="px-4 py-3">
  <div style = {{'margin':'0 auto'}} className="form-group text-center" id="form">
  <label className="form-label" for="form3Example3cg">Your Email</label>
    <input type="email" className="form-control bottom" name="username" placeholder="Email"  onChange={(e) => setLoginUsername(e.target.value)} required />
  


    <label className="form-label" for="form3Example4cg">Password</label>
    <input type="password" className="form-control bottom" name="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)}/>

  

 
 

   
    <button   style={{"border-radius":"3.1rem",'margin-top':'20px'}} className="w-50 btn btn-lg btn btn-success" type="submit" onClick={notify}>Login</button>
    <ToastContainer />
  </div>
  </form>
 

  <p className="text-center text-muted mt-5 mb-0">Don't have an account? <a href="/register"
    className="fw-bold text-body"><u>Sign Up</u></a></p>



</main> } */}
      {/* <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>

        <h2 className="fw-bold mb-2 text-center">Sign in</h2>
        <p className="text-black-50 mb-3 text-center">Please enter your login and password!</p>

        <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"  onChange={(e) => setLoginUsername(e.target.value)} required />
        <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setLoginPassword(e.target.value)}/>
        <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

        <button style={{'margin':'0 auto'}}  className="w-50 btn btn-lg btn btn-success text-center" type="submit" onClick={notify}>Login</button>

        <ToastContainer />
        <hr className="my-4" />
        <div>
                <p className="mb-0">Don't have an account? <a href="/register" class="text-dark-50 fw-bold">Sign Up</a></p>

              </div>

      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer> */}
    </div>
  );
}
