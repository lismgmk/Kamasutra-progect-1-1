import React from 'react';
import '../../App.css';

export type AccordionPropsTitleValue = {
    /**
     * Element title
     */
    titleValue: string
    /**
     * Element that show status for accordion
     */
    collapsed: boolean
    /**
     * Elements that changed accordion
     */
    setCollapsed: ()=> void
    /**
     * Color text accordion
     */
    color?: string
}



export let Accordion = (props: AccordionPropsTitleValue) => {

        return(
            <div>
                <AccordionTitle
                    setCollapsed = {props.setCollapsed}
                    title = {props.titleValue}
                    collapsed = {props.collapsed}
                    color = {props.color}
                />
                { !props.collapsed && <AccordionBody/> }
            </div>
        )


};



type AccordionTitlePropsTitle = {
    title: string
    collapsed: boolean
    setCollapsed: ()=> void
    color?: string
}

let AccordionTitle = (props: AccordionTitlePropsTitle)=>{


    return (
        <div>
            <h3
                style={{color: props.color ? props.color : 'red'}}
                onClick={props.setCollapsed}>{props.title}</h3>
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