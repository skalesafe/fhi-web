import React from 'react';
import { Container, Row } from 'react-bootstrap';

export const ScoreComponent = (props) => {

  return (
    <Container
      style={{
        maxWidth: 'fit-content',
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}
    >
      {props.scoreArray.map((val) => (
        <Row key={val}>
          <label
            style={{
              border: '1px solid black',
              borderRadius: '1rem',
              padding: '2rem'
            }}
          >{val}</label>
        </Row>
      ))}

    </Container>
  )

}
