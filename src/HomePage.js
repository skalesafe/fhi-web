import React, { useState, useEffect } from 'react';
import './App.css';

import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { DropDown } from '../src/components/DropDown';
import { CheckboxList } from '../src/components/CheckboxList';
import { ScoreComponent } from '../src/components/ScoreComponent';
import { CheckoutComponent } from '../src/components/CheckoutComponent';
import { ImproveScore } from '../src/components/ImproveScore';
import axios from 'axios';

export const HomePage = () => {

  let scoreArray1 = ['Score1', 'Score2', 'Score3'];

  /** checkboxList */
  const [checkItems, setCheckItem] = useState([]);
  const [allArray, setAllArray] = useState([]);
  const [checkArray1, setCheckArray1] = useState([]);
  const [scoreArray, setScoreArray] = useState([]);
  const [improveArray, setImproveArray] = useState([]);
  const [defImproveArray, setDefImproveArray] = useState([]);


  /** Dropdown */
  const [dropdownItem, setDropdownItem] = useState('');

  const valueArray = ['Weekly Grocery Trip', 'Last Minute Run', 'Festive Event', 'Stocking up for Bad Weather', 'Monthly Stock up'];


  /** Initialization */
  useEffect(() => {

    async function fetchData() {
      const result = await axios('https://fhi-web.vercel.app/:3001/grocery1', {
        proxy: {
          host: 'localhost',
          port: 3001
        }
      });
      let cArray = result.data;
      setAllArray(cArray);
      setCheckArray1(cArray.slice(0, 25));
      setScoreArray(scoreArray1);
      setDefImproveArray([ cArray[169], cArray[59], cArray[118], cArray[165], cArray[23] ]);

      setImproveArray([cArray[169], cArray[59], cArray[118], cArray[165], cArray[23]]);
    }

    fetchData();
  // eslint-disable-next-line
  }, [])



  /** Handlers */
  const handleCheckSelect = (e) => {

    if (e.target.checked)
      setCheckItem(items => [...items, JSON.parse(e.target.title)]);
    else
      setCheckItem(items => items.filter(val => JSON.stringify(val) !== e.target.title));
  }


  const handleDropdownSelect = (e) => {
    let val = e.target.innerText;
    setDropdownItem(val);

    let ii = valueArray.indexOf(val);

    if(ii === 1)
      setCheckArray1(allArray.slice(26, 50));
    else if (ii === 2)
      setCheckArray1(allArray.slice(51, 75));
    else if (ii === 3)
      setCheckArray1(allArray.slice(76, 100));
    else if (ii === 4)
      setCheckArray1(allArray.slice(101, 125));
    else
      setCheckArray1(allArray.slice(0, 25));

    setScoreArray(scoreArray1);

    document.querySelectorAll('input:checked').forEach(item => item.checked = false);

    setImproveArray(defImproveArray);
  }

  const handleCheckout = () => {
    updateScoreArray();
  }

  const handleImprovedScore = () => {
    updateScoreArray();
  }


  const updateScoreArray = () => {

    /** group 1 calculations */
    //Total Calories in basket
    const TotalCalories = checkItems.reduce((prev, cur) => {
      prev += cur.D;
      return prev;
    }, 0);

    const TotalDairyServings = checkItems.reduce((prev, cur) => {
      return 0;
    }, 0)

    const TotalProtienServings = checkItems.reduce((prev, cur) => {
      prev += cur.N;
      return prev;
    }, 0);

    const TotalPlantOrSeaFoodProtienServings = checkItems.reduce((prev, cur) => {
      prev += cur.L;
      return prev;
    }, 0);

    const TotalCarbs = checkItems.reduce((prev, cur) => {
      return 0;
    }, 0);

    const TotalCarbsFromWholeGrains = checkItems.reduce((prev, cur) => {
      return 0;
    }, 0);

    const TotalDietaryFiber = checkItems.reduce((prev, cur) => {
      return 0;
    }, 0);

    const TotalServingsVegetable = checkItems.reduce((prev, cur) => {
      prev += cur.J;
      return prev;
    }, 0);

    const SaturatedFats = checkItems.reduce((prev, cur) => {
      prev += cur.U;
      return prev;
    }, 0);

    const UnSaturatedFats = checkItems.reduce((prev, cur) => {
      return 0;
    }, 0);

    const AddedSugars = checkItems.reduce((prev, cur) => {
      return 0;
    }, 0);

    const TotalServingsOfFruit = checkItems.reduce((prev, cur) => {
      prev += cur.I;
      return prev;
    }, 0);

    const TotalSodium = checkItems.reduce((prev, cur) => {
      prev += cur.Y;
      return prev;
    }, 0);

    const VegetablesScore = Math.min((((TotalServingsVegetable * 1000) / TotalCalories) * 10 / 1.57), 10);

    const FruitsScore =  Math.min((((TotalServingsOfFruit * 1000) / TotalCalories) * 10 / 0.79), 10);

    const DairyScore = Math.min((((TotalDairyServings * 1000) / TotalCalories) * 10 / 0.05), 10);

    const SeefoodAndPlantProteinScore =  Math.min((((TotalPlantOrSeaFoodProtienServings * 1000) / TotalCalories) * 5 / 2.12), 5);

    const ProteinScore = Math.min((((TotalProtienServings * 1000) / TotalCalories) * 5 / 2.78), 5);

    const WholeGrainScore = isNaN(TotalCarbsFromWholeGrains / TotalCarbs)  ? 0 :
          Math.min(((TotalCarbsFromWholeGrains / TotalCarbs) * 10 / 0.5));

    const DietaryFibreScore = Math.min((((TotalDietaryFiber * 1000) / TotalCalories) * 10 / 14), 10);

    const UnsaturatedFatsScore = isNaN(UnSaturatedFats / SaturatedFats) ? 0 :
      ((UnSaturatedFats / SaturatedFats) > 2.5 ? 10 :
      Math.max(((10 - ((UnSaturatedFats / SaturatedFats) - 2.5) * 10) / (1.2 - 2.5)), 10));

    const SaturatedFatsScore = (((SaturatedFats * 9) / TotalCalories) < 0.08 ? 10 :
          10 - Math.min(((((SaturatedFats * 9) / TotalCalories) - 0.08) * 10) / (0.16 - 0.08), 10));

    const AddedSugarsScore = (((AddedSugars * 4) / TotalCalories) < 0.065 ? 10 :
      10 - Math.min(((((AddedSugars * 4) / TotalCalories) - 0.08) * 10) / (0.16 - 0.08), 10));

    const SodiumScore = ((TotalSodium * 1000) / TotalCalories) < 1150 ? 10 :
      10 - Math.min((((TotalSodium * 1000) / TotalCalories) * 10) / (2000 - 1150), 10);

    const TotalScore1 = VegetablesScore + FruitsScore + DairyScore + SeefoodAndPlantProteinScore + ProteinScore + WholeGrainScore + DietaryFibreScore
      + UnsaturatedFatsScore + SaturatedFatsScore + AddedSugarsScore + SodiumScore;

    scoreArray1[0] = "" + parseFloat(Math.round((parseFloat(TotalScore1 * 100)).toFixed(2)) / 100).toFixed(2);
    setScoreArray(scoreArray1);

    /** Group 2 calculations */

    const TotalFat = checkItems.reduce((prev, cur) => {
      prev += cur.P;
      return prev;
    }, 0);

    const TotalCarb = checkItems.reduce((prev, cur) => {
      prev += cur.C;
      return prev;
    }, 0);

    const TotalProtein = checkItems.reduce((prev, cur) => {
      prev += cur.O;
      return prev;
    }, 0);

    let fatcalc = TotalFat / TotalCalories * 1000;
    const FatScore = isNaN(fatcalc) ? 0 :
      ((fatcalc) > 2 && (fatcalc) < 7) ? 5 : 0;

    let carbcalc = TotalCarb / TotalCalories * 1000;
    const CarbScore = isNaN(carbcalc) ? 0 :
      ((carbcalc) > 45 && (carbcalc) < 100) ? 5 : 0;

    let proteincalc = TotalProtein / TotalCalories * 1000;

    const ProteinScore2 = isNaN(proteincalc) ? 0 :
      ((proteincalc) > 10 && (proteincalc) < 35) ? 5 : 0;

    const TotalScore2 = FatScore + CarbScore + ProteinScore2;

    scoreArray1[1] = TotalScore2;
    setScoreArray(scoreArray1);


    //Score 3 calculations
    const TotalGramsofFiber = checkItems.reduce((prev, cur) => {
      prev += cur.F;
      return prev;
    }, 0);

    let fibercalc = TotalGramsofFiber / TotalCalories * 1000;
    const FiberScore = isNaN(fibercalc) ? 0 :
      fibercalc >= 14 ? 10 : (fibercalc / 14) * 10;


    const TotalWholeGrains = checkItems.reduce((prev, cur) => {
      prev += cur.G;
      return prev;
    }, 0);

    let wholegraincalc = TotalWholeGrains / TotalCalories * 1000;
    const WholeGrainScore3 = isNaN(wholegraincalc) ? 0 :
      wholegraincalc >= 1.5 ? 10 : (wholegraincalc / 1.5) * 10;

    const TotalWholeFruit = checkItems.reduce((prev, cur) => {
      prev += cur.H;
      return prev;
    }, 0);

    let wholefruitcalc = TotalWholeFruit / TotalCalories * 1000;
    const WholeFruitScore = isNaN(wholefruitcalc) ? 0 :
      wholefruitcalc >= 0.4 ? 10 : (wholefruitcalc / 0.4) * 10;

    const TotalFruits = checkItems.reduce((prev, cur) => {
      prev += cur.I;
      return prev;
    }, 0);
    let fruitcalc = TotalFruits / TotalCalories * 1000;
    const FruitScore = isNaN(fruitcalc) ? 0 :
      fruitcalc >= 0.8 ? 5 : (fruitcalc / 0.4) * 5;

    const TotalVeg = checkItems.reduce((prev, cur) => {
      prev += cur.J;
      return prev;
    }, 0);
    let vegcalc = TotalVeg / TotalCalories * 1000;
    const VegScore = isNaN(vegcalc) ? 0 :
      vegcalc >= 1.1 ? 10 : (vegcalc / 1.1) * 10;

    const TotalGreansAndBeans = checkItems.reduce((prev, cur) => {
      prev += cur.K;
      return prev;
    }, 0);
    let gbcalc = TotalGreansAndBeans / TotalCalories * 1000;
    const GreansAndBeansScore = isNaN(gbcalc) ? 0 :
      gbcalc >= 0.2 ? 5 : (gbcalc / 0.2) * 5;

    let plantNProteinscalc = TotalPlantOrSeaFoodProtienServings / TotalCalories * 1000;
    const WholePlantAndSeefoodProteinScore = isNaN(plantNProteinscalc) ? 0 :
      plantNProteinscalc >= 0.8 ? 5 : (plantNProteinscalc / 0.8) * 5;

    proteincalc = TotalProtein / TotalCalories * 1000;
    const ProteinScore3 = isNaN(proteincalc) ? 0 :
      proteincalc >= 2.5 ? 5 : (proteincalc / 2.5) * 5;

    const MUFAPUFAs = checkItems.reduce((prev, cur) => {
      prev += cur.R;
      return prev;
    }, 0);

    const TotalSaturatedFatCals = checkItems.reduce((prev, cur) => {
      prev += cur.U;
      return prev;
    }, 0);

    let RatioPUFAscalc = MUFAPUFAs / TotalSaturatedFatCals;
    const PUFAMUFAScore = isNaN(RatioPUFAscalc) ? 0 :
      RatioPUFAscalc >= 2.5 ? 5 : (RatioPUFAscalc / 2.5) * 5;


    const TotalSaturatedFat = checkItems.reduce((prev, cur) => {
      prev += cur.T;
      return prev;
    }, 0);

    let satfatcalc = TotalSaturatedFat / TotalCalories;
    const SaturatedFatScore = isNaN(satfatcalc) ? 0 :
      satfatcalc >= 16 ? 0 : satfatcalc <= 8 ? 5 : (1 - (satfatcalc - 0.08) / 0.08) * 5;

    const TotalAddedSugar = checkItems.reduce((prev, cur) => {
      prev += cur.W;
      return prev;
    }, 0);

    let sugarcalc = TotalAddedSugar / TotalCalories;
    const AddedSugarScore = isNaN(sugarcalc) ? 0 :
      sugarcalc >= 26 ? 0 : sugarcalc <= 6.5 ? 10 : (1 - (sugarcalc - 0.065) / 0.195) * 10;

    let sodiumcalc = TotalSodium / TotalCalories * 1000;
    const SodiumScore3 = isNaN(sodiumcalc) ? 0 :
      sodiumcalc >= 2 ? 0 : sodiumcalc <= 1.1 ? 5 : (1 - (sodiumcalc - 1.1) / 0.9) * 10;

    const TotalOtherCal = checkItems.reduce((prev, cur) => {
      prev += cur.AC;
      return prev;
    }, 0);
    let othercalcalc = TotalOtherCal / TotalCalories;
    const OtherCalScore = isNaN(othercalcalc) ? 0 :
      othercalcalc >= 15 ? 0 : othercalcalc <= 5 ? 10 : (1 - (othercalcalc - 0.05) / 0.1) * 10;


    const TotalScore3 = FiberScore + WholeGrainScore3 + WholeFruitScore + FruitScore + VegScore + GreansAndBeansScore + WholePlantAndSeefoodProteinScore
      + ProteinScore3 + PUFAMUFAScore + SaturatedFatScore + AddedSugarScore + SodiumScore3 + OtherCalScore;

    scoreArray1[2] = "" + parseFloat(Math.round((parseFloat(TotalScore3 * 100)).toFixed(2)) / 100).toFixed(2);
    setScoreArray(scoreArray1);

  }


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
          <DropDown valArray={valueArray} title={dropdownItem} handleDropdownSelect={handleDropdownSelect}/>
        </Row>
        <Row>
          <Col>
            {allArray && allArray.length ?
              <CheckboxList checkArray={checkArray1} handleCheckSelect={handleCheckSelect} />
              :
              <Spinner animation="border" size="sm" />
            }
          </Col>
          <Col>
            <ScoreComponent scoreArray={scoreArray} />
          </Col>
        </Row>
        <Row>
          <CheckoutComponent checkItems={checkItems} handleCheckout={handleCheckout}/>
        </Row>
        <Row
          style={{
            paddingBottom: '2rem'
          }}
        >
          <ImproveScore
            improveArray={improveArray}
            handleCheckSelect={handleCheckSelect}
            handleImprovedScore={handleImprovedScore}
          />
        </Row>
      </Container>
    </div>
  );
}
