// SEO Configuration for Hishab Nikash Website
// All metadata is in Bangla for Bangladesh SEO dominance

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

// Base URL for canonical links
const BASE_URL = 'https://hishabnikash.com';

// Default OG Image
const DEFAULT_OG_IMAGE = '/images/logo.jpg';

export const seoConfig = {
  home: {
    title: 'হিসাব নিকাশ — আপনার টাকার পূর্ণ নিয়ন্ত্রণ | অফলাইন ফাইন্যান্স অ্যাপ',
    description: 'বাংলাদেশের সেরা অফলাইন ব্যক্তিগত ফাইন্যান্স অ্যাপ। খরচ ট্র্যাক করুন, বাকির খাতা রাখুন, সেভিংস গোল সেট করুন — সম্পূর্ণ বিনামূল্যে।',
    keywords: [
      'হিসাব নিকাশ',
      'খরচ হিসাব রাখার অ্যাপ',
      'ব্যক্তিগত ফাইন্যান্স অ্যাপ',
      'অফলাইন হিসাব রাখার অ্যাপ',
      'বাংলাদেশ ফাইন্যান্স অ্যাপ',
      'বাকির খাতা অ্যাপ',
      'টাকা হিসাব করার অ্যাপ',
    ],
    ogImage: DEFAULT_OG_IMAGE,
    canonicalUrl: `${BASE_URL}/`,
  },
  features: {
    title: 'হিসাব নিকাশ সুবিধাসমূহ | খরচ ট্র্যাকিং ও বাকির খাতা',
    description: 'হিসাব নিকাশ অ্যাপের সকল সুবিধা জানুন। মাল্টি-ওয়ালেট, বাকির খাতা, সেভিংস গোল, অ্যানালিটিক্স — সবই অফলাইনে।',
    keywords: [
      'হিসাব নিকাশ সুবিধা',
      'খরচ ট্র্যাকিং অ্যাপ',
      'বাকির খাতা অ্যাপ',
      'সেভিংস গোল ট্র্যাকার',
      'বিকাশ নগদ হিসাব',
      'অফলাইন এক্সপেন্স ট্র্যাকার',
    ],
    ogImage: DEFAULT_OG_IMAGE,
    canonicalUrl: `${BASE_URL}/features`,
  },
  offline: {
    title: 'অফলাইন হিসাব অ্যাপ | ইন্টারনেট ছাড়া কাজ করে',
    description: 'ইন্টারনেট ছাড়াই আপনার টাকার হিসাব রাখুন। হিসাব নিকাশ সম্পূর্ণ অফলাইনে কাজ করে — আপনার ডেটা আপনার ডিভাইসেই থাকে।',
    keywords: [
      'অফলাইন হিসাব অ্যাপ',
      'ইন্টারনেট ছাড়া কাজ করে',
      'অফলাইন এক্সপেন্স ট্র্যাকার',
      'লোকাল স্টোরেজ অ্যাপ',
      'ডাটা সেভিং অ্যাপ',
    ],
    ogImage: DEFAULT_OG_IMAGE,
    canonicalUrl: `${BASE_URL}/offline`,
  },
  privacy: {
    title: 'গোপনীয়তা নীতি | আপনার ডেটা শুধুমাত্র আপনার ডিভাইসে',
    description: 'হিসাব নিকাশে আপনার ডেটা সম্পূর্ণ নিরাপদ। কোনো সার্ভারে পাঠানো হয় না, কোনো তৃতীয় পক্ষের সাথে শেয়ার করা হয় না।',
    keywords: [
      'গোপনীয়তা নীতি',
      'ডেটা সিকিউরিটি',
      'লোকাল ফার্স্ট অ্যাপ',
      'প্রাইভেসি ফোকাসড অ্যাপ',
      'নিরাপদ ফাইন্যান্স অ্যাপ',
    ],
    ogImage: DEFAULT_OG_IMAGE,
    canonicalUrl: `${BASE_URL}/privacy`,
  },
  download: {
    title: 'হিসাব নিকাশ ডাউনলোড | ফ্রি APK ডাউনলোড করুন',
    description: 'হিসাব নিকাশ APK সম্পূর্ণ বিনামূল্যে ডাউনলোড করুন। Android 6.0+ সাপোর্টেড। ইনস্টলেশন গাইড সহ।',
    keywords: [
      'হিসাব নিকাশ ডাউনলোড',
      'APK ডাউনলোড',
      'ফ্রি ফাইন্যান্স অ্যাপ',
      'অ্যান্ড্রয়েড হিসাব অ্যাপ',
      'বাংলা ফাইন্যান্স অ্যাপ ডাউনলোড',
    ],
    ogImage: DEFAULT_OG_IMAGE,
    canonicalUrl: `${BASE_URL}/download`,
  },
  about: {
    title: 'আমাদের সম্পর্কে | Rubie Corp. এবং Afrain Kabir Rafid',
    description: 'হিসাব নিকাশ অ্যাপের নির্মাতা Afrain Kabir Rafid এবং Rubie Corp. সম্পর্কে জানুন। আমাদের মিশন ও যোগাযোগ তথ্য।',
    keywords: [
      'আমাদের সম্পর্কে',
      'Afrain Kabir Rafid',
      'Rubie Corp',
      'বাংলাদেশি অ্যাপ ডেভেলপার',
      'ফাইন্যান্স অ্যাপ ডেভেলপার',
    ],
    ogImage: DEFAULT_OG_IMAGE,
    canonicalUrl: `${BASE_URL}/about`,
  },
};

// Generate meta tags HTML
export function generateMetaTags(config: SEOConfig): string {
  const { title, description, keywords, ogImage, canonicalUrl } = config;

  return `
    <!-- Primary Meta Tags -->
    <title>${title}</title>
    <meta name="title" content="${title}">
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords.join(', ')}">
    <meta name="author" content="Afrain Kabir Rafid - Rubie Corp.">
    <meta name="robots" content="index, follow">
    <meta name="language" content="Bangla">
    <meta name="revisit-after" content="7 days">
    
    <!-- Canonical URL -->
    ${canonicalUrl ? `<link rel="canonical" href="${canonicalUrl}">` : ''}
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonicalUrl || BASE_URL}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${ogImage || DEFAULT_OG_IMAGE}">
    <meta property="og:locale" content="bn_BD">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${canonicalUrl || BASE_URL}">
    <meta property="twitter:title" content="${title}">
    <meta property="twitter:description" content="${description}">
    <meta property="twitter:image" content="${ogImage || DEFAULT_OG_IMAGE}">
    
    <!-- Favicon -->
    <link rel="icon" type="image/jpeg" href="/images/logo.jpg">
    <link rel="apple-touch-icon" href="/images/logo.jpg">
  `;
}
