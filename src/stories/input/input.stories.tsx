import React, {ChangeEvent, useRef, useState} from 'react';

import {Simulate} from "react-dom/test-utils";
// import input = Simulate.input;
import OnOf from "../../Component/OnOf/OnOf";

export default {
    title: 'input'
}

export const СontrolledInput = ()=>{

    const textInput = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')
    const getValueInput = ()=> {
        const valueInput = textInput.current as HTMLInputElement
        setValue(valueInput.value)
    }



    return <div>
        <input  ref={textInput} />
        <button onClick={getValueInput}>GetValue</button>
        actual value  -  {value}
    </div>

}
export const UncontrolledInput = ()=>{

    const [value, setValue] = useState('')
    const getValueInput = (e: ChangeEvent<HTMLInputElement>)=> {
       const el = e.currentTarget.value;
       setValue(el)
    }



    return <div>
        <input value={value} onChange={getValueInput} />
        actual value  -  {value}
    </div>

}


