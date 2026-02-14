# Legal Protection Landing

Production-ready одностраничный лендинг для консалтингового центра **Legal Protection** на **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## Технологии

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Статический экспорт (`output: "export"`) для GitHub Pages

## Быстрый старт

```bash
npm install
npm run dev
```

Открыть: `http://localhost:3000`

## Сборка и экспорт

```bash
npm run build
```

После билда создается папка `out/` (готовый статический сайт).

## Деплой на GitHub Pages

Файл workflow: `.github/workflows/deploy-pages.yml`.

Что нужно сделать в репозитории:

1. `Settings -> Pages -> Build and deployment -> Source: GitHub Actions`.
2. Убедиться, что workflow запускается на ветке `main`.

## Кастомный домен (CNAME)

Для подключения домена:

1. Создайте файл `public/CNAME`.
2. Поместите в него ваш домен одной строкой, например:

```txt
legalprotection.kz
```

3. Пересоберите и задеплойте сайт.

## Важно про basePath (деплой в `/repo`)

Проект поддерживает basePath через переменную окружения `NEXT_PUBLIC_BASE_PATH`.

Примеры:

- Деплой в корень домена: оставить пустым.
- Деплой в `https://username.github.io/repo`: установить `NEXT_PUBLIC_BASE_PATH=/repo`.

Локально (PowerShell):

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/repo"
npm run build
```

Для GitHub Actions удобно задать repository variable:

- `Settings -> Secrets and variables -> Actions -> Variables`
- Имя: `NEXT_PUBLIC_BASE_PATH`
- Значение: `/repo`

## Где менять контент

Весь текст, контакты, услуги, FAQ, SEO и ссылки на медиа лежат в:

- `src/config/site.ts`

## Как заменить картинки/видео без правки компонентов

1. Положите файлы в `public/media/` (например, `hero.jpg`, `office.jpg`, `bg.mp4`).
2. Обновите пути только в `src/config/site.ts` в блоке `media`.
3. Если нужен видео-фон в Hero, укажите `heroVideo` и оставьте `heroImage` как fallback.

## SEO и индексация

Реализовано:

- `title`, `description`, `canonical`
- Open Graph + Twitter
- JSON-LD `LegalService`
- JSON-LD `FAQPage`
- `robots.txt` (`src/app/robots.ts`)
- `sitemap.xml` (`src/app/sitemap.ts`)

## Команды

```bash
npm run dev
npm run build
npm run start
```

