import React from 'react';
import './App.css';

import { DropDown } from '../src/components/DropDown';

function HomePage() {

  const valueArray = ['Weekly Grocery Trip', 'Daily Grocery', 'Pharmacy list'];


  return (
    <div className="App">
      <header className="App-header">
        FHI Application
      </header>
      <main>
        <h1>What are you shopping for ?</h1>
        <DropDown valArray={valueArray} title={''} />
      </main>
    </div>
  );
}

export default HomePage;
