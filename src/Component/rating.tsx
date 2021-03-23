import React, {useState} from "react";
import {Star} from "./Star";

export type ratingValueType =  1|2|3|4|5|6


type ratingType = {
    setValue: (value: ratingValueType)=> void
    value: ratingValueType
}

export let Rating = (props: ratingType) => {
    console.log('render rating');





    return (
        <div>

            <Star selected = {props.value > 0} setValue={()=>props.setValue(1)} />;
            <Star selected = {props.value > 1} setValue={()=>props.setValue(2)}/>;
            <Star selected = {props.value > 2} setValue={()=>props.setValue(3)}/>;
            <Star selected = {props.value > 3} setValue={()=>props.setValue(4)}/>;
            <Star selected = {props.value > 4} setValue={()=>props.setValue(5)}/>;
            <Star selected = {props.value > 5} setValue={()=>props.setValue(6)}/>

        </div>
    )



};

