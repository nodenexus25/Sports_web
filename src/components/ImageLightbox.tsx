import { useEffect, useCallback } from 'react';
import type { GalleryImage } from '../data/gallery';

interface ImageLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: ImageLightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;
  const current = images[currentIndex];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery viewer"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-colors duration-200"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-4 md:left-8 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-colors duration-200"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-4 md:right-8 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-colors duration-200"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div
        className="relative max-w-6xl max-h-[88vh] w-[calc(100%-4rem)] md:w-[calc(100%-10rem)] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-deep bg-charcoal-900">
          <img
            src={current.image}
            alt={current.title}
            className="w-full max-h-[70vh] object-contain bg-charcoal-900"
          />
          <div className="px-6 md:px-8 py-5 bg-gradient-to-t from-charcoal-950 to-charcoal-900/90 border-t border-white/10">
            <div className="text-[10px] uppercase tracking-[0.22em] text-leather-400 font-semibold mb-1.5">
              {current.category}
            </div>
            <div className="font-serif text-lg md:text-2xl text-cream-50 font-medium leading-tight">
              {current.title}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5 gap-1.5">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/25'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageLightbox;
