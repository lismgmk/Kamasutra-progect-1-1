import React from "react";

type RatingPropsStar = {
    selected: boolean
}

export function Star(props: RatingPropsStar) {
    if (props.selected === true) {
        return <span> <b>star</b> </span>
    } else {
        return <span> star </span>
    }

}