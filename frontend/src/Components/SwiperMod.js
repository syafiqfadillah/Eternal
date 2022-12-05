import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';

import Card from "./Card.js";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function SwiperMod() {
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
				<SwiperSlide key={i}><Card props={item} /></SwiperSlide>
			))}
		</Swiper>
	)
}

export default SwiperMod