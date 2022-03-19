import { RootState } from "..";
import { GET } from "../request/actionCreators";
import * as actionTypes from "./actionTypes"

export const setAddress = (payload: SetFieldAction) =>
  ({ type: actionTypes.SET_ADDRESS_FIELD, payload });

export const getClimateStatus = (payload: RequestAction) =>
  ({ type: actionTypes.GET_CLIMATE_STATUS, payload });

  export const setClimate = (payload: ClimateInterface) =>
  ({ type: actionTypes.SET_CLIMATE, payload });

export const getClimate = () => (dispatch: any, getState: () => Readonly<RootState>) => {
  const state = getState();
  const address = state.climate.address;
  const baseUrl = state.request.baseURL;
  const url = `${baseUrl}weather?q=${address}&appid=948a9eb0ea9cc5eb81d70b3f8b79eed8`;
  return GET(url, dispatch, getClimateStatus)
    .then((response) => {
      dispatch(setClimate(response.data.main))
    })
}