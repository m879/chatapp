// import React from 'react';
import React ,{Component} from 'react';
import Cards from './Cards';

import './style.css';
import { NavLink } from 'react-router-dom';

import {Modal,Container,Row,Col,CardGroup,Navbar,Button,Dropdown,InputGroup,FormControl} from 'react-bootstrap'
// import Navigation from './Navigation';

import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/blog1.jpg';
import icon from './images/machat.png';


const About = ()=>{

  const [shows, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


const [picture, setPicture] = React.useState(null);
const onChangePicture = e => {
  setPicture(URL.createObjectURL(e.target.files[0]) );
  console.log("Meraj");
};

const [status, setStatus] = React.useState(null);
const onChangeStatus = e => {
  setStatus(URL.createObjectURL(e.target.files[0]) );
};

  // const [picture, setPicture] = React.useState(null);
  // const [imgData, setImgData] = React.useState(null);
  // const onChangePicture = e => {
    // if (e.target.files[0]) {
      // console.log("picture: ", e.target.files);
      // setPicture(e.target.files[0]);
      // const reader = new FileReader();
      // reader.addEventListener("load", () => {
        // setImgData(reader.result);
      // });
      // reader.readAsDataURL(e.target.files[0]);
    // }
  // };

       return(
         <div id="body">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
         {/* <Navigation /> */}
        

         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
            <Navbar  collapseOnSelect variant="dark" expand="lg"  className="fixed-top" style={{borderBottom:'1px solid darkgray',background:'white',height:'60px',marginTop:'-10px'}}>
            <Navbar.Brand href="#home" className="text-center">
            <img src={icon} style={{height:"40px"}}></img>
            </Navbar.Brand>
            <div className="ml-auto">
                      <NavLink to="/home" exact >
                         <Button style={{background:'none',border:'none'}}>
                         <i style={{color:'black',fontSize:'25px'}} class="	fa fa-home"  ></i>
                         </Button>
                     </NavLink>
                     <NavLink to="/contact" exact >
                         <Button style={{background:'none',border:'none'}}>
                         <i style={{color:'black',fontSize:'25px'}} class="fa fa-paper-plane-o"  ></i>
                         </Button>
                     </NavLink>  
                    <Dropdown style={{float:'right',background:'none',border:'none'}} drop="down">
                        <Dropdown.Toggle style={{float:'right',background:'none',border:'none'}} >
                            <i style={{color:'black',fontSize:'25px'}} class="fa fa-life-bouy"  ></i>
                        </Dropdown.Toggle>
                         <Dropdown.Menu>
                             <Dropdown.Item style={{textDecoration:'none',background:'none'}} ><NavLink to="/profile" exact >
                               <i style={{color:'black',fontSize:'20px',marginLeft:'-10px'}} className="mr-2" class="	fa fa-user-circle"></i>
                              <span style={{marginLeft:'10px',fontWeight:'bolder'}}>Profile</span>
                              </NavLink></Dropdown.Item>

                             <Dropdown.Item style={{textDecoration:'none',background:'none'}} ><NavLink to="/save" exact >
                             <i style={{color:'black',fontSize:'20px',marginLeft:'-10px'}} className="mr-2" class="fa fa-bookmark"></i>  
                             <span style={{marginLeft:'10px',fontWeight:'bolder'}}>Saved</span>
                             </NavLink></Dropdown.Item>

                           <Dropdown.Divider />
                             <Dropdown.Item style={{textDecoration:'none',background:'none'}}><NavLink to="/"  exact>
                               Log Out</NavLink></Dropdown.Item>
                         </Dropdown.Menu>
                   </Dropdown>
                   <Button onClick={handleShow} style={{background:'none',border:'none'}}>
                         <i style={{color:'black',fontSize:'25px'}} class="	fa fa-plus-square"  ></i>
                         </Button>

                     </div>
        </Navbar>
    
         <Container >
           <Row>
              <Col xs={12} lg={2}  ></Col>
              <Col xs={12} lg={8}  > 
              <Container id='status' className="d-flex flex-sm-row my-5 ">
              {/* <img src={status} ></img> */}
              <img src={img2} ></img>
              <img src={img3} ></img>
              <img src={img1} ></img>
              <img src={img2} ></img>
              <img src={img3} ></img>
              <img src={img1} ></img>
              <img src={img2} ></img>
              <img src={img3} ></img>
              <img src={img1} ></img>
              <img src={img2} ></img>
              <img src={img3} ></img>
              <img src={img1} ></img>
              </Container>
               <div id="postbox" style={{background: "rgba(var(--b3f,250,250,250),1)"}} >
                  <CardGroup className="flex-column">
                  {/* <Cards imgsrc={picture && picture} /> */}
                      <Cards username="Meraj"   imgsrc={img1} caption="Nice picture"/>
                      <Cards username="Akhlakh" imgsrc={img2} caption="Wonderfull"/>
                      <Cards username="Rehan"   imgsrc={img3} caption="Good work"/>
                      <Cards username="Sajid"   imgsrc={img4} caption="Nice"/>
                      <Cards username="Anam"    imgsrc={img1} caption="Amazing"/>
                      <Cards username="Aayan"   imgsrc={img2} caption="Good"/>
                  </CardGroup>                  
                </div>
            </Col>
            <Col lg={2} ></Col>
           </Row>
          </Container>



      <Modal show={shows} onHide={handleClose}>
        <Modal.Body>
            <h2 style={{textAlign:'center',textDecoration:'underline'}}>Upload Image</h2>
            <div style={{marginTop:'50px'}}>
              <h5 style={{textAlign:'center'}}>
                <label for="file-input" >
                    <i style={{color:'black',fontSize:'45px',width:"70%"}} class="	fa fa-photo"  ></i>
                    <p className="text-center">Post Image</p>
                </label>
              </h5>
              <h5 style={{textAlign:'center'}}>
                <label for="file-input-status">
                    <i style={{color:'black',fontSize:'45px',width:"70%"}} class="	fa fa-photo"  ></i>
                    <p className="text-center">Set status</p>
                </label>
              </h5>
            </div>
            <input id="file-input" type="file" onChange={onChangePicture}  style={{visibility:'hidden'}} />
            <input id="file-input-status" type="file" onChange={onChangeStatus}  style={{visibility:'hidden'}} />
            <Button  variant="outline-primary" size="lg" onClick={handleClose} block>Cancel</Button>
        </Modal.Body>
     </Modal>




      </div>
       );
  //  };

};
export default About;