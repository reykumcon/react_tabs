import './App.css';
import React, { useState } from 'react';
import Tab from './components/Tabs';
import Message from './components/Message';

function App() {
  const allTabs = [
    { name: "Tab 1", message: "Tab 1 content is showing here" },
    { name: "Tab 2", message: "Tab 2 content is showing here" },
    { name: "Tab 3", message: "Tab 3 content is showing here" }
  ];

  const [tabArray, setTabArray] = useState(allTabs);
  const [tabIndex, setTabIndex] = useState(0);
  
  return (
    <div className="App">
      <Tab 
        tabArray = { tabArray }
        tabIndex = { tabIndex }
        setTabIndex = { setTabIndex }
      />
      <Message tabArray = { tabArray } tabIndex = { tabIndex } />
    </div>
  );
}

export default App;
