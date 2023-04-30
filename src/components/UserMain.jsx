const UserMain = () => {
    return (
        <div className=''>
            <div className="userProfile">
                <img src="/user.png" alt="" className="userProfile__logo" />
                <div className="userProfile__name">
                    <p className="">Лео Морфиус</p>
                </div>
            </div>
            <div className="userProfileFooter">
                <img src="/email.svg" alt="" />
                <img src="/heart.svg" alt="" />
                <img src="/preferences.svg" alt="" />
            </div>
        </div>
    );
};

export default UserMain;