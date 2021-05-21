import React, { Component } from 'react';
import NavbarAdmin from '../components/Layouts/NavbarAdmin';
import AdminBanner from '../components/Common/AdminBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';
import Image from 'next/image'
import Link from 'next/link';
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
    Tabs, TabList, TabPanels, Tab, TabPanel
  } from "@chakra-ui/react";
  import PageBanner from '../components/Common/PageBanner';
  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"
  import {firebase} from '../firebase/index';

class AdminIndex extends Component {

    constructor() {
        super();
       
        this.ref = firebase.firestore().collection('SOLUTIONS'); //reference to firestore
        this.unsubscribe = null;
        this.state = {
            solutions: [], 
          };
      }
      onCollectionUpdate = (querySnapshot) => {
        const solutions = [];
        querySnapshot.forEach((doc) => {
          const {title,location,lastEdited } = doc.data();
          solutions.push({
            key: doc.id,
            doc, // DocumentSnapshot         
            title,
            location,
            lastEdited
          });
          
         
        });
        this.setState({
            solutions
       });
       
    
    
      }
      componentDidMount() {
  
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      } 
    render() {
        return (
            <>
            <NavbarAdmin/>
            <PageBanner 
                    pageTitle="Hello Admin" 
                    BGImage="bg-admin"
                /> 
                <div className="row justify-content-right">
                <Button onClick={(e) =>{
                  e.preventDefault();
                  
                }}>&nbsp;Add Solution</Button>
                </div>
                
             <div className="bg-fcfbfb ptb-100 pb-60">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                             
                                <button className="buttons">Manage Solutions</button><br/>
                                <button className="buttons">Manage Resources</button><br/>
                                <button className="buttons">Manage Users</button><br/>
                                <button className="buttons">User Analytics</button><br/>
                                <button className="buttons">Contact submissions</button><br/>  
                                
                                </div>
                            </div>

                            <div className="col-lg-8 col-sm-12">
                                <div className="service-card-one">
                                <Table variant="striped" colorScheme="gray">
                                <Thead>
                                    <Tr>
                                    <Th>SOLUTION NAME</Th>
                                    <Th>LOCATION</Th>
                                    <Th>LAST EDITED</Th>
                                    <Th>ACTIONS</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                {
                                this.state.solutions.map(solution=>{
                                    console.log("title: " + solution.title) 
                                    return(
                                        <Tr>
                                        <Td>{solution.title}</Td>
                                        <Td>{solution.location}</Td>
                                        <Td>{solution.lastEdited}</Td>
                                        <Td><Button colorScheme="blue" size="xs">
                                            EDIT
                                        </Button>&nbsp;
                                        <Button colorScheme="orange" size="xs">
                                            DELETE
                                        </Button>
                                        </Td>
                                        </Tr>
                                    )
                                })
                                } 
                                            
                                </Tbody>                      
                                </Table>
                                </div>
                            </div>
                    </div>
                </div>
               
                <Footer />

            </>
        );
    }
}

export default AdminIndex;