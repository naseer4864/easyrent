// import { Fragment, useContext } from "react";
// import CategoryPreview from "../../category-preview/category-preview";
// import { CategoriesContext } from "../../context/categories.context";


// const CategoriesPreview = () => {
//     const { CategoriesMap } = useContext(CategoriesContext);
//     return (
//         <Fragment>
//             <div className="category-banner">
//                 <img src="https://i.ibb.co/8M0MQtC/pexels-manjunath-b-2793649.jpg" alt=""/>
//                 <h2>GET YOURSELF A BEAUTIFUL AND <span>PEACEFUL HOME</span></h2>
//             </div>
//             {
//                 Object.keys(CategoriesMap).map((title) => {
//                     const houses = CategoriesMap[title];
//                     return (
//                         <CategoryPreview key={title} title={title} houses={houses} />
//                     )
//                 })
//             }
//         </Fragment>
//     )
// }

// export default CategoriesPreview;

import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
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
                        <div key={title}>
                            <h2>{title}</h2>
                            <div className="house-grid">
                                {houses.map((house) => (
                                    <div key={house.id} className="house-card">
                                        <Link to={`/houses/${house.id}`}>
                                            <img src={house.imageUrl} alt="pics" className="image-url" />
                                            <span className="address">{house.address}</span>
                                            <h3 className="name">{house.name}</h3>
                                            <p className="price">{house.price}</p>
                                            <div className="type">
                                                <h3>{house.type1}</h3>
                                                <h3>{house.type2}</h3>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}

export default CategoriesPreview;
