import React from 'react';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import { DropDown } from '../src/components/DropDown';
import { CheckboxList } from '../src/components/CheckboxList';
import { ScoreComponent } from '../src/components/ScoreComponent';
import { CheckoutComponent } from '../src/components/CheckoutComponent';
import { ImproveScore } from '../src/components/ImproveScore';



function HomePage() {

  const valueArray = ['Weekly Grocery Trip', 'Daily Grocery', 'Pharmacy list'];
  const checkArray = ['Whole Milk', '2% milk', 'Bananas', 'Garbanzo Beans', 'Coke 2 Litre', 'Pasta'];
  const scoreArray = ['Score1', 'Score2', 'Score3'];
  const improveArray = ['Whole Wheat Pasta', 'Skim Milk', 'Low Sodium Boxed Lunch', 'Water', 'Green Beans'];


  return (
    <div className="App">
      <header className="App-header">
        FHI Application
      </header>
      <Container>
        <Row>
        <h1>What are you shopping for ?</h1>
        </Row>
        <Row>
        <DropDown valArray={valueArray} title={''} />
        </Row>
        <Row>
          <Col>
            <CheckboxList checkArray={checkArray}/>
          </Col>
          <Col>
            <ScoreComponent scoreArray={scoreArray} />
          </Col>
        </Row>
        <Row>
          <CheckoutComponent />
        </Row>
        <Row>
          <ImproveScore improveArray={improveArray}/>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
