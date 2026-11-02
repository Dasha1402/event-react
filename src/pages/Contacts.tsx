import { Link } from 'react-router-dom';

export function Contacts() {
    return (
        <div className="container section page" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h1 className="section-title">Контакты</h1>
            <p className="section-subtitle">Свяжитесь с нами любым удобным способом</p>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '15px', marginBottom: '40px', textAlign: 'left', display: 'inline-block', width: '100%', maxWidth: '500px' }}>
                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{ fontSize: '24px' }}>📞 </span>
                    <div>
                        <p style={{ color: '#aaa', fontSize: '14px' }}>Телефон</p>
                        <p style={{ fontSize: '18px' }}>+7 (123) 456-78-90</p>
                    </div>
                </div>

                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{ fontSize: '24px' }}>✉️ </span>
                    <div>
                        <p style={{ color: '#aaa', fontSize: '14px' }}>Email</p>
                        <p style={{ fontSize: '18px' }}>hello@event-agency.ru</p>
                    </div>
                </div>

                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{ fontSize: '24px' }}>📍 </span>
                    <div>
                        <p style={{ color: '#aaa', fontSize: '14px' }}>Офис</p>
                        <p style={{ fontSize: '18px' }}>Москва, ул. Примерная 1, офис 12</p>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{ fontSize: '24px' }}>🕒 </span>
                    <div>
                        <p style={{ color: '#aaa', fontSize: '14px' }}>Часы работы</p>
                        <p style={{ fontSize: '18px' }}>Пн-Пт: 10:00-20:00<br />Сб-Вс: по договорённости</p>
                    </div>
                </div>
            </div>

            <div>
                <Link to="/" className="btn btn-back">← Вернуться на главную</Link>
            </div>
        </div>
    );
}