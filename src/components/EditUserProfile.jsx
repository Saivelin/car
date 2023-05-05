const EditUserProfile = () => {
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
                    <input type="text" placeholder="Номер телефона" className="editUserProfile__input" />
                    <button className="editUserProfile__btn">+ номер</button>
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