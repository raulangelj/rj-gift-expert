import { useState } from "react"
import { GifGrid, AddCategory } from "../components"

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Friends', 'Iron Man'])

  const onAddCategory = ( newCategory ) => {
    if (categories.includes(newCategory)) return
    setCategories((oldState) => [newCategory, ...oldState])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        setCategories={setCategories}
        onNewCategory={ onAddCategory }
      />
      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    </>
  )
}

export { GifExpertApp }