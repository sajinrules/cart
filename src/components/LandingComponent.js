import React from 'react'
import { Carousel, Grid, Row, Col, Image,Button,Navbar } from 'react-bootstrap';
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';
import Cat1 from '../assets/cat1.jpg';
import Cat2 from '../assets/cat2.jpg';
import Cat3 from '../assets/cat3.jpg';

class LandingComponent extends React.Component {
  navigate(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="explore">
        <Carousel>
          <Carousel.Item>
            <img height={500} alt="900x500" src={Img1} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img height={500} alt="900x500" src={Img2} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img height={500} alt="900x500" src={Img3} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h3 className="shop-for">SHOP FOR</h3>
        <Grid>
          <Row className="show-grid mx-0">
            <Col className="category px-0" sm={6} md={3}>
              <Button onClick={() => this.navigate('/women') }>Women</Button>
              <Image src={Cat1} thumbnail />
            </Col>
            <Col className="category px-0" sm={6} md={3}>
              <Button onClick={() => this.navigate('/men') }>Men</Button>
              <Image src={Cat2} thumbnail />
            </Col>
            <Col className="category px-0" sm={6} md={3}>
              <Button onClick={() => this.navigate('/kids') }>Kids</Button>
              <Image src={Cat3} thumbnail />
            </Col>
            <Col className="category px-0" sm={6} md={3}>
              <div className="sign-up">
                <h2 className="text-center text-uppercase">Sign up & get 20% off</h2>
                <div className="text-center">Be the first to know about the latest fashion news and get exclusive offers</div>
                <Button onClick={() => this.navigate('/login') }>Sign up</Button>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default LandingComponent
