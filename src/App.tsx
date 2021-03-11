import React from 'react';
import './App.css';
import Accordion from './Component/Accordion/Accordion'
import {Rating} from "./Component/rating";
import OnOf from "./Component/OnOf/OnOf";
import UncontrolledAccordion from "./Component/UncontrolledAccordion/UncontrolledAccordion";



function App() {
  return (
    <div className="App">






        Article 1
        <Rating />

        <Accordion titleValue = {'Меню'} collapsed = {true}/>
        <Accordion titleValue = {'This UncontrolledAccordion'} collapsed = {false}/>
        <UncontrolledAccordion  titleValue = {'Collapsed'}/>

        Article 2


        Article 3
        <OnOf />
        <OnOf />
        <OnOf />

    </div>
  )
}








export default App;
