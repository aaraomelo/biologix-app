import { createAction, createReducer } from "@reduxjs/toolkit";
import * as actionTypes from "./actionTypes"
import { climateInitialState } from "./state";

const getAddressStatus = createAction<RequestAction>(actionTypes.GET_CLIMATE_STATUS);

export default createReducer(climateInitialState,
  (builder) => {
    builder
      .addCase(getAddressStatus, (state, action) => {
        const { payload: { status, value } } = action
        state.requests.getClimate[status] = value;
      })
  }
);
