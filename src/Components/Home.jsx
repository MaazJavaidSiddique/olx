import React from 'react';


import Header from '../Components/Header'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import AllCards from '../Components/AllCards'
// import LearnMore from '../Components/LearnMore'
import LargeImage from '../Components/LargeImage'






class Home extends React.Component{
  render(){
      return(
        <div>
          <Header/>
          <Navigation/>
          <LargeImage/>
          <AllCards/>
         
          <Footer/>
          
          
          </div>
      )
  }
}

export default Home;