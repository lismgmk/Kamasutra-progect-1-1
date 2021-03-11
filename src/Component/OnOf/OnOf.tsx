import React, {useState} from 'react';
import s from './OnOf.module.css'

type onOfType = {
    // onOf: boolean
}





let OnOf = (props : onOfType) => {

    let [onOf, setOnOf ]= useState(false)

    let ractanularOn = {
        width: '50px',
        height: '50px',
        border: '1px solid #000',
        margin: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: onOf ? 'green' : 'white'
    }

    let ractanularOff = {
        width: '50px',
        height: '50px',
        border: '1px solid #000',
        margin: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: onOf ? 'white' : 'red'
    }

    let circle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '1px solid #000',
        margin: '20px',
        backgroundColor: onOf ? 'green' : 'red'
    }

    return(
        <div className={s.container}>

            <div style={ractanularOn} onClick={() => { setOnOf(true) }}>On</div>
            <div style={ractanularOff} onClick={() => { setOnOf(false) }} >Off</div>
            <div style={circle} ></div>
        </div>
    )

}

export default OnOf