import React from 'react';
import AddsImages from '../images/addImage.jpg'
import { Col, Container ,Row} from 'react-bootstrap';

class LargeImage extends React.Component{
    render(){
      
        return(
          
          <div>
         
              <img className='AddImage' src={AddsImages} />


          </div>
         
        )
    }
}
export default LargeImage;