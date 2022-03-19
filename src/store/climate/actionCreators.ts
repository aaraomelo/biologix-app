import { RootState } from "..";
import { GET } from "../requests";
import * as actionTypes from "./actionTypes"

export const getAddressStatus = (payload: any) =>
  ({ type: actionTypes.GET_CLIMATE_STATUS, payload });
