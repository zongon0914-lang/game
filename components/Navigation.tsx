import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: '首頁', path: '/', icon: 'home' },
  { name: '遊戲介紹', path: '/intro', icon: 'stadia_controller' },
  { name: '關於我們', path: '/about', icon: 'groups' },
  { name: '最新消息', path: '/news', icon: 'auto_stories' },
  { name: '線上活動', path: '/events', icon: 'campaign' },
];

function Navigation(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const burgerLine = 'block h-0.5 w-6 bg-current rounded-full transition-all duration-300';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-surface/95 backdrop-blur-md border-b border-primary/20 shadow-sm py-2'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-6'
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_10px_rgba(249,115,22,0.5)] transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      <div className="container mx-auto px-6 flex justify-between items-center relative">
        <Link to="/" className="flex items-center gap-3 group z-50">
          <div className="w-10 h-10 bg-brown-dark text-white flex items-center justify-center font-display font-bold text-2xl clip-tech-btn group-hover:bg-primary transition-colors duration-300 shadow-md">
            <span className="material-symbols-outlined">public</span>
          </div>
          <div className="flex flex-col">
            <span
              className={`text-3xl font-display font-bold leading-none tracking-widest uppercase transition-colors ${
                isScrolled || isMobileMenuOpen ? 'text-stone-900' : 'text-white'
              }`}
            >
@@ -82,64 +88,121 @@ function Navigation(): React.ReactElement {
                    : 'text-white hover:text-primary'
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                  isActive(link.path) ? 'scale-x-100' : ''
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/download"
            className="relative bg-primary hover:bg-primary-hover text-white font-bold font-display tracking-widest uppercase text-lg py-2 px-6 transition-all duration-200 clip-tech-btn shadow-lg hover:shadow-primary/50 flex items-center gap-2 group"
          >
            <span>立即下載</span>
            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">download</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden z-50 p-2 rounded-full border transition-all duration-300 flex flex-col items-center justify-center gap-1.5 ${
            isScrolled || isMobileMenuOpen
              ? 'text-stone-800 border-stone-200 bg-white/80 backdrop-blur'
              : 'text-white border-white/40 hover:border-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`${burgerLine} ${
              isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''
            }`}
          ></span>
          <span
            className={`${burgerLine} ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`${burgerLine} ${
              isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-brown-950/80 via-surface/90 to-surface" aria-hidden></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.15),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(244,114,182,0.12),transparent_30%),radial-gradient(circle_at_40%_70%,rgba(59,130,246,0.1),transparent_30%)]" aria-hidden></div>

            <div className="relative h-full flex flex-col gap-8 pt-24 pb-16 px-6 overflow-y-auto">
              <div className="flex items-center justify-between text-white/80">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em]">Menu</p>
                  <p className="text-2xl font-display font-bold text-white">探索世外桃源</p>
                </div>
                <span className="material-symbols-outlined text-3xl animate-pulse">swipe_up</span>
              </div>

              <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-primary/10 p-6 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 border ${
                      isActive(link.path)
                        ? 'bg-primary/10 border-primary/40 text-primary'
                        : 'bg-white/70 border-stone-200 text-stone-800 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-2xl bg-primary/10 text-primary rounded-xl p-2">{link.icon}</span>
                      <div className="flex flex-col">
                        <span className="font-display text-xl font-bold tracking-[0.15em] uppercase">{link.name}</span>
                        <span className="text-sm text-stone-500">立即前往</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-2xl text-primary transition-transform duration-300 group-hover:translate-x-1">
                      trending_flat
                    </span>
                  </Link>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-[1.1fr_1fr]">
                <Link
                  to="/download"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-primary to-primary-hover text-white text-center font-display font-bold text-xl tracking-[0.15em] uppercase py-4 px-6 clip-tech-btn shadow-lg shadow-primary/30 flex items-center justify-center gap-3"
                >
                  <span className="material-symbols-outlined text-2xl">download</span>
                  立即下載遊戲
                </Link>
                <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-4 flex items-center gap-4 shadow-inner shadow-white/60">
                  <div className="bg-primary/10 text-primary rounded-xl p-3">
                    <span className="material-symbols-outlined text-2xl">sparkles</span>
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">專屬行動版體驗</p>
                    <p className="text-base font-semibold text-stone-800">邊探索邊收藏你的冒險日誌</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
export { Navigation };
