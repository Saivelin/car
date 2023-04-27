import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__nav-item header__nav-lang"><Link href={"/"} className="">RU</Link></div>
                <div className="header__nav-item"><Link href={"/"} className="header__nav-active">Объявления</Link></div>
                <div className="header__nav-item"><Link href={"/"} className="">Каталог</Link></div>
                <div className="header__nav-item header__nav-logo">
                    <Link href={"/"} className="">
                        <img src="/logo.webp" alt="car-tron" />
                    </Link>
                </div>
                <div className="header__nav-item"><Link href={"/"}>Диллеры</Link></div>
                <div className="header__nav-item"><Link href={"/"}>Услуги</Link></div>
                <div className="header__nav-item header__nav-personal">
                    <Link href={"/"} className="">
                        <img src="/personal.webp" alt="Личный кабинет" />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;