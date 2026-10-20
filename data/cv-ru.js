window.CV_DATA_RU = {
  meta: {
    title: "Максим Мовчан — Flutter-разработчик · Head of IT",
    description: "Flutter-разработчик и Head of IT ресторанной платформы Surprise. 4+ года в продакшене, 7 приложений в App Store, Google Play и RuStore, native iOS (Swift), 2 свидетельства Роспатента. Full-stack: Go, FastAPI, React, DevOps.",
    lang: "ru"
  },
  header: {
    name: "Мовчан Максим",
    surname: "Игоревич",
    role: "Flutter-разработчик · Head of IT",
    tagline: "Mobile · Full-stack (Go / FastAPI) · техническое руководство продуктом",
    location: "Санкт-Петербург · удалённо / гибрид / офис",
    contacts: [
      { label: "Telegram", value: "@MaximMovchan", href: "https://t.me/MaximMovchan", icon: "telegram" },
      { label: "Email", value: "maximusdrlor@gmail.com", href: "mailto:maximusdrlor@gmail.com", icon: "email" },
      { label: "GitHub", value: "GhostuSs", href: "https://github.com/GhostuSs", icon: "github" },
      { label: "Website", value: "ghostuss.github.io", href: "https://ghostuss.github.io", icon: "globe" }
    ]
  },
  sections: {
    about: "О себе",
    position: "Желаемая должность",
    experience: "Опыт работы",
    ownProducts: "Собственные продукты",
    teaching: "Преподавание и менторство",
    achievements: "Достижения и признание",
    skills: "Технический стек",
    education: "Образование",
    languages: "Языки",
    additional: "Дополнительно",
    print: "Скачать PDF",
    revealHint: "Нажмите, чтобы раскрыть"
  },
  position: {
    role: "Flutter-разработчик · Tech Lead / Head of IT",
    roleDetails: "Mobile Engineering · Full-stack · Technical Leadership",
    salary: "По договорённости",
    salaryAlt: "",
    salaryHidden: false,
    type: "Полная занятость · проектная работа",
    format: "Удалённо · гибрид · офис (Санкт-Петербург)"
  },
  about: [
    "Flutter-разработчик, 4+ года в продакшене. 7 мобильных приложений в App Store, Google Play и RuStore — включая 4 года поддержки B2B-приложения на native iOS (Swift) и offline-first enterprise-платформу, которую спроектировал и веду 3+ года (25K+ пользователей, <0.5% crash rate). 2 свидетельства Роспатента о госрегистрации ПО, запись в реестре российского ПО. С декабря 2025 — Head of IT ресторана без касс Surprise: мобильное приложение и киоски самообслуживания на Flutter, бэкенд на Go, React-админка, инфраструктура и платёжные интеграции — всё под моей ответственностью. Пишу бэкенд (Go, FastAPI), поднимаю CI/CD и деплой (Docker, nginx/Caddy). С 2025 совмещаю разработку и проектный менеджмент — веду команды, общаюсь с заказчиком, оцениваю и защищаю проекты. Сильные стороны: Clean Architecture, платёжные контуры без потери денег, публикация в сторах (в т.ч. снятие блокеров App Review), доведение продукта от брифа до релиза."
  ],
  experience: [
    {
      company: "Surprise · ресторан без касс (FoodTech)",
      role: "Head of IT · Lead Flutter Developer",
      period: "Декабрь 2025 — настоящее время",
      description: "Отвечаю за всю техническую часть продукта: мобильное приложение, киоски самообслуживания в зале, бэкенд, админка, инфраструктура и интеграции с кассой и платежами. Ресторан открылся в августе 2026 и работает без кассиров: гость заказывает в приложении или на киоске, платит картой, СБП или терминалом, заказ уходит на кухню в iiko. Через приложение и киоски прошли тысячи заказов.",
      generalBullets: [
        "Приложение и киоск из одной Flutter-кодовой базы (4 флейвора mobile/kiosk × dev/prod): конструктор блюд, лояльность с уровнями кэшбэка, iOS Live Activities со статусом заказа, пуши с картинками, deep links со столиков (QR → заказ к столу, Play Install Referrer), умные апсейлы, доставка курьером. App Store, Google Play, RuStore; 280+ сборок, 81K строк Dart, 200 файлов unit- и e2e-тестов в CI, ~60% коммитов репозитория — мои.",
        "Киоск самообслуживания: Android Lock Task / Device Owner, нативная (Kotlin) интеграция с платёжным терминалом Сбера по TCP-протоколу пинпада, СБП по QR, чеки 54-ФЗ.",
        "Спроектировал и написал новый бэкенд на Go (fiber, pgx, PostgreSQL master/replica) взамен Laravel/Bagisto: 150+ эндпоинтов, 70+ миграций, Swagger, 110K строк, 140 файлов тестов; перевёл прод и приложение на него за ~2 месяца без остановки ресторана. Stateless-корзина с серверным пересчётом, SSE-канал версии меню, идемпотентное создание заказа.",
        "Платёжный контур «без потери денег по построению»: идемпотентность по checkout_uid, «оплачен = подтвердил шлюз или журнал терминала», сторожа-кроны, которые каждую минуту сшивают платежи с заказами и досылают на кухню; аварийные пути восстанавливаются за ≤60–120 с.",
        "Интеграции: iiko Cloud (кухня/КДС), CloudPayments (карты, сохранённые карты, СБП) + CloudKassir, терминал Сбера, REDSMS, FCM/APNs, AppMetrica, Яндекс Object Storage. React 19 + TypeScript админка: живая лента заказов, меню и стоп-листы, клиенты и бонусы, пуш-рассылки, RBAC с журналом, сопоставление с кассой.",
        "Инфраструктура и процессы: zero-downtime деплой (GitHub Actions → GHCR → rolling replace за Caddy), дев-стенд как копия прода, переезд прода в Selectel с резервом в Yandex Cloud, аудит безопасности, реестр рисков. База знаний проекта: 400+ заметок, 67 постмортемов, 23 runbook'а, 35 ADR, реестр из 220+ «мин». Координировал до 5 Flutter-разработчиков одновременно и подрядчиков (бэкенд, интегратор iiko)."
      ]
    },
    {
      company: "Punklab Digital Studio · корпоративная digital-студия",
      role: "Flutter-разработчик",
      period: "Февраль 2022 — настоящее время",
      duration: "4+ года",
      generalBullets: [
        "С 2025 — совмещение ролей разработчика и проектного менеджера на ключевом продукте команды (Каркас Безопасности)."
      ],
      projects: [
        {
          name: "Каркас Безопасности",
          role: "Lead Developer + Project Manager",
          stack: "Flutter · Clean Architecture · offline-first",
          bullets: [
            "Спроектировал и единолично разрабатываю offline-first enterprise-приложение 3+ года; выросло до 25K+ активных пользователей при <0.5% crash rate.",
            "Расширил платформу с mobile-only на web — спроектировал и развернул web-сборку в закрытом контуре корпоративной сети для desktop-ролей (руководители, специалисты по охране труда), которым неудобно пользоваться мобильным приложением в цеху.",
            "2 свидетельства Роспатента о государственной регистрации программы для ЭВМ (iOS- и Android-архитектуры); продукт внесён в реестр российского ПО (Минцифры)."
          ]
        },
        {
          name: "Личный кабинет воспитанника спортивной академии (ФК «Зенит»)",
          role: "Lead Flutter Developer",
          stack: "Flutter Mobile + Flutter Web · PWA → Native migration",
          bullets: [
            "Возглавил миграцию Flutter Web PWA на нативные платформы (iOS + Android) за 2 месяца для академии ФК «Зенит»; публикация в App Store и Google Play.",
            "Улучшил удержание (D7 retention) через редизайн онбординга и push-кампании."
          ]
        },
        {
          name: "B2B-приложение закупок (внутренний инструмент)",
          role: "iOS Maintainer + App Store Publishing",
          stack: "Native iOS (Swift) · compliance-driven publishing",
          bullets: [
            "Поддерживаю native iOS B2B-приложение 4 года; рейтинг 4.2/5 при 1K+ бизнес-пользователей.",
            "За 4 месяца отработал все блокеры App Review на ранее заблокированной сборке, переработал концепцию и UX и вывел приложение в стор; веду полный релизный цикл (provisioning, signing, escalation, privacy manifest 2024)."
          ]
        },
        {
          name: "EasyCheck — сервис аудита и чек-листов",
          role: "Flutter Developer + Backend-подрядчик",
          stack: "Flutter · Clean Architecture · FastAPI · MongoDB · Celery",
          bullets: [
            "Мобильная часть: спроектировал целевую архитектуру и провёл миграцию GetX → Clean Architecture в 3 ключевых модулях; реализовал offline-first sync (Drift + кастомное разрешение конфликтов); публикация в App Store и RuStore.",
            "Бэкенд: как подрядчик реализовал серверный PDF-экспорт отчётов аудита (FastAPI + ReportLab, генерация через Celery-воркер, хранение в S3)."
          ]
        }
      ]
    },
    {
      company: "Фриланс / контрактная разработка",
      role: "Flutter Developer · Full-stack",
      period: "Март 2024 — настоящее время",
      projects: [
        {
          name: "Москвичка — сеть салонов красоты",
          role: "Lead Mobile Developer + Project Manager",
          period: "Февраль 2025 — настоящее время",
          stack: "Flutter · Clean Architecture · Custom BLoC · интеграция YClients",
          bullets: [
            "End-to-end ownership мобильной разработки: бриф заказчика → ТЗ → публикация в App Store и RuStore. 2K+ активных пользователей, сеть из 8 филиалов.",
            "Собрал и веду кросс-функциональную команду из 4 человек (QA, бэкенд, UX/UI); ввёл спринт-планирование, еженедельные демо и ретро.",
            "Интегрировал CloudPayments и программу лояльности с логикой начисления и сгорания баллов; выстроил ежедневный аудит-крон сверки нашей БД с YClients по всем филиалам и rate-limiting верификации e-mail."
          ]
        },
        {
          name: "Сеть студий растяжки (NDA)",
          role: "Mobile Developer",
          period: "Март — август 2024",
          stack: "Flutter · Custom BLoC",
          bullets: [
            "Переработка мобильного приложения; миграция с Riverpod на custom BLoC (по требованию заказчика).",
            "Провёл стабилизационный спринт: диагностировал и устранил топ-источники крашей, снизив crash rate с ~60% до ~25%."
          ]
        }
      ]
    },
    {
      company: "MCArt",
      role: "Junior Mobile Developer",
      period: "Октябрь 2021 — февраль 2022",
      location: "Санкт-Петербург",
      description: "Первая коммерческая работа.",
      generalBullets: [
        "Участвовал в миграции состояния с MobX на BLoC в основном flow.",
        "Реализовал ключевые фичи продукта в составе мобильной команды."
      ]
    }
  ],
  ownProducts: [
    {
      name: "kpl360 (КУПОЛ.360)",
      role: "Technical Co-founder",
      period: "Февраль 2026 — настоящее время",
      description: "EdTech-платформа безопасности для образовательных учреждений: SOS-сценарии, профилактические уроки, тренировочные тесты.",
      bullets: [
        "Solo technical delivery end-to-end: Flutter mobile, FastAPI backend, админ-панель; интеграции Firebase, iOS Live Activities, платежи.",
        "Спроектировал multi-tenant архитектуру с RBAC; пилот на 2 учреждениях через TestFlight; production-релиз — Q3 2026.",
        "Самостоятельно веду инфраструктуру: VPS, Docker, nginx, HTTPS (Let's Encrypt), хостинг посадочных страниц проекта."
      ]
    }
  ],
  teaching: [
    {
      name: "IT Hub College",
      role: "Преподаватель Flutter-разработки",
      period: "Январь 2026 — июль 2026",
      bullets: [
        "Разработал и веду 6-месячный курс Flutter для 23 студентов в 2 группах.",
        "Создал практические задания, имитирующие production-сценарии (Clean Architecture, BLoC, REST, публикация в сторах)."
      ]
    },
    {
      name: "IT Camp 2025 (Газпром нефть × Университет «Сириус»)",
      role: "Ментор",
      period: "17–29 августа 2025 · очно в «Сириусе»",
      bullets: [
        "Менторил 2 команды по 7 студентов в течение 2 недель — полный цикл от разбора кейса до защиты решения.",
        "Команда под моим менторством взяла Гран-при мероприятия."
      ]
    }
  ],
  achievements: {
    topTier: {
      label: "Официальные",
      items: [
        "2 свидетельства Роспатента о государственной регистрации программы для ЭВМ (2025) — на iOS- и Android-архитектуры «Каркаса Безопасности»",
        "Запись в реестре российского ПО (Минцифры, 2025–2026) — «Каркас Безопасности»",
        "Благодарственное письмо от CTO партнёрской организации (отраслевой хакатон, 2025)"
      ]
    },
    recognition: {
      label: "Признание индустрии",
      items: [
        "Финалист премии REXA (Russian Employee eXperience Awards) в области цифрового опыта сотрудников (2025)",
        "1-е место на отраслевом хакатоне (команда под менторством, 2025)"
      ]
    },
    opensource: {
      label: "Open-source",
      items: [
        "Автор open-source пакета consta_analytics на pub.dev — offline-first event queue с типизированным event API"
      ]
    }
  },
  skills: [
    { group: "Языки", items: ["Dart", "Go", "Swift (publishing, maintenance)", "Python", "Kotlin (native bridges)", "TypeScript"] },
    { group: "Flutter & Архитектура", items: ["Flutter 3.x · Dart 3.x", "Clean Architecture", "BLoC · flutter_bloc", "Custom BLoC (RxDart)", "Riverpod · Provider", "dartz (Either<Failure, T>)", "auto_route · go_router", "injectable · get_it", "freezed · json_serializable"] },
    { group: "Данные и сеть", items: ["Dio + interceptors", "WebSocket", "REST API design", "Drift (SQLite, type-safe)", "Hive", "flutter_secure_storage", "offline-first patterns"] },
    { group: "Native & Platform", items: ["iOS Native (Swift) — App Store publishing", "Android Native (Kotlin) — прототипы", "Platform Channels", "Deep Links · Universal Links", "Flavors"] },
    { group: "Интеграции и платежи", items: ["CloudPayments · СБП · Альфа-банк · YooKassa · SberPay", "Платёжный терминал Сбера (пинпад, TCP) · чеки 54-ФЗ", "iiko Cloud (POS/КДС)", "RevenueCat IAP · Apple Pay · Google Pay", "Firebase (FCM, Auth, Remote Config)", "iOS Live Activities", "Sentry · Amplitude · AppMetrica"] },
    { group: "Backend", items: ["Go (fiber, pgx, goose)", "FastAPI / Python", "PostgreSQL (master/replica) · SQLAlchemy · MongoDB", "Celery · Redis · S3 / Object Storage", "REST API design · Swagger/OpenAPI · SSE", "React 19 + TypeScript (админки)"] },
    { group: "DevOps & CI/CD", items: ["Docker · Docker Compose · zero-downtime rollout (GHCR)", "nginx · Caddy · Let's Encrypt / certbot", "Linux VPS · Selectel · Yandex Cloud", "GitHub Actions · Bitbucket Pipelines · Codemagic · Fastlane", "Unit & Widget & E2E tests · mocktail · integration_test"] }
  ],
  education: {
    degrees: [
      {
        institution: "Санкт-Петербургский государственный университет аэрокосмического приборостроения (ГУАП)",
        degree: "Бакалавр · Программная инженерия",
        specialty: "Вычислительные системы и программирование",
        year: "2022"
      },
      {
        institution: "Санкт-Петербургский университет технологий управления и экономики",
        degree: "Магистр · Экономика",
        specialty: "Финансовый менеджмент",
        year: "2024"
      }
    ],
    courses: [
      { year: "2024", name: "Тренды отрасли и подходы к реализации IT-проектов", provider: "АНО ВО «Университет «Сириус»»" }
    ]
  },
  languages: [
    { name: "Русский", level: "Родной" },
    { name: "Английский", level: "B2 · технический (документация, code review, рабочая переписка)" }
  ],
  additional: "Работаю в офисе (Санкт-Петербург), удалённо или гибридно; возможны командировки. Готов выйти в короткие сроки."
};
