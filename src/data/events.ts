export interface EventType {
    id: string; // будет использоваться для ссылки (например, /events/wedding)
    icon: string;
    title: string;
    description: string;
}

export const eventsData: EventType[] = [
    {
        id: "wedding",
        icon: "💍 ",
        title: "Свадьбы",
        description: "Свадьба вашей мечты - без стресса. От концепции до последнего танца."
    },
    {
        id: "birthday",
        icon: "🎂 ",
        title: "Дни рождения",
        description: "Взрослые, детские, тематические - праздник, о котором будут говорить весь год."
    },
    {
        id: "corporate",
        icon: "🏢 ",
        title: "Корпоративы",
        description: "Новый год, юбилей компании, тимбилдинг. Любой бюджет, любая численность."
    },
    {
        id: "anniversary",
        icon: "🥂 ",
        title: "Юбилеи",
        description: "50, 60, 70 лет - достойный праздник для важного человека. Тепло и душевно."
    },
    {
        id: "anniv-date",
        icon: "❤️ ",
        title: "Годовщины",
        description: "1 год, 10 лет, 25 лет - Отметьте важную дату красиво."
    },
    {
        id: "proposal",
        icon: "💐 ",
        title: "Предложение руки и сердца",
        description: "Тот самый момент, который запомнится на всю жизнь. Организуем идеальную сцену для главного 'Да'."
    }
];