import React, { useState } from "react";
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import firebaseClient from "../../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import {
    Box,
    Flex,
    Input,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Stack,
    Button,
    Heading,
    useToast,
  } from "@chakra-ui/core";
function Login({ props }) {
    firebaseClient();
    const toast = useToast();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
  return (
      <Flex>
    <div class="container-center-horizontal">
      <form className="sign-in screen" name="form1" action="form1" method="post">
        <div className="overlap-group">
          <img
            className="group-766"
            src="https://anima-uploads.s3.amazonaws.com/projects/607cf16e4efbb0a6f1dba361/releases/6081080031fcb4ee9f6b2b21/img/group-766@1x.svg"
          />  
          <h1 className="text-1 sora-bold-white-36px">Be part of the solution.
          <br/><br/>
          <FormControl isRequired >
          <Input type="email" inputPlaceholder="your email" placeholder="Email Address" 
           onChange={(e) => setEmail(e.target.value)}
           type="email"
           id="emailAddress"
           value={email}
           aria-describedby="email-helper-text"
           className="x-default-1"
          
           />
           
           </FormControl>
       
           <FormControl isRequired >
          <Input type="password" inputPlaceholder="your password" placeholder="Password" 
             onChange={(e) => setPass(e.target.value)}
             type="password"
             id="pass"
             value={pass}
             aria-describedby="password-helper-text"
             
             />     
       </FormControl>
          </h1>
          <img
            className="fa-project-uptu-logo-on-dark-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/607cf16e4efbb0a6f1dba361/releases/6081080031fcb4ee9f6b2b21/img/fa-project-upturn-logo-on-dark-1-1@2x.png"
          />
          <div className="signIn">
        
       </div>
          <div className="label-1 valign-text-middle sora-bold-white-18px">Forgot your password?</div>
          <div className="label valign-text-middle sora-normal-white-18px">
            <span>
              <span className="span sora-normal-white-18px">Not yet a member? </span>
              <span className="span sora-bold-white-18px">Sign up.</span>
            </span>
          </div>
      
          <Button  
          className="default valign-text-middle sora-normal-white-24px"
          onClick={async () => {
              await firebase
                .auth()
                .signInWithEmailAndPassword(email, pass)
                .then(function (firebaseUser) {
                  window.location.href = "/admin-index";
                })
                .catch(function (error) {
                  const message = error.message;
                  toast({
                    title: "An error occurred.",
                    description: message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                });
            }}>
         SIGN IN
          </Button>
          <div className="text-2 sora-bold-endeavour-36px">
            Save solutions that are
            <br />
            relevant to you
          </div>
        </div>
        <img
          className="group-82"
          src="https://anima-uploads.s3.amazonaws.com/projects/607cf16e4efbb0a6f1dba361/releases/60822c5c5d5d7fbd355fb15e/img/group-82@2x.svg"
        />
        <img
          className="ellipse-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/607cf16e4efbb0a6f1dba361/releases/6081080031fcb4ee9f6b2b21/img/ellipse-1@2x.svg"
        />
        <img
          className="ellipse-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/607cf16e4efbb0a6f1dba361/releases/6081080031fcb4ee9f6b2b21/img/ellipse-2@2x.svg"
        />
        <img
          className="ellipse-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/607cf16e4efbb0a6f1dba361/releases/6081080031fcb4ee9f6b2b21/img/ellipse-1@2x.svg"
        />
        <img
          className="ellipse-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/607cf16e4efbb0a6f1dba361/releases/6081080031fcb4ee9f6b2b21/img/ellipse-1@2x.svg"
        />
      </form>
    </div>
    </Flex>
  );
}

export default Login;

function Default(props) {
  const { inputType, inputPlaceholder, placeholder, className } = props;

  return (
    <input
      className={`x-default ${className || ""}`}
      name="503154"
      placeholder={inputPlaceholder}
      type={inputType}
      required
    />
  );
}

