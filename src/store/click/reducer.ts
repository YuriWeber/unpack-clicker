import { Reducer } from "@reduxjs/toolkit"
import { ActionType } from "../actions/action-types"

type State = {
    click: number,
    mouseClick: number,
    clickValue: number
}

type Action = {
    type: string
}

const INITIAL_STATE = {
    click: 0,
    mouseClick: 0,
    clickValue: 2,
}

const reducer: Reducer = (state: State = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case ActionType.CLICK:
            // adciona ao click o clickValue e +1 para o mouseClick
            return { ...state, click: (state.click + state.clickValue), mouseClick: (state.mouseClick + 1) }
        default:
            return state
    }
}

export default reducer