import React, {useReducer} from 'react';
import '../../App.css';
import {reduser, stateType} from "./reduser";

type AccordionPropsTitleValueType = {
    titleValue: string,
    collapsed?: stateType

}



let UncontrolledAccordion = (props: AccordionPropsTitleValueType) => {
    console.log('render UncontrolledAccordion');

    // let [collapsed, setCollapsed] = useState(true);
    let [state, dispatch] = useReducer(reduser, {collapsed: false});



        return(
            <div>
                <AccordionTitle
                    // collapsed={collapsed}
                    onClick={() => { dispatch({type:'TOOGLE COLLAPSED'}) }}
                    title = {props.titleValue} />
                { !state.collapsed && <AccordionBody/> }
            </div>
        )


};



type AccordionTitlePropsTitle = {
    title: string
    // collapsed: stateType
    onClick: ()=> void
}

let AccordionTitle = (props: AccordionTitlePropsTitle)=>{
    return(
        <div>
            <h3 onClick={()=> {props.onClick()}}>{props.title}</h3>
        </div>
    )
};

let AccordionBody = ()=> {
    console.log('render AccordionBody');
    return(
        <div>
            <ul>
                <li>11212</li>
                <li>245454</li>
                <li>3</li>
            </ul>
        </div>
    )
};

export default UncontrolledAccordion;