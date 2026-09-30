import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleInquiry = () => {
    setMobileOpen(false);
    navigate('/contact');
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-premium ${
        scrolled
          ? 'backdrop-blur-nav bg-cream-50/85 border-b border-charcoal-100/70 shadow-[0_1px_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent opacity-100'
      }`}
    >
      <div className="container-page h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-charcoal-900 flex items-center justify-center text-cream-50 font-serif font-semibold text-base group-hover:bg-accent transition-colors duration-300">
            L
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif font-semibold text-charcoal-900 text-lg tracking-tight">
              LeatherCraft
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-charcoal-500 font-medium">
              Sports Mfg.
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-pill transition-all duration-300 ${
                  isActive
                    ? 'text-charcoal-900 bg-charcoal-900/5'
                    : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-900/[0.04]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button onClick={handleInquiry} className="btn-accent btn-sm">
            Request Inquiry
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="lg:hidden w-10 h-10 rounded-pill flex items-center justify-center text-charcoal-900 hover:bg-charcoal-900/5 transition-colors"
        >
          <div className="relative w-5 h-5">
            <span
              className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                mobileOpen ? 'top-2.5 rotate-45' : 'top-1.5'
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 w-5 h-0.5 bg-current transition-opacity duration-300 ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                mobileOpen ? 'top-2.5 -rotate-45' : 'top-3.5'
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-premium ${
          mobileOpen ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-page pb-6 pt-2 backdrop-blur-nav bg-cream-50/95 border-t border-charcoal-100/70">
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-charcoal-900 text-cream-50'
                      : 'text-charcoal-700 hover:bg-charcoal-900/5'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <button
              onClick={handleInquiry}
              className="mt-3 btn-accent w-full justify-center py-3.5"
            >
              Request Inquiry
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
