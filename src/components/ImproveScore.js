import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const ImproveScore = (props) => {

  // const [value, setValue] = useState('');
  // const handleSelect = (e) => {
  //   setValue(e);
  // }

  return (
    <Container
      className="border border-dark"
      style={{
        maxWidth: 'fit-content',
        marginTop: '5%'

      }}
      // className="d-flex"
    >
      <Row
        className="my-4"
      >
        {props.improveArray.map((val) => (
        <>
          <Col
              style={{ minWidth: 'fit-content' }}
              className="justify-content-center"
          >
              <Form.Label
                className="border border-dark"
              >{val}</Form.Label>
            <Form.Check
              type='checkbox'
              // onChange={handleSelect.bind(this, val)}
              key={val}
            />
          </Col>
          </>
      ))}
      </Row>
      <Row
        className="my-4 mx-4"
        style={{
          maxWidth: 'fit-content',
          float: 'right'
        }}
      >
        <Button>Update Score</Button>
      </Row>

    </Container>
  )

}
