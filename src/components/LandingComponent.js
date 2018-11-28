import React from 'react'
import { Carousel, Grid, Row, Col, Image,Button } from 'react-bootstrap';
import Img1 from '../assets/blur-blurred-background-boutique-1036856.jpg';
import Img2 from '../assets/fashion-female-girls-896291.jpg';
import Img3 from '../assets/adult-attractive-beautiful-1536619.jpg';
import Cat1 from '../assets/pexels-photo-1225035.jpeg';
import Cat2 from '../assets/pexels-photo-1616544.jpeg';
import Cat3 from '../assets/pexels-photo-1620760.jpeg';

class LandingComponent extends React.Component {
  navigate(path) {
    this.props.history.push(path);
  }
  render() {
    const width = {
      width: '100%'
    };
    return (
      <div className="explore">
        <Carousel>
          <Carousel.Item>
            <img  alt="900x500" src={Img1} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img  alt="900x500" src={Img2} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img  alt="900x500" src={Img3} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h3 className="shop-for">SHOP FOR</h3>
        <div className="shop">
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
                  <Button onClick={() => this.navigate('/login') }>Sign In</Button>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <h3 className="shop-for">PRODUCTS</h3>
        <div className="row">
          <div className="column">
            <img alt="image1" src="../../images/column-1/background-bags-carry-346744.jpg" style={width} />
            <img alt="image2" src="../../images/column-1/bags-business-commerce-1087727.jpg" style={width} />
            {/* <img src="../../images/column-1/black-friday-buying-casual-1068527.jpg" style={width} /> */}
            <img alt="image3" src="../../images/column-1/pexels-photo-322207.jpeg" style={width} />
            {/*<img src="../../images/column-1/commerce-crown-group-374894.jpg" style={width} />
            <img src="../../images/column-1/pexels-photo-1055691.jpeg" style={width} />
            {/*<img src="../../images/column-1/fashion-men-s-individuality-black-and-white-157675.jpeg" style={width} /> */}
          </div>
          <div className="column">
            <img alt="image4" src="../../images/column-2/beautiful-eyewear-fashion-285171.jpg" style={width} />
            <img alt="image5" src="../../images/column-2/holiday-trip-packaging-8434.jpg" style={width} />
            <img alt="image6" src="../../images/column-2/pexels-photo-310419.jpeg" style={width} />
            {/* <img src="../../images/column-2/pexels-photo-852860.jpeg" style={width} />
            <img src="../../images/column-2/pexels-photo-972887.jpeg" style={width} />
            <img src="../../images/column-2/pexels-photo-972937.jpeg" style={width} />
            <img src="../../images/column-2/pexels-photo-1050244.jpeg" style={width} /> */}
          </div>
          <div className="column">
            <img alt="image7" src="../../images/column-3/pexels-photo-264606.jpeg" style={width} />
            <img alt="image8" src="../../images/column-3/pexels-photo-285172.jpeg" style={width} />
            {/* <img src="../../images/column-3/pexels-photo-1103063.jpeg" style={width} /> */}
            {/* <img src="../../images/pexels-photo-322207.jpeg" style={width} />
            <img src="../../images/commerce-crown-group-374894.jpg" style={width} />
            <img src="../../images/pexels-photo-1055691.jpeg" style={width} />
            <img src="../../images/fashion-men-s-individuality-black-and-white-157675.jpeg" style={width} /> */}
          </div>
          <div className="column">
            <img alt="image9" src="../../images/column-4/pexels-photo-298864.jpeg" style={width} />
            <img alt="image10" src="../../images/column-4/pexels-photo-432059.jpeg" style={width} />
            <img alt="image11" src="../../images/column-4/pexels-photo-952212.jpeg" style={width} />
            {/* <img src="../../images/pexels-photo-322207.jpeg" style={width} />
            <img src="../../images/commerce-crown-group-374894.jpg" style={width} />
            <img src="../../images/pexels-photo-1055691.jpeg" style={width} />
            <img src="../../images/fashion-men-s-individuality-black-and-white-157675.jpeg" style={width} /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default LandingComponent
