import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import video from '../Asset/img-vid/skyvideo.mp4';
import plane from '../Asset/img-vid/plane.png';
import "../Asset/my-css/home.css";


const Home = () => {

  return (
    <section className="hero">
      <Container className="hero__container">
        <Row className="hero__container--row">
          <Col>
              <div className="hero__container--title text-center mb-5">
                <h1 class="h1">Create Unforgettable Memories With Us</h1>
              </div>
              
            <div className="hero__media mt-5">
              <div className="hero__media--video">
                <video src={video} className="video" autoPlay muted loop></video>
              </div>
              <img src={plane} className="hero__media--img"></img>
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}

export default Home;