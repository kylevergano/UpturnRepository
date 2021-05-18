import React, { Component } from 'react';
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
class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        firebaseClient();
        const toast = useToast();
        const [email, setEmail] = useState("");
        const [pass, setPass] = useState("");
        return (
            <>
                <div className="main-banner item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div>  
                                            <center>
                                            <img 
                                                src="/images/signIn/heart.png" 
                                                className="" 
                                                alt="image" 
                                            />
                                            <h1>Save solutions that are
                                                relevant to you</h1>
                                                </center> 
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="bgLogin">
                                      
                                        <FormControl isRequired>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="emailAddress"
            value={email}
            aria-describedby="email-helper-text"
          />
          <FormHelperText id="email-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            id="pass"
            value={pass}
            aria-describedby="password-helper-text"
          />
        </FormControl>
        <Stack justify="center" mt={6} isInline spacing={10}>
   
          <Button
            minWidth="40%"
            variant="solid"
            variantColor="green"
            isDisabled={email === "" || pass === ""}
            onClick={async () => {
              await firebase
                .auth()
                .signInWithEmailAndPassword(email, pass)
                .then(function (firebaseUser) {
                  window.location.href = "/";
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
            }}
          >
            Log in
          </Button>
        </Stack>
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                {/*<ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />*/}
            </>
        );
    }
}

export default MainBanner;