import React from 'react'; 
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'

import InnerPage from './InnerPage'




const Product = (props) => {
  return (
    <div> 
              <Header/>
              <Navigation/>
              <InnerPage  name1={props.location.aboutProps.price} 
              img1={props.location.aboutProps.img1} img2={props.location.aboutProps.img2} 
              img3={props.location.aboutProps.img3} img4={props.location.aboutProps.img4}
              selllerid={props.location.aboutProps.selllerid}/>   
              <Footer/>     
            </div>
  );
}
export default Product;