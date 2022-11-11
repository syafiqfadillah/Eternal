import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
				<SwiperSlide><Card key={i} header={item.head} price={item.price} /></SwiperSlide>
			))}
		</Swiper>
	)
}

export default SwiperMod