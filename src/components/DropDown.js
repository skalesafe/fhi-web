import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export const DropDown = (props) => {

  const css = `@media (max-width: 450px) {
    .ddbtn {
      width: 55%;
      margin: auto
    }
  }
  @media (min-width:451px) {
    .ddbtn {
      width: 40%;
      margin: auto
    }
  }
  `;

  return (
    <>
      <style scoped>{css}</style>
      <DropdownButton
        className="ddbtn"
        title={ props.title ? props.title : props.valArray && props.valArray.length ? props.valArray[0] : "Grocery Lists"}
        variant='primary'
      >
        {props.valArray.map((val) => (
          <Dropdown.Item className="drop-down" key={val} eventKey={val}
            onClick={props.handleDropdownSelect}
          >
            {val}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>

  );
}