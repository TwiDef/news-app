export interface Iposition {
  coords: {
    accuracy: number
    altitude: null | number
    altitudeAccuracy: null | number
    heading: null | number
    latitude: number
    longitude: number
    speed: null | number
  }
  timestamp: number
}

export interface IweatherCode {
  code: number,
  status: string,
  img: string
}