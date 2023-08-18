import { Container, ListGroup } from 'react-bootstrap'


const Education = () => {
  return (
    <>
    <Container className='mt-5 hero'>
    <h1 className='display-1 fw-bold text-center'>Education</h1>
    <Container className='d-flex flex-wrap justify-content-center align-items-center gap-3 mt-3'>
        <ListGroup as="ul">
        <ListGroup.Item as="li" active>
            <h1>University of Pangasinan</h1>
            <hr/>
            <h4>2018 - Present</h4>
            <p>Dagupan City</p>
        </ListGroup.Item>
        <div className='d-flex justify-content-center align-items-center'>
            <span style={{width:2, height:50}} className='bg-dark'/>
        </div>
        <ListGroup.Item as="li">
            <h1>Mangaldan Integrated School</h1>
            <hr/>
            <h4>2014 - 2018</h4>
            <p>Mangaldan, Pangasinan</p>
        </ListGroup.Item>
        <div className='d-flex justify-content-center align-items-center'>
            <span style={{width:2, height:50}} className='bg-dark'/>
        </div>
        <ListGroup.Item as="li">
            <h1>Mangaldan Integrated School</h1>
            <hr/>
            <h4>2008 - 2014</h4>
            <p>Mangaldan, Pangasinan</p>
        </ListGroup.Item>
        </ListGroup>
    </Container>
    </Container>
    </>
  )
}

export default Education