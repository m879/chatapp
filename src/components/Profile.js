import React from 'react';
import {Button,Container,InputGroup,Col,Row,FormControl,Form,Modal} from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import img1 from './images/blog1.jpg';

import './style.css';

const Profile = (props) => {
   
   const [lgShow, setLgShow] = React.useState(false);
   const handleClose = () => setLgShow(false);
   const handleShow = () => setLgShow(true);
 

    return (
       <div style={{background:'rgba(var(--b3f,250,250,250),1)'}}>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
         <Navigation />

        <Container className="my-5">
           <Row>
              <Col  xs={12} lg={6} style={{borderRight:'1px solid gray'}}>
              <h2 className="text-center py-3">Profile</h2>
              <h1 className="text-center py-3">
                 <img src={img1} style={{width:'150px',height:'150px',borderRadius:'100%'}}></img>
              </h1>
              <div className="text-center py-2">
              <h4 className="py-2">{props.text}</h4>
                 <h5 className="py-1">Programming World</h5>
                 <a><Button onClick={handleShow} className="py-3" id="profilebtn" variant="outline-danger">Edit Profile</Button></a>

              </div>
              <div className="py-3 d-flex justify-content-center">
                 <a  href="#mypost" ><Button     variant="outline-success" id="profilebtn"><h5>0  </h5><h5>Post</h5></Button></a>
                 <a  href="#followers" ><Button  variant="outline-success" id="profilebtn"><h5>12 </h5><h5>Followers</h5></Button></a>
                 <a  href="#following" ><Button  variant="outline-success" id="profilebtn"><h5>125</h5><h5>Following</h5></Button></a>
              </div>
              </Col>


              <Modal size="lg" show={lgShow}  onHide={handleClose}>
                 <Modal.Header closeButton>
                 </Modal.Header>
                 <Modal.Body>
                     <Form>
                         <Form.Row>
                           <Form.Group as={Col} controlId="formGridEmail">
                             <Form.Label>Username</Form.Label>
                             <Form.Control type="text" placeholder="Enter username" required/>
                           </Form.Group>
                       
                           <Form.Group as={Col} controlId="formGridPassword">
                             <Form.Label>Name</Form.Label>
                             <Form.Control type="text" placeholder="Enter name" required/>
                           </Form.Group>
                         </Form.Row>
                       
                         <Form.Group controlId="formGridAddress2">
                           <Form.Label>Website</Form.Label>
                           <Form.Control placeholder="Website" />
                         </Form.Group>
           
                         <Form.Group controlId="formGridAddress1">
                           <Form.Label>Bio</Form.Label>
                           <Form.Control placeholder="Bio" />
                         </Form.Group>
           
                         <Form.Group controlId="formGridAddress1">
                           <Form.Label>Email</Form.Label>
                           <Form.Control type="email" placeholder="Email" required/>
                         </Form.Group>
                       
                         <Form.Row>
                           <Form.Group as={Col} controlId="formGridCity">
                             <Form.Label>Mobile number</Form.Label>
                             <Form.Control   type="number" placeholder="Mobile number" required/>
                           </Form.Group>
                       
                           <Form.Group as={Col} controlId="formGridState">
                             <Form.Label>State</Form.Label>
                             <Form.Control as="select" defaultValue="Choose...">
                               <option>Male</option>
                               <option>Female</option>
                               <option>Other</option>
                             </Form.Control>
                           </Form.Group>
                         </Form.Row>
           
                          <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="
                            Include your account when recommending similar accounts people might want to follow [?]" />
                          </Form.Group> 
                          <Button variant="primary" type="submit"  >
                            Submit
                          </Button>
                     </Form>
                 </Modal.Body>
               </Modal>




            <Col  xs={12} lg={6} className="py-4" id="profiledetails">
               <div id="mypost" style={{height:'600px'}} className="py-4">
                  <h4 className="text-center">Posts</h4>
               </div>
               <div id="followers" style={{height:'600px'}} className="py-4">
                  <h4 className="text-center">Followers</h4>
                  <div className="py-4">
                     <div className="d-flex">
                        <h4><img src={img1} id="personimg"  ></img>Albert</h4>
                        <div className="ml-auto" style={{height:'30px'}}>
                        <Button className="mx-2" ><span>125</span><span>Following</span></Button>
                        <Button className="mx-2"><span>125</span><span>Followers</span></Button>
                        </div>    
                     </div>
                     <div className="d-flex">
                        <h4><img src={img1} id="personimg"  ></img>John</h4>
                        <div className="ml-auto" style={{height:'30px'}}>
                        <Button className="mx-2" ><span>125</span><span>Following</span></Button>
                        <Button className="mx-2"><span>125</span><span>Followers</span></Button>
                        </div>    
                     </div>                     
                 </div>
               </div>
               <div id="following" style={{height:'600px'}} className="py-4">
                  <h4 className="text-center">Following</h4>
                  <div className="py-4">
                     <div className="d-flex">
                           <h4><img src={img1} id="personimg"  ></img>Blair</h4>
                           <div className="ml-auto" style={{height:'30px'}}>
                           <Button className="mx-2" ><span>125</span><span>Following</span></Button>
                           <Button className="mx-2"><span>125</span><span>Followers</span></Button>
                           </div>    
                        </div>
                        <div className="d-flex">
                           <h4><img src={img1} id="personimg"  ></img>Tony</h4>
                           <div className="ml-auto" style={{height:'30px'}}>
                           <Button className="mx-2" ><span>125</span><span>Following</span></Button>
                           <Button className="mx-2"><span>125</span><span>Followers</span></Button>
                           </div>    
                        </div>
                  </div>
               </div>
              </Col>


           </Row>
        </Container>


       </div>
    );
}
 
export default Profile;