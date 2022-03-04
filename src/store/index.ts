import { configureStore } from "@reduxjs/toolkit";
import clickReducer from "./click/reducer"

export const store = configureStore({
    reducer: {
        click: clickReducer,
    },
})

export type State = ReturnType<typeof store.getState>