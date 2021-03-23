import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from "@storybook/addon-actions";

import {Accordion, AccordionPropsTitleValue} from './Accordion';

export default {
    title: 'Accordion stories',
    component: Accordion
}


const callback = () => {
    action('on or of active')
};

export const ModeCollapsed = () =>{

    return <Accordion
        titleValue= {'This UncontrolledAccordion'}
        collapsed = {true}
        setCollapsed = {callback}/>
}

export const EmptyCollapsed = () =>{

    return <Accordion
        titleValue= {'This UncontrolledAccordion'}
        collapsed = {false}
        setCollapsed = {callback}/>
}


export const ChangeCollapsed = () =>{

    const [collapsed, setCollapsed ] = useState<boolean>(true);

    return <Accordion
        titleValue= {'This UncontrolledAccordion'}
        collapsed = {collapsed}
        setCollapsed = {() => setCollapsed(!collapsed)
        }/>
}