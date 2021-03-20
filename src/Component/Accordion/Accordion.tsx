import React from 'react';
import '../../App.css';

type AccordionPropsTitleValue = {
    titleValue: string
    collapsed: boolean
    setCollapsed: ()=> void
}

// let Accordion1 = (props: AccordionPropsTitleValue) => {console.log('render UncontrolledAccordion');
//     if(props.collapsed === true){
//         return(
//             <div>
//                 <AccordionTitle title = {props.titleValue} />
//
//             </div>
//         )
//     }  else {
//         return(
//             <div>
//                 <AccordionTitle title = {props.titleValue} />
//                 <AccordionBody />
//             </div>
//         )
//     }
//
// };

let Accordion = (props: AccordionPropsTitleValue) => {

        return(
            <div>
                <AccordionTitle
                    setCollapsed = {props.setCollapsed}
                    title = {props.titleValue}
                    collapsed = {props.collapsed}
                />
                { !props.collapsed && <AccordionBody/> }
            </div>
        )


};



type AccordionTitlePropsTitle = {
    title: string
    collapsed: boolean
    setCollapsed: ()=> void
}

let AccordionTitle = (props: AccordionTitlePropsTitle)=>{


    return(
        <div>
            <h3 onClick={props.setCollapsed} >{props.title}</h3>
        </div>
    )
};

let AccordionBody = ()=> {
    return(
        <div>
            <ul>
                <li>Uladzimir</li>
                <li>Lis</li>
                <li>React</li>
            </ul>
        </div>
    )
};

export default Accordion;