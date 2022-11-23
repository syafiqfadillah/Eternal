import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux';
import { setCardData, setIndex } from '../Redux/counterSlice';
import { Link } from "react-router-dom";

import Card from "./Card.js";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function SwiperMod(props) {
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
			{props.data.map((item, i) => (
				<SwiperSlide key={i}><Link to="/Product"><Card keys={i} img={item.images[0]} head={item.title} price={item.price} /></Link></SwiperSlide>
			))}
		</Swiper>
	)
}

export default SwiperMod