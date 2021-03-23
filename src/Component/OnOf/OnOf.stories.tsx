import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from "@storybook/addon-actions";

import {OnOf} from './OnOf';

export default {
    title: 'OnOf stories',
    component: OnOf
}

const callback = () => {
    action('on or of active')
}

export const OnActive = () => {
    return <OnOf
        onOfs={true}
        setOnOfs={callback}
    />
}

export const OfActive = () => {
    return <OnOf
        onOfs={false}
        setOnOfs={callback}
    />
}

export const OnOfChanged = () => {

    const [onOf, setOnOfs ]= useState<boolean>(false)

    return <OnOf
        onOfs={onOf}
        setOnOfs={setOnOfs}
    />
}

