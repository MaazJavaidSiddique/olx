import React from 'react'
import { Col, Container ,Row} from 'react-bootstrap';
import PhoneImage from '../images/phone-app.webp'
import AppStore from '../images/AppStore.webp'
import GooglePlay from '../images/GooglePlay.webp'
import {FaFacebook,FaGoogle,FaInstagram,FaTwitter} from 'react-icons/fa'


class Footer extends React.Component{
    render(){
        return(
         
                <Container fluid>
                     <Row className="playstore">               
                        <Col md={4} >
                            <div className="phone">
                            <img src={PhoneImage} className="rounded" alt="..." />   
                            </div>                  
                        </Col> 

                        <Col md={4} className="middPhone" >
                            <h3 className="olx">TRY THE OLX APP</h3>
                            <p className="para">Buy, sell and find just about anything using the app on your mobile.</p>
                        </Col>    

                        <Col md={4} className="lastPhone" >
                            <h6 className="para1">GET YOUR APP TODAY</h6>
                            <div>
                            <a href="#"><img className="playbtnimg" src={AppStore} /></a>
                            <a href="#"><img className="playbtnimg" src={GooglePlay} /></a>
                            </div>                
                        </Col>  
                    </Row>






                    <Row className="footercol"> 
            
            <Col sm={2} md={2} lg={2} >
                
                <ul >
                    <li className="pop"><h5>POPULAR CATEGORIES</h5></li>
                    <li><p>Cars</p></li>
                    <li><p>Flats for rent</p></li>
                    <li><p>Jobs</p></li>
                    <li><p>Mobile Phones</p></li>
                </ul>
            </Col> 

            <Col sm={2} md={2} lg={2} >
                <ul>
                    <li className="pop"><h5>TRENDING SEARCHES</h5></li>
                    <li><p>Bikes</p></li>
                    <li><p>Watches</p></li>
                    <li><p>Books</p></li>
                    <li><p>Dogs</p></li>
                </ul>
            </Col>            

            <Col sm={2} md={2} lg={2} >
                
                <ul>
                    <li className="pop"><h5>ABOUT US</h5></li>
                    <li><p>About OLX Group</p></li>
                    <li><p>OLX Blog</p></li>
                    <li><p>Contact Us</p></li>
                    <li><p>OLX for Businesses</p></li>
                </ul>
            </Col> 

            <Col sm={2} md={2} lg={2} >
                
                <ul >
                    <li className="pop"><h5>OLX</h5></li>                    
                    <li><p>Help</p></li>
                    <li><p>Sitemap</p></li>
                    <li><p>Legal & Privacy info</p></li>
                </ul>
            </Col> 

            <Col sm={2} md={2} lg={2} >
                
                <ul >
                    <li className="pop"><h5>OUR APP</h5></li>
                    <div class="column">
                        
                            <a href="#"><FaFacebook/></a>
                            <a href="#"><FaGoogle/></a>
                            <a href="#"><FaInstagram/></a>
                            <a href="#"><FaTwitter/></a>
                    
                    </div>
                    {/* <a href="#"><img className="playbtnimg" src={AppStore} /></a>
                    <a href="#"><img className="playbtnimg" src={GooglePlay} /></a> */}
                    
                </ul>
                           
                    <div>
                    <a href="#"><img className="playbtnimg" src={AppStore} /></a>
                    <a href="#"><img className="playbtnimg" src={GooglePlay} /></a>
                    </div>
            </Col> 


            {/* <Col sm={2} md={2} lg={2} >
                
                <ul >
                    <li className="pop"><p>OUR APP</p></li>                    
                </ul>           
                <div>
                <a href="#"><img className="playbtnimg" src={AppStore} /></a>
                <a href="#"><img className="playbtnimg" src={GooglePlay} /></a>
                </div>  
            </Col>  */}

            </Row>

            <Row  className="LastFooter">
               
                <Col sm={4} md={4} lg={4} >
                    <p>Other Countries India - South Africa - Indonesia</p>
                </Col>
                <Col sm={4} md={4} lg={4} ></Col>
                <Col sm={4} md={4} lg={4} >Free Classifieds in Pakistan. © 2006-2020 OLX</Col>
               
            </Row>
                </Container>



            
        )
    }
}
export default Footer;