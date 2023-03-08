import React from "react";
import { useContext } from "react";
import { Card, Button, ListGroup, Row, Col } from "react-bootstrap";
import Context from "../../Context";
import { useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
const Home = () => {
  const { productos, addCart } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div>
      <header style={{ backgroundImage: `url("https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-07-Chicken-Alfredo-Pizza%2FChicken-Alfredo-Pizza-KitchnKitchn2970-1_01")`, textAlign: 'center' }}>
        <h1 style={{color: 'white'}}>LA TIENDA AMOROSAAAAA :DD!</h1>
        <h5 style={{color: 'white'}}>Productos hechos con Amoo'' :P!!</h5>
      </header>
      <Row>
        {productos.map((producto, i) => {
          return (
            <Col xs={12} sm={3}>
              <Card
                className="text-center m-2 bg-dark text-light p-2 rounded shadow"
                key={producto.id}
              >
                <Card.Img variant="top" src={producto.img} />
                <Card.Body>
                  <Card.Title>{producto.name.toUpperCase()}</Card.Title>
                  { <ListGroup variant='flush' key={i}>
                                                {producto.ingredients.map((ingredient, i) => (
                                                    <ListGroup.Item className='rounded text-capitalize bg-danger text-light m-1' key={i} >
                                                        {ingredient}
                                                    </ListGroup.Item>
                                                ))}
                                                <Card.Title className='p-2 text-success'>Precio: ${producto.precio}</Card.Title>
                                            </ListGroup>}
                  <Card.Text>{producto.descripcion.toUpperCase()}</Card.Text>
                  <Button
                    className="mx-3"
                    variant="outline-light"
                    onClick={() => {
                      navigate(`producto/${producto.id}`);
                    }}
                  >
                    <BiFoodMenu /> Detalles
                  </Button>
                  <Button
                    className="mx-3"
                    variant="outline-light"
                    onClick={() => {
                      addCart(producto);
                    }}
                  >
                    Carrito <BsFillCartFill />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
