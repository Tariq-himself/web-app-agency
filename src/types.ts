export type Language = 'en' | 'ar';

export interface AppHighlight {
  en: string;
  ar: string;
}

export interface AppItem {
  id: string;
  name: string;
  arabicName?: string;
  category: {
    en: string;
    ar: string;
  };
  tagline: {
    en: string;
    ar: string;
  };
  blurb: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  accent: string;
  accent2: string;
  surface: string;
  light?: boolean;
  logo: string;
  appStoreUrl?: string;
  highlights: AppHighlight[];
}

export interface ServiceItem {
  n: string;
  title: {
    en: string;
    ar: string;
  };
  desc: {
    en: string;
    ar: string;
  };
  tags: string[];
  iconType: 'mobile' | 'web' | 'products';
}

export interface ProcessStep {
  n: string;
  title: {
    en: string;
    ar: string;
  };
  desc: {
    en: string;
    ar: string;
  };
}
