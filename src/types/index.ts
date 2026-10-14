export type Language = 'en' | 'te';

export type VerificationStatus = 
  | 'verified' 
  | 'family_supplied' 
  | 'pending_family_verification' 
  | 'historical_context';

export interface Milestone {
  id: string;
  period: {
    en: string;
    te: string;
  };
  title: {
    en: string;
    te: string;
  };
  subtitle: {
    en: string;
    te: string;
  };
  description: {
    en: string;
    te: string;
  };
  significance: {
    en: string;
    te: string;
  };
  verificationStatus: VerificationStatus;
  verificationNote: {
    en: string;
    te: string;
  };
  accentColor?: string;
  badge?: string;
}

export interface RecognitionItem {
  id: string;
  designationOrAward: string;
  category: {
    en: string;
    te: string;
  };
  context: {
    en: string;
    te: string;
  };
  description: {
    en: string;
    te: string;
  };
  verificationStatus: VerificationStatus;
  verificationDetails: {
    en: string;
    te: string;
  };
  certificateAvailable: boolean;
  certificatePlaceholderText?: {
    en: string;
    te: string;
  };
}

export interface ChapterMeta {
  number: string;
  id: string;
  slug: string;
  title: {
    en: string;
    te: string;
  };
  subtitle: {
    en: string;
    te: string;
  };
  theme: {
    en: string;
    te: string;
  };
  visualWorld: 'A' | 'B' | 'C';
}

export interface SiteContent {
  meta: {
    title: {
      en: string;
      te: string;
    };
    description: {
      en: string;
      te: string;
    };
  };
  hero: {
    eyebrow: {
      en: string;
      te: string;
    };
    mainTitle: {
      en: string;
      te: string;
    };
    subjectName: {
      en: string;
      te: string;
    };
    designation: {
      en: string;
      te: string;
    };
    location: {
      en: string;
      te: string;
    };
    subtitle: {
      en: string;
      te: string;
    };
    scrollPrompt: {
      en: string;
      te: string;
    };
  };
  chapters: {
    chapter1: {
      title: { en: string; te: string };
      tagline: { en: string; te: string };
      body: { en: string[]; te: string[] };
      quote: { en: string; te: string };
    };
    chapter2: {
      title: { en: string; te: string };
      tagline: { en: string; te: string };
      virtues: Array<{
        title: { en: string; te: string };
        desc: { en: string; te: string };
      }>;
      narrative: { en: string; te: string };
    };
    chapter3: {
      title: { en: string; te: string };
      tagline: { en: string; te: string };
      body: { en: string[]; te: string[] };
      transitionNote: { en: string; te: string };
    };
    chapter4: {
      title: { en: string; te: string };
      tagline: { en: string; te: string };
      intro: { en: string; te: string };
      milestones: Milestone[];
    };
    chapter5: {
      title: { en: string; te: string };
      tagline: { en: string; te: string };
      intro: { en: string; te: string };
      recognitions: RecognitionItem[];
      specialHonorTitle: { en: string; te: string };
      specialHonorDesc: { en: string; te: string };
    };
    chapter6: {
      title: { en: string; te: string };
      tagline: { en: string; te: string };
      principles: Array<{
        title: { en: string; te: string };
        description: { en: string; te: string };
      }>;
      restrainedReflection: { en: string; te: string };
      confidentialityNotice: { en: string; te: string };
    };
    chapter7: {
      title: { en: string; te: string };
      tagline: { en: string; te: string };
      closingStatement: { en: string; te: string };
      subjectName: { en: string; te: string };
      designation: { en: string; te: string };
      location: { en: string; te: string };
      tributeNote: { en: string; te: string };
    };
  };
  archiveModal: {
    verificationTitle: { en: string; te: string };
    verificationBadge: { en: string; te: string };
    familyContributionNote: { en: string; te: string };
    closeButton: { en: string; te: string };
    viewCertificate: { en: string; te: string };
  };
  navigation: {
    chapters: Array<{
      id: string;
      label: { en: string; te: string };
    }>;
    languageToggleLabel: { en: string; te: string };
    archivalBadge: { en: string; te: string };
    tableOfContents: { en: string; te: string };
  };
}
