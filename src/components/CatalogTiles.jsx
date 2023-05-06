import CatalogTile from "./CatalogTile";

const CatalogTiles = () => {
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
    console.log(test)

    return (
        <div className="catalogTiles catalogTiles-three">
            <CatalogTile tile={test[0]} doubled={true} />
            <CatalogTile tile={test[0]} />
            <CatalogTile tile={test[0]} />
            <CatalogTile tile={test[0]} />
            <CatalogTile tile={test[0]} />
            <CatalogTile tile={test[0]} />
            <CatalogTile tile={test[0]} />
            <CatalogTile tile={test[0]} doubled={true} />
            <CatalogTile tile={test[0]} />
        </div>
    );
};

export default CatalogTiles;