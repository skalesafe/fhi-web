import React from 'react';
import { Form, Container, Row, Col, Spinner } from 'react-bootstrap';

export const CheckboxList = (props) => {

  const checkArray = props.checkArray;

  return (
  <>
    {checkArray && checkArray.length ?
        <Container
          style={{
            maxWidth: 'fit-content',
            marginTop: '5%',
            float: 'right',
            height: '25rem',
            overflowY: 'scroll',
            scrollBehavior: 'smooth',
            backgroundColor: 'aliceblue',
          }}
        >
          {checkArray.map((val) => (
            <Row key={val.A}
              style={{ display: 'flex' }}
            >
              <Col>
                <Form.Check type='checkbox'
                  style={{ textAlign: 'right' }}
                >
                  <Form.Check.Label
                    style={{
                      float: 'left',
                      paddingRight: '7rem'
                    }}
                  >
                    {val.A}
                  </Form.Check.Label>
                  <Form.Check.Input
                    type="checkbox"
                    style={{
                      float: 'right'
                    }}
                    title={JSON.stringify(val)}
                    onChange={props.handleCheckSelect}
                  />
                </Form.Check>
              </Col>
            </Row>
          ))}

        </Container>
        :
        < Spinner animation="border" role="status" >
          <span>Loading...</span>
        </Spinner >

      }
      </>
  )

}