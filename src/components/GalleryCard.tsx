import type { GalleryImage } from '../data/gallery';

interface GalleryCardProps {
  image: GalleryImage;
  onClick: () => void;
}

const sizeMap = {
  sm: 'row-span-1',
  md: 'row-span-1 md:row-span-1',
  lg: 'row-span-1 md:row-span-2',
  xl: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2',
};

function GalleryCard({ image, onClick }: GalleryCardProps) {
  const sizeClass = sizeMap[image.size ?? 'md'];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative group overflow-hidden rounded-xl2 bg-charcoal-100 w-full aspect-[4/3] md:aspect-auto ${sizeClass} focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 text-left`}
    >
      <img
        src={image.image}
        alt={image.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-premium group-hover:scale-[1.08]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-premium">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-leather-300 font-semibold mb-1">
              {image.category}
            </div>
            <div className="text-cream-50 font-serif text-base md:text-lg leading-tight font-medium">
              {image.title}
            </div>
          </div>
          <div className="w-10 h-10 shrink-0 rounded-full bg-cream-50/15 backdrop-blur-md border border-cream-50/20 flex items-center justify-center text-cream-50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}

export default GalleryCard;
