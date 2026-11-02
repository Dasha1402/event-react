export function AboutSection() {
    const features = [
        { title: "Мы не работаем \"на потоке\"", text: "Берёмся ограниченное количество проектов, чтобы каждый вести внимательно. Если даты заняты - честно скажем." },
        { title: "Мы не навязываем шаблон", text: "80% наших мероприятий – кастомные сметы. Хотите только декор \"премиум\" и фотографа? Пожалуйста." },
        { title: "Мы работаем с любым бюджетом", text: "Свадьба за 200 000 и за 3 000 000 - для нас одинаково важны. Умеем делать красиво в рамках скромного бюджета." },
        { title: "Мы остаёмся после праздника", text: "Через 3 дня вы получаете фото, видео и небольшой подарок - смонитированный клип с лучшими моментами." }
    ];

    return (
        <section id="about" className="section container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="section-title">О нас</h2>

            {/* Верхняя часть: История и Принципы */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px' }}>
                {/* Левая колонка */}
                <div>
                    <h3 style={{ fontFamily: 'Playfair Display', color: '#a3c1ad', fontSize: '24px', marginBottom: '20px' }}>Наша история</h3>
                    <p style={{ color: '#ccc', marginBottom: '15px', lineHeight: '1.8' }}>В 2018 году Екатерина организовала свадьбу своей лучшей подруги. Бюджет был скромный, времени - две недели, а опыта - ноль. Но было огромное желание сделать так, чтобы подруга запомнила этот день на всю жизнь.</p>
                    <p style={{ color: '#ccc', marginBottom: '15px', lineHeight: '1.8' }}>Получилось. Подруга плакала от счастья, гости не хотели уходить, а через месяц к Екатерине пришли ещё две пары: "Нам сказали, ты можешь помочь".</p>
                    <p style={{ color: '#ccc', marginBottom: '15px', lineHeight: '1.8' }}>Так появился "Event" - без офиса, без команды, без сайта. Только с блокнотом, телефоном и принципом: "Праздник должен быть праздником для всех, включая заказчиков".</p>
                    <p style={{ color: '#ccc', lineHeight: '1.8' }}>За 8 лет мы выросли: теперь у нас команда и 4 ключевых людей, база из 120 проверенных подрядчиков и более 500 проведённых мероприятий. Но принцип остался тот же - мы делаем праздник так, как делали бы для себя.</p>
                </div>

                {/* Правая колонка */}
                <div>
                    <h3 style={{ fontFamily: 'Playfair Display', color: '#a3c1ad', fontSize: '24px', marginBottom: '20px' }}>Наши принципы</h3>

                    <div style={{ marginBottom: '20px' }}>
                        <strong style={{ fontSize: '18px' }}>Прозрачность</strong>
                        <p style={{ color: '#aaa', fontSize: '14px', marginTop: '5px' }}>Фиксируем стоимость в договоре и не меняем её по ходу подготовки. Вы всегда знаете, за что платите.</p>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <strong style={{ fontSize: '18px' }}>Один ответственный</strong>
                        <p style={{ color: '#aaa', fontSize: '14px', marginTop: '5px' }}>У вас один договор и один человек, который ведёт проект от начала до конца. Не "отдел", а конкретный человек с именем и телефоном.</p>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <strong style={{ fontSize: '18px' }}>Присутствие 24/7</strong>
                        <p style={{ color: '#aaa', fontSize: '14px', marginTop: '5px' }}>В день мероприятия координатор на связи каждую минуту. Если что-то идёт не так – вы об этом не узнаете.</p>
                    </div>

                    <div>
                        <strong style={{ fontSize: '18px' }}>Ответственность</strong>
                        <p style={{ color: '#aaa', fontSize: '14px', marginTop: '5px' }}>Прописываем финансовую ответственность за результат. За 8 лет мы возвращали деньги только 4 раза, но каждый раз без судов и скандалов.</p>
                    </div>
                </div>
            </div>

            {/* Нижняя часть: Что нас отличает */}
            <h3 style={{ fontFamily: 'Playfair Display', textAlign: 'center', fontSize: '28px', marginBottom: '30px' }}>Что нас отличает</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                {features.map((feature, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '15px' }}>
                        <strong style={{ display: 'block', fontSize: '18px', marginBottom: '15px' }}>{feature.title}</strong>
                        <p style={{ color: '#ddd', fontSize: '14px', lineHeight: '1.6' }}>{feature.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}