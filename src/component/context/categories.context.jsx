import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase"

export const CategoriesContext = createContext({
  CategoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [CategoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
    }

    getCategoriesMap()
  }, [])
  const value = { CategoriesMap, setCategoriesMap }
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
}