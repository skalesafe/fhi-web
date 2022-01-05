import React from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

export const ImproveScore = (props) => {

  const improveArray = props.improveArray;

  const css = `@media (max-width: 450px) {
    .score {
      min-width: fit-content;
      width: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
    }

    .rowclass {
      display: flex;
      flex-direction: row;
    }

    .rowdiv {
      width: -webkit-fill-available;
    }
  }
  @media (min-width:451px) {
    .score {
      min-width: fit-content;
      width: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .rowclass {
      display: flex;
      flex-direction: inherit;
    }

    .rowdiv {
      width: auto;
    }
  }
  `;


  return (
    <>
    <style scoped>{css}</style>
    {improveArray && improveArray.length ?
      <Container
        className="border border-dark"
        style={{
          maxWidth: 'fit-content',
          marginTop: '5%'

        }}
      >
        <Row
            className="rowclass my-4"
            key={1}
        >
          {props.improveArray.map((val) => (
            <div key={val.A}
              className="rowdiv"
            >
              <Col
                className="score justify-content-center"
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
