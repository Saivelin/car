const Promo = ({ propertyes }) => {
    return (
        <div className="promo">
            <div className="promo__image" style={{ backgroundImage: "url('/vin.webp')" }}>
                <p>Проверка собственника</p>
            </div>
            <div className="promo__about">
                <h3>Проврека по VIN</h3>
                <ul className="promo__list">
                    <li className="promo__list-item">Характеристики совпадают с ПТС</li>
                    <li className="promo__list-item">Данные о розыске и запрете на регистрацию не найдены</li>
                    <li className="promo__list-item">4 записи в истории пробегов</li>
                    <li className="promo__list-item">7 записей в истории эксплуатации</li>
                    <li className="promo__list-item">Поиск данных о залоге</li>
                    <li className="promo__list-item">Данные о ДТП не найдены</li>
                </ul>
                <div className="promo__btnsWrapper">
                    <button className="promo__btn">Купить полный отчёт от 99р</button>
                    <button className="promo__btn">Бесплатный отчёт</button>
                </div>
            </div>
        </div>
    );
};

export default Promo;