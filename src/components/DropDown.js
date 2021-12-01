import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export const DropDown = (props) => {

  // const [value, setValue] = useState('');
  // const handleSelect = (e) => {
  //   setValue(e);
  // }


  return (
    <>
      <DropdownButton
        style={{ width: "500px", margin: "auto" }}
        title="Grocery Lists"
        // onSelect={handleSelect}
        variant='primary'
      >
        {props.valArray.map((val) => (
          <Dropdown.Item className="drop-down" key={val} eventKey={val}>{val}</Dropdown.Item>
        ))}
      </DropdownButton>
    </>

  );
}