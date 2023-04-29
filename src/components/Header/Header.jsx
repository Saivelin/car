import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
    const { pathname } = useRouter();

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__nav-item header__nav-lang">RU</div>
                <div className="header__nav-item"><Link href={"/"} className={pathname == "/" ? "header__nav-active" : ""}>Объявления</Link></div>
                <div className="header__nav-item"><Link href={"/details"} className={pathname == "/details" ? "header__nav-active" : ""}>Запчасти</Link></div>
                <div className="header__nav-item header__nav-logo">
                    <Link href={"/"} className="">
                        <img src="/logo.webp" alt="car-tron" />
                    </Link>
                </div>
                <div className="header__nav-item"><Link href={"/dilers"} className={pathname == "/dilers" ? "header__nav-active" : ""}>Диллеры</Link></div>
                <div className="header__nav-item"><Link href={"/services"} className={pathname == "/services" ? "header__nav-active" : ""}>Услуги</Link></div>
                <div className="header__nav-item header__nav-personal">
                    <Link href={"/users/1"} className={pathname.includes("/users") ? "header__nav-active" : ""}>
                        <img src="/personal.webp" alt="Личный кабинет" />
                    </Link>
                </div>
            </nav >
        </header >
    );
};

export default Header;