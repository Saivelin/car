import { useState } from 'react';
import NewAdSelect from './UI/NewAdSelect';
import FilterBtn from './UI/FilterBtn';
import FilterSelect from './UI/FilterSelect';
import InputPrimary from './UI/InputPrimary';

const Filters = () => {
    const [count, setCount] = useState(318);

    return (
        <div className='filter'>
            <NewAdSelect placeholder={"Марка"} />
            <NewAdSelect placeholder={"Модель"} />
            <NewAdSelect placeholder={"Поколение"} />
            <NewAdSelect placeholder={"Кузов"} />
            <NewAdSelect placeholder={"Коробка"} />
            <NewAdSelect placeholder={"Двигатель"} />
            <NewAdSelect placeholder={"Привод"} />
            <div className="filter__twoInOne">
                <InputPrimary classes="input-filter" placeholder="Цена от" />
                <InputPrimary classes="input-filter" placeholder="Цена до" />
            </div>
            <div className="filter__twoInOne">
                <InputPrimary classes="input-filter" placeholder="Объем от" />
                <InputPrimary classes="input-filter" placeholder="Объем до" />
            </div>
            <FilterBtn>
                Показать {count} предложений
            </FilterBtn>
        </div>
    );
};

export default Filters;