import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import AddItemForm from './components/AddItemForm';
import MyItems from './components/MyItems';
import Analytics from './components/Analytics';

function App() {
  const [showMyItems, setShowMyItems] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [activeTab, setActiveTab] = useState('')

  const toggleMyItems = () => {
    setShowMyItems(!showMyItems);
    setActiveTab("MyItems");
    setShowAddItem(false);
    setShowAnalytics(false)
  };

  const toggleAddItem = () => {
    setShowAddItem(!showAddItem);
    setActiveTab("AddItem");
    setShowMyItems(false);
    setShowAnalytics(false)
  };

  const toggleAnalytics = () => {
    setShowAnalytics(!showAnalytics)
    setActiveTab("Analytics");
    setShowAddItem(false);
    setShowMyItems(false);
  };

  return (
    <div className="App">
      <Header toggleMyItems={toggleMyItems} toggleAddItem={toggleAddItem} toggleAnalytics={toggleAnalytics} activeTab={activeTab} />

      {showAddItem && (
        <div className="container">
          <div className="row">
            <AddItemForm />
          </div>
        </div>
      )}

      {showMyItems && (
        <div className="container">
          <div className="row">
            <MyItems />
          </div>
        </div>
      )}

      {showAnalytics && (
        <div className="container">
          <div className="row">
            <Analytics />
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
