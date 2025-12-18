import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: '首頁', path: '/' },
  { name: '遊戲介紹', path: '/intro', hint: '世界觀與核心玩法' },
  { name: '關於我們', path: '/about', hint: '團隊與故事' },
  { name: '最新消息', path: '/news', hint: '更新與公告' },
  { name: '線上活動', path: '/events', hint: '即時精彩活動' },
];

function Navigation(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation();

  const isActive = useMemo(() => (path: string) => location.pathname === path, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    toggleButtonRef.current?.focus();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-surface/95 backdrop-blur-md border-b border-primary/20 shadow-sm py-2'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-6'
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_10px_rgba(24,115,22,0.5)] transition-opacity duration-300 ${
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
              世外桃源
            </span>
            <span
              className={`text-[0.6rem] font-bold tracking-[0.2em] uppercase transition-colors ${
                isScrolled || isMobileMenuOpen ? 'text-stone-500' : 'text-white/70'
              }`}
            >
              Paradise Beyond
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="主要導覽">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-base font-display tracking-[0.2em] uppercase transition-colors duration-200 pb-2 group ${
                isActive(link.path)
                  ? 'text-primary'
                  : isScrolled
                    ? 'text-stone-700 hover:text-primary'
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
          ref={toggleButtonRef}
          className={`lg:hidden z-50 relative h-12 w-12 rounded-full border border-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-200 ${
            isScrolled || isMobileMenuOpen
              ? 'bg-white text-stone-900 shadow-md hover:shadow-lg'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="切換選單"
        >
          <span className="sr-only">切換導覽</span>
          <span
            aria-hidden
            className={`absolute block h-[2px] w-6 rounded-full bg-current transition-transform duration-300 ease-out ${
              isMobileMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
            }`}
          />
          <span
            aria-hidden
            className={`absolute block h-[2px] w-6 rounded-full bg-current transition-opacity duration-300 ease-out ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            aria-hidden
            className={`absolute block h-[2px] w-6 rounded-full bg-current transition-transform duration-300 ease-out ${
              isMobileMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-[45] transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/70 via-stone-900/70 to-primary/40 backdrop-blur-md"
            onClick={closeMenu}
          ></div>
        </div>

        <nav
          id="mobile-menu"
          aria-label="行動版導覽"
          // 修改重點 1：將 z-[50] 改為 z-[100]，確保選單浮在最上層
          // 修改重點 2：背景改為 bg-stone-900 (或 bg-black)，移除原本的 bg-gradient... 與 backdrop-blur
          className={`lg:hidden fixed top-0 left-0 z-[100] h-full w-[85%] max-w-sm bg-stone-900 shadow-2xl border-r border-primary/40 py-24 px-7 flex flex-col gap-8 transition-transform duration-300 ease-out text-white ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                // 修改重點 3 (建議)：調整按鈕背景色，讓未選中的項目也有淡淡的底色，增加對比度
                className={`block rounded-xl p-4 transition-all duration-200 border border-transparent hover:border-primary/60 hover:shadow-primary/20 hover:shadow-lg ${
                  isActive(link.path)
                    ? 'bg-primary/20 border-primary/60 shadow-lg shadow-primary/30'
                    : 'bg-white/5' // 為未選中的項目增加 5% 白色的背景，讓文字更突出
                }`}
              >
                <div className="flex items-center justify-between text-white">
                  <span className="text-xl font-display font-bold tracking-[0.18em] uppercase drop-shadow">{link.name}</span>
                  <span className="material-symbols-outlined text-primary">trending_flat</span>
                </div>
                {link.hint && <p className="mt-2 text-sm text-stone-400 leading-relaxed">{link.hint}</p>}
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-3">
            <Link
              to="/download"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-2xl bg-primary text-white px-5 py-4 font-display font-bold tracking-[0.2em] uppercase shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-200"
            >
              <span>立即下載</span>
              <span className="material-symbols-outlined">download</span>
            </Link>
            <button
              onClick={closeMenu}
              className="w-full text-center text-sm text-stone-500 hover:text-stone-300 transition-colors"
            >
              以 ESC 關閉選單
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
export { Navigation };
