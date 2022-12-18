import { useSelector } from 'react-redux';

import Card from "../Components/Card.js";
import ProductNotFound from '../Components/ProductNotFound.js';

import "../Assets/CSS/NavbarLogin.css";
import "../Assets/CSS/ProductNotFound.css";

function SearchResult() {
    const cardData = useSelector(state => state.counter.cardData)
    const search = localStorage.getItem("keyword")

    function result(data, search) {
        let newResult = []

        for (let index = 0; index < data.length; index++) {
            if (data[index].title.toUpperCase().includes(search.toUpperCase())) {
                newResult.push(data[index])
            }
        }

        if (newResult.length == 0) {
            newResult = false
        }

        return newResult
    }

    const newResult = result(cardData, search)

    return (
        <div className="SearchResult">
            <div className="SearchResult-Layer1">
                <h2>Result</h2>
                <div className="Products">
                    {newResult instanceof Array? 
                        newResult.map((item, i) => (
                            <Card key={i} props={item} />
                        ))
                    :
                        <ProductNotFound />
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchResult