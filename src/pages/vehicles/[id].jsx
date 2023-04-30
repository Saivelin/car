import { useState } from "react";

const vehicles = () => {
    const [vehicle, setVehicle] = useState({
        title: "BMW M5 Competition, 2020",
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
                <img src="/test.png" alt="" />
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
                            return <p>{el}</p>
                        })}
                    </div>
                    <div className="vehicleDetails__main-details__footer">
                        <p>{vehicle.price}</p>
                        <img src="/heart.svg" alt="like" />
                        <img src="/phone.svg" alt="phone" />
                        <img src="/email.svg" alt="email" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default vehicles;