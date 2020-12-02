import React from 'react'; 
import { NavLink } from 'react-router-dom';
 
// import Nav from 'react-bootstrap/Nav'
import {Navbar,Button,Dropdown} from 'react-bootstrap';
import icon from './images/machat.png';

// import './style.css';



//  const onImageChange = event => {
  // if (event.target.files && event.target.files[0]) {
    // let reader = new FileReader();
    // let file = event.target.files[0];
    // reader.onloadend = () => {
      // setData({
        // ...mydata,
        // imagePreview: reader.result,
        // file: file
      // });
    // };
    // reader.readAsDataURL(file);
  // }
// }; 



const Navigation = () => {

  const  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      React.setState({
        image: URL.createObjectURL(event.target.files[0])
      });
    }
   }

    return (
       <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
            <Navbar  collapseOnSelect variant="dark" expand="lg"  className="fixed-top" style={{borderBottom:'1px solid darkgray',background:'white',height:'60px',marginTop:'-10px'}}>
            <Navbar.Brand href="#home" className="text-center" >
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
                 
                    <Dropdown style={{float:'right',background:'none',border:'none',marginRight:"50px"}} drop="down">
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

                     </div>
        </Navbar>

       </div>
    );
}
 
export default Navigation;