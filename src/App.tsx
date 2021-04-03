import React, {useState} from 'react';
import './App.css';
import Accordion from './Component/Accordion/Accordion'
import {Rating} from "./Component/rating";
import OnOf from "./Component/OnOf/OnOf";
import UncontrolledAccordion from "./Component/UncontrolledAccordion/UncontrolledAccordion";
import {Select} from "./Component/Select/Select";


function App() {

    const [value, setValue] = useState<1|2|3|4|5|6>(1);
    const [collapsed, setCollapsed ] = useState(false);
    const [onOf, setOnOfs ]= useState<boolean>(false);
    const elem = [{title: 'Vova', value: 1}, {title: 'Igor', value: 2}, {title: 'Sergey', value: 3}];
  return (
    <div className="App">


        Article 1
        <Rating setValue={setValue} value = {value}/>

        {/*<Accordion titleValue = {'Меню'} collapsed = {true}/>*/}
        <Accordion
            titleValue = {'This UncontrolledAccordion'}
            collapsed = {collapsed}
            setCollapsed = {() => setCollapsed(!collapsed)}
            items = {[]}
            onClick={()=>{}}
        />
        <UncontrolledAccordion  titleValue = {'Collapsed'}/>

        Article 2


        Article 3
        <OnOf
            onOfs={onOf}
            setOnOfs={setOnOfs}
        />
        <Select
            item = {elem}
            // changeValue = {()=>{}}
            // onClick = {()=>{}}
        />

    </div>
  )
};








export default App;
