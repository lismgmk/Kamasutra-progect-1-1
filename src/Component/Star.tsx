import React from "react";

type RatingPropsStar = {
    selected: boolean
    setValue: (value: void)=> void

}

export function Star(props: RatingPropsStar) {



    return(
        <span onClick={()=>props.setValue()}>
            {props.selected ? <b>star</b> : 'star'}
        </span>

    )
}