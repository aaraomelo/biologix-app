import React, { cloneElement } from 'react'
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import climateReducer from "./climate/reducer";

const reducer = {
    climate: climateReducer
}

export const store = configureStore({ reducer })

export const StoreProvider = ({ children }: any) =>
    cloneElement(<Provider store={store} />, { children })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
