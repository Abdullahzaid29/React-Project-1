import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../App.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
export default function register() {
  const [loginUsername, setRegisterUsername] = useState("");
  const [loginPassword, setRegisterPassword] = useState("");
  const [rePassword, setreRegisterPassword] = useState("");
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
    .post("http://localhost:3001/register", {
                username: loginUsername,
                password: loginPassword,
                repassword:rePassword

    })
    .then((res) => res)
        .then((data) => {
   console.log(data);
      if(data.data.message == "Successfull" ) {
        // setUser(true)
        toast.success('Registered Successfully', {
          // position:'top-right',
          // autoClose:1000,
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => history.push('/main')
       });
        // return    history.push("/main");
        console.log("sucess");
      }else if(data.data.message == "failure"){
        toast.error('Invalid Credentials', {
          // position:'top-right',
          // autoClose:1000,
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => history.push('/register')
       });
        // return    history.push("/login");
      }
        })
  
    
  };
  return (
    <div className="App">


<div className="container">

<div className="row" style={{"alignItems":"center","justifyContent":"center","position":"absolute","top":"40%","left":"50%","transform": "translate(-50%, -50%)"}}>
        <div className="col-lg-6 col-md-8 col-sm-12" style={{"width":"400px"}}>
        <h2 className="fw-bold mb-2 text-center" style={{"margin-top":"200px","fontFamily":"Montserrat","fontSize":"32px","fontWeight":"700"}}>Sign Up</h2>
        <p className="txt-dark mb-3  text-center" style={{"fontFamily":"Montserrat","fontSize":"24px","fontWeight":"500"}}>Enter your details below!</p>
        <form >
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="username"
                onChange={(e) => setRegisterUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1" style={{"marginBottom":"5px","marginTop":"5px"}}>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1" style={{"marginBottom":"5px","marginTop":"5px"}}>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
                name="repassword"
                onChange={(e) => setreRegisterPassword(e.target.value)} 
              />
            </div>
          </form>
        {/* <MDBInput wrapperClass='mb-4 w-100' label='Email address' name="username" id='formControlLg' type='email' size="lg"  onChange={(e) => setRegisterUsername(e.target.value)} required  />
        <MDBInput wrapperClass='mb-4 w-100' label='Password'  name="password" id='formControlLg' type='password' size="lg"  onChange={(e) => setRegisterPassword(e.target.value)} />
        <MDBInput wrapperClass='mb-4 w-100' label='Re-Password'  name="repassword" id='formControlLg' type='password' size="lg"   onChange={(e) => setreRegisterPassword(e.target.value)} /> */}
      
      <button   style={{"border-radius":"3.1rem",'margin-top':'20px','alignItems':"center",'justifyContent':"center","margin-left":"20%","backgroundColor":"#F5CA48","borderColor":"white","color":"black","fontFamily":"Montserrat","fontWeight":"600"}} className="w-50 btn btn-lg btn btn-success" type="submit" onClick={notify}>Register</button>

        <div style={{"marginTop":"10px"}}>
                <p className="text-center mb-0">already have an account? <a href="/" class="text-dark-50 fw-bold">Log In</a></p>

              </div>
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
 
    
  </div>
  )
}


{/* <main className="form-signin w-100 m-auto">
<h3 style={{"margin-top":"200px"}}className="text-center txt-dark mt-50">Sign Up</h3>
  <h6 className="text-center nonecase-font text-secondary">Enter your details below</h6>
  <div style = {{'width':'20vw','margin':'0 auto'}} className="form-group text-center">
  <label className="form-label" for="form3Example3cg">Your Email</label>
    <input type="email" className="form-control bottom" name="username" placeholder="Email"  onChange={(e) => setRegisterUsername(e.target.value)} required />
  


    <label className="form-label" for="form3Example4cg">Password</label>
    <input type="password" className="form-control bottom" name="password" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)}/>

    <label className="form-label" for="form3Example4cg">Re-Password</label>
    <input type="password" className="form-control bottom" name="repassword" placeholder="Re-Password" onChange={(e) => setreRegisterPassword(e.target.value)}/>


 
 

    <button   style={{"border-radius":"3.1rem",'margin-top':'20px'}} className="w-50 btn btn-lg btn btn-success" type="submit" onClick={notify}>Register</button>
    <ToastContainer />

  </div>

  <p className="text-center text-muted mt-5 mb-0">already have an account? <a href="/"
    className="fw-bold text-body"><u>Sign In</u></a></p>



</main> */}