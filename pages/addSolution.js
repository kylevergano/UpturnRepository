import React, { Component } from 'react';
import FileUploader from "react-firebase-file-uploader";
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
  import * as Icon from "react-feather"

class AddSolution extends Component {
   
    constructor() {
        super();
        this.ref = firebase.firestore().collection('SOLUTIONS');
        this.state = {
         
              title: "",    
              url: "",
              location:'',
              dateCreated:new Date,
              imageURL:'',
          };
 
        
      }
      
     
      

      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
        
      }
      
    
      onSubmit = async (e) => {
        e.preventDefault();
        
        const { title, url,location,imageURL} = this.state;
        await this.ref.add({
            title: title,
            imageURL:  imageURL,
            dateCreated:new Date,
           location:location
           // timeCompare: new Date(date).getTime()
        }).then((docRef) => {
          
          this.setState({
            title: "",
            dateCreated: '',
            time:'',
            url: "",
            location:'',
           
          
          });
          
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });

       
   }

   handleUploadSuccessCoverImage = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    var input = document.getElementById('coverImage');
    console.log(input.files[0].size)
     if(input.files[0].size >  5242880 )//
     { 
         return this.state.MySwal.fire({
           icon: 'error',
           title: 'Upload failed',
           text: 'Image size too big! Try again',
         })
     }
     else
     {
      firebase
      .storage()
      .ref("solution")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ imageURL: url }));
     }
    
  };

  render() {
    
    const { title,location} = this.state;
    return (
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-body">

              <form onSubmit={this.onSubmit}>
             
              <div className="form-group">
                  <label for="title"><h5><b>Title:</b></h5></label>
                  <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" required/>
                </div>   
                <div className="form-group">
                  <label for="endTime"><h5><b>location</b></h5></label>
                  <input type="text" className="form-control" name="location" value={location} onChange={this.onChange} required/>
                </div>
               
                <div className="form-group">
              <label><h5><b>Solution:</b></h5></label><br />     
                <label style={{borderStyle: 'solid' ,
                    borderColor:'#57CAB4',
                    color: '#57CAB4', padding: '15px 30px', borderRadius: 4, cursor: 'pointer',width:'20%',textAlign:'center'}}> 
                    <Icon.Upload size={20} />
                    <FileUploader
                        hidden
                        accept="image/*"
                        name="coverImage"
                        id="coverImage"
                        randomizeFilename
                        storageRef={firebase.storage().ref("solution")}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccessCoverImage}
                        onProgress={this.handleProgress}
                    />
                    </label>
                    <br />
                    {this.state.imageURL && <img src={this.state.imageURL} width="200px" height="200px" />}
                    <br />
                    <label>Maximum file size: 5 MB</label>
                </div>

                <div className="d-flex justify-content-center">
                <p onClick={(e) => {
                    e.preventDefault();
                    console.log("clicked!")
                    window.location.reload(false)
                  }} className="btnPublishDiscard">Discard</p>
                  <button type="submit" className="btnPublish">Add Solution</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
  }
}

export default AddSolution;
