import React from 'react';
import { Container, Row } from 'react-bootstrap';

export const ScoreComponent = (props) => {

  const css = `@media (max-width: 450px) {
    .score {
        max-width: fit-content;
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        gap: 3rem;
    }
  }
  @media (min-width:451px) {
    .score {
        max-width: -webkit-fill-available;
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
  }
  `;

  return (
    <>
    <style scoped>{css}</style>
    <Container className="score">
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
    </>
  )

}
