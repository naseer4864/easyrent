import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import HouseCard from "../../house-category/house-card";
import { Fragment } from "react";



const Category = () => {
    const {category} = useParams();
    const {CategoriesMap} = useContext(CategoriesContext);
    const [houses, setHouses]= useState(CategoriesMap[category]);
    
    useEffect(() => {
        setHouses(CategoriesMap[category])
    },[category, CategoriesMap])
    return ( 
        <Fragment>

            <div className="category-banner">
                <img src="https://i.ibb.co/8M0MQtC/pexels-manjunath-b-2793649.jpg" alt=""/>
                <h2>GET YOURSELF A BEAUTIFUL AND <span>PEACEFUL HOME</span></h2>
            </div>
        <div className="house-container">
            {houses &&
                houses.map((house) => <HouseCard  key={house.id} house={house}/> )
            }
        </div>
            </Fragment>
     );
}
 
export default Category;


