import { useEffect, useState } from "react"
import { getGifs } from "../../utils/GetGifs"

export const useFetchGifs = ( category ) => {
  const [images, setImages] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    getImages()
  }, [category])

  const getImages = async () => {
    const images = await getGifs(category)
    setImages(images)
    setisLoading(false)
  }

  return {
    images,
    isLoading,
  }
}
