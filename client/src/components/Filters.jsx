import { useState } from 'react';
import FilterSelect from './UI/FilterSelect';
import FilterBtn from './UI/FilterBtn';

const Filters = () => {
    const [count, setCount] = useState(318);

    return (
        <div className='filter'>
            <FilterSelect placeholder={"Марка"} />
            <FilterSelect placeholder={"Модель"} />
            <FilterSelect placeholder={"Коробка"} />
            <FilterSelect placeholder={"Двигатель"} />
            <FilterSelect placeholder={"Привод"} />
            <FilterBtn>
                Показать {count} предложений
            </FilterBtn>
        </div>
    );
};

export default Filters;