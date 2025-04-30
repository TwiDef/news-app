import React from "react";
import { fake_data } from './fake_data';
import { IapiResponce } from "../@types";

export const useFakeFetch = () => {
  const [data, setData] = React.useState<IapiResponce>()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isError, setIsError] = React.useState<unknown>()

  React.useEffect(() => {
    const fakeFetch = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(fake_data)
        }, 3000)
      })
    }

    const getData = async (): Promise<void> => {
      setIsLoading(true)
      try {
        const res: unknown = await fakeFetch()
        setData(res as IapiResponce)
      } catch (error: unknown) {
        setIsError(error)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [])

  return { data, isLoading, isError }
}