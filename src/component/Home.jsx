import SimpleSlider from "../component/slider/slider";
import { useNavigate } from "react-router";



const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <SimpleSlider />
            
            <div className="homepage-container">
            <h2>HOUSE CATEGORIES</h2>
            <div className="recent-offer">
                <img src="https://i.ibb.co/1ssvdMp/pexels-eziz-charyyev-1475938-1.jpg" alt="" />
                <p onClick={() => navigate("Houses/recent offers") }>RECENT OFFERS</p>
            </div>
            <div className="place-container">
                <div className="rent-place">
                    <img src="https://i.ibb.co/xMzRnMk/pexels-pixabay-534151.jpg" alt="" />
                    <p onClick={() => navigate("Houses/rent a place")}>RENT A PLACE</p>
                </div>
                <div className="buy-place">
                    <img src="https://i.ibb.co/JxHq6Gy/pexels-the-lazy-artist-gallery-1642125.jpg" alt="" />
                    <p onClick={() => navigate("Houses/buy a place")}>BUY A PLACE</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;