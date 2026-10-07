import { AppItem, ProcessStep, ServiceItem } from './types';

export const siteConfig = {
  name: 'Websiteable',
  arabicName: 'ويب سايتبل',
  locationEn: 'Riyadh, Saudi Arabia',
  locationAr: 'الرياض، المملكة العربية السعودية',
  contactEmail: 'hello@websiteable.tech',
  whatsappNumber: '+966500000000',
  year: 2026,
};

export const translations = {
  en: {
    nav: {
      studio: 'Studio',
      services: 'Services',
      work: 'Work',
      process: 'Process',
      contact: 'Contact',
      startProject: 'Start a project',
      langToggle: 'العربية',
    },
    hero: {
      locationBadge: 'Software Studio - Riyadh, Saudi Arabia',
      brandName: 'WEBSITEABLE',
      arabicBrandSubtitle: 'ويب سايتبل',
      tagline: 'Your technical arm.',
      description: 'We design and engineer exceptional apps and websites — so you never have to think about the tech.',
      seeWork: 'See our work',
      startProject: 'Start a project',
      scroll: 'Scroll to explore',
    },
    studio: {
      label: 'The Studio',
      statementWords:
        'We are a fully Saudi studio building at a global standard. Premium by design, deliberate by choice — we take on a handful of projects and treat each like our own. From first pixel to production, we are the technical arm behind ambitious founders.'.split(
          ' '
        ),
    },
    services: {
      label: 'What we do',
      heading: 'One team. The full technical arm.',
    },
    work: {
      label: 'Selected Work',
      heading: 'Products we designed, engineered and shipped.',
      subheading:
        'Three in-house apps, live on the App Store. Each one proof that we handle the full technical journey — design, build and launch.',
      viewOnAppStore: 'View on App Store',
    },
    process: {
      label: 'How we work',
      heading: 'A calm, deliberate process behind loud results.',
    },
    cta: {
      label: 'The next move',
      heading1: 'Have something',
      heading2: 'worth building?',
      description:
        "Tell us about your app or website. We take on a handful of projects at a time — if it's a fit, we'll handle everything on the tech side.",
      startProject: 'Start a project',
      whatsappDirect: 'Chat on WhatsApp',
    },
    modal: {
      badge: 'Project Inquiry',
      title: 'Let’s build something extraordinary',
      description: 'Share a few details about your project and we’ll get back to you within 24 hours.',
      projectTypeLabel: 'What are you looking to build?',
      types: {
        mobile: 'Mobile App (iOS / Android)',
        web: 'Web Application / SaaS',
        website: 'High-End Brand Website',
        product: 'Full Product from 0 to 1',
      },
      budgetLabel: 'Estimated Budget (SAR)',
      budgets: [
        '10,000 - 50,000 SAR',
        '50,000 - 100,000 SAR',
        '100,000+ SAR',
      ],
      timelineLabel: 'Desired Timeline',
      timelines: ['1 - 2 Months', '2 - 3 Months', '3 - 6 Months'],
      detailsLabel: 'Project Overview',
      detailsPlaceholder: 'Briefly describe your vision, target audience, and key goals...',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Tariq Al-Dossary',
      emailLabel: 'Email Address',
      emailPlaceholder: 'name@company.com',
      phoneLabel: 'Phone / WhatsApp',
      phonePlaceholder: '+966 5x xxx xxxx',
      submitBtn: 'Send Project Brief',
      submitting: 'Submitting...',
      successTitle: 'Brief Received!',
      successDesc: 'Thank you for reaching out. We will review your brief and be in touch shortly.',
      whatsappAlternative: 'Or message us directly on WhatsApp',
      closeBtn: 'Close',
    },
    footer: {
      description:
        'A premium software studio in Riyadh, Saudi Arabia. We design and engineer exceptional apps and websites, and build our own products in-house.',
      navigate: 'Navigate',
      products: 'In-House Products',
      connect: 'Connect',
      rights: 'All rights reserved.',
      designedIn: 'Designed & engineered in Riyadh.',
    },
  },
  ar: {
    nav: {
      studio: 'الاستوديو',
      services: 'خدماتنا',
      work: 'أعمالنا',
      process: 'منهجيتنا',
      contact: 'تواصل معنا',
      startProject: 'ابدأ مشروعك',
      langToggle: 'English',
    },
    hero: {
      locationBadge: 'استوديو برمجيات — الرياض، المملكة العربية السعودية',
      brandName: 'WEBSITEABLE',
      arabicBrandSubtitle: 'ويب سايتبل',
      tagline: 'ذراعكم التقني.',
      description: 'نصمم ونطوّر تطبيقات ومواقع استثنائية — حتى لا تضطر للتفكير في الجانب التقني أبداً.',
      seeWork: 'استكشف أعمالنا',
      startProject: 'ابدأ مشروعك',
      scroll: 'مرر للأسفل للاستكشاف',
    },
    studio: {
      label: 'الاستوديو',
      statementWords:
        'استوديو سعودي بالكامل يبني بمعايير عالمية فائقة. متميز بالتصميم، مدروس بالخيارات — نتولى عدداً محدوداً من المشاريع ونهتم بكل مشروع كأنه مشروعنا الخاص. من أول بكسل وحتى إطلاق المنتج النهائي في السوق، نحن الذراع التقني لرواد الأعمال الطموحين.'.split(
          ' '
        ),
    },
    services: {
      label: 'ماذا نقدم',
      heading: 'فريق واحد. الذراع التقني المتكامل.',
    },
    work: {
      label: 'أعمال مختارة',
      heading: 'منتجات صممنا تطويرها وأطلقناها بنجاح.',
      subheading:
        'ثلاثة تطبيقات حية ومتاحة على متجر App Store. كل تطبيق منها برهان عملي على تولينا الرحلة التقنية الكاملة — من الفكرة والتصميم إلى البناء والإطلاق.',
      viewOnAppStore: 'عرض على App Store',
    },
    process: {
      label: 'كيف نعمل',
      heading: 'منهجية هادئة ومدروسة تصنع نتائج مبهرة.',
    },
    cta: {
      label: 'الخطوة التالية',
      heading1: 'هل لديك فكرة',
      heading2: 'تستحق البناء؟',
      description:
        'أخبرنا عن فكرة تطبيقك أو موقعك. نستقبل عدداً محدوداً من المشاريع في الوقت ذاته — وإذا كان هناك توافق، سنتولى كل ما يتعلق بالجانب التقني.',
      startProject: 'ابدأ مشروعك',
      whatsappDirect: 'تحدث معنا عبر واتساب',
    },
    modal: {
      badge: 'طلب استشارة ومشروع',
      title: 'دعنا نبني شيئاً استثنائياً معاً',
      description: 'شاركنا بعض التفاصيل حول مشروعك وسنعاود التواصل معك خلال 24 ساعة.',
      projectTypeLabel: 'ما الذي ترغب في بنائه وتطويره؟',
      types: {
        mobile: 'تطبيق هاتف (iOS / Android)',
        web: 'تطبيق ويب سحابي / SaaS',
        website: 'موقع إلكتروني فاخر لعلامة تجارية',
        product: 'بناء منتج رقمي متكامل من الصفر',
      },
      budgetLabel: 'الميزانية التقديرية (بالريال السعودي)',
      budgets: [
        '10,000 - 50,000 ر.س',
        '50,000 - 100,000 ر.س',
        '100,000+ ر.س',
      ],
      timelineLabel: 'الجدول الزمني المفضل',
      timelines: ['1 - 2 أشهر', '2 - 3 أشهر', '3 - 6 أشهر'],
      detailsLabel: 'نبذة عن المشروع',
      detailsPlaceholder: 'صف رؤيتك والجمهور المستهدف وأبرز الأهداف التي تسعى لتحقيقها...',
      nameLabel: 'الاسم الكريم',
      namePlaceholder: 'مثال: طارق الدوسري',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'name@company.com',
      phoneLabel: 'رقم الهاتف / واتساب',
      phonePlaceholder: '+966 5x xxx xxxx',
      submitBtn: 'إرسال تفاصيل المشروع',
      submitting: 'جاري الإرسال...',
      successTitle: 'تم استلام تفاصيل مشروعك بنجاح!',
      successDesc: 'شكراً لتواصلك معنا. سنقوم بمراجعة التفاصيل والتواصل معك بأقرب وقت.',
      whatsappAlternative: 'أو تواصل معنا مباشرة عبر واتساب',
      closeBtn: 'إغلاق',
    },
    footer: {
      description:
        'استوديو برمجيات وتطبيقات فاخر في الرياض، المملكة العربية السعودية. نصمم ونطور تطبيقات ومواقع استثنائية، ونبني منتجاتنا الخاصة أيضاً.',
      navigate: 'تصفح',
      products: 'منتجاتنا الخاصة',
      connect: 'تواصل معنا',
      rights: 'جميع الحقوق محفوظة.',
      designedIn: 'صُمم وطُوّر في الرياض.',
    },
  },
};

export const servicesData: ServiceItem[] = [
  {
    n: '01',
    title: {
      en: 'Mobile Apps',
      ar: 'تطبيقات الهواتف الذكية',
    },
    desc: {
      en: 'Native iOS and cross-platform apps engineered for performance, polish and the App Store. From concept to launch.',
      ar: 'تطبيقات iOS أصلية وتطبيقات متعددة المنصات مصممة بأعلى مستويات الأداء والأناقة لتتصدر متجر التطبيقات. من الفكرة إلى الإطلاق.',
    },
    tags: ['SwiftUI', 'React Native', 'Firebase', 'StoreKit'],
    iconType: 'mobile',
  },
  {
    n: '02',
    title: {
      en: 'Websites',
      ar: 'المواقع وتطبيقات الويب',
    },
    desc: {
      en: 'Cinematic, high-conversion websites with the it-factor. Motion, 3D and interaction that make premium brands feel premium.',
      ar: 'مواقع تفاعلية سينمائية بأعلى معدلات التحويل والجاذبية. حركات ثلاثية الأبعاد وتفاعل فريد يمنح العلامات الراقية حضوراً لا يُنسى.',
    },
    tags: ['Next.js', 'WebGL', 'Three.js', 'Motion'],
    iconType: 'web',
  },
  {
    n: '03',
    title: {
      en: 'In-house Products',
      ar: 'منتجاتنا الرقمية الخاصة',
    },
    desc: {
      en: 'We build and ship our own software too. Real products, real users, real revenue — so we know exactly what it takes.',
      ar: 'نبني ونطلق برمجياتنا الخاصة أيضاً. منتجات حقيقية، مستخدمون فعليون، وإيرادات مستمرة — لذلك ندرك تماماً أسرار النجاح والنمو.',
    },
    tags: ['Strategy', 'Design', 'Engineering', 'Growth'],
    iconType: 'products',
  },
];

export const appsData: AppItem[] = [
  {
    id: 'method',
    name: 'Method',
    arabicName: 'ميثود',
    category: {
      en: 'iOS - Training',
      ar: 'iOS — تدريب وتمارين',
    },
    tagline: {
      en: 'Focused training. Real results. No noise.',
      ar: 'تدريب مركّز. نتائج حقيقية. بدون تعقيد.',
    },
    blurb: {
      en: 'A subscription training app built for serious gym progress. One clear program, built around your goal.',
      ar: 'تطبيق تدريب باشتراكات مصمم للتقدم الرياضي الحقيقي في الصالة الرياضية. برنامج واحد واضح مبني حول أهدافك بدقة.',
    },
    description: {
      en: 'Method strips away the noise of everything-apps. Pick a track, follow a structured program with video coaching, and log every set. Built native in SwiftUI on a Firebase backend with StoreKit subscriptions.',
      ar: 'يجرد تطبيق Method الفوضى من التطبيقات المكدسة. اختر مسارك، اتبع برنامجاً منظماً بإشراف بالفيديو، وسجل كل جولة. مبني أصيلاً بلغة SwiftUI مع بنية Firebase السحابية واشتراكات StoreKit.',
    },
    accent: '#1E88E5',
    accent2: '#FFD700',
    surface: '#05070d',
    logo: '/assets/method/logo.png',
    appStoreUrl: 'https://apps.apple.com/app/id6764013438',
    highlights: [
      { en: '5 program tracks', ar: '٥ مسارات تدريبية متخصصة' },
      { en: 'Video-coached exercises', ar: 'تمارين موجهة بالفيديو عالي الدقة' },
      { en: 'Performance pillars', ar: 'أعمدة تحليل الأداء الرياضي' },
      { en: 'Native SwiftUI + Firebase', ar: 'تطوير أصيل SwiftUI + سحابة Firebase' },
    ],
  },
  {
    id: 'threshold',
    name: 'Threshold',
    arabicName: 'ثريشهولد',
    category: {
      en: 'iOS - Athletics',
      ar: 'iOS — أداء رياضي تنافسي',
    },
    tagline: {
      en: 'Built for athletes.',
      ar: 'صُمم خصيصاً للرياضيين.',
    },
    blurb: {
      en: 'Sport-specific gym programming for current and future athletes. Not an everything app — it does one thing.',
      ar: 'برامج تدريب متخصصة لكل رياضة للرياضيين الحاليين والمستقبليين. ليس تطبيقاً عشوائياً — بل يركز على التميز الرياضي.',
    },
    description: {
      en: 'Threshold makes you better at your sport in the gym. Programs designed by coaches with 10+ years training athletes, with performance you can feel in game. Region-aware, sport-first, ruthlessly focused.',
      ar: 'يجعلك Threshold تتألق في رياضتك من داخل الصالة. برامج صممها مدربون بخبرة تزيد عن 10 سنوات في تدريب الأبطال، لنتائج تنعكس فوراً في المباريات.',
    },
    accent: '#1E88E5',
    accent2: '#FF1744',
    surface: '#0a050a',
    logo: '/assets/threshold/logo.png',
    appStoreUrl: 'https://apps.apple.com/app/id6762071818',
    highlights: [
      { en: 'Sport-specific programs', ar: 'برامج مخصصة حسب نوع الرياضة' },
      { en: 'Coach-built training', ar: 'تمارين معتمدة من نخبة المدربين' },
      { en: 'Community sport voting', ar: 'تصويت مجتمعي على الرياضات الجديدة' },
      { en: 'Native SwiftUI + Firebase', ar: 'بناء أصيل SwiftUI + Firebase' },
    ],
  },
  {
    id: 'nawarto',
    name: 'Nawarto',
    arabicName: 'نورتو',
    category: {
      en: 'iOS - Events',
      ar: 'iOS — المناسبات والفعاليات',
    },
    tagline: {
      en: 'Every invite, perfectly delivered.',
      ar: 'كل دعوة، تصل بأبهى صورة.',
    },
    blurb: {
      en: "Design beautiful WhatsApp invitations and know exactly who's coming. RSVPs, reminders and check-in in real time.",
      ar: 'صمم دعوات واتساب أنيقة واعرف بدقة من سيحضر. تأكيد حضور فوري، تذكيرات، وتسجيل دخول في الوقت الفعلي.',
    },
    description: {
      en: 'Nawarto brings hospitality-grade event management to WhatsApp. Design an invite, send it to your guest list, and track confirmations, dietary preferences, plus-ones and QR check-ins live. Bilingual EN/AR, built for the region.',
      ar: 'يقدم تطبيق نورتو إدارة فعاليات ومناسبات راقية عبر واتساب. صمم دعوتك الفاخرة، أرسلها لقائمتك، وتتبع التأكيدات والمرافقين وتسجيل الدخول عبر رمز QR مباشرة. ثنائي اللغة مصمم لثقافة وضيافة منطقتنا.',
    },
    accent: '#25D366',
    accent2: '#128C7E',
    surface: '#f3ead9',
    light: true,
    logo: '/assets/nawarto/logo.png',
    highlights: [
      { en: 'WhatsApp-native invites', ar: 'دعوات تفاعلية مدمجة مع واتساب' },
      { en: 'Live RSVP tracking', ar: 'تتبع مباشر ولحظي لتأكيدات الحضور' },
      { en: 'QR check-in', ar: 'مسح سريع لتسجيل الحضور برمز QR' },
      { en: 'Bilingual EN / AR', ar: 'تجربة متكاملة باللغتين العربية والإنجليزية' },
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    n: '01',
    title: {
      en: 'Discover',
      ar: 'الاستكشاف والتحديد',
    },
    desc: {
      en: 'We start with your goal, not a feature list. Deep on the problem, the users and what winning actually looks like.',
      ar: 'نبدأ بهدفك التجاري، وليس بقائمة خصائص عشوائية. نتعمق في جوهر المشكلة، وسلوك المستخدمين، وما يعنيه النجاح الحقيقي لمشروعك.',
    },
  },
  {
    n: '02',
    title: {
      en: 'Design',
      ar: 'التصميم والهندسة البصرية',
    },
    desc: {
      en: 'Interface, motion and brand come together. Every screen is crafted to feel premium and effortless to use.',
      ar: 'تلتقي الواجهات مع التفاعل والهوية الرقمية. كل شاشة تُصاغ بعناية لتمنح المستخدم إحساساً بالفخامة والسهولة المطلقة.',
    },
  },
  {
    n: '03',
    title: {
      en: 'Build',
      ar: 'التطوير والبناء البرمجي',
    },
    desc: {
      en: 'Native, performant, production-grade code. Firebase, StoreKit, WebGL — whatever the product truly needs.',
      ar: 'كود أصيل، عالي الأداء، ومجهز لأعلى ضغوط الإنتاج. سواء كان SwiftUI أو WebGL أو بنية سحابية — ننفذ ما يحتاجه المنتج بدقة.',
    },
  },
  {
    n: '04',
    title: {
      en: 'Ship',
      ar: 'الإطلاق والتحسين المستمر',
    },
    desc: {
      en: 'App Store, web, analytics, iteration. We launch it, watch it, and keep making it better.',
      ar: 'متجر App Store، الويب، لوحات التحليلات، والتطوير المستمر. نطلق المنتج، نتابع أداءه بدقة، ونواصل تطويره نحو القمة.',
    },
  },
];
