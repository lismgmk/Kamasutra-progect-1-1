import React, {useState} from 'react';
import '../../App.css';

type AccordionPropsTitleValue = {
    titleValue: string,
    collapsed?: boolean
}



let UncontrolledAccordion = (props: AccordionPropsTitleValue) => {console.log('render UncontrolledAccordion');

        let [collapsed, setCollapsed] = useState(true);



        return(
            <div>
                <AccordionTitle title = {props.titleValue} />
                <button onClick={() => { setCollapsed(false) }}>TOGGLE</button>
                { !collapsed && <AccordionBody/> }
            </div>
        )


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
                <li>11212</li>
                <li>245454</li>
                <li>3</li>
            </ul>
        </div>
    )
};

export default UncontrolledAccordion;