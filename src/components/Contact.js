import React  ,{Component}  from 'react';
 
import {Button,Form,Container,InputGroup,Col,Row,FormControl} from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';

import img1 from './images/blog1.jpg';
import './style.css';
import Navigation from './Navigation';
// import { RevealContent } from 'semantic-ui-react';
import Message from './Message';


const Contact = () => {
 
   const [input,setInput]=React.useState(' ');
   const [messages,setMessages]=React.useState([
      {username:'Ron',text:"Welcome"},
      {username:'Albert',text:"Hello"},
      {username:'John',text:"Hi Guy"}]);
   const [username,setUsername]=React.useState('');

   // console.log(messages);
   // console.log(input);


    React.useEffect(()=>{
       setUsername(prompt("Please enter username"))
    },[])

   const sendMessage=(event)=>{
      event.preventDefault();
       setMessages([...messages,{username:username,text:input}]);
       setInput('');
   }
   
   // const usernameRef = React.useRef();
   // const handleSubmit = () => {
      // alert(usernameRef.current.value);
   //  };



    return (
       <div style={{background:'rgba(var(--b3f,250,250,250),1)'}}>
                   <Navigation />
            

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          
        <Container className="my-5"  style={{border:'2px solid darkgray',marginTop:'10px',background:'white'}} >
           <Row>
              <Col xs={12} lg={4}  style={{borderRight:'2px solid darkgray'}}>
              <div style={{background:'white',height:'60px'}}>
                 <h4 className="text-center" style={{marginTop:'10px',paddingBottom:'-20px'}}>Direct
                 <span style={{float:'right',fontSize:'30px',marginRight:'10%'}}><i class="fa fa-pencil-square-o"></i></span>
                 </h4>
               </div>
               <div id="personmsg" >
                  {/* <input                          */}
                  {/* // value={username} */}
                  {/* // onChange={event=>setUsername(event.target.value)} */}
                  {/* //  ></input> */}
                  <div className="d-flex"><h4><img src={img1} id="personimg" ></img>{username}</h4></div>
                 <div className="d-flex"><h4><img src={img1} id="personimg" ></img>Marry</h4></div>
                 <div className="d-flex"><h4><img src={img1} id="personimg" ></img>Ron</h4></div>
                 <div className="d-flex"><h4><img src={img1} id="personimg" ></img>Albert</h4></div>
                 <div className="d-flex"><h4><img src={img1} id="personimg" ></img>Tony</h4></div>
                 <div className="d-flex"><h4><img src={img1} id="personimg" ></img>Gilbert</h4></div>
               </div>  
              </Col>
              <Col  xs={12} lg={8}  >
                 <div>
                  <h4 style={{background:'white'}}><img src={img1} id="personimg"  ></img>{username}</h4>
                 </div>

                 <div id="msgbox" >
                     <div id="send">
                        {
                           messages.map(message=>(
                           <Message username={message.username} text={message.text}/>
                           // <p>{message}</p>
                           ))
                        }
                     </div> 
                     {/* <div id="receive"><p>Ahmed</p></div>                     */}
                 </div>

                 <div id="msgtype">
                    <Form>
                    <InputGroup className="mb-3">
                       <FormControl
                         placeholder="Type messages"
                        //  ref={usernameRef}
                        value={input}
                        onChange={event=>setInput(event.target.value)}
                       />
                       <InputGroup.Append>
                         <Button disabled={!input} type="submit" variant="primary" onClick={sendMessage} className="bg-primary" >Send</Button>
                       </InputGroup.Append>
                     </InputGroup>
                     </Form>
                 </div>
              </Col>
           </Row>
        </Container>

       </div>
    );
}
 
export default Contact;