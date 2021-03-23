import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from "@storybook/addon-actions";

import {Rating, ratingValueType} from './rating';

export default {
    title: 'Rating stories',
    component: Rating,
}

// export const Rating1 = () => <Rating value={1} setValue={}/>;
// export const Rating2 = () => <Rating value={2} setValue={}/>;
// export const Rating3 = () => <Rating value={3} setValue={}/>;
// export const Rating4 = () => <Rating value={4} setValue={}/>;
// export const Rating5 = () => <Rating value={5} setValue={}/>;
// export const Rating6 = () => <Rating value={6} setValue={}/>;

export const RatingChanged = () =>{


    const[rating, setValue] = useState<ratingValueType>(1);


    return <Rating value={rating} setValue={setValue}/>

}



