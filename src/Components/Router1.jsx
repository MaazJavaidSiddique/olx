import React from "react";
import { BrowserRouter as Router,Switch,  Route,Link} from "react-router-dom";
import Home from '../Components/Home'
import Product from '../Components/Product'
import Signup from '../Components/Signup';
import LearnMore from '../Components/LearnMore'

class Router1 extends React.Component{
    render(){       
        return(
          <Router>
              <Route exact path="/" component={Home}/>
              <Route exact path="/product" component={Product}/>
              <Route exact path="/Signup" component={Signup}/>
              <Route exact path="/LearnMore" component={LearnMore}/>
          </Router>  
       )
    }
}
export default Router1;