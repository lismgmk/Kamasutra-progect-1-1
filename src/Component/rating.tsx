import React from "react";
import {Simulate} from "react-dom/test-utils";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export let Rating = (props: RatingPropsType) => {
    console.log('render rating');

    if(props.value === 1){
        return (
            <div>
                <Star selected = {true}/>
                <Star selected = {false}/>
                <Star selected = {false}/>
                <Star selected = {false}/>
                <Star selected = {false}/>
            </div>
        )
    }; if(props.value === 2){
        return (
            <div>
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {false}/>
                <Star selected = {false}/>
                <Star selected = {false}/>
            </div>
        )
    }; if(props.value === 3){
        return (
            <div>
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {false}/>
                <Star selected = {false}/>
            </div>
        )
    }; if(props.value === 4){
        return (
            <div>
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {false}/>
            </div>
        )
    }; if(props.value === 5){
        return (
            <div>
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {true}/>

            </div>
        )
    };
    return (
        <div>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
        </div>
    )


};

type RatingPropsStar = {
    selected: boolean
}

function Star(props: RatingPropsStar) {
    if(props.selected === true){
        return <span> <b>star</b> </span>
    } else{
        return <span> star </span>
    }

}