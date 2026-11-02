export function ContactsSection() {
    return (
        <section id="contacts" className="section container" style={{ textAlign: 'center', maxWidth: '800px', paddingBottom: '80px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Контакты</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginTop: '30px' }}>
                <p>📞  <strong>Телефон:</strong> +7 (123) 456-78-90</p>
                <p>✉️  <strong>Email:</strong> hello@event-agency.ru</p>
                <p>📍  <strong>Офис:</strong> Москва, ул. Примерная 1, офис 12</p>
                <p>🕒  <strong>Часы работы:</strong> Пн-Пт: 10:00-20:00, Сб-Вс: по договорённости</p>
            </div>
        </section>
    );
}