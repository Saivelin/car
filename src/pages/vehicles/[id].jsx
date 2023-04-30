import PackageItem from "@/components/VehicleDetails/PackageItem";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Promo from "@/components/Promo";
import CatalogTile from "@/components/CatalogTile";

const vehicles = () => {
    const test = [{
        id: 1,
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
    const [vehicle, setVehicle] = useState({
        title: "BMW M5 Competition, 2020",
        imgs: [
            "test1.png",
            "test2.png",
            "test3.png",
            "test4.png",
            "test2.png",
            "test4.png",
            "test2.png",
            "test4.png",
            "test2.png",
            "test3.png",
            "test1.png",
        ],
        price: 12345575,
        generation: "Поколение: VI (F90) рестайлинг",
        body: "Седан",
        color: "Синий",
        engine: "Бензин",
        power: "628 л. с.",
        volume: 4.4,
        expenditure: 8.9,
        package: "M5 competition M Special",
        shiftBox: "Автомат",
        drive: "Полный",
        wheel: "Левый",
        condition: "Не требует ремонта",
        confirmation: true,
        details: [
            "Поколение: VI (F90) рестайлинг",
            "Год выпуска: 2020",
            "Пробег: 18534 km",
            "Кузов: Седан",
            "Цвет: Синий",
            "Двигатель: Бензин",
            "Мощность: 628 л.с., налог",
            "Объем: 4.4 л",
            "Расход: 8.9 л",
            "Комплектация: M5 competition M Special",
            "Коробка: Автомат",
            "Привод: Полный",
            "Руль: Левый",
            "Состояние: Не требует ремонта",
        ]
    });

    return (
        <div className='vehicleDetails'>
            <div className="vehicleDetails__main">
                <div className="vehicleDetails__main__gallery">
                    <div className="vehicleDetails__main__gallery-activeWrapper">
                        <img src={"/" + vehicle.imgs[0]} alt="" className="vehicleDetails__main__gallery-active" />
                    </div>
                    <div className="vehicleDetails__main__gallery-disactiveWrapper">
                        {vehicle.imgs.map((el, i) => {
                            if (i != 0) {
                                return <img src={"/" + el} alt="" />
                            }
                        })}
                    </div>
                </div>
                <div className="vehicleDetails__main-details">
                    <div className="vehicleDetails__main-details-title">
                        <p className="">{vehicle.title}</p>
                        {vehicle.confirmation === true ?
                            <img src="/confirmation.svg" alt="" />
                            :
                            ""
                        }
                    </div>
                    <div className="vehicleDetails__main-details-propertys">
                        {vehicle.details.map((el) => {
                            return <p>{el.split(":")[0]}: <span className="vehicleDetails__main-details-prop">{el.split(":")[1]}</span></p>
                        })}
                    </div>
                    <div className="vehicleDetails__main-details__footerWrapper">
                        <div className="vehicleDetails__main-details__footer">
                            <div className="vehicleDetails__main-details__footer-item">
                                <p>{vehicle.price.toLocaleString()}₽</p>
                            </div>
                            <div className="vehicleDetails__main-details__footer-item">
                                <img src="/heart.svg" alt="like" />
                            </div>
                            <div className="vehicleDetails__main-details__footer-item">
                                <img src="/phone.svg" alt="phone" />
                            </div>
                            <div className="vehicleDetails__main-details__footer-item">
                                <img src="/email.svg" alt="email" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vehicleDetails__package">
                <h4 className="vehicleDetails__package-title">Комплектация: <span className="vehicleDetails__package-title-colored">{vehicle.package}</span></h4>
                <div className="vehicleDetails__package-mainWrapper">
                    <Swiper
                        className='vehicleDetails__package-main'
                        spaceBetween={0}
                        slidesPerView={2.2}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className='vehicleDetails__package-slide'>
                            <PackageItem pack={{
                                title: "Безопастность", props: [
                                    "Подушка безопасности водителя",
                                    "Подушка безопасности пассажира",
                                    "Подушки безопасности боковые",
                                    "Подушки безопасности оконные (шторки)",
                                    "Антипробуксовочная система (ASR)"
                                ]
                            }} />
                        </SwiperSlide>
                        <SwiperSlide className='vehicleDetails__package-slide'>
                            <PackageItem pack={{
                                title: "Элементы экстерьера", props: [
                                    "Подушка безопасности водителя",
                                    "Подушка безопасности пассажира",
                                    "Подушки безопасности боковые",
                                    "Подушки безопасности оконные (шторки)",
                                    "Антипробуксовочная система (ASR)"
                                ]
                            }} />
                        </SwiperSlide>
                        <SwiperSlide className='vehicleDetails__package-slide'>
                            <PackageItem pack={{
                                title: "Элементы экстерьера", props: [
                                    "Подушка безопасности водителя",
                                    "Подушка безопасности пассажира",
                                    "Подушки безопасности боковые",
                                    "Подушки безопасности оконные (шторки)",
                                    "Антипробуксовочная система (ASR)"
                                ]
                            }} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="vehicleDetails__comment">
                <p className="vehicleDetails__comment-title">Комментарий продавца:</p>
                <p className="vehicleDetails__comment-main">
                    Полный сток
                    На гарантии до мая 2023г.
                    ТО каждые 5 т.км., последнее 1000 км назад
                    В идеальном техническом и внешнем состоянии, ни одной крашеной детали.
                    Полный карбон m-performance
                    Авто полностью в пленке Suntek
                    Очень редкое сочетание цвета солона
                </p>
            </div>
            <div className="vehicleDetails__adsComps">
                <h3 className="vehicleDetails__adsComps-title">Спецпредложения от  CarTron</h3>
                <Promo
                    propertyes={{
                        title: "Проврека по VIN",
                        imgTest: "Проверка собственника",
                        img: "/vin.webp",
                        btns: [
                            "Купить полный отчёт от 99р",
                            "Бесплатный отчёт"
                        ],
                        imgPosition: 1,
                        props: [
                            "Характеристики совпадают с ПТС",
                            "Данные о розыске и запрете на регистрацию не найдены",
                            "4 записи в истории пробегов",
                            "7 записей в истории эксплуатации",
                            "Поиск данных о залоге",
                            "Данные о ДТП не найдены"
                        ],
                    }}
                />
                <Promo
                    propertyes={{
                        title: "Умный калькулятор",
                        imgTest: "Умный калькулятор",
                        img: "/calculator.webp",
                        btns: [
                            "Рассчитать для данного авто",
                            "Рассчитать"
                        ],
                        imgPosition: 2,
                        props: [
                            "Абсолютно бесплатный сервис",
                            "Расчёт средней цены содержания авто в месяц / год ",
                            "Подскажет где лучше всего обслужить авто после покупки",
                            "Найдет лучшие предложения по кредитованию / страхованию",
                            "Если авто имеет недостатки, подскажет где их можно устранить",
                            "Ищет ближайшие сервисы с лучшими отзывами",
                        ],
                    }}
                />
                <div className="vehicleDetails__similarAds">
                    <h3>Похожие объявления: </h3>
                    <CatalogTile tile={test[0]} />
                    <CatalogTile tile={test[0]} />
                    <CatalogTile tile={test[0]} />
                </div>
            </div>
        </div>
    );
};

export default vehicles;