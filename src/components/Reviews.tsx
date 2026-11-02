import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { reviewsData } from '../data/reviews';
import styles from './Reviews.module.css';

export function Reviews() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className="section-title">Что говорят гости</h2>
                <p className="section-subtitle">
                    Нам доверяют самое ценное — время и внимание.
                </p>

                <div className={styles.swiperWrapper}>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        style={{ width: '100%', paddingBottom: '40px' }}
                    >
                        {/* Берем только первые 5 отзывов для главной */}
                        {reviewsData.slice(0, 5).map((review) => (
                            <SwiperSlide key={review.id} style={{ height: 'auto' }}>
                                <div className={styles.card}>
                                    <div>
                                        <h4 className={styles.author}>{review.author}</h4>
                                        <p className={styles.text}>{review.shortText}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/reviews" className="btn btn-light">
                        Смотреть все отзывы
                    </Link>
                </div>
            </div>
        </section>
    );
}