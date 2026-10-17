// All page copy, verbatim from desing/docs/content.md.
// Headings with a lime marker are split into before / marked / after.

export const appUrl: string =
  import.meta.env.PUBLIC_APP_URL || "https://app.vupsen.space";

export const meta = {
  title: "Личная CRM",
  description:
    "Простая записная книжка для личных контактов: имя, где познакомились, как связаться и о чём договорились.",
};

export const brand = "Личная CRM";

export const ctaLabel = "Добавить первый контакт";

export const hero = {
  title: {
    before: "Не теряйте ",
    marked: "людей,",
    after: " которых знаете",
  },
  lead: "Простая записная книжка для личных контактов: имя, где познакомились, как связаться и о чём договорились.",
  fields: [
    { label: "Имя", value: "Олег Данилов" },
    { label: "Где познакомились", value: "Учились вместе в МГУ" },
    { label: "О чём договорились", value: "Встретиться на выпускном вечере" },
  ],
  saved: "Сохранено",
};

export const problem = {
  chip: "Знакомо?",
  title: "Номер есть, а кто это — уже не вспомнить",
  text: "Всё разбросано по чатам, заметкам и памяти.",
  contact: {
    avatar: "?",
    name: "Саша (новый)",
    phone: "+7 900 000-00-00",
  },
  sources: ["чаты", "заметки", "память"],
};

export const solution = {
  chip: "Как это устроено",
  title: "У каждого человека своя карточка",
  text: "Имя, где познакомились, телефон, почта и заметки.",
  card: {
    initials: "ОД",
    name: "Олег Данилов",
    origin: "Учились вместе в МГУ",
    phone: { label: "Телефон", value: "+7 900 000-00-00" },
    email: { label: "Почта", value: "oleg@mail.ru" },
    notes: { label: "Заметки", value: "Встретиться на выпускном вечере. Позвать Иру." },
  },
  steps: [
    "Открыли приложение и сразу видите всех",
    "Нашли нужного человека по имени",
    "После разговора дописали, о чём договорились",
  ],
  plaque: {
    before: "Место для людей, которых вы знаете ",
    marked: "лично",
  },
};

export const benefits = {
  chip: "Что вы получаете",
  items: [
    { icon: "user", text: "Помните, кто есть кто и где познакомились" },
    { icon: "check", text: "Договорённости больше не забываются" },
    { icon: "search", text: "Нужный человек находится по имени за секунды" },
    { icon: "monitor", text: "Открывайте приложение с любого устройства" },
  ],
} as const;

export const finalCta = {
  title: {
    before: "Запишите того, с кем говорили ",
    marked: "сегодня",
  },
  text: "И о чём договорились.",
};
