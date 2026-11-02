import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import styles from './Portfolio.module.css';

export function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Теперь храним индекс
  const swiperRef = useRef<any>(null);

  const uniqueTags = Array.from(new Set(portfolioData.map(item => item.tag.replace('#', ''))));
  const currentItem = selectedIndex !== null ? portfolioData[selectedIndex] : null;

  const handleTagClick = (tag: string) => {
    const targetIndex = portfolioData.findIndex(item => item.tag.includes(tag));
    if (targetIndex !== -1 && swiperRef.current) {
      swiperRef.current.swiper.slideTo(targetIndex);
    }
  };

  // Функции для листания в модальном окне (по кругу)
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === portfolioData.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? portfolioData.length - 1 : selectedIndex - 1);
    }
  };

  // Поддержка стрелочек на клавиатуре
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext(e as any);
      if (e.key === 'ArrowLeft') handlePrev(e as any);
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="portfolio" className={styles.section}>
      <div className="container">
        <h2 className="section-title">Портфолио</h2>
        <p className={styles.sectionSubtitle} style={{ marginBottom: '20px' }}>
          Наши лучшие работы: от камерных вечеров до масштабных корпоративов
        </p>

        <div className={styles.filters}>
          {uniqueTags.map(tag => (
            <button 
              key={tag} 
              className={styles.filterBtn}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          loop={true} // <-- ВОТ ОНА, БЕСКОНЕЧНАЯ ПРОКРУТКА
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ width: '100%', paddingBottom: '40px' }}
        >
          {portfolioData.map((item, i) => (
            <SwiperSlide key={i} style={{ height: 'auto' }}>
              <div className={styles.slide}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  onClick={() => setSelectedIndex(i)} 
                />
                <div className={styles.info}>
                  <span className={styles.tag}>{item.tag}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.details}>
                    📍  {item.loc} • 👥  {item.guests} гостей • 📅  {item.year}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Модальное окно с листанием */}
<AnimatePresence>
  {selectedIndex !== null && currentItem && (
    <motion.div 
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedIndex(null)}
    >
      <button 
        className={`${styles.modalArrow} ${styles.arrowLeft}`} 
        onClick={handlePrev}
      >
        ❮
      </button>
      
      <button 
        className={`${styles.modalArrow} ${styles.arrowRight}`} 
        onClick={handleNext}
      >
        ❯
      </button>

      {/* Оборачиваем саму карточку в дополнительный AnimatePresence с режимом "wait" */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={selectedIndex} // Ключ заставляет React пересоздавать элемент при смене фото
          className={styles.modalContent}
          initial={{ opacity: 0, x: 50 }} // Появление чуть справа
          animate={{ opacity: 1, x: 0 }} // Встает на место
          exit={{ opacity: 0, x: -50 }} // Исчезает влево
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeBtn} onClick={() => setSelectedIndex(null)}>✖</button>
          
          <img src={currentItem.img} alt={currentItem.title} className={styles.modalImage} />
          
          <div className={styles.modalTextPanel}>
            <span className={styles.modalTag}>{currentItem.tag}</span>
            <h3 className={styles.modalTitle}>{currentItem.title}</h3>
            <p className={styles.modalDetails}>📍  Локация: {currentItem.loc}</p>
            <p className={styles.modalDetails}>👥  Гостей: {currentItem.guests}</p>
            <p className={styles.modalDetails}>📅  Год: {currentItem.year}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </section>
  );
}