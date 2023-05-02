import { Input } from "@chakra-ui/react";

const NewAdForm = ({ classes }) => {
    const filterColors = (inputValue) => {
        return colourOptions.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    const loadOptions = (inputValue, callback) => {
        setTimeout(() => {
            callback(filterColors(inputValue));
        }, 1000);
    };

    return (
        <form className={classes ? "newAdForm " + classes : "newAdForm"}>
            <div className="newAdForm__left">
                <label htmlFor="addImageForNewAd">
                    <input type="file" size={"md"} id="addImageForNewAd" className="newAdForm__addImageForNewAd" />
                    <div className="newAdForm__addImageForNewAdWrapper">
                        <div className="newAdForm__addImageForNewAdWrapper-content">
                            <img src="/addPhoto.svg" alt="" />
                            <p>Добавить фото</p>
                        </div>
                    </div>
                </label>
            </div>
            <div className="newAdForm__right">
                <input type="text" className="newAdForm__input-primary" placeholder="Марка" />
                <input type="text" className="newAdForm__input-primary" placeholder="Модель" />
                <input type="text" className="newAdForm__input-primary" placeholder="Год выпуска" />
                <input type="text" className="newAdForm__input-primary" placeholder="Двигатель" />
                <div className="newAdForm__right-flexAuto">
                    <label className="radioWrapper" htmlFor="autoBox">
                        <input type="radio" id="autoBox" name="transmission" className="radioWrapper__radio" />
                        <div className="transmissionWrapper">Бензин</div>
                    </label>
                    <label className="radioWrapper" htmlFor="mechBox">
                        <input type="radio" id="mechBox" name="transmission" className="radioWrapper__radio" />
                        <div className="transmissionWrapper">Дизель</div>
                    </label>
                </div>
            </div>
        </form>
    );
};

export default NewAdForm;