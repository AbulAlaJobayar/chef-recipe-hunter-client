import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Lottie from "lottie-react";
import cooking from "../assets/cooking.json";


const Home = () => {
    return (
        <Container>
            <Row className='d-flex align-items-center'>
                <Col xs={12} md={6}>
                   <div>
                    <span className='fs-2 fw-bold text-secondary '>Indulge in a Culinary Journey at</span>
                    <span className='display-4  fw-bold text-warning  '> <br /> Damn Delicious</span><br />
                    <span className='fs-3 fw-bold text-secondary  text-center'>Where Taste Meets Tradition</span>


                    <p className='mt-4 text-secondary'>A food restaurant chef creates delicious and visually appealing meals, designs menus, selects ingredients, and supervises kitchen staff. They have a passion for food, an eye for detail, and an ability to work well under pressure.</p>
                   </div>
                   <Button variant="warning" className='text-white fw-bold mt-3'>Order Now</Button>
                </Col>
                <Col xs={12} md={6}>
                <Lottie animationData={cooking} loop={true} />;
                </Col>
            </Row>
        </Container>
    );
};

export default Home;