import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DownloadCTA } from '@/components/sections/DownloadCTA';
import {
  WifiOff,
  Smartphone,
  Database,
  Shield,
  Battery,
  Globe,
  Check,
} from 'lucide-react';

const benefits = [
  {
    icon: WifiOff,
    title: 'ইন্টারনেট ছাড়াই কাজ করে',
    description:
      'ইন্টারনেট সংযোগ ছাড়াই সম্পূর্ণ ফাংশনাল। গ্রামে হোক বা শহরে, আপনার হিসাব সবসময় হাতের কাছে।',
  },
  {
    icon: Database,
    title: 'লোকাল স্টোরেজ',
    description:
      'সব ডেটা আপনার ফোনেই সংরক্ষিত থাকে। কোনো ক্লাউড স্টোরেজ প্রয়োজন নেই, কোনো সিঙ্ক করতে হয় না।',
  },
  {
    icon: Battery,
    title: 'ব্যাটারি সেভিং',
    description:
      'অফলাইন অ্যাপ ইন্টারনেট ব্যবহার করে না, তাই ব্যাটারি অনেক বেশি থাকে।',
  },
  {
    icon: Shield,
    title: 'সর্বোচ্চ নিরাপত্তা',
    description:
      'আপনার ডেটা কখনোই ইন্টারনেটে যায় না। হ্যাকিং বা ডেটা লিকের কোনো চান্স নেই।',
  },
];

const comparisonData = [
  {
    feature: 'ইন্টারনেট ছাড়া কাজ করে',
    hishabNikash: true,
    others: false,
  },
  {
    feature: 'ডেটা লোকালে সংরক্ষিত',
    hishabNikash: true,
    others: false,
  },
  {
    feature: 'অ্যাকাউন্ট তৈরি করতে হয় না',
    hishabNikash: true,
    others: false,
  },
  {
    feature: 'বিজ্ঞাপন মুক্ত',
    hishabNikash: true,
    others: false,
  },
  {
    feature: 'সম্পূর্ণ বিনামূল্যে',
    hishabNikash: true,
    others: 'আংশিক',
  },
];

const stats = [
  {
    value: '৬১%',
    label: 'বাংলাদেশী ইন্টারনেট ব্যবহারকারী',
    sublabel: 'ইন্টারনেট ব্যবহার করে (২০২৪)',
  },
  {
    value: '৪০%',
    label: 'মানুষ অফলাইনে আছে',
    sublabel: 'ইন্টারনেট সুবিধা নেই',
  },
  {
    value: '১০০%',
    label: 'হিসাব নিকাশ কাজ করে',
    sublabel: 'সবার জন্য, সব জায়গায়',
  },
];

export function OfflinePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <WifiOff className="w-4 h-4" />
                <span>অফলাইন ফার্স্ট</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                অফলাইন হিসাব অ্যাপ
                <span className="text-primary block mt-2">
                  ইন্টারনেট ছাড়াই কাজ করে
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                বাংলাদেশে ইন্টারনেট এখনো সব জায়গায় স্থিতিশীল নয়। হিসাব নিকাশ
                ডিজাইন করা হয়েছে এমনভাবে যে ইন্টারনেট ছাড়াই সম্পূর্ণ কাজ করে।
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent" />
                  <span>কোনো ইন্টারনেট লাগে না</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent" />
                  <span>কোনো অ্যাকাউন্ট লাগে না</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent" />
                  <span>সব ডেটা ফোনেই থাকে</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150" />
                <img
                  src="images/screenshot-language.jpg"
                  alt="হিসাব নিকাশ অফলাইন কাজ করে"
                  className="relative w-64 sm:w-72 lg:w-80 phone-mockup"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center text-white animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
                <div className="text-sm text-white/70">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              অফলাইন অ্যাপের সুবিধা
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              কেন অফলাইন অ্যাপ বেছে নেবেন — জেনে নিন সব কারণ
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              তুলনা করুন
            </h2>
            <p className="text-base text-muted-foreground">
              হিসাব নিকাশ vs অন্যান্য অ্যাপ
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 bg-slate-100 font-semibold text-sm">
              <div>ফিচার</div>
              <div className="text-center text-primary">হিসাব নিকাশ</div>
              <div className="text-center text-muted-foreground">অন্যান্য</div>
            </div>
            {comparisonData.map((item, index) => (
              <div
                key={item.feature}
                className="grid grid-cols-3 gap-4 p-4 border-t border-border items-center animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-sm text-foreground">{item.feature}</div>
                <div className="text-center">
                  {item.hishabNikash === true ? (
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent/20">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                  ) : (
                    <span className="text-sm text-foreground">
                      {item.hishabNikash}
                    </span>
                  )}
                </div>
                <div className="text-center">
                  {item.others === true ? (
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent/20">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                  ) : item.others === false ? (
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-destructive/20">
                      <span className="text-destructive text-lg">×</span>
                    </div>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      {item.others}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              কীভাবে কাজ করে
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              লোকাল ফার্স্ট আর্কিটেকচার — সহজ ও নিরাপদ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'আপনার ফোনে ইনস্টল করুন',
                description:
                  'APK ডাউনলোড করে সহজেই ইনস্টল করুন। কোনো অ্যাকাউন্ট তৈরি করতে হয় না।',
              },
              {
                icon: Database,
                title: 'ডেটা লোকালে সংরক্ষিত হয়',
                description:
                  'সব তথ্য আপনার ফোনের ডাটাবেসে সংরক্ষিত থাকে। কোনো সার্ভারে যায় না।',
              },
              {
                icon: Globe,
                title: 'ইন্টারনেট ছাড়াই ব্যবহার করুন',
                description:
                  'যেকোনো সময়, যেকোনো জায়গায় — ইন্টারনেট ছাড়াই সম্পূর্ণ ফাংশনাল।',
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <DownloadCTA />

      <Footer />
    </div>
  );
}
