import React from 'react';
import '../../App.css';

type AccordionPropsTitleValue = {
    titleValue: string,
    collapsed: boolean
}

let Accordion = (props: AccordionPropsTitleValue) => {console.log('render Accordion');
    if(props.collapsed === true){
        return(
            <div>
                <AccordionTitle title = {props.titleValue} />
                <AccordionBody />
            </div>
        )
    }  else {
        return(
            <div>
                <AccordionTitle title = {props.titleValue} />
            </div>
        )
    }

};

type AccordionTitlePropsTitle = {
    title: string
}

let AccordionTitle = (props: AccordionTitlePropsTitle)=>{


    return(
        <div>
            <h3>{props.title}</h3>
        </div>
    )
};

let AccordionBody = ()=> {
    console.log('render AccordionBody');
    return(
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
};

export default Accordion;