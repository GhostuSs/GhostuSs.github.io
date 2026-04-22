window.CV_DATA_EN = {
  meta: {
    title: "Maksim Movchan — Flutter Developer",
    description: "Flutter Developer with 4+ years at Gazprom Neft. 6+ live apps, 2 federal software copyrights, published pub.dev SDK. Mobile dev educator.",
    lang: "en"
  },
  header: {
    name: "Maksim",
    surname: "Movchan",
    role: "Flutter Developer",
    tagline: "Mobile Engineering · Product Ownership",
    location: "Saint Petersburg · Remote / open to relocation",
    contacts: [
      { label: "Telegram", value: "@MaximMovchan", href: "https://t.me/MaximMovchan", icon: "telegram" },
      { label: "Email", value: "maks.makis@ya.ru", href: "mailto:maks.makis@ya.ru", icon: "email" },
      { label: "Phone", value: "+7 (981) 711-39-42", href: "tel:+79817113942", icon: "phone" },
      { label: "GitHub", value: "GhostuSs", href: "https://github.com/GhostuSs", icon: "github" },
      { label: "LinkedIn", value: "Maksim Movchan", href: "https://www.linkedin.com/in/максим-мовчан-02aa40241/", icon: "linkedin" }
    ]
  },
  sections: {
    about: "About",
    position: "Target Role",
    experience: "Experience",
    ownProducts: "Own Products",
    teaching: "Teaching & Mentoring",
    achievements: "Achievements & Recognition",
    skills: "Technical Stack",
    education: "Education",
    languages: "Languages",
    additional: "Additional",
    print: "Download PDF",
    revealHint: "Click to reveal"
  },
  position: {
    role: "Flutter Developer",
    roleDetails: "Mobile Engineering · Product Ownership",
    salary: "Negotiable",
    salaryAlt: "Remote · Relocation negotiable",
    salaryHidden: true,
    type: "Full-time",
    format: "Remote · Hybrid · Relocation considered"
  },
  about: [
    "Flutter Developer with 4+ years at a single cross-functional unit inside Gazprom Neft. Author of 6+ mobile products in App Store, Google Play and RuStore — including a product with 2 Russian federal software copyrights (RosPatent) and listing in the Unified Register of Russian Software (Ministry of Digital Development). Published Flutter SDK on pub.dev. Combine engineering and project management on a key product of the team."
  ],
  experience: [
    {
      company: "Gazprom Neft Group · punklab unit",
      role: "Flutter Developer",
      period: "Feb 2022 — Present",
      duration: "4+ years",
      note: "Internal transfer from Gazpromneft-Supply to Gazpromneft-Digital Solutions in January 2025; the entire team moved together.",
      description: "punklab is a cross-functional digital unit inside the Gazprom Neft Group, organized into 3 business units (Web / Products / Custom Development). Delivers products to Gazprom Neft group companies and the external market.",
      generalBullets: [
        "Joined as the 5th team member in 2022; unit scaled to 28 people — 5.6× growth over 4 years.",
        "Production releases in App Store, Google Play, RuStore across 5+ corporate products.",
        "Compliance-driven App Store publishing expertise — shipping products under parent-company operational constraints (rebranding, parallel developer accounts, feature substitution).",
        "Since 2025 — combined Developer + Project Manager roles on a key team product."
      ],
      projects: [
        {
          name: "Safety Framework (Каркас Безопасности)",
          role: "Lead Developer + Project Manager",
          stack: "Flutter · Clean Architecture · Offline-first",
          bullets: [
            "Designed, built and solo-maintained from scratch for 3+ years (version 2.4.0, 20,000+ RuStore installs).",
            "Obtained 2 RosPatent software copyrights (iOS + Android versions, 2025) — Russian federal state-issued IP registration.",
            "Product listed in the Unified Register of Russian Software (Ministry of Digital Development, 2025–2026).",
            "Finalist: REXA-2025 (Russian Employee Experience Awards — national award for digital employee experience & internal communications) and 'People of Progress' award.",
            "Architecture: GetX → Provider → Clean Architecture migrations."
          ]
        },
        {
          name: "Zenit FC Academy — Student Portal",
          role: "Lead Flutter Developer",
          stack: "Flutter Mobile + Flutter Web · PWA → Native migration",
          bullets: [
            "Migrated Flutter Web PWA to native mobile platforms (iOS + Android); published in App Store and Google Play.",
            "Shipped features driving DAU and retention; refactored and hardened stability."
          ]
        },
        {
          name: "Gazprom Neft Procurement App",
          role: "iOS Maintainer + App Store Publishing Expert",
          stack: "Native iOS (Swift) · Compliance-driven publishing",
          bullets: [
            "Live product: version 3.0.201 (Feb 2026), ~200 releases in the major line.",
            "Published in RuStore (1,000+ installs, 4.2/5) and in App Store under parallel rebranding.",
            "Maintain native iOS codebase: configurations, minor changes, release cycle."
          ]
        },
        {
          name: "EasyCheck",
          role: "Lead Flutter Developer",
          stack: "Flutter · Clean Architecture",
          bullets: [
            "Designed the target architecture; executed GetX → Provider + Clean Architecture migration.",
            "Published in RuStore and App Store; offline-first with auto-sync.",
            "Coordinated web and backend teams across sprints; version 2.4.12 as of April 2026."
          ]
        },
        {
          name: "Altay Podvorye + Glamping",
          role: "Solo Mobile Developer",
          stack: "Flutter",
          bullets: [
            "2 apps for one client (Podvorye → Glamping); client returned for the second product.",
            "Full-cycle development and support, 2+ years in production without interventions.",
            "Reduced build size by 30% through refactoring; migrated to latest Flutter."
          ]
        }
      ]
    },
    {
      company: "Parallel Freelance / Contract Development",
      role: "Senior Flutter Developer",
      period: "Mar 2024 — Present",
      description: "Publish select products to RuStore under my own developer account (IE Movchan M.I.).",
      projects: [
        {
          name: "Surprise — FoodTech + E-commerce",
          role: "Senior Solo Flutter Developer",
          period: "Dec 2025 — May 2026",
          stack: "Flutter · Drift · Swift · Kotlin",
          bullets: [
            "Mobile app for food delivery with a self-service kiosk mode for HoReCa terminals.",
            "Primary contributor, solo development (644 commits).",
            "Codebase: 58,000+ Dart LOC, 291 files, 9 screens, 25 use cases, Clean Architecture.",
            "Separate kiosk-mode branch (main_kiosk2, 240 commits).",
            "Integrations: Alfa Pay SDK; Sberbank UPOS TSP payment terminal (research prototype in native Android Kotlin + AIDL IPC + EMV/TLV protocol analysis).",
            "iOS Native: Live Activities for real-time order tracking (Swift).",
            "Security audit of backend (Bagisto / Laravel) and mobile client via Shannon (OSS AI pentester) prior to launch."
          ]
        },
        {
          name: "Moskvichka",
          role: "Lead Mobile Developer + Project Manager",
          period: "Feb 2025 — Present",
          stack: "Flutter · Clean Architecture · Custom BLoC",
          bullets: [
            "Mobile app for a chain of beauty salons: online booking, service catalogue, push notifications, loyalty.",
            "Owned the project end-to-end: from client brief to RuStore publication.",
            "Team Lead + PM: assembled the team (QA, backend, UX/UI — 4 people), ran processes."
          ]
        },
        {
          name: "White-label e-commerce (NDA)",
          role: "Mobile Developer",
          period: "Mar — Aug 2024",
          stack: "Flutter · Custom BLoC",
          bullets: [
            "Rework of a mobile app for a stretching-studio chain.",
            "Migrated state management from Riverpod to a custom BLoC (per client request)."
          ]
        },
      ]
    },
    {
      company: "MCArt",
      role: "Junior Mobile Developer",
      period: "Oct 2021 — Feb 2022",
      location: "Saint Petersburg",
      description: "First commercial role.",
      generalBullets: [
        "Developed core product functionality.",
        "Executed MobX → BLoC state-management migration.",
        "Contributed to architecture design and pre-release stabilization."
      ]
    }
  ],
  ownProducts: [
    {
      name: "kpl360 (KUPOL.360)",
      role: "Technical Co-founder",
      period: "Feb 2026 — Present",
      description: "EdTech safety platform for educational institutions: SOS scenarios, preventive lessons, daily safety questions, training tests, push notifications. Team: 3 co-founders; I own the full technical implementation.",
      bullets: [
        "Solo technical delivery end-to-end: Flutter mobile (iOS + Android), FastAPI + Python backend (AI-assisted), admin panel.",
        "Integrations: Sentry, Firebase (Auth, FCM, Remote Config), OTP autofill, iOS Live Activities for alarms, payments. Security audit via Shannon (OSS AI pentester) prior to launch.",
        "Pilot deployment at 2 educational institutions via TestFlight; App Store / Google Play production release — Q3 2026."
      ]
    }
  ],
  teaching: [
    {
      name: "IT Hub College",
      role: "Flutter Development Instructor",
      period: "Jan 2026 — Jul 2026",
      bullets: [
        "Flutter development course — 2 groups, 23 students total.",
        "Designed course curriculum, materials and practical assignments."
      ]
    },
    {
      name: "IT Camp 2025 (Gazprom Neft × Sirius University)",
      role: "Mentor",
      period: "Aug 17–29, 2025 · on-site at Sirius",
      bullets: [
        "Mentored 2 teams of 7 students each over 2 weeks — full cycle from case analysis to solution defense.",
        "One of my teams won the Grand Prix of the event."
      ]
    }
  ],
  achievements: {
    topTier: {
      label: "Top-tier (federal / official)",
      items: [
        "2 RosPatent software copyright certificates (Safety Framework, iOS + Android versions, 2025)",
        "Listing in the Unified Register of Russian Software (Ministry of Digital Development, Safety Framework, 2025–2026)",
        "Letter of appreciation from the IT Director of Gazprom Neft (A. S. Dumin, IT Camp 2025)"
      ]
    },
    recognition: {
      label: "Industry recognition",
      items: [
        "Finalist — REXA-2025 (Russian Employee Experience Awards) — national award for digital employee experience and internal communications",
        "Finalist — 'People of Progress' award",
        "Grand Prix — IT Camp 2025 (team under my mentorship won)"
      ]
    },
    opensource: {
      label: "Open-source contribution",
      items: [
        "Author of consta_analytics Flutter SDK on pub.dev (v1.0.4, 115 pub points) — offline-first event queue with Hive fallback and a typed event API"
      ]
    },
    shipping: {
      label: "Shipping track record",
      items: [
        "6+ live mobile products across App Store, Google Play, RuStore (including a product with 20,000+ installs)",
        "Diversified domain experience: B2B · B2C · EdTech · FoodTech / E-commerce"
      ]
    }
  },
  skills: [
    { group: "Languages", items: ["Dart (primary)", "Swift (maintenance & publishing)", "Kotlin (research / prototyping)"] },
    { group: "Mobile & Cross-platform", items: ["Flutter 3.x", "Dart 3.x", "Clean Architecture", "Feature-based architecture"] },
    { group: "State Management & Logic", items: ["Custom BLoC on RxDart (BehaviorSubject / Stream)", "Provider", "dartz (Either<Failure, T>) for functional error handling"], note: "Prior experience: GetX (led migrations toward Clean Architecture)" },
    { group: "Navigation & DI", items: ["auto_route", "go_router", "injectable", "get_it"] },
    { group: "Networking", items: ["Dio + interceptors", "WebSocket", "REST API design"] },
    { group: "Persistence", items: ["Drift (SQLite, type-safe)", "Hive", "shared_preferences", "flutter_secure_storage"] },
    { group: "Code Generation", items: ["freezed", "json_serializable", "build_runner", "flutter_gen"] },
    { group: "Native & Platform", items: ["iOS Native (Swift) — maintenance, App Store publishing, Live Activities, APNs", "Android Native (Kotlin) — research prototypes (AIDL IPC, EMV/TLV via Sberbank UPOS)", "Platform Channels", "Deep Links", "Flavors"] },
    { group: "Payments / SDKs", items: ["RevenueCat", "Alfa Pay SDK", "YooKassa", "SberPay", "CloudPayments", "Tinkoff Pay"] },
    { group: "Push / Notifications", items: ["Firebase Cloud Messaging", "OneSignal", "flutter_local_notifications", "iOS Live Activities"] },
    { group: "Analytics / Observability", items: ["Firebase Analytics", "Firebase Crashlytics", "AppMetrica", "Amplitude", "Sentry"] },
    { group: "CI/CD & DevTools", items: ["Codemagic", "GitHub Actions", "Bitbucket Pipelines"] },
    { group: "Testing", items: ["Unit & Widget tests (bloc_test, mocktail)", "AI-assisted TDD via Claude Code"] },
    { group: "Full-stack delivery (AI-assisted)", items: ["End-to-end product delivery including backend (FastAPI / Python) and admin panel"], note: "Not claiming senior backend expertise; focus on architecture-level product ownership" },
    { group: "AI-Augmented Development", items: ["Claude Code + custom .md skills", "Figma MCP (design-to-code)", "Shannon (OSS AI pentester) for security auditing", "Obsidian Vault (knowledge base, AI context)", "GSD — get-shit-done (OSS framework for phase-based planning)"] }
  ],
  education: {
    degrees: [
      {
        institution: "Saint Petersburg State University of Aerospace Instrumentation (SUAI)",
        degree: "BSc · Software Engineering",
        specialty: "Computing Systems and Programming",
        year: "2022"
      },
      {
        institution: "Saint Petersburg University of Management and Economics",
        degree: "MSc · Economics",
        specialty: "Financial Management",
        year: "2024"
      }
    ],
    courses: [
      { year: "2024", name: "Russian IT: Industry Trends and Project Delivery Approaches", provider: "Sirius Scientific and Technological University" },
      { year: "2023", name: "Flutter Developer", provider: "Surf" },
      { year: "2022", name: "Advanced Flutter Development", provider: "Artem Zaitsev (ex-Head of Flutter at Surf)" }
    ]
  },
  languages: [
    { name: "Russian", level: "Native" },
    { name: "English", level: "B2 Upper-Intermediate · working proficiency for documentation, code review, technical meetings" }
  ],
  additional: "Open to relocation and business travel."
};
