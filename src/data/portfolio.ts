export interface PortfolioItem {
    title: string;
    loc: string;
    guests: string;
    year: string;
    tag: string;
    img: string;
}

export const portfolioData: PortfolioItem[] = [
    // Свадьбы
    { title: "Свадьба Анны и Дмитрия", loc: "Сочи", guests: "80", year: "2025", tag: "#Свадьба", img: "img/svadba_1.webp" },
    { title: "Свадьба Марии и Петра", loc: "Казань", guests: "100", year: "2024", tag: "#Свадьба", img: "img/svadba_2.webp" },
    { title: "Свадьба Ольги и Максима", loc: "Москва", guests: "120", year: "2024", tag: "#Свадьба", img: "img/svadba_3.webp" },
    { title: "Свадьба Терезы и Константина", loc: "Нижний Новгород", guests: "120", year: "2025", tag: "#Свадьба", img: "img/svadba_4.webp" },
    { title: "Свадьба Эдварда и Алексея", loc: "Краснодар", guests: "100", year: "2023", tag: "#Свадьба", img: "img/svadba_5.webp" },

    // Дни рождения
    { title: "День рождения Ангелины", loc: "Подмосковье", guests: "25", year: "2024", tag: "#День рождения", img: "img/dr_1.webp" },
    { title: "День рождения Ирины", loc: "Москва", guests: "20", year: "2025", tag: "#День рождения", img: "img/dr_2.webp" },
    { title: "День рождения Дианы", loc: "Москва", guests: "25", year: "2026", tag: "#День рождения", img: "img/dr_3.webp" },
    { title: "День рождения Вероники", loc: "Анапа", guests: "10", year: "2021", tag: "#День рождения", img: "img/dr_4.webp" },
    { title: "День рождения Алисы", loc: "Краснодар", guests: "15", year: "2024", tag: "#День рождения", img: "img/dr_5.webp" },

    // Корпоративы
    { title: "Корпоратив в январе", loc: "Москва", guests: "50", year: "2019", tag: "#Корпоратив", img: "img/corporativ_1.webp" },
    { title: "Корпоратив в декабре", loc: "Москва", guests: "100", year: "2024", tag: "#Корпоратив", img: "img/corporativ_2.webp" },
    { title: "Корпоратив в Анапе", loc: "Анапа", guests: "130", year: "2018", tag: "#Корпоратив", img: "img/corporativ_3.webp" },
    { title: "Корпоратив в Самаре", loc: "Самара", guests: "150", year: "2023", tag: "#Корпоратив", img: "img/corporativ_4.webp" },
    { title: "Корпоратив в Москве", loc: "Москва", guests: "90", year: "2025", tag: "#Корпоратив", img: "img/corporativ_5.webp" },

    // Юбилеи
    { title: "Юбилей Елены", loc: "Тюмень", guests: "30", year: "2017", tag: "#Юбилей", img: "img/ubileq_1.webp" },
    { title: "Юбилей Надежды", loc: "Новосибирск", guests: "30", year: "2023", tag: "#Юбилей", img: "img/ubileq_2.webp" },
    { title: "Юбилей Екатерины", loc: "Пермь", guests: "30", year: "2024", tag: "#Юбилей", img: "img/ubileq_3.webp" },
    { title: "Юбилей Валентины", loc: "Санкт-Петербург", guests: "20", year: "2025", tag: "#Юбилей", img: "img/ubileq_4.webp" },
    { title: "Юбилей Александра", loc: "Москва", guests: "40", year: "2022", tag: "#Юбилей", img: "img/ubileq_5.webp" },

    // Годовщины
    { title: "Годовщина Евгении и Александра", loc: "Нижневартовск", guests: "20", year: "2021", tag: "#Годовщина", img: "img/godovshina_1.webp" },
    { title: "Годовщина Марины и Сергея", loc: "Москва", guests: "15", year: "2023", tag: "#Годовщина", img: "img/godovshina_2.webp" },
    { title: "Годовщина Ольги и Дмитрия", loc: "Сочи", guests: "25", year: "2024", tag: "#Годовщина", img: "img/godovshina_3.webp" },
    { title: "Годовщина Анны и Игоря", loc: "Казань", guests: "30", year: "2022", tag: "#Годовщина", img: "img/godovshina_4.webp" },
    { title: "Годовщина Татьяны и Николая", loc: "Санкт-Петербург", guests: "10", year: "2025", tag: "#Годовщина", img: "img/godovshina_5.webp" },

    // Предложения
    { title: "Предложение руки и сердца", loc: "Москва", guests: "2", year: "2024", tag: "#Предложение", img: "img/predlozhenie_1.webp" },
    { title: "Предложение на природе", loc: "Сочи", guests: "2", year: "2023", tag: "#Предложение", img: "img/predlozhenie_2.webp" },
    { title: "Сюрприз в ресторане", loc: "Москва", guests: "2", year: "2025", tag: "#Предложение", img: "img/predlozhenie_3.webp" },
    { title: "Предложение на крыше", loc: "Санкт-Петербург", guests: "2", year: "2024", tag: "#Предложение", img: "img/predlozhenie_4.webp" },
    { title: "Предложение на закате", loc: "Анапа", guests: "2", year: "2026", tag: "#Предложение", img: "img/predlozhenie_5.webp" }
];