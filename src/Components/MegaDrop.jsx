import React from 'react';
import { Container,Row,NavDropdown,Col,Nav } from 'react-bootstrap';




class MegaDrop extends React.Component{
    render(){
        return(
          <div className="dropdown">
          <ul className="dropdown1">
            <li><Container fluid>
         <Row>            
          <Col sm={12} md={12} lg={12}  >
              {/* <NavDropdown title="ALL CATEGORIES" className="dropdown1" id="basic-nav-dropdown">                   */}
                  <Container>
                    <Row>
                      <Col sm={12} md={3} lg={3}>
                        
                        <ul >
                         <li className="pop"><h5>Vehicles</h5></li>                    
                         <li><p>Tractors & Trailers</p></li>
                          <li><p>Other Vehicles</p></li>
                          <li><p>Rickshaw & Chingchi</p></li>
                          <li><p>Buses, Vans & Trucks</p></li>
                          <li><p>Spare Parts</p></li>
                          <li><p>Cars Accessories</p></li>
                          <li><p>Cars on Installments</p></li>
                          <li><p>Cars</p></li>
                         </ul>

                         <ul >
                         <li className="pop"><h5>Mobiles</h5></li>                    
                         <li><p>Mobile Phones</p></li>
                          <li><p>Accessories</p></li>
                          <li><p>Tablets</p></li>
                         </ul>


                         <ul >
                         <li className="pop"><h5>Electronics</h5></li>                    
                         <li><p>Washing Machines & Dryers</p></li>
                          <li><p>AC & Coolers</p></li>
                          <li><p>Kitchen Appliances</p></li>
                          <li><p>Generators, UPS & Power Solutions</p></li>
                          <li><p>Other Home Appliances</p></li>
                          <li><p>Games & Entertainment</p></li>
                          <li><p>Cameras & Accessories</p></li>
                          <li><p>TV - Video - Audio</p></li>
                          <li><p>Kitchen</p></li>
                          <li><p>Computers & Accessories</p></li>
                         </ul>

                         <ul >
                         <li className="pop"><h5>Property for Sale</h5></li>                    
                         <li><p>Portions & Floors</p></li>
                          <li><p>Shops - Offices - Commercial Space</p></li>
                          <li><p>Apartments & Flats</p></li>
                          <li><p>Houses</p></li>
                          <li><p>Apartments</p></li>
                          <li><p>Land & Plots</p></li>
                         </ul>

                      </Col>

                      <Col sm={12} md={3} lg={3}>
                        <ul >
                          <li className="pop"><h5>Animals</h5></li>                    
                          <li><p>Other Animals</p></li>
                          <li><p>Pet Food & Accessories</p></li>
                          <li><p>Horses</p></li>
                          <li><p>Livestock</p></li>
                          <li><p>Dogs</p></li>
                          <li><p>Cats</p></li>
                          <li><p>Hens & Aseel</p></li>
                          <li><p>Birds</p></li>
                          <li><p>Fish & Aquariums</p></li>
                        </ul>

                       <ul >
                          <li className="pop"><p>Furniture & Home Decor</p></li>                    
                          <li><p>Other Household Items</p></li>
                          <li><p>Office Furniture</p></li>
                          <li><p>Curtains & Blinds</p></li>
                          <li><p>Rugs & Carpets</p></li>
                          <li><p>Painting & Mirrors</p></li>
                          <li><p>Garden & Outdoor</p></li>
                          <li><p>Tables & Dining</p></li>
                          <li><p>Home Decoration</p></li>
                          <li><p>Beds & Wardrobes</p></li>
                          <li><p>Sofa & Chairs</p></li>
                        </ul>


                        <ul >
                          <li className="pop"><h5>Business & Agriculture</h5></li>                    
                          <li><p>Medical & Pharma</p></li>
                          <li><p>Other Business & Industry</p></li>
                          <li><p>Agriculture</p></li>
                        
                          <li><p>Business for Sale</p></li>
                        </ul>

                        <ul >
                          <li className="pop"><h5>Bikes</h5></li>                    
                          <li><p>Scooters</p></li>
                          <li><p>ATV & Quads</p></li>
                          <li><p>Spare Parts</p></li>
                          <li><p>Motorcycles</p></li>
                         </ul>
                      </Col>

                      <Col sm={12} md={3} lg={3}>
                        <ul >
                          <li className="pop"><h5>Fashion & Beauty</h5></li>                    
                           <li><p>Other Fashion</p></li>
                          <li><p>Couture</p></li>
                          <li><p>Lawn & Pret</p></li>
                       
                          <li><p>Jewellery</p></li>
                          <li><p>Clothes</p></li>
                          <li><p>Accessories</p></li>
                        </ul>

                        <ul >
                          <li className="pop"><p>Property for Rent</p></li>                    
                          <li><p>Land & Plots</p></li>
                          <li><p>Vacation Rentals - Guest Houses</p></li>
                          <li><p>Roommates & Paying Guests</p></li>
                        
                          <li><p>Apartments & Flats</p></li>
                          <li><p>Houses</p></li>
                        </ul>


                        <ul >
                          <li className="pop"><p>Jobs</p></li>                    
                          <li><p>Help</p></li>
                          <li><p>Sitemap</p></li>
                          <li><p>Part - Time</p></li>
                          <li><p>Domestic Staff</p></li>
                          <li><p>Medical</p></li>
                          <li><p>Manufacturing</p></li>
                      
                          <li><p>Sales</p></li>
                          <li><p>Customer Service</p></li>
                          <li><p>Education</p></li>
                          <li><p>Advertising & PR</p></li>
                          <li><p>Marketing</p></li>
                          <li><p>Online</p></li>
                        </ul>
                      </Col>

                      <Col sm={12} md={3} lg={3}>
                      <ul >
                         <li className="pop"><h5>Services</h5></li>                    
                         <li><p>Farm & Fresh Food</p></li>
                          <li><p>Catering & Restaurant</p></li>
                          <li><p>Home & Office Repair</p></li>
                          <li><p>Movers & Packers</p></li>
                          <li><p>Maids & Domestic Help</p></li>
                       
                          <li><p>Web Development</p></li>
                          <li><p>Drivers & Taxi</p></li>
                          <li><p>Car Rental</p></li>
                          <li><p>Travel & Visa</p></li>
                          <li><p>Education & Classes</p></li>
                         </ul>

                         <ul >
                          <li className="pop"><h5>Books & Sports</h5></li>                    
                          <li><p>Other Hobbies</p></li>
                          <li><p>Gym & Fitness</p></li>
                          <li><p>Sports Equipment</p></li>
                          <li><p>Musical Instruments</p></li>
                          <li><p>Books & Magazines</p></li>
                         </ul>


                         <ul >
                          <li className="pop"><h5>OLX</h5></li>                    
                          <li><p>Help</p></li>
                          <li><p>Sitemap</p></li>
                          <li><p>Legal & Privacy info</p></li>
                         </ul>

                         <ul >
                          <li className="pop"><h5>Kids</h5></li>                    
                          <li><p>Kids Accessories</p></li>
                          <li><p>Sitemap</p></li>
                          <li><p>Kids Bikes</p></li>
                          <li><p>Swings & Slides</p></li>
                          <li><p>Prams & Walkers</p></li>
                          <li><p>Toys</p></li>
                          <li><p>Kids Furniture</p></li>
                         </ul>
                      </Col>

                      
                    </Row>
                  </Container>
                {/* <NavDropdown.Divider /> */}
              {/* </NavDropdown> */}



            </Col>    
         </Row>
        </Container></li>
          </ul>
        </div>
       )
    }
}
export default MegaDrop;