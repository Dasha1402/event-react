import { Link } from 'react-router-dom';
import { reviewsData } from '../data/reviews';

export function Reviews() {
    return (
        <div className="container section page">
            <h1 className="section-title">Отзывы</h1>
            <p className="section-subtitle">Нам доверяют самое ценное — время и внимание.</p>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                maxWidth: '800px',
                margin: '0 auto 40px auto'
            }}>
                {reviewsData.map(review => (
                    <div
                        key={review.id}
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            padding: '30px',
                            borderRadius: '15px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <h3 style={{
                            color: '#a3c1ad',
                            fontFamily: 'Playfair Display',
                            marginBottom: '15px',
                            fontSize: '20px'
                        }}>
                            {review.author}
                        </h3>
                        {/* Используем fullText и whiteSpace: 'pre-line' чтобы работали переносы строк (\n) */}
                        <p style={{
                            fontStyle: 'italic',
                            color: '#ddd',
                            lineHeight: '1.7',
                            fontSize: '15px',
                            whiteSpace: 'pre-line'
                        }}>
                            {review.fullText}
                        </p>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link to="/#reviews" className="btn btn-back">← Вернуться к отзывам</Link>
            </div>
        </div>
    );
}