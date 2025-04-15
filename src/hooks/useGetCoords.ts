import React from "react";
import { Iposition } from "../@types";

export const useGetCoords = () => {
  let [position, setPosition] = React.useState<Iposition | undefined>()
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

  function successful(position: Iposition): void {
    setPosition(position)
    setSuccess(true)
  }

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successful, error, options)
    }
  }, [])

  return { position, success, fail }
}