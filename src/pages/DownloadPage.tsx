import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Download,
  Check,
  Smartphone,
  Shield,
  AlertCircle,
  FileDown,
  Settings,
} from 'lucide-react';

const requirements = [
  'Android 6.0 (Marshmallow) বা উচ্চতর',
  '৫ MB ফ্রি স্টোরেজ',
  'কোনো বিশেষ অনুমতি লাগে না',
];

const installationSteps = [
  {
    step: 1,
    title: 'APK ডাউনলোড করুন',
    description:
      'নিচের বাটনে ক্লিক করে APK ফাইল ডাউনলোড করুন। ফাইল সাইজ: ~৫ MB',
  },
  {
    step: 2,
    title: 'Unknown Sources অনুমতি দিন',
    description:
      'Settings > Security > Unknown Sources এ গিয়ে অনুমতি দিন। (শুধু প্রথমবার)',
  },
  {
    step: 3,
    title: 'ইনস্টল করুন',
    description:
      'ডাউনলোড হওয়া APK ফাইলে ট্যাপ করুন ও Install বাটনে ক্লিক করুন।',
  },
  {
    step: 4,
    title: 'শুরু করুন',
    description:
      'ইনস্টলেশন শেষে Open বাটনে ক্লিক করে অ্যাপ ব্যবহার শুরু করুন!',
  },
];

const safetyPoints = [
  {
    icon: Shield,
    title: 'ভাইরাস মুক্ত',
    description: 'APK সম্পূর্ণ নিরাপদ ও ভাইরাস মুক্ত।',
  },
  {
    icon: Check,
    title: 'অফিসিয়াল রিলিজ',
    description: 'এটি Rubie Corp. এর অফিসিয়াল রিলিজ।',
  },
  {
    icon: Smartphone,
    title: 'কোনো ম্যালওয়ার নেই',
    description: 'কোনো স্পাইওয়্যার বা অ্যাডওয়্যার নেই।',
  },
];

export function DownloadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            হিসাব নিকাশ ডাউনলোড করুন
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            সম্পূর্ণ বিনামূল্যে, বিজ্ঞাপন মুক্ত, অফলাইন ফাইন্যান্স অ্যাপ
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-2">
            <a href="/hishab-nikash.apk" download>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 gap-2 px-8 py-6 text-base font-semibold shadow-xl"
              >
                <Download className="w-5 h-5" />
                <span>APK ডাউনলোড করুন</span>
              </Button>
            </a>
          </div>

          <p className="text-sm text-white/70 mt-4 animate-fade-in-up stagger-3">
            ভার্সন ৪.১.০ • ফাইল সাইজ: ৫ MB
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                সিস্টেম রিকোয়ারমেন্ট
              </h2>

              <ul className="space-y-4 mb-8">
                {requirements.map((req, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-amber-800 font-medium mb-1">
                      গুরুত্বপূর্ণ নোট
                    </p>
                    <p className="text-sm text-amber-700">
                      Google Play Store থেকে ইনস্টল না করায়, Chrome আপনাকে
                      সতর্ক করতে পারে। "Install anyway" বা "Details" এ ক্লিক করে
                      ইনস্টল করুন।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="images/screenshot-language.jpg"
                alt="হিসাব নিকাশ অ্যাপ"
                className="w-64 sm:w-72 phone-mockup"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              ইনস্টলেশন গাইড
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              চারটি সহজ ধাপে হিসাব নিকাশ ইনস্টল করুন
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationSteps.map((step, index) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-border text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.step}
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

      {/* Safety */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              নিরাপত্তা নিশ্চয়তা
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              আমাদের অ্যাপ সম্পূর্ণ নিরাপদ
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {safetyPoints.map((point, index) => (
              <div
                key={point.title}
                className="p-6 rounded-2xl bg-card border border-border text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            সমস্যা ও সমাধান
          </h2>

          <div className="space-y-4">
            {[
              {
                problem: '"App not installed" এরর দেখাচ্ছে',
                solution:
                  'পুরনো ভার্সন আনইনস্টল করে নতুন করে ইনস্টল করুন। বা Settings > Apps থেকে ক্যাশ ক্লিয়ার করুন।',
              },
              {
                problem: 'ডাউনলোড হচ্ছে না',
                solution:
                  'ইন্টারনেট সংযোগ চেক করুন। বা অন্য ব্রাউজার ব্যবহার করুন।',
              },
              {
                problem: 'ইনস্টল বাটনে ক্লিক করছে না',
                solution:
                  'Settings > Security > Unknown Sources অন করুন। তারপর আবার চেষ্টা করুন।',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Settings className="w-4 h-4 text-primary" />
                  {item.problem}
                </h3>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">সমাধান:</span>{' '}
                  {item.solution}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              আরও সাহায্য প্রয়োজন?{' '}
              <a
                href="mailto:afrainkabir3322@gmail.com"
                className="text-primary hover:underline"
              >
                যোগাযোগ করুন
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            এখনই ডাউনলোড করুন
          </h2>
          <p className="text-white/80 mb-8">
            সম্পূর্ণ বিনামূল্যে — কোনো লুকানো চার্জ নেই
          </p>

          <a href="/hishab-nikash.apk" download>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 gap-2 px-8 py-6 text-base font-semibold shadow-xl"
            >
              <FileDown className="w-5 h-5" />
              <span>APK ডাউনলোড করুন</span>
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
