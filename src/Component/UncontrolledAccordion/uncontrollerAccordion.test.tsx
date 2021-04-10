import {reduser, stateType} from "./reduser";


test('expected true', () => {

    const state : stateType = {
        collapsed: false
    }

    const newState = reduser(state, {type: 'TOOGLE COLLAPSED'})

    expect(newState.collapsed).toBe(true)
})


test('expected false', () => {

    const state : stateType = {
        collapsed: true
    }

    const newState = reduser(state, {type: 'TOOGLE COLLAPSED'})

    expect(newState.collapsed).toBe(false)
})


test('expected error', () => {

    const state : stateType = {
        collapsed: true
    }


    expect(()=>{
        reduser(state, {type: 'faketype'})
    }).toThrowError()
})

