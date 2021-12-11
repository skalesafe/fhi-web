import React from 'react';
import { Container, Button } from 'react-bootstrap';

export const CheckoutComponent = (props) => {

  return (
    <Container
      style={{
        maxWidth: 'fit-content',
        // marginLeft: '30%',
        marginTop: '5%',
        float: 'right'

      }}
    >
      <Button size='lg'
        onClick={props.handleCheckout}
      >Checkout</Button>

    </Container>
  )

}
