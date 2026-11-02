import { Link } from 'react-router-dom';

export function About() {
    return (
        <div className="container section page" style={{ maxWidth: '1000px' }}>
            <h1 className="section-title">О нас</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
                {/* Левая колонка: История */}
                <div>
                    <h3 style={{ fontFamily: 'Playfair Display', color: '#a3c1ad', fontSize: '24px', marginBottom: '20px' }}>Наша история</h3>
                    <p style={{ color: '#ccc', marginBottom: '15px', lineHeight: '1.8' }}>
                        В 2018 году Екатерина организовала свадьбу своей лучшей подруги. Бюджет был скромный, времени - две недели, а опыта - ноль. Но было огромное желание сделать так, чтобы подруга запомнила этот день на всю жизнь.
                    </p>
                    <p style={{ color: '#ccc', marginBottom: '15px', lineHeight: '1.8' }}>
                        Получилось. Подруга плакала от счастья, гости не хотели уходить, а через месяц к Екатерине пришли ещё две пары: "Нам сказали, ты можешь помочь".
                    </p>
                    <p style={{ color: '#ccc', lineHeight: '1.8' }}>
                        Так появился "Event" - без офиса, без команды, без сайта. Только с блокнотом, телефоном и принципом: "Праздник должен быть праздником для всех, включая заказчиков".
                    </p>
                </div>

                {/* Правая колонка: Принципы */}
                <div>
                    <h3 style={{ fontFamily: 'Playfair Display', color: '#a3c1ad', fontSize: '24px', marginBottom: '20px' }}>Наши принципы</h3>

                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#fff', marginBottom: '5px' }}>Прозрачность</h4>
                        <p style={{ color: '#aaa', fontSize: '14px' }}>Фиксируем стоимость в договоре и не меняем её по ходу подготовки. Вы всегда знаете, за что платите.</p>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#fff', marginBottom: '5px' }}>Один ответственный</h4>
                        <p style={{ color: '#aaa', fontSize: '14px' }}>У вас один договор и один человек, который ведёт проект от начала до конца. Не "отдел", а конкретный человек с именем и телефоном.</p>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#fff', marginBottom: '5px' }}>Присутствие 24/7</h4>
                        <p style={{ color: '#aaa', fontSize: '14px' }}>В день мероприятия координатор на связи каждую минуту. Если что-то идёт не так – вы об этом не узнаете.</p>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link to="/" className="btn btn-back">← Вернуться на главную</Link>
            </div>
        </div>
    );
}