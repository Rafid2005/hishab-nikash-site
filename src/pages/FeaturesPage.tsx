import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DownloadCTA } from '@/components/sections/DownloadCTA';
import {
  Wallet,
  Users,
  Target,
  TrendingUp,
  ArrowRightLeft,
  History,
  PieChart,
} from 'lucide-react';

const features = [
  {
    icon: Wallet,
    title: 'মাল্টি-ওয়ালেট সিস্টেম',
    description:
      'ক্যাশ, বিকাশ, নগদ — সব ওয়ালেট একসাথে ম্যানেজ করুন। প্রতিটি ওয়ালেটের ব্যালেন্স ও ট্রানজাকশন আলাদা আলাদা দেখুন।',
    image: 'screenshot-dashboard.jpg',
    highlights: [
      'একাধিক ওয়ালেট একসাথে',
      'রিয়েল-টাইম ব্যালেন্স',
      'ওয়ালেট ভিত্তিক হিসাব',
    ],
  },
  {
    icon: ArrowRightLeft,
    title: 'টাকা ট্রান্সফার',
    description:
      'এক ওয়ালেট থেকে আরেক ওয়ালেটে সহজেই টাকা ট্রান্সফার করুন। ক্যাশ থেকে বিকাশ বা নগদে — সবই সম্ভব।',
    image: 'screenshot-transfer.jpg',
    highlights: [
      'ওয়ালেট থেকে ওয়ালেট ট্রান্সফার',
      'সহজ ও দ্রুত',
      'অটোমেটিক ব্যালেন্স আপডেট',
    ],
  },
  {
    icon: Users,
    title: 'বাকির খাতা (Due Manager)',
    description:
      'কে কত টাকা ধার নিয়েছে বা দিতে হবে — সব হিসাব রাখুন। আপনার পাওনা ও দেনা এক জায়গায় দেখুন।',
    image: 'screenshot-due-manager.jpg',
    highlights: [
      'পাওনা ও দেনার হিসাব',
      'ব্যক্তি ভিত্তিক খাতা',
      'পেমেন্ট রিমাইন্ডার',
    ],
  },
  {
    icon: Target,
    title: 'সেভিংস গোল',
    description:
      'আপনার লক্ষ্য ঠিক করুন — নতুন ফোন, বাইক, বা যেকোনো কিছু। ট্র্যাক করুন কতদূর এগিয়েছেন।',
    image: 'screenshot-goals.jpg',
    highlights: [
      'কাস্টম সেভিংস গোল',
      'প্রোগ্রেস ট্র্যাকিং',
      'টার্গেট ডেট সেট',
    ],
  },
  {
    icon: History,
    title: 'ট্রানজাকশন হিস্টরি',
    description:
      'সব ট্রানজাকশন টাইমলাইন ও বিশ্লেষণ আকারে দেখুন। খুঁজে পান যেকোনো পুরনো হিসাব।',
    image: 'screenshot-history-timeline.jpg',
    highlights: [
      'টাইমলাইন ভিউ',
      'ব্রেকডাউন অ্যানালাইসিস',
      'স্মার্ট সার্চ',
    ],
  },
  {
    icon: PieChart,
    title: 'স্মার্ট অ্যানালিটিক্স',
    description:
      'আপনার খরচের প্যাটার্ন বুঝুন। কোন ক্যাটেগরিতে বেশি খরচ হচ্ছে — চার্ট ও গ্রাফে দেখুন।',
    image: 'screenshot-history-breakdown.jpg',
    highlights: [
      'ভিজ্যুয়াল চার্ট',
      'ক্যাটেগরি ভিত্তিক বিশ্লেষণ',
      'মাসিক রিপোর্ট',
    ],
  },
];

const paymentMethods = [
  {
    name: 'ক্যাশ',
    description: 'হাতে নগদ টাকার হিসাব',
    color: 'bg-emerald-500',
  },
  {
    name: 'বিকাশ',
    description: 'বিকাশ ওয়ালেট ট্র্যাকিং',
    color: 'bg-pink-500',
  },
  {
    name: 'নগদ',
    description: 'নগদ ওয়ালেট ট্র্যাকিং',
    color: 'bg-orange-500',
  },
];

const categories = [
  'খাবার',
  'বাজার',
  'পরিবহন',
  'বিদ্যুৎ',
  'ভাড়া',
  'মোবাইল রিচার্জ',
  'শপিং',
  'চিকিৎসা',
  'শিক্ষা',
  'বিনোদন',
  'দান',
  'অন্যান্য',
];

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            হিসাব নিকাশের সুবিধাসমূহ
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
            আপনার টাকা ম্যানেজমেন্টের জন্য প্রয়োজনীয় সব ফিচার — সম্পূর্ণ
            অফলাইনে ও সম্পূর্ণ বিনামূল্যে
          </p>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-32">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-base text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-3 h-3 text-accent" />
                        </div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`flex justify-center ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <img
                    src={`images/${feature.image}`}
                    alt={feature.title}
                    className="w-64 sm:w-72 lg:w-80 phone-mockup"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              সাপোর্টেড পেমেন্ট মেথড
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              বাংলাদেশের সবচেয়ে জনপ্রিয় পেমেন্ট মেথড সাপোর্টেড
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <div
                key={method.name}
                className="p-6 rounded-2xl bg-white border border-border text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${method.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <Wallet className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {method.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              এক্সপেন্স ক্যাটেগরি
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              প্রি-ডিফাইন্ড ক্যাটেগরি দিয়ে সহজে খরচ ট্র্যাক করুন
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <span
                key={category}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <img
              src="images/screenshot-expense.jpg"
              alt="এক্সপেন্স ক্যাটেগরি"
              className="w-64 sm:w-72 phone-mockup"
            />
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <DownloadCTA />

      <Footer />
    </div>
  );
}
