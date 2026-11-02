import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <div className={styles['logo-icon']}>E</div>
                <span>Event</span>
            </Link>

            <nav className={styles['nav-menu']}>
                <ul>
                    {/* Ведет на самый верх главной страницы */}
                    <li><Link to="/">Главная</Link></li>

                    {/* Ведет к блоку с id="about" на главной */}
                    <li><Link to="/#about">О нас</Link></li>

                    {/* Ведет к блоку с id="events" на главной */}
                    <li><Link to="/#events">Мероприятия</Link></li>

                    <li><Link to="/packages">Пакеты</Link></li>
                    <li><Link to="/calculator">Калькулятор</Link></li>

                    {/* Ведет на отдельную страницу отзывов */}
                    <li><Link to="/reviews">Отзывы</Link></li>

                    {/* Ведет к блоку с id="contacts" на главной */}
                    <li><Link to="/#contacts">Контакты</Link></li>
                </ul>
            </nav>
        </header>
    );
}