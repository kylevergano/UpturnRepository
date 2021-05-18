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
  } from "@chakra-ui/core";
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
class AdminIndex extends Component {
    render() {
        return (
            <>
            <NavbarAdmin/>
            <PageBanner 
                    pageTitle="Hello Admin" 
                    BGImage="bg-admin"
                /> 
             <div className="bg-fcfbfb ptb-100 pb-60">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                             
                                <Button class="buttons">Manage Solutions</Button><br/>
                                <Button class="buttons">Manage Resources</Button><br/>
                                <Button class="buttons">Manage Users</Button><br/>
                                <Button class="buttons">User Analytics</Button><br/>
                                <Button class="buttons">Contact submissions</Button><br/>  
                                
                                </div>
                            </div>

                            <div className="col-lg-8 col-sm-12">
                                <div className="service-card-one">
                                <Table variant="simple">
                                <TableCaption>Imperial to metric conversion factors</TableCaption>
                                <Thead>
                                    <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>25.4</Td>
                                    </Tr>
                                    <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48</Td>
                                    </Tr>
                                    <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric>0.91444</Td>
                                    </Tr>
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                    </Tr>
                                </Tfoot>
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