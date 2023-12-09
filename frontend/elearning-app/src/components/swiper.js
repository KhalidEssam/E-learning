// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Slider = ({ slides }) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.image}>
                    <img src={slide.image} alt={slide.title} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;