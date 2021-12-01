import React from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';

export const CheckboxList = (props) => {


  // const [value, setValue] = useState('');
  // const handleSelect = (e) => {
  //   setValue(e);
  // }

  return (
    <Container
      style={{
        maxWidth: 'fit-content',
        // marginLeft: '30%',
        marginTop: '5%',
        float: 'right'

      }}
    >
        {props.checkArray.map((val) => (
          <Row key={val}
            style={{display: 'flex'}}
          >
            <Col
              style={{minWidth: 'fit-content'}}
            >
            <Form.Label>{val}</Form.Label>
            </Col>
            <Col>
            <Form.Check
              type='checkbox'
              // onChange={handleSelect.bind(this, val)}
              key={val}
              style={{textAlign: 'right'}}
            />
            </Col>
          </Row>
         ))}

    </Container>
  )

}