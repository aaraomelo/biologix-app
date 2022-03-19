export const climateInitialState: ClimateState = {
  requests: {
    getClimate: {
      pending: false,
      failed: false,
      suceeded: false,
    }
  },
  address: "",
  climate: {
    feels_like: null,
    humidity: null,
    pressure: null,
    temp: null,
    temp_max: null,
    temp_min: null
  }
};
