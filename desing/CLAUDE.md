# Лендинг «Личная CRM»

Статичный одностраничный лендинг. Единственное целевое действие — перейти в приложение (все кнопки «Добавить первый контакт» ведут на `PUBLIC_APP_URL`).

## Стек

- Astro (последняя стабильная), `output: 'static'`
- Tailwind CSS 4 через `@tailwindcss/vite` (CSS-first конфиг, без `tailwind.config.js`)
- Шрифты self-hosted через Fontsource: `@fontsource-variable/unbounded`, `@fontsource-variable/manrope` (нужна кириллица)
- Ноль клиентского JS: никаких `client:*` директив и фреймворков UI

## Источники правды

1. `reference/mobile.html` (390 px) и `reference/desktop.html` (1440 px) — точные макеты. Открой в браузере и сверяйся с ними: все отступы, размеры, радиусы и цвета берутся оттуда.
2. `docs/design-spec.md` — токены, типографика, адаптив, поведение блоков.
3. `docs/content.md` — финальные тексты. Не переписывай и не добавляй копирайт.
4. `starter/global.css` — готовые токены Tailwind 4 (`@theme`), положи в `src/styles/global.css`.

## Структура

```
src/
  data/content.ts         # все тексты страницы (из docs/content.md)
  layouts/Base.astro      # <html lang="ru">, meta, шрифты, global.css
  components/
    Header.astro
    Hero.astro
    Problem.astro
    Solution.astro
    Benefits.astro
    FinalCta.astro
    Button.astro          # primary (лайм), outline; size md|lg
    Chip.astro            # метка блока: outline | accent
    Icon.astro            # inline SVG: user, check, search, monitor, arrow-right
  pages/index.astro
public/favicon.svg        # из starter/favicon.svg
```

## Правила

- Mobile-first. Мобильная раскладка — до `lg` (1024 px), десктопная — от `lg`. Без горизонтального скролла от 360 px.
- Ссылка в приложение — `import.meta.env.PUBLIC_APP_URL`, задаётся в `.env` (`.env.example` с плейсхолдером).
- У каждой CTA атрибут `data-cta="header" | "hero" | "final"` для аналитики.
- Иллюстрации (макет формы, карточка контакта, «Саша (новый)») — декоративные блоки из HTML/CSS, не картинки. Оборачивай их в `aria-hidden="true"`.
- Один `<h1>`, у блоков `<h2>`. Кнопки — это `<a>`, а не `<button>`.
- Цвета и шрифты только из токенов `@theme`, без произвольных hex в разметке.

## Готово, когда

- `npm run build` проходит, в `dist/` один статичный `index.html` и ассеты.
- На 390 и 1440 px страница визуально совпадает с `reference/*.html`.
- Lighthouse (mobile): Performance, Accessibility, SEO ≥ 95.
- Клиентского JS в бандле нет.
