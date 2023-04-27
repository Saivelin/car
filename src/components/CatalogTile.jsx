import React from 'react';

const CatalogTile = ({ tile }) => {
    console.log(tile)
    return (
        <div className='catalogTile'>
            <img src={tile.img} alt={tile.title} className='catalogTile__img' />
            <div className="catalogTile__about">
                <h5 className='catalogTile__title'>{tile.title}</h5>
                <div className=''>
                    <div className='catalogTile__about-around'>
                        <p>{tile.year}</p>
                        <p>{tile.complication}</p>
                    </div>
                    <div className='catalogTile__about-around'>
                        <p>{tile.mileage}км</p>
                        <p>{tile.type}</p>
                    </div>
                    <div className='catalogTile__about-around'>
                        <p>{tile.consumption}</p>
                        <p>{tile.fuel}</p>
                    </div>
                </div>
                <p className='catalogTile__price'>{tile.price}₽</p>
            </div>
        </div>
    );
};

export default CatalogTile;