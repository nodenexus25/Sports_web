import { useNavigate } from 'react-router-dom';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const categoryLabels: Record<Product['category'], string> = {
  cricket: 'Cricket',
  soccer: 'Soccer',
  volleyball: 'Volleyball',
  basketball: 'Basketball',
  rugby: 'Rugby',
  training: 'Training',
};

function ProductCard({ product, featured = false }: ProductCardProps) {
  const navigate = useNavigate();

  const handleInquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/contact?product=${encodeURIComponent(product.name)}`);
  };

  return (
    <article
      className={`card card-hover group flex flex-col ${
        featured ? 'md:flex-row' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden bg-charcoal-50 ${
          featured ? 'md:w-5/12 aspect-[4/3] md:aspect-auto' : 'aspect-[4/3]'
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-700 ease-premium group-hover:scale-[1.06] group-hover:rotate-[0.5deg]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-pill bg-cream-50/95 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider text-charcoal-800 shadow-soft">
            {categoryLabels[product.category]}
          </span>
          {product.featured && (
            <span className="px-3 py-1 rounded-pill bg-accent text-white text-[10px] font-semibold uppercase tracking-wider shadow-soft">
              Featured
            </span>
          )}
        </div>
      </div>

      <div
        className={`flex flex-col flex-grow p-6 md:p-8 ${
          featured ? 'md:w-7/12' : ''
        }`}
      >
        <h3 className="heading-display text-xl md:text-2xl mb-3 text-charcoal-900 group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm md:text-[15px] text-charcoal-600 leading-relaxed mb-5 line-clamp-3">
          {product.description}
        </p>

        {product.specifications?.length > 0 && (
          <ul className="space-y-2 mb-6 flex-grow">
            {product.specifications.slice(0, featured ? 5 : 3).map((spec, i) => (
              <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-charcoal-600">
                <svg className="w-3.5 h-3.5 mt-0.5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: spec }} />
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={handleInquiry}
          className="self-start inline-flex items-center gap-2 text-sm font-semibold text-charcoal-900 hover:text-accent transition-colors duration-300 group/btn"
        >
          <span>Request Inquiry</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
