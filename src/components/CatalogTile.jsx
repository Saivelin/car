const CatalogTile = ({ tile, doubled }) => {
    console.log(tile)
    return (
        <div className={doubled === true ? "catalogTile catalogTile-doubled" : "catalogTile"}>
            <img src={tile.img} alt={tile.title} className='catalogTile__img' />
            <div className="catalogTile__about">
                <h5 className='catalogTile__title'>{tile.title}</h5>
                <div className=''>
                    {doubled === true ?
                        <div className='catalogTile__about-around'>
                            <p>{doubled === true && tile.generation ? "Поколение: " + String(tile.generation) : tile.year}</p>
                            <p>{doubled === true && tile.shiftBoxType ? "Коробка: " + String(tile.shiftBoxType) : tile.complication}</p>
                        </div>
                        :
                        ""
                    }
                    <div className='catalogTile__about-around'>
                        <p>{doubled === true ? "Год выпуска: " + String(tile.year) : tile.year}</p>
                        <p>{doubled === true ? "Кузов: " + String(tile.complication) : tile.complication}</p>
                    </div>
                    <div className='catalogTile__about-around'>
                        <p>{doubled === true ? "Пробег: " + String(tile.mileage) : tile.mileage}км</p>
                        <p>{doubled === true ? "Тип: " + String(tile.type) : tile.type}</p>
                    </div>
                    <div className='catalogTile__about-around'>
                        <p>{doubled === true ? "Расход: " + String(tile.consumption) : tile.consumption}</p>
                        <p>{doubled === true ? "Топливо: " + String(tile.fuel) : tile.fuel}</p>
                    </div>
                </div>
                {!doubled ? <p className='catalogTile__price'>{(tile.price).toLocaleString()}₽</p> : ""}
            </div>
            {doubled === true ?
                <p className='catalogTile__price'>{(tile.price).toLocaleString()}₽</p>
                :
                ""
            }
        </div >
    );
};

export default CatalogTile;