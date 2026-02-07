import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: 'index.html', label: 'হোম', labelEn: 'Home' },
  { href: 'features.html', label: 'সুবিধা', labelEn: 'Features' },
  { href: 'offline.html', label: 'অফলাইন', labelEn: 'Offline' },
  { href: 'privacy.html', label: 'গোপনীয়তা', labelEn: 'Privacy' },
  { href: 'download.html', label: 'ডাউনলোড', labelEn: 'Download' },
  { href: 'about.html', label: 'আমাদের সম্পর্কে', labelEn: 'About' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="index.html" className="flex items-center gap-2 lg:gap-3 group">
            <img
              src="images/logo.jpg"
              alt="হিসাব নিকাশ লোগো"
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-base lg:text-lg font-bold text-foreground leading-tight">
                হিসাব নিকাশ
              </span>
              <span className="text-[10px] lg:text-xs text-muted-foreground leading-tight">
                Hishab Nikash
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-lg hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="download.html">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Download className="w-4 h-4" />
                <span>ডাউনলোড করুন</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={isOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <>
            {/* Backdrop with blur */}
            <div 
              className="fixed inset-0 top-16 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Menu Panel */}
            <div className="lg:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-border shadow-2xl z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="px-4 py-6">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                      <span className="text-sm text-muted-foreground ml-2">
                        ({link.labelEn})
                      </span>
                    </a>
                  ))}
                  <div className="pt-4 mt-2 border-t border-border">
                    <a href="download.html" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 py-6">
                        <Download className="w-5 h-5" />
                        <span>ডাউনলোড করুন</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
