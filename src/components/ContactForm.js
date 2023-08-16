import React from 'react';
import { Form, Button} from 'react-bootstrap';

const ContactForm = () => {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <div className="d-grid gap-2">
      <Button variant="dark" size="lg" href='mailto:andreiedic0@gmail.com'>
        Submit
      </Button>
    </div>

  </Form>
  )
}

export default ContactForm