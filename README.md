# Лендинг «Личная CRM»

Одна статичная страница: https://vupsen.space. Все кнопки «Добавить первый контакт» ведут в приложение: https://app.vupsen.space

## Команды

```
pnpm install    # поставить зависимости
pnpm dev        # страница с автообновлением: http://localhost:4321
pnpm build      # собрать готовый сайт в папку dist/
pnpm preview    # открыть собранный сайт из dist/
```

## Что где лежит

- `src/data/content.ts` — все тексты страницы и адрес приложения
- `src/styles/tokens.css` — цвета, шрифты, размеры текста, отступы, скругления
- `src/components/` — блоки страницы: шапка, первый экран, проблема, решение, выгоды, финальный призыв
- `desing/` — макет: образцы в HTML, тексты и спецификация
- `.github/workflows/deploy.yml` — выкатка на сервер

## Выкатка

Каждый push в `main` сам выкатывает сайт: GitHub Actions собирает `dist/`, копирует его на сервер и проверяет, что https://vupsen.space отдаёт новую версию. Ход выкатки — на вкладке Actions репозитория, там же кнопка «Run workflow», чтобы выкатить заново без изменений.

Настройки в GitHub (Settings → Secrets and variables → Actions):

- секрет `DEPLOY_SSH_KEY` — ключ, которым Actions заходит на сервер
- переменные `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_KNOWN_HOSTS` — адрес сервера, пользователь и отпечаток сервера

На сервере ключ пускает только пользователя `landing-deploy` и только копировать файлы в папку `/var/www/vupsen.space`, которую отдаёт nginx.
