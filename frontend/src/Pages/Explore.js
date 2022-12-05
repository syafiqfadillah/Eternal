import { useSelector } from 'react-redux';

import NavbarLogin from "../Components/NavbarLogin.js";
import Card from "../Components/Card.js";
import Footer from '../Components/Footer.js';

import "../Assets/CSS/NavbarLogin.css";

function Explore() {
    const cardData = useSelector(state => state.counter.cardData)

    return (
        <div className="Explore">
            <NavbarLogin />
            <div className="Explore-Layer1">
                <h2>Explore</h2>
                <div className="Products">
                    {cardData.map((item, i) => (
                        <Card key={i} props={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Explore