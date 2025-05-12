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

export interface IapiResponse {
  news: Array<Inew>
  page: number
  status: string
}

export interface Inew {
  author: string,
  category: Array<string>,
  description: string,
  id: string,
  image: string,
  language: string,
  published: string,
  title: string,
  url: string
}

