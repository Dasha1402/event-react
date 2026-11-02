import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { eventsData } from '../data/events';
import { Portfolio } from '../components/Portfolio';
import { Reviews } from '../components/Reviews';
import { Faq } from '../components/Faq';
import { ContactForm } from '../components/ContactForm';
import { MiniCalculator } from '../components/MiniCalculator';
import { HowWeWork } from '../components/HowWeWork';
import { AboutSection } from '../components/AboutSection';
import { TeamSection } from '../components/TeamSection';
import { ContactsSection } from '../components/ContactsSection';
import { FadeIn } from '../components/FadeIn'; // <-- Импортируем анимацию

export function Main() {
    return (
        <div className="page">
            {/* Hero не оборачиваем, чтобы он загружался сразу */}
            <Hero />

            {/* Статистика */}
            <FadeIn>
                <section style={{ backgroundColor: '#2a2f2a', padding: '40px 20px', width: '100%' }}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', textAlign: 'center', gap: '20px', width: '100%' }}>
                        <div><span style={{ display: 'block', fontSize: '28px', color: '#a3c1ad' }}>500+</span><span>мероприятий</span></div>
                        <div><span style={{ display: 'block', fontSize: '28px', color: '#a3c1ad' }}>8 лет</span><span>на рынке</span></div>
                        <div><span style={{ display: 'block', fontSize: '28px', color: '#a3c1ad' }}>120</span><span>партнёров</span></div>
                        <div><span style={{ display: 'block', fontSize: '28px', color: '#a3c1ad' }}>98%</span><span>рекомендуют</span></div>
                    </div>
                </section>
            </FadeIn>

            {/* Мероприятия */}
            <FadeIn>
                <section id="events" className="section container">
                    <h2 className="section-title">Типы мероприятий</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
                        {eventsData.map((event) => (
                            <div key={event.id} style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: '15px' }}>
                                <div style={{ fontSize: '40px' }}>{event.icon}</div>
                                <div style={{ flex: 1 }}><h3>{event.title}</h3><p style={{ color: '#ccc', fontSize: '14px' }}>{event.description}</p></div>
                                <Link to={`/events/${event.id}`} className="btn btn-small">Подробнее</Link>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeIn>

            <FadeIn>
                <MiniCalculator />
            </FadeIn>

            <FadeIn>
                <HowWeWork />
            </FadeIn>

            {/* Пакеты услуг */}
            <FadeIn>
                <section id="packages" className="section" style={{ backgroundColor: '#222822' }}>
                    <div className="container">
                        <h2 className="section-title">Пакеты услуг</h2>
                        <p className="section-subtitle" style={{ marginBottom: '40px' }}>Выберите готовое решение или соберите своё в калькуляторе.</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '30px' }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px', flex: '1 1 250px', maxWidth: '300px', textAlign: 'center' }}><h3>Базовый</h3><div style={{ fontSize: '24px', color: '#a3c1ad', margin: '15px 0' }}>от 30 000 ₽</div><p>до 20 гостей</p></div>
                            <div style={{ background: 'rgba(163, 193, 173, 0.1)', border: '1px solid #a3c1ad', padding: '30px', borderRadius: '15px', flex: '1 1 250px', maxWidth: '300px', textAlign: 'center' }}><h3>Стандарт ⭐ </h3><div style={{ fontSize: '24px', color: '#a3c1ad', margin: '15px 0' }}>от 80 000 ₽</div><p>до 50 гостей</p></div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px', flex: '1 1 250px', maxWidth: '300px', textAlign: 'center' }}><h3>Премиум</h3><div style={{ fontSize: '24px', color: '#a3c1ad', margin: '15px 0' }}>от 200 000 ₽</div><p>50+ гостей</p></div>
                        </div>
                        <div style={{ textAlign: 'center' }}><Link to="/packages" className="btn btn-light">Смотреть все пакеты</Link></div>
                    </div>
                </section>
            </FadeIn>

            <FadeIn>
                <Portfolio />
            </FadeIn>

            <FadeIn>
                <AboutSection />
            </FadeIn>

            <FadeIn>
                <TeamSection />
            </FadeIn>

            <FadeIn>
                <div id="reviews">
                    <Reviews />
                </div>
            </FadeIn>

            <FadeIn>
                <Faq />
            </FadeIn>

            <FadeIn>
                <ContactsSection />
            </FadeIn>

            <FadeIn>
                <ContactForm />
            </FadeIn>
        </div>
    );
}