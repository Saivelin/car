import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import CatalogTile from './CatalogTile';
import 'swiper/css';

const YourAnnouncement = () => {

    const test = [{
        img: "/test.png",
        title: "BMW M5 Competition, 2020",
        year: 2020,
        complication: "Полный",
        mileage: 15463,
        type: "Седан",
        consumption: "4.4л / 456 л.с.",
        fuel: "Бензин",
        price: 12995000,
        generation: "Поколение: vi (F90) рестайлинг",
        shiftBox: "Автомат",
    }]

    return (
        <div className='yourAnnouncement'>
            <h4>Ваши объявления</h4>
            <div className="yourAnnouncement__sliderWrapper">
                <img src="/prevarrow.webp" alt="" />
                <Swiper
                    className='yourAnnouncement__sliderOfMain'
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><CatalogTile tile={test[0]} /></SwiperSlide>
                    <SwiperSlide><CatalogTile tile={test[0]} /></SwiperSlide>
                    <SwiperSlide><CatalogTile tile={test[0]} /></SwiperSlide>
                    <SwiperSlide><CatalogTile tile={test[0]} /></SwiperSlide>
                </Swiper>
                <img src="/nextarrow.webp" alt="" />
            </div>
        </div>
    );
};

export default YourAnnouncement;