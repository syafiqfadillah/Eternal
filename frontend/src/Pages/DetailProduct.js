import axios from 'axios';
import { useEffect } from "react";
import { setById, setCurrentPath } from '../Redux/counterSlice';
import { useDispatch } from 'react-redux';

import CardProduct from "../Components/CardProduct.js";
import CardProfile from "../Components/CardProfile.js";
import CardDescription from "../Components/CardDescription.js";
import Comments from "../Components/Comments.js";

import "../Assets/CSS/DetailProduct.css";
import "../Assets/CSS/CardProduct.css"; 
import "../Assets/CSS/NavbarLogin.css"; 
import "../Assets/CSS/Footer.css";
import "../Assets/CSS/CardProfile.css";
import "../Assets/CSS/CardDescription.css";
import "../Assets/CSS/Comments.css";
import { useLocation } from 'react-router-dom';

function DetailProduct() {
	const dispatch = useDispatch()
	const location = useLocation()

	dispatch(setCurrentPath(location))

    const id = window.location.search

	useEffect(() => {
		axios.get(`https://dummyjson.com/products/${id.slice(4, id.length)}`)
			.then(res => {
				// re-assign data
				let data = {}

				data["image"] = res.data["images"][0]
				data["title"] = res.data["title"]
				data["price"] = res.data["price"]
				data["stock"] = res.data["stock"]
				data["description"] = res.data["description"]
				
				dispatch(setById(data))
			})
	})

	return (
		<div className="DetailProduct">
			<CardProduct />
			<CardProfile />
			<CardDescription />
			<Comments />
		</div>
		
	)
}

export default DetailProduct 