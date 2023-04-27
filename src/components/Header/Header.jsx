import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link href={"/"} className="header__nav-item header__nav-lang">RU</Link>
                <Link href={"/"} className="header__nav-item">Объявления</Link>
                <Link href={"/"} className="header__nav-item">Каталог</Link>
                <Link href={"/"} className="header__nav-item header__nav-logo">
                    <img src="/logo.webp" alt="car-tron" />
                </Link>
                <Link href={"/"} className="header__nav-item">Диллеры</Link>
                <Link href={"/"} className="header__nav-item">Услуги</Link>
                <Link href={"/"} className="header__nav-item header__nav-personal">
                    <img src="/personal.webp" alt="Личный кабинет" />
                </Link>
            </nav>
        </header>
    );
};

export default Header;