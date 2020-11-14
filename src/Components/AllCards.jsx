import React from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Card from './Card'

import card1 from '../images/Bed1.jpg'
import card2 from '../images/cultus1.jpg'
import card3 from '../images/watch1.jpg'
import card4 from '../images/iphone1.jpg'
import card5 from '../images/corolla1.jpg'
import card6 from '../images/sofa1.jpg'
import card7 from '../images/led1.jpg'
import card8 from '../images/farmhouse1.jpg'
import card9 from '../images/iphone1.jpg'
import card10 from '../images/led1.jpg'
import card11 from '../images/watch1.jpg'
import card12 from '../images/GulAhmed1.jpg'


import Bed1 from '../images/Bed1.jpg'
import Bed2 from '../images/Bed2.jpg'
import Bed3 from '../images/Bed3.jpg'
import cultus1 from '../images/cultus1.jpg'
import cultus2 from '../images/cultus2.jpg'
import cultus3 from '../images/cultus3.jpg'
import watch1 from '../images/watch1.jpg'
import watch2 from '../images/watch2.jpg'
import watch3 from '../images/watch3.jpg'
import iphone1 from '../images/iphone1.jpg'
import iphone2 from '../images/iphone2.jpg'
import iphone3 from '../images/iphone3.jpg'
import corolla1 from '../images/corolla1.jpg'
import corolla2 from '../images/corolla2.jpg'
import corolla3 from '../images/corolla3.jpg'
import sofa1 from '../images/sofa1.jpg'
import sofa2 from '../images/sofa2.jpg'
import sofa3 from '../images/sofa3.jpg'
import led1 from '../images/led1.jpg'
import led2 from '../images/led2.jpg'
import led3 from '../images/led3.jpg'
import farmhouse1 from '../images/farmhouse1.jpg'
import farmhouse2 from '../images/farmhouse2.jpg'
import farmhouse3 from '../images/farmhouse3.jpg'
import iphone4 from '../images/iphone1.jpg'
import iphone5 from '../images/iphone2.jpg'
import iphone6 from '../images/iphone3.jpg'
import led4 from '../images/led1.jpg'
import led5 from '../images/led2.jpg'
import led6 from '../images/led3.jpg'
import watch4 from '../images/watch1.jpg'
import watch5 from '../images/watch2.jpg'
import watch6 from '../images/watch3.jpg'
import GulAhmed1 from '../images/GulAhmed1.jpg'
import GulAhmed2 from '../images/GulAhmed2.jpg'
import GulAhmed3 from '../images/GulAhmed3.jpg'
import profile1 from '../images/profile.jpeg'
import profile2 from '../images/profile.jpeg'
import profile3 from '../images/profile.jpeg'
import profile4 from '../images/profile.jpeg'
import profile5 from '../images/profile.jpeg'
import profile6 from '../images/profile.jpeg'
import profile7 from '../images/profile.jpeg'
import profile8 from '../images/profile.jpeg'
import profile9 from '../images/profile.jpeg'
import profile10 from '../images/profile.jpeg'
import profile11 from '../images/profile.jpeg'
import profile12 from '../images/profile.jpeg'
import LearnMore from './LearnMore';





class AllCard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            showComponent:false
        };
        this.onButtonClick=this.onButtonClick.bind(this);
    }
    onButtonClick(){
        this.setState({
            showComponent:true,
          
        });
    }
    render(){
        return(
            <div>
            <Container>            
            <Row class="card" >               
            <Col sm={12} md={3} lg={3} ><Card selller="Owais Malik" title="BedRoom Set" src={card1} src1={Bed1} src2={Bed2} src3={Bed3} src4={profile1} price="11,000/-" Address="Gulistan-e-Johar,Karachi"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Muhammad Ali" title="Cultus VXR" src={card2} src1={cultus1} src2={cultus2} src3={cultus3}src4={profile2}  price="8,00,000/-" Address="Bahria Town,Lahore"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Yousuf Ahmed" title="Watch" src={card3} src1={watch1} src2={watch2} src3={watch3} src4={profile3} price="1200/-" Address="Star City Mall,Saddar"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Maaz Khan" title="iPhone 11" src={card4} src1={iphone1} src2={iphone2} src3={iphone3} src4={profile4} price="35,000/-" Address="Star City Mall,Saddar"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Ali Hussain" title="Corolla" src={card5} src1={corolla1} src2={corolla2} src3={corolla3} src4={profile5} price="17,00,000/-" Address="Imran Motors"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Wajahad ALi" title="Sofa Set" src={card6} src1={sofa1} src2={sofa2} src3={sofa3} src4={profile6} price="$11,000/-" Address="Khan Interior,Lahore"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Saqib Sheikh" title="32 LED" src={card7} src1={led1} src2={led2} src3={led3} src4={profile7} price="$25,000/-" Address="Karachi"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Shehbaz Khan" title="Farmhouse On Rent" src={card8} src1={farmhouse1} src2={farmhouse2} src3={farmhouse3} src4={profile8} price="15,000/-" Address="Highway,Karachi"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Jaffar Electronics" title="iPhone 4" src={card9} src1={iphone4} src2={iphone5} src3={iphone6} src4={profile9} price="2600/-" Address="Serena Mall,Buffarzone"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Jaffar Electronics" title="27 LED" src={card10} src1={led4} src2={led5} src3={led6} src4={profile10} price="20,000/-" Address="Aleem Electronics"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Umer Ahmed" title="Watch" src={card11} src1={watch4} src2={watch5} src3={watch6} src4={profile11} price="1200/-" Address="Islamabad"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Haresh Kumar" title="Gul Ahmed Kurti" src={card12} src1={GulAhmed1} src2={GulAhmed2} src3={GulAhmed3} src4={profile12} price="2,000/-" Address="LuckyOne,Karachi"/></Col>   

            <Col sm={12} md={3} lg={3} ><Card selller="Owais Malik" title="BedRoom Set" src={card1} src1={Bed1} src2={Bed2} src3={Bed3} src4={profile1} price="11,000/-" Address="Gulistan-e-Johar,Karachi"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Muhammad Ali" title="Cultus VXR" src={card2} src1={cultus1} src2={cultus2} src3={cultus3}src4={profile2}  price="8,00,000/-" Address="Bahria Town,Lahore"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Yousuf Ahmed" title="Watch" src={card3} src1={watch1} src2={watch2} src3={watch3} src4={profile3} price="1200/-" Address="Star City Mall,Saddar"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Maaz Khan" title="iPhone 11" src={card4} src1={iphone1} src2={iphone2} src3={iphone3} src4={profile4} price="35,000/-" Address="Star City Mall,Saddar"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Ali Hussain" title="Corolla" src={card5} src1={corolla1} src2={corolla2} src3={corolla3} src4={profile5} price="17,00,000/-" Address="Imran Motors"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Wajahad ALi" title="Sofa Set" src={card6} src1={sofa1} src2={sofa2} src3={sofa3} src4={profile6} price="$11,000/-" Address="Khan Interior,Lahore"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Saqib Sheikh" title="32 LED" src={card7} src1={led1} src2={led2} src3={led3} src4={profile7} price="$25,000/-" Address="Karachi"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Shehbaz Khan" title="Farmhouse On Rent" src={card8} src1={farmhouse1} src2={farmhouse2} src3={farmhouse3} src4={profile8} price="15,000/-" Address="Highway,Karachi"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Jaffar Electronics" title="iPhone 4" src={card9} src1={iphone4} src2={iphone5} src3={iphone6} src4={profile9} price="2600/-" Address="Serena Mall,Buffarzone"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Jaffar Electronics" title="27 LED" src={card10} src1={led4} src2={led5} src3={led6} src4={profile10} price="20,000/-" Address="Aleem Electronics"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Umer Ahmed" title="Watch" src={card11} src1={watch4} src2={watch5} src3={watch6} src4={profile11} price="1200/-" Address="Islamabad"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Haresh Kumar" title="Gul Ahmed Kurti" src={card12} src1={GulAhmed1} src2={GulAhmed2} src3={GulAhmed3} src4={profile12} price="2,000/-" Address="LuckyOne,Karachi"/></Col>   

            <Col sm={12} md={3} lg={3} ><Card selller="Owais Malik" title="BedRoom Set" src={card1} src1={Bed1} src2={Bed2} src3={Bed3} src4={profile1} price="11,000/-" Address="Gulistan-e-Johar,Karachi"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Muhammad Ali" title="Cultus VXR" src={card2} src1={cultus1} src2={cultus2} src3={cultus3}src4={profile2}  price="8,00,000/-" Address="Bahria Town,Lahore"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Yousuf Ahmed" title="Watch" src={card3} src1={watch1} src2={watch2} src3={watch3} src4={profile3} price="1200/-" Address="Star City Mall,Saddar"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Maaz Khan" title="iPhone 11" src={card4} src1={iphone1} src2={iphone2} src3={iphone3} src4={profile4} price="35,000/-" Address="Star City Mall,Saddar"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Ali Hussain" title="Corolla" src={card5} src1={corolla1} src2={corolla2} src3={corolla3} src4={profile5} price="17,00,000/-" Address="Imran Motors"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Wajahad ALi" title="Sofa Set" src={card6} src1={sofa1} src2={sofa2} src3={sofa3} src4={profile6} price="$11,000/-" Address="Khan Interior,Lahore"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Saqib Sheikh" title="32 LED" src={card7} src1={led1} src2={led2} src3={led3} src4={profile7} price="$25,000/-" Address="Karachi"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Shehbaz Khan" title="Farmhouse On Rent" src={card8} src1={farmhouse1} src2={farmhouse2} src3={farmhouse3} src4={profile8} price="15,000/-" Address="Highway,Karachi"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Jaffar Electronics" title="iPhone 4" src={card9} src1={iphone4} src2={iphone5} src3={iphone6} src4={profile9} price="2600/-" Address="Serena Mall,Buffarzone"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Jaffar Electronics" title="27 LED" src={card10} src1={led4} src2={led5} src3={led6} src4={profile10} price="20,000/-" Address="Aleem Electronics"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Umer Ahmed" title="Watch" src={card11} src1={watch4} src2={watch5} src3={watch6} src4={profile11} price="1200/-" Address="Islamabad"/></Col>                                       
            <Col sm={12} md={3} lg={3} ><Card selller="Haresh Kumar" title="Gul Ahmed Kurti" src={card12} src1={GulAhmed1} src2={GulAhmed2} src3={GulAhmed3} src4={profile12} price="2,000/-" Address="LuckyOne,Karachi"/></Col>   
            
            </Row>
          </Container>
            
            <button   className="learnmore" onClick={this.onButtonClick} >Learn More</button>
                    {this.state.showComponent? <LearnMore/>:null

                    }
            
          </div>
       )
    }
}
export default AllCard;