import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";




const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    return (
        <Fragment>
            <div className="mother-container">
                <div className="navbar-container">
                    <div className="logo">
                        <Link to="/" className="home-logo"><p>EASY<span>RENT</span></p></Link>
                    </div>
                    <div className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(! isMobile)}>
                        <Link to="Houses">Properties</Link>
                        <Link to="/signin">Sign in</Link>
                        <Link to="/about">About Us</Link>
                    </div>
                    <div className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
                        {
                            isMobile ? "X" : <i className="fas fa-bars"></i>
                        }
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navbar;