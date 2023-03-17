import { Routes, Route } from "react-router";
import CategoriesPreview from "./categories-preview/categories-preview";
import Category from "./category/category";

const Houses = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Houses;