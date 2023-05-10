import { modalState } from "../state/atoms.js"
import { useRecoilState, useSetRecoilState } from "recoil"
import EditUserProfile from "./EditUserProfile.jsx";

const UserMain = ({ userInf }) => {
    const setModal = useSetRecoilState(modalState)
    return (
        <div className=''>
            <div className="userProfile">
                <img src="/user.png" alt="" className="userProfile__logo" />
                <div className="userProfile__name">
                    <p className="">{userInf.lfp}</p>
                </div>
            </div>
            <div className="userProfileFooter">
                <img src="/email.svg" alt="" />
                <img src="/heart.svg" alt="" />
                <img src="/preferences.svg" alt="" onClick={() => { setModal(<EditUserProfile />) }} />
            </div>
        </div>
    );
};

export default UserMain;