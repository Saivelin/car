import Select from 'react-select';
import { useState } from 'react';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

const FilterSelect = ({ placeholder, props, classes }) => {
    const [state, setState] = useState("");
    const options = [
        { name: 'BMW', value: 'bmw' },
        { name: 'Audi', value: 'audi' },
        { name: 'Ford', value: 'Ford' },
        { name: 'Honda', value: 'Honda' },
        { name: 'Kia', value: 'Kia' },
        { name: 'Lada', value: 'Lada' },
        { name: 'Mazda', value: 'Mazda' },
        { name: 'Aston Martin', value: 'Aston' },
        { name: 'BMW', value: 'bmw' },
        { name: 'Audi', value: 'audi' },
        { name: 'Ford', value: 'Ford' },
        { name: 'Honda', value: 'Honda' },
        { name: 'Kia', value: 'Kia' },
        { name: 'Lada', value: 'Lada' },
        { name: 'Mazda', value: 'Mazda' },
        { name: 'Aston Martin', value: 'Aston' },
        { name: 'BMW', value: 'bmw' },
        { name: 'Audi', value: 'audi' },
        { name: 'Ford', value: 'Ford' },
        { name: 'Honda', value: 'Honda' },
        { name: 'Kia', value: 'Kia' },
        { name: 'Lada', value: 'Lada' },
        { name: 'Mazda', value: 'Mazda' },
        { name: 'Aston Martin', value: 'Aston' },
    ];


    return (
        <SelectSearch
            options={options}
            value={state}
            onChange={(e) => { setState(e) }}
            name="m"
            placeholder={placeholder ? placeholder : ""}
            search={true}
            renderValue={(valueProps) => <input {...valueProps} />}
            className={classes ? `newAdForm__select ` + classes : `newAdForm__select`}
            closeOnSelect
            emptyMessage="Марок тс по Вашему запросу не найдено"
        />
    );
};

export default FilterSelect;