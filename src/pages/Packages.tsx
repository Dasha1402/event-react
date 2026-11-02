import { Link } from 'react-router-dom';

export function Packages() {
    const packages = [
        { title: "Базовый", price: "от 30 000 ₽", guests: "до 20 гостей", features: ["Консультация и разработка концепции", "Подбор площадки под ваш бюджет", "Базовый декор", "Координатор в день мероприятия"] },
        { title: "Стандарт ⭐ ", price: "от 80 000 ₽", guests: "до 50 гостей", features: ["Всё из пакета 'Базовый'", "Ведущий с авторской программой", "Диджей или живая музыка", "Фотограф на 4 часа", "Кейтеринг и обслуживание"] },
        { title: "Премиум", price: "от 200 000 ₽", guests: "50+ гостей", features: ["Всё из пакета 'Стандарт'", "Индивидуальный сценарий", "Дизайнер и флорист", "Артисты, шоу-балет", "Видеограф", "Салют, спецэффекты", "Персональный менеджер"] }
    ];

    return (
        <div className="container section page" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="section-title" style={{ textAlign: 'center' }}>Пакеты услуг</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                {packages.map((pkg, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h2 style={{ fontFamily: 'Playfair Display', fontSize: '24px', marginBottom: '5px' }}>{pkg.title} <span style={{ color: '#a3c1ad' }}>- {pkg.price}</span></h2>
                        <p style={{ color: '#aaa', marginBottom: '15px', fontSize: '14px' }}>{pkg.guests}</p>
                        <ul style={{ lineHeight: '1.8', color: '#ddd' }}>
                            {pkg.features.map((f, j) => <li key={j} style={{ display: 'flex', gap: '10px' }}><span style={{ color: '#a3c1ad' }}>•</span> {f}</li>)}
                        </ul>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center' }}>
                <Link to="/#packages" className="btn btn-back">← Вернуться к пакетам</Link>
            </div>
        </div>
    );
}