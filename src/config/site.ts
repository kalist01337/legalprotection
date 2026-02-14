import { reviewImageFiles } from "@/generated/reviews";

export type NavItem = {
  label: string;
  href: string;
};

export type PackagePlan = {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ReviewItem = {
  id: string;
  title: string;
  image: string;
  alt: string;
  source?: string;
};

const sanitizeBasePath = (value?: string) => {
  if (!value || value === "/") return "";
  const trimmed = value.trim().replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}` : "";
};

export const basePath = sanitizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

export const withBasePath = (path: string) => {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
};

const siteUrl = "https://example.github.io";

export const absoluteUrl = (path = "/") => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(withBasePath(normalized), siteUrl).toString();
};

export const siteConfig = {
  brand: {
    name: "Legal Protection",
    subtitle: "Консалтинговый центр «Legal Protection»",
    description:
      "Юридическое и бухгалтерское сопровождение. Юридическая помощь населению и бизнесу.",
  },
  seo: {
    siteUrl,
    title: "Legal Protection - юридическое и бухгалтерское сопровождение в Астане",
    description:
      "Консалтинговый центр Legal Protection: юридическое и бухгалтерское сопровождение, судебное представительство и абонентское обслуживание для бизнеса и частных лиц.",
    locale: "ru_RU",
  },
  media: {
    logo: withBasePath("/123.webp"),
    heroImage: withBasePath("/media/hero-poster.jpg"),
    officeImage: withBasePath("/media/nas.jpg"),
    heroVideo: withBasePath("/Timeline.mp4"),
  },
  nav: [
    { label: "Пакеты", href: "#packages" },
    { label: "Услуги", href: "#services" },
    { label: "О нас", href: "#about" },
    { label: "Отзывы", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contacts" },
  ] as NavItem[],
  contacts: {
    phoneRaw: "+77056693036",
    phoneDisplay: "+7 705 669 3036",
    phoneHref: "tel:+77056693036",
    whatsappNumber: "77056693036",
    whatsappHref: "https://wa.me/77056693036",
    telegramHref: "#",
    instagramHref: "#",
    email: "Legalprotectionkz@gmail.com",
    emailHref: "mailto:Legalprotectionkz@gmail.com",
    addressLines: [
      "Астана, район Есиль,",
      "ул. Д. Конаева, 12/1,",
      "офис 518/1 (БЦ «Trust»)",
    ],
  },
  hero: {
    title: "Legal Protection — юридическое и бухгалтерское сопровождение в Астане",
    text: "Помогаем населению и бизнесу решать правовые и бухгалтерские задачи спокойно, последовательно и в понятных сроках.",
    trustPoints: ["Конфиденциальность", "Сроки", "Системный подход"],
  },
  subscription: {
    heading: "Абонентское обслуживание",
    text: "Формируем устойчивую юридическую опору для бизнеса: регулярная поддержка, контроль рисков и документы, готовые к практике.",
    benefits: [
      "Единое окно по юридическим и бухгалтерским вопросам",
      "Плановая работа вместо кризисного реагирования",
      "Прозрачная фиксация задач и договоренностей",
    ],
  },
  packages: [
    {
      name: "Стандарт",
      price: "250 000 ₸",
      features: ["10 документов", "5 договоров", "устные консультации"],
    },
    {
      name: "Премиум",
      price: "400 000 ₸",
      features: ["20 документов", "10 договоров", "консультации"],
    },
    {
      name: "VIP",
      price: "500 000 ₸",
      features: [
        "30 документов",
        "участие в переговорах",
        "юридический анализ",
        "юридический аудит 1 раз в месяц",
        "консультации",
      ],
      recommended: true,
    },
  ] as PackagePlan[],
  services: [
    "Участие в судах",
    "Разработка договоров",
    "Консультации",
    "Представление интересов",
    "Брачно-семейные вопросы",
    "Корпоративное право",
    "Налоговые споры",
    "Трудовые отношения",
    "Регистрация юр лиц",
    "Банковские споры",
    "Интернет мошенничество",
    "Регистрация объектов авторского права",
    "Юридический анализ",
  ],
  about: {
    title: "О нас",
    intro:
      "Legal Protection - консалтинговый центр, который сопровождает частных клиентов и компании по юридическим и бухгалтерским вопросам.",
    approach: [
      "Прозрачные этапы работы и понятные сроки",
      "Фиксация договоренностей в документах",
      "Конфиденциальность информации и процессов",
      "Внимание к качеству формулировок и правовым рискам",
    ],
  },
  reviews: reviewImageFiles.map((filePath, index) => ({
    id: `review-${index + 1}`,
    title: `Отзыв ${index + 1}`,
    image: withBasePath(filePath),
    alt: `Скриншот отзыва ${index + 1} из 2ГИС`,
    source: "2ГИС",
  })) as ReviewItem[],
  faq: [
    {
      question: "Как быстро можно начать работу?",
      answer:
        "Обычно старт возможен в течение 1-2 рабочих дней после уточнения задачи и согласования формата сопровождения.",
    },
    {
      question: "Вы работаете только с бизнесом?",
      answer:
        "Нет, мы консультируем как компании, так и частных клиентов по профильным юридическим вопросам.",
    },
    {
      question: "Можно ли подключить только юридический блок без бухгалтерского?",
      answer:
        "Да, формат сопровождения настраивается под конкретный запрос: юридический, бухгалтерский или комбинированный.",
    },
    {
      question: "Как фиксируется объем работ по абонентскому обслуживанию?",
      answer:
        "Объем и состав задач фиксируются в договоре и рабочем плане, чтобы у клиента была прозрачность по результатам.",
    },
    {
      question: "Проводите ли вы судебное представительство?",
      answer:
        "Да, мы сопровождаем судебные процессы и представляем интересы клиента в рамках согласованного поручения.",
    },
    {
      question: "Что входит в первичную консультацию?",
      answer:
        "Разбор исходных данных, оценка рисков, рекомендации по следующему шагу и предложение оптимального формата работы.",
    },
    {
      question: "Работаете ли вы с налоговыми и трудовыми спорами?",
      answer:
        "Да, такие вопросы входят в практику центра, включая подготовку позиции и пакет документов.",
    },
    {
      question: "Как передаются документы?",
      answer:
        "Документы передаются в согласованном канале связи с учетом конфиденциальности и требований к хранению данных.",
    },
    {
      question: "Можно ли обратиться разово без абонентского пакета?",
      answer:
        "Да, возможны разовые консультации и отдельные проектные задачи.",
    },
  ] as FAQItem[],
  privacy: {
    title: "Политика конфиденциальности",
    text: "Мы используем ваши контактные данные только для обратной связи по запросу. Отправляя форму, вы подтверждаете согласие на обработку персональных данных в объеме, необходимом для консультации.",
  },
  legalNotice:
    "Информация на сайте не является публичной офертой. Результаты зависят от обстоятельств.",
};

export type SiteConfig = typeof siteConfig;
