import React from "react";
import { fake_data } from './fake_data';

export const useFakeFetch = () => {
  const [news, setNews] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState({})

  React.useEffect(() => {
    const fakeFetch = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(fake_data)
        }, 3000)
      })
    }

    const getData = async () => {
      setLoading(true)
      try {
        const res = await fakeFetch()
        setNews(res!)
      } catch (error) {
        setError(error!)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  return { news, loading, error }
}