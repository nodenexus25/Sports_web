import { Link } from 'react-router-dom';
import { COMPANY } from '../data/company';

const productCols = [
  { label: 'Cricket Balls', to: '/products?cat=cricket' },
  { label: 'Soccer / Footballs', to: '/products?cat=soccer' },
  { label: 'Volleyballs', to: '/products?cat=volleyball' },
  { label: 'Basketballs', to: '/products?cat=basketball' },
];

const companyCols = [
  { label: 'About Us', to: '/about' },
  { label: 'All Products', to: '/products' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-300 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-leather-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 py-20 lg:py-24">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-cream-50 text-charcoal-900 flex items-center justify-center font-serif font-semibold text-lg">
                L
              </div>
              <div>
                <div className="font-serif font-semibold text-cream-50 text-xl tracking-tight">
                  LeatherCraft Sports
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-charcoal-500 font-medium">
                  Est. {COMPANY.founded}
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-charcoal-400 max-w-md mb-8">
              {COMPANY.description}
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-leather-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
                </svg>
                <div>
                  <div className="text-cream-50/90">{COMPANY.contact.phone}</div>
                  <div className="text-charcoal-500 text-xs">WhatsApp: {COMPANY.contact.whatsapp}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-leather-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{COMPANY.contact.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-leather-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  {COMPANY.address.line1}, {COMPANY.address.line2},<br />
                  {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.pin}, {COMPANY.address.country}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-cream-50 font-semibold text-sm uppercase tracking-[0.18em] mb-6">
              Products
            </h4>
            <ul className="space-y-3">
              {productCols.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-charcoal-400 hover:text-leather-300 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-charcoal-700 group-hover:bg-leather-400 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream-50 font-semibold text-sm uppercase tracking-[0.18em] mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyCols.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-charcoal-400 hover:text-leather-300 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-charcoal-700 group-hover:bg-leather-400 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h5 className="text-cream-50 font-semibold text-xs uppercase tracking-[0.18em] mb-4">
                Follow Us
              </h5>
              <div className="flex gap-2">
                {['IG', 'FB', 'IN', 'YT'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-9 h-9 rounded-pill bg-charcoal-800 hover:bg-accent text-charcoal-300 hover:text-cream-50 text-xs font-semibold flex items-center justify-center transition-all duration-300"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4 py-8">
          <p className="text-xs text-charcoal-500">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Crafted with precision in India.
          </p>
          <div className="flex gap-6 text-xs text-charcoal-500">
            <a href="#" className="hover:text-charcoal-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-charcoal-300 transition-colors">Terms of Trade</a>
            <a href="#" className="hover:text-charcoal-300 transition-colors">Quality Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
