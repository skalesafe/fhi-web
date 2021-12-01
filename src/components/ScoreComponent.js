import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const ScoreComponent = (props) => {

  const [value, setValue] = useState('');
  const handleSelect = (e) => {
    setValue(e);
  }

  return (
    <Container
      style={{
        maxWidth: 'fit-content',
        // marginLeft: '30%',
        marginTop: '5%'

      }}
    >
      {props.scoreArray.map((val) => (
        <Row key={val}
          style={{ display: 'flex' }}
          className="my-3"
        >
          <Button size='lg'>{val}</Button>
        </Row>
      ))}

    </Container>
  )

}
