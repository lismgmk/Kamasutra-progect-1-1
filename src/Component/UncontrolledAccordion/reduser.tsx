type ActionType = {
    type: string
}

export type stateType = {
    collapsed: boolean
}

export const reduser = (state: stateType, action: ActionType):stateType => {
    switch (action.type) {
        case 'TOOGLE COLLAPSED':
            // state.collapsed = !state.collapsed
            // console.log(state)
            return {...state, collapsed: !state.collapsed}


        default:
            throw new Error('Bad action type')
    }

    return state
}