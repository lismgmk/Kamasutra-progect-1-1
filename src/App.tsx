import React from 'react';
import './App.css';
import Accordion from './Component/Accordion/Accordion'
import {Rating} from "./Component/rating";

function App() {
  return (
    <div className="App">




        <AppTitle title = {'this App component'}/>

        Article 1
        <Rating value = {3}/>

        <Accordion titleValue = {'Меню'} collapsed = {true}/>
        <Accordion titleValue = {'This Accordion'} collapsed = {true}/>

        Article 2
        <Rating value = {0}/>
        <Rating value = {1}/>
        <Rating value = {2}/>
        <Rating value = {4}/>
        <Rating value = {5}/>
    </div>
  )
}

type ApptitlePropsTitle = {
    title: string
}

let AppTitle = (props: ApptitlePropsTitle) => {
    return(
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

;




export default App;
