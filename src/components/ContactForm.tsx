import { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  product: '',
  quantity: '',
  message: '',
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required';
  else if (data.fullName.trim().length < 2) errors.fullName = 'Enter at least 2 characters';

  if (!data.companyName.trim()) errors.companyName = 'Company name is required';

  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = 'Enter a valid email';

  if (!data.phone.trim()) errors.phone = 'Phone / WhatsApp is required';
  else if (data.phone.trim().replace(/[\s\-+()]/g, '').length < 7)
    errors.phone = 'Enter a valid phone number';

  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10) errors.message = 'Describe your requirement in at least 10 characters';

  return errors;
}

interface ContactFormProps {
  preselectedProduct?: string;
}

function ContactForm({ preselectedProduct = '' }: ContactFormProps) {
  const [data, setData] = useState<FormData>({ ...initialData, product: preselectedProduct });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const productOptions = useMemo(
    () => PRODUCTS.map((p) => ({ id: p.id, name: p.name })),
    []
  );

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstField = document.querySelector<HTMLElement>(`[data-field="${Object.keys(found)[0]}"]`);
      firstField?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstField?.focus?.();
      return;
    }
    setStatus('submitting');
    try {
      await new Promise((res) => setTimeout(res, 1400));
      setStatus('success');
      setData({ ...initialData });
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: keyof FormData) =>
    `input-field ${errors[field] ? 'border-red-400 focus:ring-red-400/40 focus:border-red-400' : ''}`;

  return (
    <div className="card p-6 md:p-10 lg:p-12 bg-white/90 backdrop-blur-sm">
      <div className="mb-8">
        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent mb-3">
          Business Inquiry
        </div>
        <h3 className="heading-display text-2xl md:text-3xl text-charcoal-900 mb-2">
          Send us your requirement
        </h3>
        <p className="text-sm md:text-base text-charcoal-600">
          Fill in the details below and our export team will respond within 24 hours.
        </p>
      </div>

      {status === 'success' && (
        <div
          role="status"
          className="mb-7 rounded-xl2 border border-emerald-200 bg-emerald-50 p-5 animate-fade-in-up"
        >
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-emerald-800 mb-0.5">
                Inquiry submitted successfully
              </div>
              <div className="text-sm text-emerald-700 leading-relaxed">
                Thank you for reaching out. A member of our sales team will contact you within 24 business hours.
              </div>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-3 text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline underline-offset-4"
              >
                Send another inquiry
              </button>
            </div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          className="mb-7 rounded-xl2 border border-red-200 bg-red-50 p-5 animate-fade-in-up"
        >
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-red-800 mb-0.5">
                Something went wrong
              </div>
              <div className="text-sm text-red-700 leading-relaxed">
                We couldn&apos;t send your inquiry. Please try again or call us directly.
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5" data-status={status}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div data-field="fullName">
            <label className="label-field" htmlFor="fullName">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              value={data.fullName}
              onChange={(e) => update('fullName', e.target.value)}
              className={inputClass('fullName')}
              placeholder="John Smith"
              disabled={status === 'submitting'}
            />
            {errors.fullName && <p className="text-xs text-red-600 mt-1.5">{errors.fullName}</p>}
          </div>

          <div data-field="companyName">
            <label className="label-field" htmlFor="companyName">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              type="text"
              autoComplete="organization"
              value={data.companyName}
              onChange={(e) => update('companyName', e.target.value)}
              className={inputClass('companyName')}
              placeholder="Sports International Ltd."
              disabled={status === 'submitting'}
            />
            {errors.companyName && <p className="text-xs text-red-600 mt-1.5">{errors.companyName}</p>}
          </div>

          <div data-field="email">
            <label className="label-field" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={data.email}
              onChange={(e) => update('email', e.target.value)}
              className={inputClass('email')}
              placeholder="john@company.com"
              disabled={status === 'submitting'}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>}
          </div>

          <div data-field="phone">
            <label className="label-field" htmlFor="phone">
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={data.phone}
              onChange={(e) => update('phone', e.target.value)}
              className={inputClass('phone')}
              placeholder="+1 234 567 8900"
              disabled={status === 'submitting'}
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1.5">{errors.phone}</p>}
          </div>

          <div data-field="product">
            <label className="label-field" htmlFor="product">
              Product Interested In
            </label>
            <select
              id="product"
              value={data.product}
              onChange={(e) => update('product', e.target.value)}
              className={inputClass('product')}
              disabled={status === 'submitting'}
            >
              <option value="">Select a product (optional)</option>
              {productOptions.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
              <option value="Custom / OEM Requirement">Custom / OEM Requirement</option>
            </select>
          </div>

          <div data-field="quantity">
            <label className="label-field" htmlFor="quantity">
              Quantity / Requirement
            </label>
            <input
              id="quantity"
              type="text"
              value={data.quantity}
              onChange={(e) => update('quantity', e.target.value)}
              className={inputClass('quantity')}
              placeholder="e.g. 5,000 pcs / monthly"
              disabled={status === 'submitting'}
            />
          </div>
        </div>

        <div data-field="message">
          <label className="label-field" htmlFor="message">
            Message / Requirement Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            value={data.message}
            onChange={(e) => update('message', e.target.value)}
            className={`${inputClass('message')} resize-none`}
            placeholder="Tell us about your requirement: product specs, customization, branding, target delivery, destination port, etc."
            disabled={status === 'submitting'}
          />
          {errors.message && <p className="text-xs text-red-600 mt-1.5">{errors.message}</p>}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="btn-accent btn-lg w-full md:w-auto justify-center gap-3 disabled:opacity-60"
          >
            {status === 'submitting' ? (
              <>
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                  <path d="M22 12a10 10 0 01-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                Submitting Inquiry…
              </>
            ) : (
              <>
                Submit Inquiry
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>
          <p className="text-xs text-charcoal-500 mt-3">
            By submitting, you agree to be contacted about your inquiry. We respect your privacy.
          </p>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
