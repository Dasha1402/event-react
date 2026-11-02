import { useState } from 'react';
import { faqData } from '../data/faq';
import styles from './Faq.module.css';

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className="section-title">Часто задаваемые вопросы</h2>

                <div className={styles.list}>
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className={styles.item}>
                                <button className={styles.question} onClick={() => toggle(index)}>
                                    <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>+</span>
                                    {item.question}
                                </button>
                                <div className={`${styles.answer} ${isOpen ? styles.open : ''}`}>
                                    {item.answer}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}