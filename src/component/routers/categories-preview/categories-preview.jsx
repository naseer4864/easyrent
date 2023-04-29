import { Fragment, useContext } from "react";
import CategoryPreview from "../../category-preview/category-preview";
import { CategoriesContext } from "../../context/categories.context";


const CategoriesPreview = () => {
    const { CategoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
            <div className="category-banner">
                <img src="https://i.ibb.co/8M0MQtC/pexels-manjunath-b-2793649.jpg" alt=""/>
                <h2>GET YOURSELF A BEAUTIFUL AND <span>PEACEFUL HOME</span></h2>
            </div>
            {
                Object.keys(CategoriesMap).map((title) => {
                    const houses = CategoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} houses={houses} />
                    )
                })
            }
        </Fragment>
    )
}

export default CategoriesPreview;

