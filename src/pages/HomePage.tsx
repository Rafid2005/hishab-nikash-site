import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DownloadCTA } from '@/components/sections/DownloadCTA';
import { Button } from '@/components/ui/button';
import {
  Wallet,
  TrendingUp,
  Users,
  Target,
  WifiOff,
  Shield,
  ArrowRight,
  Star,
} from 'lucide-react';

const features = [
  {
    icon: Wallet,
    title: 'মাল্টি-ওয়ালেট',
    description: 'ক্যাশ, বিকাশ, নগদ — সব একসাথে ম্যানেজ করুন',
  },
  {
    icon: Users,
    title: 'বাকির খাতা',
    description: 'কে কত টাকা ধার নিয়েছে, সব হিসাব রাখুন',
  },
  {
    icon: Target,
    title: 'সেভিংস গোল',
    description: 'আপনার লক্ষ্য ঠিক করুন ও সেভিংস ট্র্যাক করুন',
  },
  {
    icon: TrendingUp,
    title: 'স্মার্ট অ্যানালিটিক্স',
    description: 'খরচের প্যাটার্ন বুঝুন ও সঠিক সিদ্ধান্ত নিন',
  },
];

const benefits = [
  {
    icon: WifiOff,
    title: 'অফলাইনে কাজ করে',
    description: 'ইন্টারনেট ছাড়াই সম্পূর্ণ ফাংশনাল। যেকোনো সময়, যেকোনো জায়গায়।',
  },
  {
    icon: Shield,
    title: '১০০% নিরাপদ',
    description: 'আপনার ডেটা শুধুমাত্র আপনার ফোনেই থাকে। কোনো সার্ভারে যায় না।',
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in-up">
                <Star className="w-4 h-4" />
                <span>বাংলাদেশের #1 অফলাইন ফাইন্যান্স অ্যাপ</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up stagger-1">
                হিসাব নিকাশ —
                <span className="text-primary block mt-2">
                  আপনার টাকার পূর্ণ নিয়ন্ত্রণ
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up stagger-2">
                খরচ ট্র্যাক করুন, বাকির খাতা রাখুন, সেভিংস গোল অর্জন করুন —
                সম্পূর্ণ অফলাইনে ও সম্পূর্ণ বিনামূল্যে।
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up stagger-3">
                <a href="download.html">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8"
                  >
                    <span>ডাউনলোড করুন</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="features.html">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 px-8"
                  >
                    <span>সুবিধা দেখুন</span>
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-8 mt-10 animate-fade-in-up stagger-4">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">
                    ১০০%
                  </div>
                  <div className="text-sm text-muted-foreground">ফ্রি</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">
                    ০%
                  </div>
                  <div className="text-sm text-muted-foreground">অফলাইন</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">
                    ১০০%
                  </div>
                  <div className="text-sm text-muted-foreground">নিরাপদ</div>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
              <div className="phone-glow">
                <img
                  src="images/screenshot-dashboard.jpg"
                  alt="হিসাব নিকাশ অ্যাপের ড্যাশবোর্ড"
                  className="relative w-64 sm:w-72 lg:w-80 phone-mockup"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              আপনার টাকা ম্যানেজমেন্টের সব সুবিধা
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              হিসাব নিকাশে পাবেন সব কিছু যা আপনার টাকার হিসাব রাখতে প্রয়োজন
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <a
                key={feature.title}
                href="features.html"
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Offline Benefits */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                কেন অফলাইন অ্যাপ বেছে নেবেন?
              </h2>
              <p className="text-base text-muted-foreground mb-8">
                বাংলাদেশে ইন্টারনেট এখনো সব জায়গায় স্থিতিশীল নয়। হিসাব নিকাশ
                ইন্টারনেট ছাড়াই কাজ করে, তাই আপনার হিসাব কখনোই বন্ধ থাকে না।
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a href="offline.html">
                  <Button variant="outline" className="gap-2">
                    <span>আরও জানুন</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="images/screenshot-expense.jpg"
                alt="হিসাব নিকাশ অফলাইন কাজ করে"
                className="w-64 sm:w-72 lg:w-80 phone-mockup"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center">
              <img
                src="images/screenshot-due-manager.jpg"
                alt="হিসাব নিকাশ বাকির খাতা"
                className="w-64 sm:w-72 lg:w-80 phone-mockup"
              />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                আপনার ডেটা, আপনার নিয়ন্ত্রণে
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                হিসাব নিকাশে আপনার সমস্ত আর্থিক তথ্য শুধুমাত্র আপনার ডিভাইসেই
                সংরক্ষিত থাকে। আমরা কোনো ডেটা সার্ভারে পাঠাই না, কোনো তৃতীয়
                পক্ষের সাথে শেয়ার করি না।
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'কোনো ইন্টারনেট সংযোগ প্রয়োজন নয়',
                  'কোনো অ্যাকাউন্ট তৈরি করতে হয় না',
                  'কোনো ডেটা ক্লাউডে যায় না',
                  'কোনো বিজ্ঞাপন নেই',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-foreground animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-3 h-3 text-accent" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="privacy.html">
                <Button variant="outline" className="gap-2">
                  <span>গোপনীয়তা নীতি দেখুন</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <DownloadCTA />

      <Footer />
    </div>
  );
}
