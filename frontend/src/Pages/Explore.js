import { useDispatch, useSelector } from 'react-redux';

import Card from "../Components/Card.js";

import "../Assets/CSS/NavbarLogin.css";
import { useLocation } from 'react-router-dom';
import { setCurrentPath } from '../Redux/counterSlice.js';

function Explore() {
    const dispatch = useDispatch()
    const location = useLocation()
    const cardData = useSelector(state => state.counter.cardData)

    dispatch(setCurrentPath(location.state))

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