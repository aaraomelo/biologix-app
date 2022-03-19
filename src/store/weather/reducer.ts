import { createAction, createReducer } from "@reduxjs/toolkit";
import * as actionTypes from "./actionTypes"
import { weatherInitialState } from "./state";

const getWeatherStatus = createAction<RequestAction>(actionTypes.GET_WEATHER_STATUS);
const setCityField = createAction<SetCityAction>(actionTypes.SET_CITY_FIELD);
const setWeather = createAction<WeatherInterface>(actionTypes.SET_WEATHER);
const setGeolocation = createAction<GeoLocationInterface>(actionTypes.SET_GEOLOCATION);

export default createReducer(weatherInitialState,
  (builder) => {
    builder
      .addCase(getWeatherStatus, (state, action) => {
        const { payload: { status, value } } = action
        state.requests.getWeather[status] = value;
      })
      .addCase(setCityField, (state, action) => {
        const { payload: { value } } = action
        state.city = value;
      })
      .addCase(setWeather, (state, action) => {
        const { payload } = action
        state.weather = payload;
      })
      .addCase(setGeolocation, (state, action) => {
        const { payload } = action
        state.geolocation = payload;
      })
  }
);
