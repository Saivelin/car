import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { registration } from "../http/userAPI";

const RegistrationForm = () => {
    const [lfp, setLfp] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await registration(lfp, password)
        console.log(response)
    }

    return (
        <motion.div className='login' initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
            <form className="login__registeredForm" onSubmit={handleSubmit}>
                {/* <img src="/logo.webp" alt="car-tron" /> */}
                <h2>Регистрация</h2>
                <input type="text" className="login__registeredForm__input" placeholder="Номер" />
                <input type="text" className="login__registeredForm__input" placeholder="Код смс-сообщения" />
                <input type="text" className="login__registeredForm__input" placeholder="ФИО" onChange={(e) => { setLfp(e.target.value) }} />
                <p className="login__registeredForm__warningText">Укажите ваши настоящие данные,
                    в ином случае могут возникнуть
                    проблемы с работой сервиса.</p>
                <Link className="login__registeredForm__warningLink" href={"#"}>Для чего нам нужны ваши настоящие ФИО.</Link>
                <input type="text" className="login__registeredForm__input" placeholder="Придумайте пароль" onChange={(e) => { setPassword(e.target.value) }} />
                <input type="text" className="login__registeredForm__input" placeholder="Повторте пароль" />
                <button className="login__registeredForm__registeredButton" type="submit">Заргестрироваться</button>
                <p className="login__registeredForm__privacyPolicy">Нажимая кнопку, я принимаю <Link className="login__registeredForm__privacyPolicy-link" href={"#"}>пользовательское соглашение</Link></p>
            </form>
        </motion.div>
    );
};

export default RegistrationForm;