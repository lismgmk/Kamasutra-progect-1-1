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
    items: ItemType[]
    onClick: (value : any) => void
}


type ItemType = {
    title: string
    value: any
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
                { !props.collapsed && <AccordionBody items = {props.items} onClick = {props.onClick}/> }
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

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value : any) => void
}

let AccordionBody = (props: AccordionBodyPropsType)=> {
    return(
        <div>
            <ul>
                {props.items.map((i, index) => <li
                    onClick={() => { props.onClick(i.value) }}
                    key = {index}
                >{i.title}</li>)}
            </ul>
        </div>
    )
};

export default Accordion;