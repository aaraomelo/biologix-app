import { RootState } from "..";
import { GET } from "../request/actionCreators";
import * as actionTypes from "./actionTypes"

export const setCityField = (payload: SetCityAction) =>
  ({ type: actionTypes.SET_CITY_FIELD, payload });

export const getWeatherStatus = (payload: RequestAction) =>
  ({ type: actionTypes.GET_WEATHER_STATUS, payload });

export const setWeather = (payload: WeatherInterface) =>
  ({ type: actionTypes.SET_WEATHER, payload });

export const setGeolocation = (payload: GeoLocationInterface) =>
  ({ type: actionTypes.SET_GEOLOCATION, payload });

export const getGeolocation = () => async (dispatch: any, getState: () => RootState) => {
  await navigator.geolocation.getCurrentPosition(
    (position) => {
      dispatch(setGeolocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }))
    }, (error) => {
      console.log(error);
    });
}

export const getWeatherByGeolocation = () => (dispatch: any, getState: () => RootState) => {
  return navigator.geolocation.getCurrentPosition(
    (position) => {
      dispatch(setGeolocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }))
      const {
        request: { baseURL, appId },
        weather: {
          geolocation: { latitude, longitude }
        }
      } = getState();
      const url = `${baseURL}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${appId}&lang=pt_br`;
      return GET(url, dispatch, getWeatherStatus)
        .then((response) => {
          dispatch(setWeather(response.data))
        })
    }, (error) => {
      console.log(error);
    });
}

export const getWeatherByCity = () => (dispatch: any, getState: () => RootState) => {
  const { request: { baseURL, appId }, weather: { city } } = getState();
  const url = `${baseURL}weather?q=${city}&units=metric&appid=${appId}&lang=pt_br`;
  return GET(url, dispatch, getWeatherStatus)
    .then((response) => {
      dispatch(setWeather(response.data))
    })
}

