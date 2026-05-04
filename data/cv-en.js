window.CV_DATA_EN = {
  meta: {
    title: "Maksim Movchan — Senior Mobile Engineer (Flutter)",
    description: "Senior Mobile Engineer (Flutter) · 4+ years end-to-end product delivery · 4 years on native iOS · payments & POS integrations · App Store publishing · open-source pub.dev package.",
    lang: "en"
  },
  header: {
    name: "Maksim",
    surname: "Movchan",
    role: "Senior Mobile Engineer (Flutter)",
    tagline: "End-to-End Product Delivery · Native iOS Publishing · Payments-heavy",
    location: "Saint Petersburg, Russia · Sponsorship-ready · Open to relocation (EU / Cyprus / UK)",
    contacts: [
      { label: "Telegram", value: "@MaximMovchan", href: "https://t.me/MaximMovchan", icon: "telegram" },
      { label: "Email", value: "maximusdrlor@gmail.com", href: "mailto:maximusdrlor@gmail.com", icon: "email" },
      { label: "Phone", value: "+7 (981) 711-39-42", href: "tel:+79817113942", icon: "phone" },
      { label: "GitHub", value: "GhostuSs", href: "https://github.com/GhostuSs", icon: "github" },
      { label: "LinkedIn", value: "Maksim Movchan", href: "https://www.linkedin.com/in/maximmovchan/", icon: "linkedin" },
      { label: "Website", value: "ghostuss.github.io", href: "https://ghostuss.github.io", icon: "globe" }
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
    role: "Senior Mobile Engineer (Flutter)",
    roleDetails: "End-to-End Product Delivery · Payments & Growth",
    salary: "Negotiable",
    salaryAlt: "Remote · Relocation negotiable",
    salaryHidden: true,
    type: "Full-time",
    format: "Remote · Hybrid · Relocation considered (EU / Cyprus / UK)"
  },
  about: [
    "Senior Mobile Engineer (Flutter), 4+ years end-to-end product delivery across consumer, B2B, and enterprise. 6 apps shipped to App Store, Google Play, and alternative stores; 4 years maintaining a B2B native iOS app (Swift) through full release cycles; 3+ years solo-architecting an offline-first enterprise platform with 25K+ industrial users. Deep on App Store publishing (compliance, App Review escalations, ATT, privacy manifests), payments and POS integrations (in-app SDKs, Apple Pay, Google Pay, card-present terminal IPC bridges), iOS Live Activities, and high-frequency CI/CD (5+ test releases/day). Author of consta_analytics on pub.dev. Led 3 production-scale architecture migrations and a 4-person cross-functional team end-to-end from brief to launch. Since 2025 — combining engineering with product/project management. MSc Financial Management. EU Blue Card / UK Skilled Worker / Cyprus IT Visa eligible — sponsorship-ready · open to relocation (EU / Cyprus / UK)."
  ],
  experience: [
    {
      company: "Punklab Digital Studio · internal IT subsidiary",
      role: "Flutter Developer",
      period: "Feb 2022 — Present",
      duration: "4+ years",
      generalBullets: [
        "Since 2025 — combined Developer + Project Manager role on a key team product (Safety Cage)."
      ],
      projects: [
        {
          name: "Safety Cage",
          role: "Lead Developer + Project Manager",
          stack: "Flutter · Clean Architecture · offline-first",
          bullets: [
            "Built and own the mobile safety-reference platform adopted by 25K+ industrial workers across ~10 companies in the group — used as mandatory pre-shift reference (~70% weekly active rate); replaced paper checklists with a digital handbook for pre-task briefings, training, and on-site self-checks, saving ~5 hours/worker/month vs paper workflows.",
            "Designed offline-first content delivery (full reference loads to device for coverage-blind industrial zones); shipped illustrated barrier catalogue, favorites, and instant search — became the de-facto standard handbook across the group.",
            "Extended the platform from mobile-only to web — delivered and deployed a web build inside the company's closed-perimeter network for desktop-bound roles (managers, safety engineers) who couldn't use the mobile app on the shop floor.",
            "2 software copyright certificates (national IP registry) and government-recognized enterprise software listing — formal recognition of product impact in the occupational-safety domain."
          ]
        },
        {
          name: "Sports Academy — Student-Athlete Platform (Zenit FC youth academy)",
          role: "Lead Flutter Developer",
          stack: "Flutter Mobile + Flutter Web · PWA → Native migration",
          bullets: [
            "Built and shipped a comprehensive student-athlete platform for Zenit Football Club's youth academy — schedules, matches, anthropometry, performance stats, coach feedback, live video streams, nutrition, and grades in one app; adopted by 350+ academy athletes.",
            "Migrated existing PWA → native iOS + Android in 2 months — unlocked App Store / Google Play distribution, full offline UX, and push-notification engagement (~30% weekly CTR uplift); sustained 4.6/5 App Store rating post-launch."
          ]
        },
        {
          name: "B2B Procurement Marketplace",
          role: "iOS Maintainer + App Store Publishing Expert",
          stack: "Native iOS (Swift) · compliance-driven publishing",
          bullets: [
            "Maintain the iOS app of a B2B procurement marketplace — contractors post tenders, partners bid and submit proposals; iOS surface adopted by 1K+ business users with sustained 4.2/5 rating across 4 years.",
            "Over 4 months — resolved every Apple App Review guideline blocker on a previously rejected build, reworked product concept and UX, and successfully shipped to the App Store; owned the full release cycle afterwards (provisioning, signing, escalations, 2024 ATT and privacy-manifest compliance)."
          ]
        },
        {
          name: "EasyCheck — Digital Audit Platform",
          role: "Lead Flutter Developer",
          stack: "Flutter · Clean Architecture · offline-first",
          bullets: [
            "Lead Flutter delivery of EasyCheck — a digital audit & inspection platform for 200+ on-site auditors and compliance officers; cut average audit completion time by ~40% vs paper workflows; full mobile + web parity for field-to-office processes.",
            "Built offline-first sync (Drift + custom conflict resolution) so inspections complete reliably in coverage-blind industrial sites and warehouses with seamless server sync afterwards; published in App Store and alternative store.",
            "Architected and led GetX → Clean Architecture migration across 3 core modules — improved testability and unblocked further feature work on legacy parts of the codebase."
          ]
        }
      ]
    },
    {
      company: "Independent / Contract Development",
      role: "Senior Flutter Developer",
      period: "Mar 2024 — Present",
      projects: [
        {
          name: "Surprise — Digital-First Restaurant App",
          role: "Senior Solo Flutter Developer",
          period: "Dec 2025 — May 2026",
          stack: "Flutter · Drift · Swift · Kotlin",
          bullets: [
            "Solo-delivered Surprise — cashier-less restaurant product where mobile + tablet kiosks fully replace physical POS; customers build custom dishes via configurator, earn loyalty rewards, order without queues.",
            "Designed and shipped the kiosk-mode tablet build for in-venue self-service ordering — Android-native integration with a card-present POS terminal via custom IPC bridge enabled fully cash-free venue operations.",
            "Brought the consumer mobile app from scratch to production in 5 months — Clean Architecture, iOS Live Activities for order tracking, deep-linking, in-app payments SDK integration; CI/CD from day-one (GitHub Actions → TestFlight + Play Internal) with 5+ test releases per day."
          ]
        },
        {
          name: "Moskvichka — Beauty Network App",
          role: "Lead Mobile Developer + Project Manager",
          period: "Feb 2025 — Present",
          stack: "Flutter · Clean Architecture · Custom BLoC",
          bullets: [
            "Lead end-to-end mobile delivery for an 8-salon beauty network — online booking, service catalogue, loyalty program, push notifications; replaced fragmented Instagram/phone bookings with a single mobile experience for 2K+ active customers.",
            "Owned end-to-end: client brief → App Store + alternative store launch in 6 months; led a 4-person cross-functional team (QA, backend, UX/UI) with sprint planning, weekly demos, and retros over a 9-month engagement.",
            "Shipped 2 major versions integrating a payment processor and a customer-loyalty system across all 8 locations."
          ]
        },
        {
          name: "Stretching-Studio Chain App (NDA)",
          role: "Mobile Developer",
          period: "Mar — Aug 2024",
          stack: "Flutter · Custom BLoC",
          bullets: [
            "Reworked the consumer mobile app for a stretching-studio chain — class booking, membership management, schedule, trainer profiles — over a 5-month engagement.",
            "Migrated state management from Riverpod to a custom BLoC implementation per client architectural standard; reduced app bundle size by ~15%.",
            "Drove a stability sprint on the existing build — diagnosed and fixed top crash sources, bringing crash rate from ~60% down to ~25%."
          ]
        }
      ]
    },
    {
      company: "MCArt",
      role: "Junior Mobile Developer",
      period: "Oct 2021 — Feb 2022",
      location: "Saint Petersburg",
      description: "First commercial role.",
      generalBullets: [
        "Contributed to MobX → BLoC state-management migration across the core flow, reducing state-related bugs by ~50%.",
        "Shipped 4+ production features as part of a 3-person mobile team (first commercial role)."
      ]
    }
  ],
  ownProducts: [
    {
      name: "kpl360 (KUPOL.360)",
      role: "Technical Co-founder",
      period: "Feb 2026 — Present",
      description: "EdTech safety platform for K–12 schools: emergency-response SOS scenarios, preventive safety lessons, graded training tests.",
      bullets: [
        "Co-founded and own technical delivery of kpl360 — EdTech safety platform for K–12 schools: train-the-trainer modules teach educators to run effective Safety Minute lessons with students; one-tap SOS button for emergencies; safety dashboard for school directors.",
        "Solo end-to-end across 3 codebases: Flutter mobile (iOS + Android), FastAPI backend (~30 endpoints), and admin panel (web); multi-tenant architecture with role-based access for educator + director and offline-first sync for emergency reliability.",
        "Integrated iOS Live Activities for live SOS tracking on the lock screen, Firebase (FCM, Auth, Remote Config), and payment processing; pilot at 2 institutions via TestFlight; targeting 50+ schools and 500+ educators by Q4 2026 production rollout."
      ]
    }
  ],
  teaching: [
    {
      name: "IT Hub College",
      role: "Flutter Development Instructor",
      period: "Jan 2026 — Jul 2026",
      bullets: [
        "Designed and delivered a 6-month Flutter curriculum for 23 students across 2 cohorts.",
        "Created 12+ practical assignments mirroring production scenarios (Clean Architecture, BLoC, REST integration, store publishing)."
      ]
    },
    {
      name: "Industry Hackathon Mentor (Sirius — Russian federal STEM university, Aug 2025)",
      role: "Mentor",
      period: "Aug 17–29, 2025 · on-site at Sirius",
      bullets: [
        "Mentored 14 students across 2 teams over a 2-week intensive — full cycle from case analysis to solution defense.",
        "Mentored team won 1st place at the event."
      ]
    }
  ],
  achievements: {
    topTier: {
      label: "Top-tier (federal / official)",
      items: [
        "2 software copyright certificates issued (national IP registry, 2025) — for Safety Cage iOS and Android architectures",
        "Government-recognized enterprise software (national software registry listing, 2025–2026)",
        "Letter of appreciation from CTO of a partner organization (industry hackathon, 2025)"
      ]
    },
    recognition: {
      label: "Industry recognition",
      items: [
        "Finalist — national-level CX award for digital employee experience (RU market, 2025)",
        "1st place at industry hackathon (mentored team, 2025)"
      ]
    },
    opensource: {
      label: "Open-source",
      items: [
        "Author of consta_analytics — open-source Flutter package on pub.dev (offline-first event queue with typed event API)"
      ]
    }
  },
  skills: [
    { group: "Languages", items: ["Dart", "Swift (publishing, maintenance)", "Kotlin (prototyping)"] },
    { group: "Flutter & Architecture", items: ["Flutter 3.x · Dart 3.x", "Clean Architecture", "BLoC · flutter_bloc", "Custom BLoC (RxDart)", "Riverpod · Provider", "dartz (Either<Failure, T>)", "auto_route · go_router", "injectable · get_it", "freezed · json_serializable"] },
    { group: "Data & Networking", items: ["Dio + interceptors", "WebSocket", "REST API design", "Drift (SQLite, type-safe)", "Hive", "flutter_secure_storage", "offline-first patterns"] },
    { group: "Native & Platform", items: ["iOS Native (Swift) — App Store publishing", "Android Native (Kotlin) — prototypes", "Platform Channels", "Deep Links · Universal Links", "Flavors"] },
    { group: "Integrations & Payments", items: ["Apple Pay · Google Pay · RevenueCat IAP", "In-app payment SDKs · 4× regional PSP integrations (Alfa Pay, CloudPayments, YooKassa, SberPay)", "Card-present POS terminal integration via custom Android IPC bridge", "Firebase (FCM, Auth, Remote Config) · iOS Live Activities", "Sentry · Amplitude · Firebase Analytics"] },
    { group: "CI/CD & Testing", items: ["Codemagic · GitHub Actions · Bitbucket Pipelines · Fastlane", "Unit & Widget tests · mocktail"] },
    { group: "Full-stack (AI-assisted)", items: ["End-to-end delivery: backend (FastAPI / Python) and admin panel", "Claude Code, Figma MCP"] }
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
      { year: "2024", name: "IT Industry Trends & Project Delivery", provider: "Sirius Scientific and Technological University (Russian federal STEM excellence center, state-funded)" }
    ]
  },
  languages: [
    { name: "Russian", level: "Native" },
    { name: "English", level: "Professional working proficiency · daily technical use (docs, code reviews, meetings)" }
  ],
  additional: "EU Blue Card / UK Skilled Worker / Cyprus IT Visa eligible · open to sponsorship · 60-day notice."
};
