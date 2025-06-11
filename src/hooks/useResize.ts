import React from "react";

export const useResize = () => {
  const [width, setWidth] = React.useState<number>(window.innerWidth)
  const [md, setMd] = React.useState<boolean>(false)
  const [lg, setLg] = React.useState<boolean>(false)
  const [xl, setXl] = React.useState<boolean>(false)

  React.useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        setWidth(window.innerWidth)
      }, 1500)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  React.useEffect(() => {
    width > 768 && width < 1024 ? setMd(true) : setMd(false)
    width > 1024 && width < 1280 ? setLg(true) : setLg(false)
    width > 1280 ? setXl(true) : setXl(false)
  }, [width])

  return { md, lg, xl }
}