import React from 'react'
import {Container,Row,NavDropdown,Col,Button,Form,FormControl} from 'react-bootstrap'


class Signup extends React.Component{
    
    render(){
        
        
        return(
            <div className="Contsign" >
            <Container>
                <Row>
                <Col sm={12} md={4} lg={4}></Col>
                <Col sm={12} md={4} lg={4}>
                <div className="signup">
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="Input" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="Input" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className="Buttonsignin" variant="primary" type="submit">
                    Submit
                </Button><br></br>
                <Form.Label className="SigninButton">Sign Up</Form.Label>
                </Form>
                </div>
                </Col>
                <Col sm={12} md={4} lg={4}></Col>
                
                </Row>
            </Container>
          


            </div>
            
        )
    }
}
export default Signup;