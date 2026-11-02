import { Link } from 'react-router-dom';

export function MiniCalculator() {
    return (
        <section id="calculator-teaser" className="section container" style={{ textAlign: 'center', padding: '80px 20px' }}>
            <h2 className="section-title">Мини калькулятор</h2>
            <p style={{ color: '#a3c1ad', fontSize: '18px', marginBottom: '10px' }}>Узнайте стоимость за 1 минуту</p>
            <p style={{ color: '#aaa', marginBottom: '30px' }}>Ответьте на 5 вопросов — покажем реалистичную вилку цены. Без звонков и обязательств.</p>
            <Link to="/calculator" className="btn btn-green">Рассчитать стоимость</Link>
        </section>
    );
}