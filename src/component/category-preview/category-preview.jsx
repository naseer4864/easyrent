import { Fragment } from "react";
import { Link } from "react-router-dom";
import HouseCard from "../house-category/house-card";


const CategoryPreview = ({ title, houses }) => {

    return (
        <Fragment>
            <div className="title-container">
                <span style={{ color: "orange" }}>{title.toUpperCase()}</span>
                <Link className="link" to={title}>Show more</Link>
            </div>
            <div className="house-container">
                {
                    houses
                        .filter((_, idx) => idx < 4)
                        .map((house) => <HouseCard key={house.id} house={house} />)
                }
            </div>
        </Fragment>
    );
}

export default CategoryPreview;