import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux';
import { setCardData, setIndex } from '../Redux/counterSlice';
import { NavLink } from "react-router-dom";

import Card from "./Card.js";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function SwiperMod(props) {
	const dispatch = useDispatch()
	const cardData = useSelector((state) => state.counter.cardData)

	return (
		<Swiper 
	        slidesPerView={4}
	        spaceBetween={1}
	        slidesPerGroup={4}
	        loop={true}
	        loopFillGroupWithBlank={true}
	        pagination={{
	          clickable: true,
	        }}
	        navigation={true}
	        modules={[Pagination, Navigation]}
	        className="SwiperMod"
		>
			{cardData.map((item, i) => (
				<SwiperSlide><NavLink to="/Product"><Card key={i} head={item.head} price={item.price} /></NavLink></SwiperSlide>
			))}
		</Swiper>
	)
}

export default SwiperMod