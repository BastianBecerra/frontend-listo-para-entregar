import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import { useNavigate } from "react-router-dom";



function EditarUsuario() {
  const navigate = useNavigate();
    return (
      <Container className="pt-5" fluid="sm">
      <h1>Editar información 😃!</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h2>Nombre</h2></Form.Label>
          <Form.Control type="email" placeholder="Enter new name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h2>Email</h2></Form.Label>
          <Form.Control type="email" placeholder="Enter new email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label><h2>Teléfono</h2></Form.Label>
          <Form.Control placeholder="Enter the Phone =DD"/>
        </Form.Group>
        <Form.Group>
          <Form.Label><h2>Dirección de Facturación</h2></Form.Label>
          <Form.Control placeholder="Enter de Facturación Adress =DD!" />
        </Form.Group>
        {/* Button for edit and Go to  :D! */}
        <Button 
        onClick={() => {
          navigate(`../user`)
        }}
        variant="primary" type="submit">
          Editar información 😀!!
        </Button>
      </Form>
    </Container>
    )
  }
  
  export default EditarUsuario