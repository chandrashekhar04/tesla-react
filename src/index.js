import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './tesla/Header';
import Section from './tesla/Section'
import './tesla/Home.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Section
      carname= "Model 3"
      cardescription="Order Online for touchless delivery"
      leftbtn="CUSTOM ORDER"
      rightbtn="EXISTING INVENTORY"
      arrow= {true}
      backgroundImage="model-3.jpg"
    />
    <Section 
      carname= "Model Y"
      cardescription="Order Online for touchless delivery"
      leftbtn="CUSTOM ORDER"
      rightbtn="EXISTING INVENTORY"
      backgroundImage="model-y.jpg"
    />
    <Section
      carname= "Model S"
      cardescription="Order Online for touchless delivery"
      leftbtn="CUSTOM ORDER"
      rightbtn="EXISTING INVENTORY"
      backgroundImage="model-s.jpg"
    />
    <Section
      carname= "Model X"
      cardescription="Order Online for touchless delivery"
      leftbtn="CUSTOM ORDER"
      rightbtn="EXISTING INVENTORY"
      backgroundImage="model-x.jpg"
    />
    <Section
      carname= "Solar Panels"
      cardescription="Lower Cost Solar Panels in India"
      leftbtn="ORDER NOW"
      rightbtn="LEARN MORE"
      backgroundImage="solar-panel.jpg"
    />
    <Section
      carname= "Solar Roof"
      cardescription="Produce Clean Energy from your roof"
      leftbtn="ORDER NOW"
      rightbtn="LEARN MORE"
      backgroundImage="solar-roof.jpg"
    />
    <Section
      carname= "Accessories"
      leftbtn="ORDER NOW"
      backgroundImage="accessories.jpg"
    />
  </>
);
