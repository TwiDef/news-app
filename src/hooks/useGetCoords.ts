import React from "react";
import { Iposition } from "../@types";

export const useGetCoords = () => {
  let [coords, setCoodrs] = React.useState<{ latitude: number, longitude: number } | undefined>()
  let [success, setSuccess] = React.useState<boolean>(false)
  let [fail, setFail] = React.useState<boolean>(false)

  const options: { enableHighAccuracy: boolean, maximumAge: number, timeout: number } = {
    enableHighAccuracy: false,
    maximumAge: 1000,
    timeout: 3600
  }

  function error(): void {
    setFail(true)
  }

  function successful(position: Iposition) {
    let { latitude, longitude } = position.coords
    setCoodrs({ latitude, longitude })
    setSuccess(true)
  }

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successful, error, options)
    }
  }, [])

  return { coords, success, fail }
}