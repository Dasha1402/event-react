import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.title}>Event</h2>
            <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>Ваш праздник. Наша работа</p>

            <div className={styles.contacts}>
                <p>Телефон: +7 (123) 456-78-90 | Email: hello@event-agency.ru</p>
                <p>Москва, ул. Примерная 1, офис 12 | Пн-Пт: 10:00-20:00</p>
            </div>

            <div className={styles.socials}>
                <a href="#">Instagram</a>
                <a href="#">VK</a>
                <a href="#">Telegram</a>
                <a href="#">Pinterest</a>
            </div>

            <div className={styles.bottom}>
                <p>ИП Иванова Е. А. ИНН 000000000000</p>
                <p>© 2026 Event. Ваш праздник. Наша работа</p>
            </div>
        </footer>
    );
}