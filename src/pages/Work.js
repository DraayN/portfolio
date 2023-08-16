import { Container } from 'react-bootstrap'
import Project from '../components/Project'

const Work = () => {
  return (
    <Container className='mt-5'>
    <h1 className='display-1 fw-bold text-center'>Recent Projects</h1>
    <Container className='d-flex flex-wrap justify-content-center align-items-center gap-3 mt-3'>
        <Project/>
    </Container>
    </Container>
  )
}

export default Work