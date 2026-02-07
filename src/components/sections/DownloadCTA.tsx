import { Download, Shield, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DownloadCTA() {
  return (
    <section className="py-16 lg:py-24 gradient-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 animate-fade-in-up">
          আজই ডাউনলোড করুন হিসাব নিকাশ
        </h2>
        <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-1">
          সম্পূর্ণ বিনামূল্যে। কোনো বিজ্ঞাপন নয়। আপনার ডেটা শুধুমাত্র আপনার ডিভাইসে।
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up stagger-2">
          <a href="download.html">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 gap-2 px-8 py-6 text-base font-semibold shadow-xl"
            >
              <Download className="w-5 h-5" />
              <span>APK ডাউনলোড করুন</span>
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70 animate-fade-in-up stagger-3">
          <div className="flex items-center gap-2">
            <WifiOff className="w-4 h-4" />
            <span>অফলাইন কাজ করে</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>১০০% নিরাপদ</span>
          </div>
        </div>
      </div>
    </section>
  );
}
