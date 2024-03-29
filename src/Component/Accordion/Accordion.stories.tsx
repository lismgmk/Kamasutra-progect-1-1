import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from "@storybook/addon-actions";

import {Accordion, AccordionPropsTitleValue} from './Accordion';

export default {

    title: 'components/Accordion stories',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Colors',
            }
        }
    }
}

const Template: Story<AccordionPropsTitleValue> = (args) => <Accordion {...args}/>;

const callback = () => action('This action');
const onClickCallBack = () => action('This action Click');


export const AccordionEmpty = Template.bind({});
AccordionEmpty.args = {
    setCollapsed:  callback,
    titleValue: "Empty",
    collapsed: true,
    items: []
};

export const AccordionFull = Template.bind({});
AccordionFull.args = {
    setCollapsed:  callback,
    titleValue: "Full",
    collapsed: false,
    items: [{title: 'Vova', value: 1}, {title: 'Igor', value: 2}, {title: 'Sergey', value: 3}],
    onClick: onClickCallBack
};


export const ChangeAccordion: Story<AccordionPropsTitleValue> = (args: AccordionPropsTitleValue)=>{
    const [value, setValue ] = useState(false);
    const changedValue = ()=> setValue(!value)

    return <Accordion {...args}
                      collapsed={value}
                      setCollapsed={changedValue}
                      items={[{title: 'Vova', value: 1}, {title: 'Igor', value: 2}, {title: 'Sergey', value: 3}]}
                      onClick={(id) => {alert(`user ${id}`)}}
                      titleValue={"Changed Title"}
    />
};

