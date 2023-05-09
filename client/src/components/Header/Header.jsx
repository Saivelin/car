import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil"
import { themeState } from "../../state/atoms"
import useAuth from "@/hooks/useAuth";

const Header = () => {
    const { pathname } = useRouter();
    const [theme, setTheme] = useRecoilState(themeState);
    const auth = useAuth("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInJvbGUiOiJ1c2VyIiwibnNwIjoi0KLQuNC80L7RhNC10Lkg0JjQs9C90LDRgtGM0LXQsiDQkNGA0YLQtdC80L7QstC40YciLCJpYXQiOjE2ODM1MjUyOTksImV4cCI6MTY4MzYxMTY5OX0.GNd1CQez9VAzyjf8nAMOrGksPSalaB6dZBML5U3BmVM")
    console.log(useAuth("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInJvbGUiOiJ1c2VyIiwibnNwIjoi0KLQuNC80L7RhNC10Lkg0JjQs9C90LDRgtGM0LXQsiDQkNGA0YLQtdC80L7QstC40YciLCJpYXQiOjE2ODM1MjUyOTksImV4cCI6MTY4MzYxMTY5OX0.GNd1CQez9VAzyjf8nAMOrGksPSalaB6dZBML5U3BmVM"))

    const toggleTheme = () => {
        if (theme === "white") {
            setTheme("dark")
        }
        else if (theme === "dark") {
            setTheme("white")
        }
        else {
            setTheme("white")
            console.log("theme error")
        }
        useAuth("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInJvbGUiOiJ1c2VyIiwibnNwIjoi0KLQuNC80L7RhNC10Lkg0JjQs9C90LDRgtGM0LXQsiDQkNGA0YLQtdC80L7QstC40YciLCJpYXQiOjE2ODM1MjUyOTksImV4cCI6MTY4MzYxMTY5OX0.GNd1CQez9VAzyjf8nAMOrGksPSalaB6dZBML5U3BmVM").then((el) => { console.log(el) })
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <motion.div
                    className="header__nav-item header__nav-theme"
                >
                    <img src={theme === "white" ? "/sun.svg" : "/moon.svg"} alt="" onClick={toggleTheme} />
                </motion.div>
                <div className="header__nav-item"><Link href={"/"} className={pathname == "/" ? "header__nav-active" : "header__nav-hover"}>Объявления</Link></div>
                <div className="header__nav-item"><Link href={"/details"} className={pathname == "/details" ? "header__nav-active" : "header__nav-hover"}>Запчасти</Link></div>
                <div className="header__nav-item header__nav-logo">
                    <Link href={"/"} className="">
                        <img src="/logo.webp" alt="car-tron" />
                    </Link>
                </div>
                <div className="header__nav-item"><Link href={"/dilers"} className={pathname == "/dilers" ? "header__nav-active" : "header__nav-hover"}>Диллеры</Link></div>
                <div className="header__nav-item"><Link href={"/services"} className={pathname == "/services" ? "header__nav-active" : "header__nav-hover"}>Услуги</Link></div>
                <div className="header__nav-item header__nav-personal ">
                    {/* {auth.message == "User is logged in" ? */}
                    <Link href={"/users/1"} className={pathname.includes("/users") ? "header__nav-active" : "header__nav-hover"}>
                        <img src="/personal.webp" alt="Личный кабинет" />
                    </Link>
                    {/* :
                        <Link href={"/users/1"} className={pathname.includes("/users") ? "header__nav-active" : "header__nav-hover"}>
                            <button>Войти</button>
                        </Link>
                    } */}
                </div>
            </nav >
        </header >
    );
};

export default Header;