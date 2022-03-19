import { RootState } from "..";
import { GET } from "../request/actionCreators";
import * as actionTypes from "./actionTypes"

export const setAddress = (payload: SetFieldAction) =>
  ({ type: actionTypes.SET_ADDRESS_FIELD, payload });

export const getClimateStatus = (payload: RequestAction) =>
  ({ type: actionTypes.GET_CLIMATE_STATUS, payload });

export const setClimate = (payload: ClimateInterface) =>
  ({ type: actionTypes.SET_CLIMATE, payload });

export const getClimate = () => (dispatch: any, getState: () => RootState) => {
  const { request: { baseURL, appId }, climate: { address } } = getState();
  const url = `${baseURL}weather?q=${address}&appid=${appId}`;
  return GET(url, dispatch, getClimateStatus)
    .then((response) => {
      dispatch(setClimate(response.data.main))
    })
}
