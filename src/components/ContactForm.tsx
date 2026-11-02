import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import styles from './ContactForm.module.css';

export function ContactForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь в будущем можно отправлять данные на сервер
        setIsModalOpen(true);
    };

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className="section-title">Давайте обсудим ваш праздник</h2>
                <p className="section-subtitle">
                    Оставьте заявку - перезвоним в течение 15 минут, ответим на вопросы и бесплатно рассчитаем стоимость.
                </p>

                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Имя"
                            className={styles.input}
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        {/* Маска телефона */}
                        <IMaskInput
                            mask="+7 (000) 000-00-00"
                            placeholder="+7 (999) 999-99-99"
                            className={styles.input}
                            required
                        />

                        <p style={{ marginBottom: '10px', color: '#a3c1ad' }}>Тип мероприятия</p>
                        <div className={styles.radioGroup}>
                            <label><input type="radio" name="eventType" value="wedding" defaultChecked /> Свадьба</label>
                            <label><input type="radio" name="eventType" value="birthday" /> День рождения</label>
                            <label><input type="radio" name="eventType" value="corporate" /> Корпоратив</label>
                            <label><input type="radio" name="eventType" value="anniversary" /> Юбилей</label>
                            <label><input type="radio" name="eventType" value="anniv-date" /> Годовщина</label>
                            <label><input type="radio" name="eventType" value="proposal" /> Предложение</label>
                        </div>

                        <input type="date" className={styles.input} style={{ colorScheme: 'dark' }} />
                        <textarea placeholder="Комментарий" className={styles.textarea} rows={3}></textarea>

                        <button type="submit" className={styles.submitBtn}>Отправить</button>
                    </form>
                </div>
            </div>

            {/* Модальное окно успеха */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>✖</button>
                        <h3>Заявка отправлена!</h3>
                        <p>{name}, перезвоним в течение 15 минут, ждём интересующие вас вопросы и уже готовимся создавать ваш праздник мечты.</p>
                    </div>
                </div>
            )}
        </section>
    );
}