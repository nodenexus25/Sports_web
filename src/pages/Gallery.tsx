import { useState, useMemo, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import GalleryCard from '../components/GalleryCard';
import ImageLightbox from '../components/ImageLightbox';
import CtaSection from '../components/CtaSection';
import { GALLERY_IMAGES, GALLERY_CATEGORIES, type GalleryImage } from '../data/gallery';

function Gallery() {
  const [activeCat, setActiveCat] = useState<GalleryImage['category'] | 'all'>('all');
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const filtered = useMemo(
    () => (activeCat === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((g) => g.category === activeCat)),
    [activeCat]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: GALLERY_IMAGES.length };
    for (const g of GALLERY_IMAGES) {
      c[g.category] = (c[g.category] || 0) + 1;
    }
    return c;
  }, []);

  const handlePrev = () =>
    setOpenIndex((i) => (i <= 0 ? filtered.length - 1 : i - 1));
  const handleNext = () =>
    setOpenIndex((i) => (i >= filtered.length - 1 ? 0 : i + 1));

  useEffect(() => {
    setOpenIndex(-1);
  }, [activeCat]);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[65vh] md:min-h-[70vh] flex items-end md:items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=collage%20montage%20of%20leather%20sports%20ball%20manufacturing%20craftsmanship%20stitching%20tanning%20factory%20workers%20match%20action%20shots%20warm%20editorial%20mood%20cinematic&image_size=landscape_16_9"
            alt="Craftsmanship collage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950/85 via-charcoal-950/60 to-charcoal-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />
        </div>

        <div className="container-page relative pt-36 pb-20 md:pt-40 md:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="w-10 h-px bg-leather-400/80" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-leather-300">
                Gallery
              </span>
            </div>
            <h1 className="font-serif font-semibold text-cream-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] mb-5 tracking-tight text-balance">
              Inside the <span className="italic text-leather-300">craft.</span>
            </h1>
            <p className="text-base md:text-lg text-charcoal-200 leading-relaxed max-w-xl text-balance">
              A visual journey through our tannery, stitching workshop, quality process, and the matches our balls are made for.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="section-padding pb-16">
        <div className="container-page">
          <div className="mb-12 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <SectionHeader
              eyebrow="Visual Story"
              title={<>Moments of <span className="italic text-accent">craftsmanship.</span></>}
              description="Explore imagery from our tanneries, workshops, and match-day action. Click any image to view in full."
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {GALLERY_CATEGORIES.map((cat) => {
              const count = counts[cat.id] || 0;
              const isActive = activeCat === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCat(cat.id)}
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

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-charcoal-600">No images in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-4 md:gap-5">
              {filtered.map((image, i) => (
                <GalleryCard
                  key={image.id}
                  image={image}
                  onClick={() => setOpenIndex(i)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <ImageLightbox
        images={filtered}
        currentIndex={openIndex}
        isOpen={openIndex >= 0}
        onClose={() => setOpenIndex(-1)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <CtaSection
        eyebrow="Inspired?"
        title={
          <>
            Let&apos;s create something <span className="italic text-leather-300">iconic together.</span>
          </>
        }
        description="Have a product, brand, or collection in mind? Our design and engineering team can help you build it from concept to container."
        primaryText="Start a Conversation"
        secondaryText="Browse Products"
      />
    </div>
  );
}

export default Gallery;
