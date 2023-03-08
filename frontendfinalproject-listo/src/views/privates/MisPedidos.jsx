import { ListGroup, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Context from '../../Context'
import React, { useContext, useEffect } from 'react'


function MisPedidos() {
    const { cart, increment, decrement, items, total, settotal } = useContext(Context)
    settotal(cart.reduce((acum, { count, price }) => acum + price * count, 0))
    useEffect(() => {}, [cart, items, total])
    const navigate = useNavigate()
    return (
        
        <div style={{width: '80%', height: '80%'}}>
        <ListGroup variant='flush'>
          {cart.map((pizza, i) => (
            <ListGroup.Item className='rounded text-capitalize bg-dark text-light m-1 shadow d-flex justify-content-between py-2' key={i}>
              <img src={pizza.img} style={{ width: 50 }} alt='' />
              <h6 className='mb-0 text-capitalize p-2'>{pizza.name}</h6>
              <h6 className='mb-0 p-2 text-success'>${(pizza.price)}</h6>
              <div className='d-flex justify-content-end align-items-center'>
                <h6 className='mb-0 p-2 text-success'>${(pizza.price * pizza.count)}</h6>
                <Button variant='outline-danger' onClick={() => decrement(i)}>-</Button>
                <b className='mx-2'>{pizza.count}</b>
                <Button variant='outline-primary' onClick={() => increment(i)}>+</Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className='d-flex justify-content-end pt-5'>
          <h2 className='my-4 mx-4'>Items:{items}</h2>
          <div className='pt-4 mx-2'>
            <NavLink to='/'><Button variant='outline-primary'>Volver</Button></NavLink>
          </div>
        </div>
      </div>
    )
  }
  
  export default MisPedidos