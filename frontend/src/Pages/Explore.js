import { useSelector } from 'react-redux';

import Card from "../Components/Card.js";

import "../Assets/CSS/NavbarLogin.css";

function Explore() {
    const cardData = useSelector(state => state.counter.cardData)

    return (
        <div className="Explore">
            <div className="Explore-Layer1">
                <h2>Explore</h2>
                <div className="Products">
                    {cardData.map((item, i) => (
                        <Card key={i} props={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Explore