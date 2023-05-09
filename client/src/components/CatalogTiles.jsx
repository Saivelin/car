import CatalogTile from "./CatalogTile";

const CatalogTiles = () => {
    const test = [{
        id: 1,
        img: "/test.png",
        images: ["/test.png", "/test1.png", "/test2.png", "/test3.png"],
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
        wheel: "Левый",
        condition: "Не требует ремонта",
    }]

    return (
        <div className="catalogTiles catalogTiles-three">
            <CatalogTile tile={test[0]} doubled={true} imgs={["/test.png", "/test1.png", "/test2.png", "/test3.png",]} />
            <CatalogTile tile={test[0]} imgs={["/test.png", "/test1.png", "/test2.png", "/test3.png",]} />
            <CatalogTile tile={test[0]} imgs={["/test.png", "/test1.png", "/test2.png", "/test3.png",]} />
            <CatalogTile tile={test[0]} imgs={["/test.png", "/test1.png", "/test2.png", "/test3.png",]} />
            <CatalogTile tile={test[0]} imgs={["/test.png", "/test1.png", "/test2.png", "/test3.png",]} />
            <CatalogTile tile={test[0]} imgs={["/test.png", "/test1.png", "/test2.png", "/test3.png",]} />
            <CatalogTile tile={test[0]} imgs={["/test.png", "/test1.png", "/test2.png", "/test3.png",]} />
            <CatalogTile tile={test[0]} doubled={true} imgs={["/test.png", "/test1.png", "/test2.png", "/test3.png",]} />
            <CatalogTile tile={test[0]} imgs={["/test.png", "/test1.png", "/test2.png", "/test3.png",]} />
        </div>
    );
};

export default CatalogTiles;