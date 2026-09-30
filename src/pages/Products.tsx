import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import CtaSection from '../components/CtaSection';
import { PRODUCTS, CATEGORIES, type Product } from '../data/products';

function Products() {
  const [params, setParams] = useSearchParams();
  const initialCat = (params.get('cat') as Product['category']) || 'all';
  const [activeCategory, setActiveCategory] = useState<string>(initialCat);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    if (activeCategory === 'all') {
      params.delete('cat');
    } else {
      params.set('cat', activeCategory);
    }
    setParams(params, { replace: true });
  }, [activeCategory, params, setParams]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PRODUCTS.length };
    for (const p of PRODUCTS) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCat = activeCategory === 'all' || p.category === activeCategory;
      if (!matchesCat) return false;
      if (!query.trim()) return true;
      const q = query.toLowerCase().trim();
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [activeCategory, query]);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[65vh] md:min-h-[75vh] flex items-end md:items-center">
        <div className="absolute inset-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=elegant%20flat%20lay%20of%20premium%20leather%20sports%20balls%20cricket%20soccer%20volleyball%20basketball%20rugby%20on%20dark%20charcoal%20stone%20surface%20dramatic%20side%20lighting%20editorial%20product%20photography%20wide%20shot&image_size=landscape_16_9"
            alt="Collection of premium leather sports balls"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/70 to-charcoal-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />
        </div>

        <div className="container-page relative pt-36 pb-20 md:pt-40 md:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="w-10 h-px bg-leather-400/80" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-leather-300">
                Product Catalog
              </span>
            </div>
            <h1 className="font-serif font-semibold text-cream-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] mb-5 tracking-tight text-balance">
              Engineered to <span className="italic text-leather-300">perform.</span>
            </h1>
            <p className="text-base md:text-lg text-charcoal-200 leading-relaxed max-w-xl text-balance">
              A complete catalog of leather balls and sports equipment — every product available for OEM, private label, and bulk export.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="section-padding">
        <div className="container-page">
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <SectionHeader
              eyebrow={
                activeCategory === 'all'
                  ? `All Categories — ${PRODUCTS.length} products`
                  : `${CATEGORIES.find((c) => c.id === activeCategory)?.label}`
              }
              title={<>Leather ball <span className="italic text-accent">collection.</span></>}
              description="Browse our full catalog. Click 'Request Inquiry' on any product to start the conversation with our export team."
            />

            <div className="w-full md:w-auto md:min-w-[320px]">
              <div className="relative">
                <svg className="w-4.5 h-4.5 absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  placeholder="Search products…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-pill bg-white border border-charcoal-200 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-pill text-sm font-medium transition-all duration-300 ease-premium border ${
                    isActive
                      ? 'bg-charcoal-900 text-cream-50 border-charcoal-900 shadow-soft'
                      : 'bg-white text-charcoal-700 border-charcoal-200 hover:border-charcoal-300 hover:bg-charcoal-50'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-pill text-[11px] font-semibold ${
                      isActive ? 'bg-white/15 text-cream-50' : 'bg-charcoal-100 text-charcoal-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 rounded-xl2 border border-charcoal-200 bg-white">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-charcoal-100 text-charcoal-400 flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-display text-2xl text-charcoal-900 mb-2">No products found</h3>
              <p className="text-charcoal-600 mb-6">Try a different category or search term.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setQuery('');
                }}
                className="btn-accent btn-sm"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaSection
        eyebrow="Custom & OEM"
        title={
          <>
            Don&apos;t see <span className="italic text-leather-300">your spec?</span>
          </>
        }
        description="We engineer custom balls from leather grade to stitch pattern, weight, bounce, branding, and packaging. Share your design brief — we&apos;ll deliver a prototype in 5–7 days."
        primaryText="Request Custom Quote"
        secondaryText="Back to All Products"
        secondaryTo="/products"
      />
    </div>
  );
}

export default Products;
