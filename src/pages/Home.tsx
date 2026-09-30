import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import FeatureCard from '../components/FeatureCard';
import CtaSection from '../components/CtaSection';
import { PRODUCTS } from '../data/products';
import { COMPANY } from '../data/company';

const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 4);

const manufacturingCapabilities = [
  {
    eyebrow: 'Stitching',
    title: 'Hand & Machine Stitching',
    description:
      'Master artisans hand-stitch premium balls with consistent seam tension, backed by automated precision lines for high-volume orders.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    eyebrow: 'Leather',
    title: 'In-House Leather Tanning',
    description:
      'Alum-tanned, chrome-free leather production with strict consistency across hides — trusted match-day grade, batch after batch.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    eyebrow: 'Molding',
    title: 'Core &amp; Core Assembly',
    description:
      'Cork, latex, and butyl cores engineered for precise weight, bounce, and shape retention across temperature ranges.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    eyebrow: 'Quality',
    title: '22-Point QC Check',
    description:
      'Every ball undergoes circumference, weight, bounce, shape, stitch, and seam audits before dispatch — zero compromise.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const whyChooseUs = [
  {
    title: '60+ Years Heritage',
    description: 'Six decades of manufacturing heritage refined across three generations of craftsmen.',
  },
  {
    title: '35+ Export Countries',
    description: 'Balls trusted by leagues, clubs, and distributors across Europe, Africa, Middle East &amp; Americas.',
  },
  {
    title: 'Custom OEM / Private Label',
    description: 'Full custom branding, embossing, packaging, and spec engineering for your brand.',
  },
  {
    title: 'Consistent Batch Quality',
    description: 'Tannery to stitching in-house — zero variance, audit-ready documentation on every shipment.',
  },
  {
    title: 'Ethical &amp; Certified',
    description: 'Fair-wage workshop, REACH-compliant materials, and eco-friendly tanning processes.',
  },
  {
    title: 'Export-Ready Logistics',
    description: 'Door-to-port EXW, FOB, and CIF shipping with full export documentation support.',
  },
];

function StatStrip() {
  return (
    <section className="relative -mt-16 z-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="card bg-cream-50/95 backdrop-blur-md px-6 py-8 md:px-10 md:py-10 shadow-deep">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {COMPANY.stats.map((s) => (
            <div key={s.label} className="text-center md:border-r last:border-0 md:border-charcoal-200/80 md:px-4">
              <div className="font-serif font-semibold text-3xl md:text-4xl text-charcoal-900 mb-1 tracking-tight">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-charcoal-500 uppercase tracking-[0.18em] font-medium leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-end md:items-center">
        <div className="absolute inset-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cinematic%20premium%20leather%20cricket%20ball%20floating%20above%20dark%20charcoal%20texture%20background%20dramatic%20side%20lighting%20leather%20stitch%20detail%20ultra%20high%20resolution%20editorial%20sports%20product%20photography%20moody&image_size=landscape_16_9"
            alt="Premium leather cricket ball"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950/85 via-charcoal-950/65 to-charcoal-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/10 to-transparent md:block" />
        </div>

        <div className="container-page relative pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-cream-50/10 backdrop-blur-sm border border-cream-50/15 text-cream-50/90 text-xs uppercase tracking-[0.24em] font-semibold mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Est. {COMPANY.founded} — Export Grade Manufacturer
            </div>

            <h1 className="font-serif font-semibold text-cream-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-6 text-balance">
              Premium Leather Balls,{' '}
              <span className="italic text-leather-300">Crafted for the Game.</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-charcoal-200 leading-relaxed mb-10 max-w-xl text-balance">
              Six decades of craftsmanship behind every seam. Match-grade cricket balls, footballs, volleyballs &amp; sports goods — engineered for performance, built for consistency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                as="link"
                to="/products"
                variant="accent"
                size="lg"
                iconRight={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                }
              >
                Explore Products
              </Button>
              <Button
                as="link"
                to="/contact"
                variant="outline"
                size="lg"
                className="!border-cream-50/80 !text-cream-50 hover:!bg-cream-50 hover:!text-charcoal-900"
                iconRight={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                }
              >
                Request an Inquiry
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 max-w-lg gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-serif font-semibold text-cream-50">ISO</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-charcoal-400 font-medium">Certified Factory</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-serif font-semibold text-cream-50">REACH</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-charcoal-400 font-medium">Compliant Materials</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-serif font-semibold text-cream-50">OEM</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-charcoal-400 font-medium">Private Label</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-cream-50/60">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-cream-50/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-accent animate-[pulse_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      <StatStrip />

      {/* INTRO */}
      <section className="section-padding pb-16">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-xl2 overflow-hidden shadow-deep aspect-[4/5]">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=close%20up%20hands%20of%20senior%20artisan%20craftsman%20stitching%20a%20leather%20cricket%20ball%20needle%20and%20thread%20workshop%20bench%20warm%20golden%20lighting%20heritage%20craftsmanship%20editorial%20photography%20depth%20of%20field&image_size=portrait_4_3"
                  alt="Artisan hand stitching leather ball"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-2/3 rounded-xl2 overflow-hidden shadow-deep border-4 border-cream-50 aspect-[5/4] hidden md:block">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20leather%20hides%20laid%20out%20in%20tannery%20warm%20brown%20textures%20craftsmanship%20detail%20soft%20natural%20lighting%20heritage%20manufacturing&image_size=landscape_4_3"
                  alt="Premium leather hides"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 md:w-44 md:h-44 rounded-full bg-leather-100 -z-10" />
            </div>

            <div>
              <SectionHeader
                eyebrow="About the House"
                title={<>Heritage in every stitch, <span className="italic text-accent">performance</span> in every ball.</>}
                description={COMPANY.description}
              />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-charcoal-100/80">
                  <div className="w-10 h-10 rounded-lg bg-leather-50 text-leather-700 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-charcoal-900 mb-1">Match-Grade Leather</h4>
                    <p className="text-xs text-charcoal-600 leading-relaxed">Tanned in-house with 60+ years of recipes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-charcoal-100/80">
                  <div className="w-10 h-10 rounded-lg bg-leather-50 text-leather-700 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-charcoal-900 mb-1">Global Export</h4>
                    <p className="text-xs text-charcoal-600 leading-relaxed">Supplying to 35+ countries across continents.</p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-charcoal-900 hover:text-accent transition-colors"
              >
                Discover our craftsmanship story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section-padding bg-white/60">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeader
              eyebrow="Featured Collection"
              title={<>Engineered for <span className="italic text-accent">champions</span>.</>}
              description="Our most specified balls — trusted by clubs, leagues, and national distributors for match-day reliability."
            />
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-900 hover:text-accent transition-colors md:shrink-0"
            >
              View all products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {featuredProducts.slice(0, 2).map((p) => (
              <ProductCard key={p.id} product={p} featured />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 lg:mt-8">
            {featuredProducts.slice(2, 4).length > 0 ? (
              featuredProducts.slice(2, 4).map((p) => <ProductCard key={p.id} product={p} />)
            ) : (
              PRODUCTS.slice(4, 6).map((p) => <ProductCard key={p.id} product={p} />)
            )}
          </div>
        </div>
      </section>

      {/* MANUFACTURING CAPABILITIES */}
      <section className="section-padding">
        <div className="container-page">
          <div className="mb-14">
            <SectionHeader
              align="center"
              eyebrow="Manufacturing Capabilities"
              title={<>From raw hide to <span className="italic text-accent">match ball.</span></>}
              description="End-to-end in-house manufacturing with full quality traceability. Control every step — deliver every specification."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {manufacturingCapabilities.map((item, i) => (
              <FeatureCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY SECTION WITH MANUFACTURING IMAGE */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-charcoal-900 text-cream-50">
        <div className="absolute inset-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=wide%20shot%20sports%20ball%20manufacturing%20factory%20interior%20rows%20of%20workers%20craftsmen%20stitching%20leather%20balls%20at%20benches%20dramatic%20industrial%20lighting%20cinematic%20moody%20editorial%20heritage%20craftsmanship&image_size=landscape_16_9"
            alt="Manufacturing factory floor"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/85 to-charcoal-950/50" />
        </div>

        <div className="container-page relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 max-w-xl">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="w-10 h-px bg-leather-400/80" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-leather-300">
                  Quality Assurance
                </span>
              </div>
              <h2 className="font-serif font-semibold text-3xl md:text-5xl leading-[1.08] mb-6 text-balance">
                Zero-compromise quality,<br />
                <span className="italic text-leather-300">ball after ball.</span>
              </h2>
              <p className="text-base md:text-lg text-charcoal-200 leading-relaxed mb-10 text-balance">
                We don&apos;t manufacture in batches — we build them to a standard. Every ball is tested for circumference, weight, rebound, seam integrity, and shape retention. Our clients call it obsessive. We call it the baseline.
              </p>

              <ul className="space-y-4">
                {[
                  ['01', 'Incoming leather QC — thickness, tear, grain consistency'],
                  ['02', 'Core testing — compression, bounce & weight calibration'],
                  ['03', 'In-line stitch audit — tension, seam height & symmetry'],
                  ['04', 'Final 22-point check before boxing & export'],
                ].map(([num, text]) => (
                  <li key={num} className="flex items-start gap-5">
                    <span className="shrink-0 font-serif text-xl font-semibold text-leather-300 w-8">{num}</span>
                    <span className="text-sm md:text-base text-charcoal-200 leading-relaxed pt-1">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 relative hidden lg:block">
              <div className="absolute top-0 right-0 w-full aspect-[3/4] rounded-xl2 overflow-hidden shadow-deep border border-white/10">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=quality%20control%20inspector%20hands%20measuring%20cricket%20ball%20seam%20with%20digital%20gauge%20factory%20bench%20tools%20close%20up%20premium%20precision%20workshop%20warm%20lighting&image_size=portrait_4_3"
                  alt="Quality control inspection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding">
        <div className="container-page">
          <div className="mb-14">
            <SectionHeader
              align="center"
              eyebrow="Why LeatherCraft"
              title={<>Built by <span className="italic text-accent">craftsmen,</span><br className="hidden sm:block" /> chosen by serious brands.</>}
              description="Six reasons why distributors, leagues, and clubs around the world choose us as their long-term manufacturing partner."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={item.title}
                className="card card-hover p-7 md:p-8 group relative overflow-hidden"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="text-6xl font-serif font-semibold text-charcoal-100 leading-none mb-4 group-hover:text-leather-200 transition-colors duration-300 select-none">
                  0{i + 1}
                </div>
                <h3 className="heading-display text-xl md:text-2xl text-charcoal-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p
                  className="text-sm text-charcoal-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING / FACTORY IMAGE STRIP */}
      <section className="container-page pb-20 md:pb-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-xl2 overflow-hidden shadow-card border border-charcoal-100/80">
          {[
            {
              src: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=stacks%20of%20premium%20leather%20hides%20arranged%20neatly%20in%20tannery%20warehouse%20warm%20brown%20textures%20editorial%20manufacturing&image_size=square_hd',
              alt: 'Leather storage',
            },
            {
              src: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=artisan%20using%20leather%20cutting%20die%20to%20cut%20panels%20for%20sports%20balls%20workshop%20hands%20detail%20craftsmanship&image_size=square_hd',
              alt: 'Leather cutting',
            },
            {
              src: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=row%20of%20finished%20leather%20cricket%20balls%20drying%20on%20rack%20factory%20warm%20lighting%20consistency%20manufacturing&image_size=square_hd',
              alt: 'Balls on drying rack',
            },
            {
              src: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=custom%20branded%20leather%20balls%20in%20premium%20packaging%20box%20ready%20for%20export%20clean%20studio%20shot&image_size=square_hd',
              alt: 'Packaged for export',
            },
          ].map((m, i) => (
            <div key={i} className="relative aspect-square group overflow-hidden">
              <img
                src={m.src}
                alt={m.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </section>

      <CtaSection
        eyebrow="Let's Build Together"
        title={
          <>
            Ready to manufacture at <span className="italic text-leather-300">premium grade?</span>
          </>
        }
        description="Send us your ball specs, target volumes, and delivery timelines. Our export team will respond with a complete quotation and sample plan within 24 hours."
        primaryText="Request an Inquiry"
        secondaryText="See All Products"
      />
    </div>
  );
}

export default Home;
