import { useState, useEffect } from "react";

const EditUserProfile = () => {
    const [phoneCount, setPhoneCount] = useState([
        { id: 1 },
    ]);

    const addPhone = (e) => {
        e.preventDefault()
        console.log(phoneCount)
        let newPhoneCount = phoneCount;
        newPhoneCount = [...phoneCount, { id: phoneCount.length + 1 }]
        setPhoneCount(newPhoneCount)
    }

    useEffect(() => {
        if (phoneCount.length === 5) {
            let newPhoneCount = phoneCount;
            newPhoneCount.pop()
            setPhoneCount(newPhoneCount)
        }
    }, [phoneCount])

    return (
        <form className="editUserProfile">
            <div>
                <div>
                    <div className="editUserProfile__newAdForm__addImageForNewAdWrapper newAdForm__addImageForNewAdWrapper">
                        <div className="editUserProfile__newAdForm__addImageForNewAdWrapper newAdForm__addImageForNewAdWrapper-content">
                            <img src="/addPhoto.svg" alt="" />
                            <p>Фото профиля</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="editUserProfile__inputs">
                <div className="editUserProfile__phones">
                    <label htmlFor="" className="editUserProfile__label">Мои телефоны</label>
                    {phoneCount.map((el, i) => {
                        return <input
                            key={el.id}
                            type="text"
                            placeholder="Номер телефона"
                            className="editUserProfile__input editUserProfile__input-phone"
                        />
                    })}
                    <button
                        className="editUserProfile__btn"
                        onClick={addPhone}
                    >
                        + номер
                    </button>
                </div>
                <div className="editUserProfile__personalData">
                    <label htmlFor="" className="editUserProfile__label">Личные данные</label>
                    <input type="text" placeholder="Ник" className="editUserProfile__input" />
                    <input type="text" placeholder="ФИО" className="editUserProfile__input" />
                    <div className="editUserProfile__radioWrapper">
                        <div className="editUserProfile__radioWrapper-itemWrapper">
                            <input id="fio" type="radio" name="dataDisplay" className="editUserProfile__input" />
                            <label htmlFor="fio" className="editUserProfile__label">Отображать ФИО в профиле</label>
                        </div>
                        <div className="editUserProfile__radioWrapper-itemWrapper">
                            <input id="nikOnly" type="radio" name="dataDisplay" className="editUserProfile__input" />
                            <label htmlFor="nikOnly" className="editUserProfile__label">Отображать только ник</label>
                        </div>
                    </div>
                    <textarea placeholder="О себе" cols="10" rows="5" className="editUserProfile__input" />
                </div>
                <button className="editUserProfile__btn-secondary">Сохранить изменения</button>
            </div>
        </form>
    );
};

export default EditUserProfile;