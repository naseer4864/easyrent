

const HouseCard = ({ house }) => {
    const { name, price, imageUrl, address, type1, type2 } = house
    return (
        <div className="house-card" >
            <img src={imageUrl} alt="pics" className="image-url" />
            <span className="address">{address}</span>
            <h3 className="name">{name}</h3>
            <p className="price">{price}</p>
            <div className="type">
                <h3>{type1}</h3>
                <h3>{type2}</h3>
            </div>
        </div>
    );
}

export default HouseCard;