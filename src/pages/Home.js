import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Project from '../components/Project';
import SocialLinks from '../components/SocialLinks';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <section>
        <Container>
            <Row className='hero d-flex justify-content-center align-items-center'>
                <Col className='d-flex justify-content-center align-items-center'>
                <Image src='/profile.jpg' style={{minWidth:300, maxWidth:500}}fluid rounded/>
                </Col>
                <Col className='d-flex flex-column justify-content-center'>
                    <h1 className='display-1 fw-bold'>Andrei Edic</h1>
                    <h1>Future Web Developer</h1>
                    <hr/>
                    <p>A 20 year old BSIT Student major in Web Development in PHINMA University of Pangasinan</p>
                    
                    <div className='d-flex gap-2 fs-3'>
                        <Link to="/work">
                            <Button variant='dark' >View Work</Button>
                        </Link>
                        <SocialLinks/>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                    <h1 className='display-1 fw-bold'>About Me</h1>
                    <h4>Hi I'm Andrei Edic 20 year's old from Mangaldan Pangasinan</h4>
                    <hr/>
                    <p>I like programming because it's challenging to solve problems</p>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                    <Image src='/team.jpg' style={{minWidth:300, maxWidth:500, maxHeight:200, objectFit: 'cover'}}fluid rounded/>
                </Col>
            </Row>
        </Container>
        <Container className='my-5 py-5'>
            <h1 className='display-1 fw-bold text-center'>Recent Projects</h1>
            <Container className='d-flex flex-wrap justify-content-center align-items-center gap-3 mt-3'>
                <Project/>
            </Container>
        </Container>
        <Container className='my-5'>
            <Row>
                <Col>
                    <h1 className='display-1 fw-bold'>Contact Me</h1>
                    <h4>Feel free to contact me at my socials below</h4>
                    <hr/>
                    <div className='d-flex gap-3 fs-6'>
                        <Link to='mailto:andreiedic0@gmail.com' className='text-dark text-decoration-none'>
                            andreiedic0@gmail.com
                        </Link>
                        <SocialLinks/>
                    </div>
                </Col>
                <Col>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Home