import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
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

  const navLinks = [
    { name: '首頁', path: '/' },
    { name: '遊戲介紹', path: '/intro' },
    { name: '關於我們', path: '/about' },
    { name: '最新消息', path: '/news' },
    { name: '線上活動', path: '/events' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-surface/95 backdrop-blur-md border-b border-primary/20 shadow-sm py-2' 
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-6'
      }`}
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_10px_rgba(249,115,22,0.5)] transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        <Link to="/" className="flex items-center gap-3 group z-50">
          <div className="w-10 h-10 bg-brown-dark text-white flex items-center justify-center font-display font-bold text-2xl clip-tech-btn group-hover:bg-primary transition-colors duration-300 shadow-md">
            <span className="material-symbols-outlined">public</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-3xl font-display font-bold leading-none tracking-widest uppercase transition-colors ${isScrolled || isMobileMenuOpen ? 'text-stone-900' : 'text-white'}`}>世外桃源</span>
            <span className={`text-[0.6rem] font-bold tracking-[0.2em] uppercase transition-colors ${isScrolled || isMobileMenuOpen ? 'text-stone-500' : 'text-white/70'}`}>Paradise Beyond</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
@@ -59,51 +66,53 @@ const Navigation: React.FC = () => {
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${isActive(link.path) ? 'scale-x-100' : ''}`}></span>
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
          className={`lg:hidden z-50 p-2 ${isScrolled || isMobileMenuOpen ? 'text-stone-800' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 flex flex-col min-h-screen bg-surface pt-24 pb-28 px-6 overflow-y-auto lg:hidden">
            <div className="flex-1 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-2xl font-display font-bold text-stone-800 py-4 border-b border-stone-200 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              to="/download"
              className="mt-6 w-full bg-primary text-white text-center font-bold py-4 clip-tech-btn shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              下載遊戲
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
