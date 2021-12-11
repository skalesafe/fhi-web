import React from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';

export const ImproveScore = (props) => {

  const improveArray = props.improveArray;

  return (
  <>
    {improveArray && improveArray.length ?
      <Container
        className="border border-dark"
        style={{
          maxWidth: 'fit-content',
          marginTop: '5%'

        }}
      >
        <Row
          className="my-4"
          style={{ display: 'flex' }}
          key={1}
        >
          {props.improveArray.map((val) => (
            <div key={val.A}
              style={{
                width: 'auto'
              }}
            >
              <Col
                style={{
                  minWidth: 'fit-content',
                  width: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
                className="justify-content-center"
              >
                <Form.Label
                  className="border border-dark"
                  style={{
                    border: '1px solid black',
                    borderRadius: '1rem',
                    padding: '1rem'
                  }}
                >{val.A}</Form.Label>
                <Form.Check.Input
                  type='checkbox'
                  title={JSON.stringify(val)}
                  onChange={props.handleCheckSelect}
                />
              </Col>
            </div>
          ))}
        </Row>
        <Row
          className="my-4 mx-4"
          key={2}
          style={{
            maxWidth: 'fit-content',
            float: 'right'
          }}
        >
          <Button
              onClick={props.handleImprovedScore}
          >
            Update Score
          </Button>
        </Row>

      </Container>
      :
      < Spinner animation="border" role="status" >
        <span>Loading...</span>
      </Spinner >
      }
      </>
  )

}
