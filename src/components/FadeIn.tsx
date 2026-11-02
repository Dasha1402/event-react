import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number; // Задержка перед появлением (в секундах)
}

export function FadeIn({ children, delay = 0 }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Начальное состояние: прозрачный и сдвинут вниз
            whileInView={{ opacity: 1, y: 0 }} // Конечное: непрозрачный и на своем месте
            viewport={{ once: true, amount: 0.1 }} // Срабатывает один раз, когда видно 10% блока
            transition={{ duration: 0.7, delay: delay, ease: "easeOut" }} // Плавность
        >
            {children}
        </motion.div>
    );
}