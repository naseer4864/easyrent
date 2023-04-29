import { Fragment} from "react";
import { Link, Outlet } from "react-router-dom";




const Navbar = () => {
    return (
        <Fragment>
            <div className="mother-container">
                <div className="navbar-container">
                    <div className="logo">
                        <Link to="/" className="home-logo"><p>EASY<span>RENT</span></p></Link>
                    </div>
                    <div className= "nav-links">
                        <Link to="Houses">Properties</Link>
                    </div>
                    
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navbar;