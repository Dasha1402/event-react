import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import styles from './Calculator.module.css';

// Данные для расчетов (взяты из твоего старого кода)
const eventTypes = [
    { id: 'wedding', label: 'Свадьба', multiplier: 1 },
    { id: 'birthday', label: 'День рождения', multiplier: 2 },
    { id: 'anniversary', label: 'Годовщина', multiplier: 1.5 },
    { id: 'corporate', label: 'Корпоратив', multiplier: 4 },
    { id: 'jubilee', label: 'Юбилей', multiplier: 3 },
    { id: 'proposal', label: 'Предложение руки и сердца', multiplier: 5 },
];

const guestsOptions = [
    { id: 'upTo10', label: 'До 10 гостей', multiplier: 1 },
    { id: '11to30', label: '11-30 гостей', multiplier: 1.5 },
    { id: '31to50', label: '31-50 гостей', multiplier: 2 },
    { id: '51to100', label: '51-100 гостей', multiplier: 3 },
    { id: '100plus', label: '100+ гостей', multiplier: 4 },
];

const formatOptions = [
    { id: 'basic', label: 'Базовый', multiplier: 1 },
    { id: 'standard', label: 'Стандарт ⭐ ', multiplier: 1.5 },
    { id: 'premium', label: 'Премиум', multiplier: 2.5 },
];

const extrasOptions = [
    { id: 'host', label: 'Ведущий', price: 15000 },
    { id: 'photo', label: 'Фотограф', price: 20000 },
    { id: 'video', label: 'Видеограф', price: 40000 },
    { id: 'decor', label: 'Декор и флористика', price: 25000 },
    { id: 'catering', label: 'Кейтеринг', price: 30000 },
    { id: 'music', label: 'Живая музыка/DJ', price: 20000 },
    { id: 'show', label: 'Шоу-программа', price: 15000 },
    { id: 'cake', label: 'Торт', price: 5000 },
    { id: 'photoZone', label: 'Фотозона', price: 10000 },
    { id: 'transfer', label: 'Трансфер', price: 15000 },
    { id: 'salut', label: 'Салют', price: 30000 },
    { id: 'gifts', label: 'Подарки гостям', price: 5000 },
];

export function Calculator() {
    const [step, setStep] = useState(1);
    const [isFinished, setIsFinished] = useState(false);

    // Состояния для ответов
    const [eventType, setEventType] = useState(eventTypes[0]);
    const [guests, setGuests] = useState(guestsOptions[0]);
    const [format, setFormat] = useState(formatOptions[1]); // Стандарт по умолчанию
    const [date, setDate] = useState('');
    const [extras, setExtras] = useState<string[]>([]);

    // Функция переключения чекбоксов
    const handleExtraToggle = (id: string) => {
        setExtras(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    // Расчет стоимости
    const calculateTotal = () => {
        // 1. Считаем срочность
        let urgency = 1;
        if (date) {
            const selectedDate = new Date(date);
            const today = new Date();
            const diffDays = Math.ceil((selectedDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
            if (diffDays < 30) urgency = 1.3;
        }

        // 2. Считаем сумму допов
        let extrasSum = 0;
        extras.forEach(id => {
            const extra = extrasOptions.find(e => e.id === id);
            if (extra) extrasSum += extra.price;
        });

        // 3. Основная формула (из твоего JS)
        const basePrice = 30000;
        const total = (basePrice * guests.multiplier * format.multiplier * urgency) + extrasSum;

        // Округляем до тысяч
        const roundedTotal = Math.round(total / 1000) * 1000;

        // Вилка цен
        const min = Math.round(roundedTotal * 0.9);
        const max = Math.round(roundedTotal * 1.15);

        return { min, max };
    };

    const result = calculateTotal();

    // Навигация
    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    // --- Рендер шагов ---
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className={styles.question}>Что организуем?</div>
                        <div className={styles.options}>
                            {eventTypes.map(type => (
                                <label key={type.id} className={`${styles.label} ${eventType.id === type.id ? styles.active : ''}`}>
                                    <input type="radio" name="eventType" checked={eventType.id === type.id} onChange={() => setEventType(type)} />
                                    {type.label}
                                </label>
                            ))}
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className={styles.question}>Сколько гостей ждёте?</div>
                        <div className={styles.options}>
                            {guestsOptions.map(type => (
                                <label key={type.id} className={`${styles.label} ${guests.id === type.id ? styles.active : ''}`}>
                                    <input type="radio" name="guests" checked={guests.id === type.id} onChange={() => setGuests(type)} />
                                    {type.label}
                                </label>
                            ))}
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className={styles.question}>Насколько глубоко хотите вникать?</div>
                        <div className={styles.options}>
                            {formatOptions.map(type => (
                                <label key={type.id} className={`${styles.label} ${format.id === type.id ? styles.active : ''}`}>
                                    <input type="radio" name="format" checked={format.id === type.id} onChange={() => setFormat(type)} />
                                    {type.label}
                                </label>
                            ))}
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <div className={styles.question}>Когда планируете?</div>
                        <input
                            type="date"
                            className={styles.dateInput}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '20px', textAlign: 'center' }}>
                            *Если дата менее чем через месяц, применяется коэффициент срочности.
                        </p>
                    </>
                );
            case 5:
                return (
                    <>
                        <div className={styles.question}>Что добавим?</div>
                        <div className={styles.options}>
                            {extrasOptions.map(extra => (
                                <label key={extra.id} className={`${styles.label} ${extras.includes(extra.id) ? styles.active : ''}`}>
                                    <input type="checkbox" checked={extras.includes(extra.id)} onChange={() => handleExtraToggle(extra.id)} />
                                    {extra.label} ({extra.price.toLocaleString()} ₽)
                                </label>
                            ))}
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    // --- Экран результата ---
    if (isFinished) {
        return (
            <div className={styles.container}>
                <div className={styles.calcBox}>
                    <div className={styles.resultBox}>
                        <h3 className={styles.resultTitle}>Примерная стоимость:</h3>
                        <div className={styles.priceRange}>
                            {result.min.toLocaleString()} – {result.max.toLocaleString()} ₽
                        </div>
                        <p style={{ color: '#aaa', marginBottom: '30px' }}>
                            Точную смету составим бесплатно после короткого разговора
                        </p>

                        <IMaskInput
                            mask="+7 (000) 000-00-00"
                            placeholder="+7 (999) 999-99-99"
                            className={styles.phoneInput}
                        />

                        <button
                            className={styles.btnNext}
                            onClick={() => alert('Заявка отправлена! Мы свяжемся с вами.')}
                            style={{ marginBottom: '15px' }}
                        >
                            Получить точную смету
                        </button>

                        <button
                            className={styles.btnBack}
                            onClick={() => {
                                setIsFinished(false);
                                setStep(1);
                                setExtras([]);
                                setDate('');
                            }}
                            style={{ marginBottom: '15px', width: '100%' }}
                        >
                            Повторить расчёт
                        </button>

                        <Link
                            to="/#calculator-teaser"
                            className={styles.btnBack}
                            style={{ display: 'block', width: '100%', textAlign: 'center', textDecoration: 'none' }}
                        >
                            ← Вернуться на главную
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // --- Основной экран с шагами ---
    return (
        <div className={styles.container}>
            <div className={styles.calcBox}>

                {/* Прогресс-бар */}
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${(step / 5) * 100}%` }}></div>
                </div>

                <div className={styles.stepTitle}>Шаг {step} из 5</div>

                {renderStep()}

                <div className={styles.navButtons}>
                    {step > 1 && (
                        <button className={styles.btnBack} onClick={prevStep}>
                            Назад
                        </button>
                    )}

                    {step < 5 ? (
                        <button className={styles.btnNext} onClick={nextStep}>
                            Далее
                        </button>
                    ) : (
                        <button className={styles.btnNext} onClick={() => setIsFinished(true)}>
                            Рассчитать
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}