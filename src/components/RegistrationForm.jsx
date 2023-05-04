import Link from "next/link";
import { motion } from "framer-motion";

const RegistrationForm = () => {
    return (
        <motion.div className='login' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <form className="login__registeredForm">
                {/* <img src="/logo.webp" alt="car-tron" /> */}
                <h2>Регистрация</h2>
                <input type="text" className="login__registeredForm__input" placeholder="Номер" />
                <input type="text" className="login__registeredForm__input" placeholder="Код смс-сообщения" />
                <input type="text" className="login__registeredForm__input" placeholder="ФИО" />
                <p className="login__registeredForm__warningText">Укажите ваши настоящие данные,
                    в ином случае могут возникнуть
                    проблемы с работой сервиса.</p>
                <Link className="login__registeredForm__warningLink" href={"#"}>Для чего нам нужны ваши настоящие ФИО.</Link>
                <input type="text" className="login__registeredForm__input" placeholder="Придумайте пароль" />
                <input type="text" className="login__registeredForm__input" placeholder="Повторте пароль" />
                <button className="login__registeredForm__registeredButton">Заргестрироваться</button>
                <p className="login__registeredForm__privacyPolicy">Нажимая кнопку, я принимаю <Link className="login__registeredForm__privacyPolicy-link" href={"#"}>пользовательское соглашение</Link></p>
            </form>
        </motion.div>
    );
};

export default RegistrationForm;