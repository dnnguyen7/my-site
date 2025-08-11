declare global {
  interface Window {
    Cal: any;
  }
}

export type Page =
  'home' | 'pricing' | 'login' | 'signup' | 'whitelabel' |
  'features' | 'use-cases' | 'platform' | 'roi-calculator' |
  'about' | 'career' | 'news' | 'changelog' |
  'blog' | 'guides' | 'demo-videos' |
  'terms-of-services' | 'privacy-policy' | 'fair-use-policy' |
  'cal/demo' | 'reviews' |
  'ai-phone-agent' | 'ai-chat-agent' | 'ai-discord-bot' |
  'solutions' |
  'help-center' | 'referral-program' |
  'user-data-deletion' | 'limited-use-disclosure' | 'application' | 'industry-hall-of-fame' | 'status';


export type Navigable = {
  navigateTo: (page: Page) => void;
  openCalendarModal: () => void;
};

export interface NewsUpdate {
  category: string;
  title: string;
  date: string;
  description: string;
  content: { type: 'p' | 'h3' | 'ul' | 'ol'; text?: string; items?: string[] }[];
}