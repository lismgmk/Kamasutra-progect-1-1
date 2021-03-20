import React, {useState} from 'react';
import s from './OnOf.module.css'

type onOfType = {
    onOfs: boolean
    setOnOfs: (value: boolean)=> void
}





let OnOf = (props : onOfType) => {



    let ractanularOn = {
        width: '50px',
        height: '50px',
        border: '1px solid #000',
        margin: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.onOfs ? 'green' : 'white'
    }

    let ractanularOff = {
        width: '50px',
        height: '50px',
        border: '1px solid #000',
        margin: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.onOfs ? 'white' : 'red'
    }

    let circle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '1px solid #000',
        margin: '20px',
        backgroundColor: props.onOfs ? 'green' : 'red'
    }

    return(
        <div className={s.container}>

            <div style={ractanularOn} onClick={()=>props.setOnOfs(true) }>On</div>
            <div style={ractanularOff} onClick={ () =>props.setOnOfs(false) } >Off</div>
            <div style={circle} ></div>
        </div>
    )

}

export default OnOf