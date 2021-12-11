import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export const DropDown = (props) => {

  return (
    <>
      <DropdownButton
        style={{ width: "45%", margin: "auto" }}
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