import { modalState } from "../state/atoms.js"
import { useRecoilState, useSetRecoilState } from "recoil"
import NewAdForm from "./NewAdForm.jsx";

const UserPageAddAnnouncement = () => {
    const setModal = useSetRecoilState(modalState)

    return (
        <div className='userPageAddAnnouncement'>
            <img src="/addAnnouncement.webp" onClick={() => { setModal(<NewAdForm />) }} alt="" className='' />
            <div className="userPageAddAnnouncement__about">
                <h5>Выставить на продажу - легко</h5>
                <p>Создайте объявление, и его увидят тысячи покупателей</p>
            </div>
            <button onClick={() => { setModal(<NewAdForm />) }} className="userPageAddAnnouncement__createBtn">Создать объявление</button>
        </div>
    );
};

export default UserPageAddAnnouncement;