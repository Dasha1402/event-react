import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Event</h1>
                <h2 className={styles.heroSubtitle}>Ваш праздник.<br />Наша работа.</h2>
                <p className={styles.heroText}>
                    Свадьбы, дни рождения, корпоративы, юбилеи, годовщины и предложения руки и сердца —
                    организуем под ключ, от идеи до последнего гостя.
                </p>
                <div className={styles.heroButtons}>
                    <Link to="/calculator" className="btn btn-green">Рассчитать стоимость</Link>
                    <a href="#portfolio" className="btn btn-light">Смотреть портфолио</a>
                </div>
            </div>
        </section>
    );
}