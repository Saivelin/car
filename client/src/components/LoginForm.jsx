import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { login } from "../http/userAPI";
import { useRecoilState } from "recoil"
import { user } from "../state/atoms.js"

const LoginForm = () => {
    const [userAuth, setUserAuth] = useRecoilState(user)

    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = await login(phone, password)
        setUserAuth(userData)
    }

    const handleClick = () => {
        setUserAuth(false)
    }


    return (
        <motion.div className='login login-login' initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
            <form className="login__registeredForm" onSubmit={handleSubmit}>
                {/* <img src="/logo.webp" alt="car-tron" /> */}
                {userAuth?.id}
                <h2>Войти в аккаунт</h2>
                <input type="text" className="login__registeredForm__input" placeholder="Номер телефона" onChange={(e) => { setPhone(e.target.value) }} />
                <input type="password" className="login__registeredForm__input" placeholder="Пароль" onChange={(e) => { setPassword(e.target.value) }} />
                <button className="login__registeredForm__registeredButton" type="submit">Войти</button>
            </form>
            <button onClick={handleClick}>Exit</button>
        </motion.div>
    );
};

export default LoginForm;