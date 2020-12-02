import React from 'react';
import { NavLink } from 'react-router-dom';

import {Card,Button,Dropdown,Container,Modal,InputGroup,FormControl} from 'react-bootstrap';
import './style.css';

import img1 from './images/blog1.jpg';


import { Rating } from 'semantic-ui-react';


const Cards = ({username,imgsrc,caption}) => {

const [show, toggleShow] = React.useState(true);

const [shows, setShow] = React.useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);



const [showshare, setShows] = React.useState(false);
const handleCloseshare = () => setShows(false);
const handleShowshare = () => setShows(true);

var btnstyle={
  float:'left',background:'none',border:'none'
}

const [input,setInput]=React.useState(' ');
const showcomment=()=>{
  setInput(input);
  const num=input;
  console.log(num);
}

const [like,increase]=React.useState(0);
const showlike=()=>{
  if(like==0){
    increase(like+1);
  }else{
    increase(like-1);
  }
}
    return (
      <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    {show &&
        <Card id="card">
            <Card.Footer>
               <small className="text-muted">
               <img  src={img1} style={{width:'50px',height:'50px',borderRadius:'100%',border:'2px dotted red'}}></img>
    <span className="text-muted px-3" style={{fontSize:'20px'}}><strong>{username}</strong></span>
               <Dropdown style={{float:'right',background:'none',border:'none'}} Drop="down">
                        <Dropdown.Toggle style={{float:'right',background:'none',border:'none'}} >
                        <i style={{color:'black',fontSize:'30px'}} class="fa fa-ellipsis-v"></i>
                        </Dropdown.Toggle>
                         <Dropdown.Menu>
                           <Dropdown.Item onClick={handleShow}><i style={{color:'black'}} class="fa fa-exclamation-circle"></i> Report</Dropdown.Item>
                           <Dropdown.Item onClick={() => toggleShow(!show)}><i style={{color:'black'}} class="fa fa-trash"></i> Delete</Dropdown.Item>
                           <Dropdown.Item onClick={handleShowshare}><i style={{color:'black'}} class="fa fa-share-square"></i> Share</Dropdown.Item>
                         </Dropdown.Menu>
                   </Dropdown>
               </small>
            </Card.Footer>
             <Card.Img variant="top"  src={imgsrc} style={{height:'400px',width:'100%'}}/>

             <Card.Footer>
               <small>
               <Rating icon='heart' onClick={showlike} defaultRating={0} maxRating={1} size='massive' style={{float:'left'}} className="py-1"/>
              
               <NavLink to="/contact"   exact  style={{fontWeight:'bolder',textDecoration:'none',color:'white'}}>
               <Button style={btnstyle}> 
                  <i style={{color:'black',fontSize:'25px'}} className="fa fa-paper-plane-o"  ></i>
               </Button>
              </NavLink>

               <Button style={{float:'right',background:'none',border:'none'}}>
                    <i style={{color:'black',fontSize:'30px'}} className="fa fa-bookmark-o"  ></i>
               </Button>
               </small>
             </Card.Footer>

             <Container>
               <h4 className=" mt-2" style={{fontWeight:'bolder'}} id="like"><span>{like}</span> Likes</h4>
               {/* <p> <strong></strong> </p> */}
               <div style={{display:'flex'}}>
                 <h4>{username} :</h4>
                 <p style={{marginLeft:'5px'}}>{caption}</p>
               </div>
               <div style={{display:'flex'}}>
                 {/* <h4>{username} :</h4> */}
                 {/* <p style={{marginLeft:'5px'}}>{caption}</p> */}
               </div>
               <InputGroup className="mb-3 mt-1">
                       <FormControl 
                       value={input}                         
                       onChange={event=>setInput(event.target.value)}
                       placeholder="Comments" />
                       <InputGroup.Append>
                         <Button variant="outline-secondary" onClick={showcomment}>Post</Button>
                       </InputGroup.Append>
                     </InputGroup>
             </Container>
        </Card>
    }


     <Modal show={shows} onHide={handleClose}>
        <Modal.Body>
            <h2 style={{textAlign:'center'}}>Report</h2>
          <Button  variant="outline-danger" size="lg" onClick={handleClose} block>Report Inappropriate</Button>
          <Button  variant="outline-default" size="lg" onClick={handleClose} block>Cancel</Button>
        </Modal.Body>
     </Modal>

     <Modal show={showshare} onHide={handleCloseshare}>
        <Modal.Body>
            <h2 style={{textAlign:'center'}}>Share</h2>
            <NavLink to="/contact"   exact  style={{fontWeight:'bolder',textDecoration:'none',color:'white'}}>
              <Button  variant="outline-default" size="lg"  block><i style={{fontSize:'25px'}} class="fa fa-paper-plane"></i>  
              <h4>Direct</h4></Button>
           </NavLink>
          <Button  variant="outline-default" size="lg"  block><i style={{fontSize:'25px'}} class="fa fa-facebook-official"  ></i>  <h4>Facebook</h4></Button>
          <Button  variant="outline-default" size="lg"  block><i style={{fontSize:'25px'}} class="	fa fa-twitter-square"   ></i>  <h4>Twitter</h4></Button>
          <Button  variant="outline-default" size="lg"  block><i style={{fontSize:'25px'}} class="fa fa-envelope"           ></i>  <h4>Email</h4></Button>
          <Button  variant="outline-default" size="lg" onClick={handleCloseshare} block>Cancel</Button>
        </Modal.Body>
     </Modal>

        </div>
    );
}
 
export default Cards;