import React, {useState} from "react";
import {Star} from "./Star";



export let Rating = () => {
    console.log('render rating');

    let [values1, setValue1] = useState(false);
    let [values2, setValue2] = useState(false);
    let [values3, setValue3] = useState(false);
    let [values4, setValue4] = useState(false);
    let [values5, setValue5] = useState(false);
    let [values6, setValue6] = useState(false);


    return (
        <div>
            <Star selected = {values1}/><button onClick={ () => {setValue1(true)} }>1</button>;
            <Star selected = {values2}/><button onClick={ ()=> {setValue2(true)} }>2</button>;
            <Star selected = {values3}/><button onClick={ ()=> {setValue3(true)} }>3</button>;
            <Star selected = {values4}/><button onClick={ ()=> {setValue4(true)} }>4</button>;
            <Star selected = {values5}/><button onClick={ ()=> {setValue5(true)} }>5</button>;
            <Star selected = {values6}/><button onClick={ ()=> {setValue6(true)} }>6</button>

        </div>
    )



};

