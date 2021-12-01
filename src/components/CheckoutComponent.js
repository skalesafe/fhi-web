import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const CheckoutComponent = (props) => {

  const [value, setValue] = useState('');
  const handleSelect = (e) => {
    setValue(e);
  }

  return (
    <Container
      style={{
        maxWidth: 'fit-content',
        // marginLeft: '30%',
        marginTop: '5%',
        float: 'right'

      }}
    >
      <Button size='lg'>Checkout</Button>

    </Container>
  )

}
