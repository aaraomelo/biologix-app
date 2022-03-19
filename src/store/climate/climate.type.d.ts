
type ClimateState = {
  requests: {
    getClimate: RequestInterface,
  },
  address: string,
  climate: ClimateInterface
}

interface ClimateInterface {
  feels_like: number | null
  humidity: number | null
  pressure: number | null
  temp: number | null
  temp_max: number | null
  temp_min: number | null
}