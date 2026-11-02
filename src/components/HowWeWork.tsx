export function HowWeWork() {
    const steps = [
        { title: "Заявка.", text: "Оставляете заявку на сайте или звоните. Отвечаем в течение 15 минут." },
        { title: "Бриф.", text: "Созваниваемся или встречаемся. Задаём много вопросов: бюджет, что важно, что не подходит." },
        { title: "Концепция.", text: "Через 2-3 дня – мудборд, смета, план. Правим до \"идеально\". Цена фиксируется." },
        { title: "Подготовка.", text: "Бронируем площадку, подписываем договоры, согласовываем меню." },
        { title: "Праздник.", text: "Вы ничего не делаете. Координатор приезжает за 3-4 часа, встречает подрядчиков." }
    ];

    return (
        <section className="section container">
            <h2 className="section-title">Как мы работаем</h2>
            <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {steps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                        <div style={{ background: '#a3c1ad', color: '#1a1f1a', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
                            {i + 1}
                        </div>
                        <div>
                            <strong style={{ display: 'block', fontSize: '18px', marginBottom: '5px' }}>{step.title}</strong>
                            <p style={{ color: '#ccc' }}>{step.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}