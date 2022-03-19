import { createAction, createReducer } from "@reduxjs/toolkit";
import * as actionTypes from "./actionTypes"
import { climateInitialState } from "./state";

const getAddressStatus = createAction<RequestAction>(actionTypes.GET_CLIMATE_STATUS);
const setAddressField = createAction<SetFieldAction>(actionTypes.SET_ADDRESS_FIELD);
const setClimate = createAction<ClimateInterface>(actionTypes.SET_CLIMATE);

export default createReducer(climateInitialState,
  (builder) => {
    builder
      .addCase(getAddressStatus, (state, action) => {
        const { payload: { status, value } } = action
        state.requests.getClimate[status] = value;
      })
      .addCase(setAddressField, (state, action) => {
        const { payload: { value } } = action
        state.address = value;
      })
      .addCase(setClimate, (state, action) => {
        const { payload } = action
        state.climate = payload;
      })
  }
);
