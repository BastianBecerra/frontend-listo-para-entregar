import {useNavigate} from 'react-router-dom'
import React, { useContext, useEffect } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import { type } from '@testing-library/user-event/dist/type';

export default function Usuario() {

  const navigate = useNavigate()
  return (
    <>
      <>
        <Container className="pt-5" fluid="sm">
          <h1>Editar informaci贸n 馃槂!</h1>
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
              <Form.Label><h2>Tel茅fono</h2></Form.Label>
              <Form.Control placeholder="Enter the Phone =DD"/>
            </Form.Group>
            <Form.Group>
              <Form.Label><h2>Direcci贸n de Facturaci贸n</h2></Form.Label>
              <Form.Control placeholder="Enter de Facturaci贸n Adress =DD!" />
            </Form.Group>
            {/* Button for edit and Go to  :D! */}
            <Button 
            onClick={() => {
              navigate(`../editar-usuario`)
            }}
            variant="primary" type="submit">
              Ir a editar informaci贸n馃榾!!
            </Button>
            <Button 
            onClick={() => {
              navigate(`../mis-pedidos`)
            }}
            variant="primary" type="submit">
              Ver mis pedidos 馃榾!!
            </Button>
            <Button onClick={() => {
              navigate(`../`)
            }} variant="danger" type='submit'>Cerrar sesi贸n</Button>
          </Form>
        </Container>
      </>
    </>
  );
}
