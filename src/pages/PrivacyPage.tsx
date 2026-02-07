import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DownloadCTA } from '@/components/sections/DownloadCTA';
import {
  Shield,
  Lock,
  Eye,
  Server,
  UserX,
  FileCheck,
  Check,
} from 'lucide-react';

const privacyFeatures = [
  {
    icon: Lock,
    title: 'লোকাল ডেটা স্টোরেজ',
    description:
      'আপনার সমস্ত আর্থিক তথ্য শুধুমাত্র আপনার ডিভাইসেই সংরক্ষিত থাকে। কোনো রিমোট সার্ভারে পাঠানো হয় না।',
  },
  {
    icon: UserX,
    title: 'নো অ্যাকাউন্ট রিকোয়ার্ড',
    description:
      'কোনো ইমেইল, ফোন নম্বর বা পাসওয়ার্ড দিতে হয় না। কোনো ব্যক্তিগত তথ্য সংগ্রহ করা হয় না।',
  },
  {
    icon: Eye,
    title: 'নো থার্ড-পার্টি শেয়ারিং',
    description:
      'আপনার ডেটা কোনো তৃতীয় পক্ষের সাথে শেয়ার করা হয় না। কোনো বিশ্লেষণ বা ট্র্যাকিং নেই।',
  },
  {
    icon: Server,
    title: 'নো ক্লাউড সিঙ্ক',
    description:
      'কোনো ক্লাউড সিঙ্ক বা ব্যাকআপ নেই। আপনার ডেটা পুরোপুরি আপনার নিয়ন্ত্রণে।',
  },
];

const dataPractices = [
  {
    title: 'আমরা কী সংগ্রহ করি না',
    items: [
      'ইমেইল ঠিকানা',
      'ফোন নম্বর',
      'নাম বা ঠিকানা',
      'ডিভাইস আইডি',
      'লোকেশন ডেটা',
      'ব্রাউজিং হিস্টরি',
    ],
  },
  {
    title: 'আমরা কী সংগ্রহ করি',
    items: [
      'ট্রানজাকশন ডেটা (শুধু আপনার ফোনে)',
      'ওয়ালেট ব্যালেন্স (শুধু আপনার ফোনে)',
      'সেভিংস গোল (শুধু আপনার ফোনে)',
      'বাকির খাতা (শুধু আপনার ফোনে)',
    ],
  },
];

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>প্রাইভেসি ফার্স্ট</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            আপনার ডেটা শুধুমাত্র 
            <span className="text-primary block mt-2">
              আপনার ডিভাইসেই থাকে
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
            হিসাব নিকাশে আপনার আর্থিক তথ্য সম্পূর্ণ নিরাপদ। কোনো সার্ভারে যায়
            না, কোনো তৃতীয় পক্ষের সাথে শেয়ার করা হয় না।
          </p>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {privacyFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Practices */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              আমাদের ডেটা অনুশীলন
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              স্বচ্ছতা আমাদের প্রতিশ্রুতি
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataPractices.map((section, index) => (
              <div
                key={section.title}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          index === 0
                            ? 'bg-destructive/20'
                            : 'bg-accent/20'
                        }`}
                      >
                        {index === 0 ? (
                          <span className="text-destructive text-sm">×</span>
                        ) : (
                          <Check className="w-3 h-3 text-accent" />
                        )}
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                নিরাপত্তা কীভাবে কাজ করে
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'লোকাল ডাটাবেস',
                    description:
                      'সব ডেটা SQLite ডাটাবেসে এনক্রিপ্টেড থাকে, শুধু আপনার অ্যাপেই অ্যাক্সেসযোগ্য।',
                  },
                  {
                    title: 'নো নেটওয়ার্ক কল',
                    description:
                      'অ্যাপে কোনো নেটওয়ার্ক কল নেই। ইন্টারনেট সংযোগ থাকলেও কিছু পাঠানো হয় না।',
                  },
                  {
                    title: 'ডিভাইস লেভেল সিকিউরিটি',
                    description:
                      'আপনার ফোনের সিকিউরিটি (PIN, ফেস লক, ফিঙ্গারপ্রিন্ট) অ্যাপকে সুরক্ষিত রাখে।',
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="images/screenshot-dashboard.jpg"
                alt="নিরাপদ ড্যাশবোর্ড"
                className="w-64 sm:w-72 lg:w-80 phone-mockup"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section id="terms" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            শর্তাবলী
          </h2>

          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-border space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                অ্যাপ ব্যবহার
              </h3>
              <p className="text-sm text-muted-foreground">
                হিসাব নিকাশ অ্যাপ সম্পূর্ণ বিনামূল্যে ব্যবহার করা যাবে। অ্যাপটি
                ব্যবহার করে আপনি এই শর্তাবলী মেনে নিচ্ছেন বলে গণ্য হবে।
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                ডেটা দায়িত্ব
              </h3>
              <p className="text-sm text-muted-foreground">
                আপনার ডেটা আপনার ডিভাইসে সংরক্ষিত থাকে। ডিভাইস হারিয়ে গেলে বা
                ডেটা মুছে গেলে তার দায়িত্ব ব্যবহারকারীর। নিয়মিত ব্যাকআপ নেওয়ার
                পরামর্শ দেওয়া হয়।
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                পরিবর্তনের অধিকার
              </h3>
              <p className="text-sm text-muted-foreground">
                আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন করতে পারি। পরিবর্তন হলে
                অ্যাপে নোটিফিকেশন দেওয়া হবে।
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                যোগাযোগ
              </h3>
              <p className="text-sm text-muted-foreground">
                যেকোনো প্রশ্নের জন্য{' '}
                <a
                  href="mailto:afrainkabir3322@gmail.com"
                  className="text-primary hover:underline"
                >
                  afrainkabir3322@gmail.com
                </a>{' '}
                এ যোগাযোগ করুন।
              </p>
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
