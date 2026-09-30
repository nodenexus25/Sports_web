import { useSearchParams } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import CtaSection from '../components/CtaSection';
import { COMPANY } from '../data/company';
import { useEffect, useState } from 'react';

const infoBlocks = [
  {
    title: 'Phone & WhatsApp',
    lines: [COMPANY.contact.phone, 'Mon — Sat · 9 AM — 7 PM IST'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
      </svg>
    ),
    href: `tel:${COMPANY.contact.phone.replace(/\s/g, '')}`,
  },
  {
    title: 'Email',
    lines: [COMPANY.contact.email, 'Response within 24 hours'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: `mailto:${COMPANY.contact.email}`,
  },
  {
    title: 'Factory & Office',
    lines: [
      `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
      `${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.pin} — ${COMPANY.address.country}`,
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    href: 'https://maps.google.com/?q=Meerut+India',
  },
];

const quickReasons = [
  'Match-grade leather quality, consistent across every batch',
  'Hand-stitched seams with artisan craftsmanship',
  'Custom OEM / private label & embossed branding',
  '5–7 day prototype turnaround for new specs',
  'Full export documentation & logistics support',
  'Factory visit & live inspection welcome by appointment',
];

function Contact() {
  const [params] = useSearchParams();
  const [preselected, setPreselected] = useState('');

  useEffect(() => {
    const p = params.get('product');
    if (p) setPreselected(p);
  }, [params]);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-end md:items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=senior%20export%20manager%20in%20meeting%20with%20international%20client%20at%20sports%20ball%20factory%20office%20samples%20on%20table%20handshake%20business%20deal%20warm%20professional%20lighting&image_size=landscape_16_9"
            alt="Business discussion at factory office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950/88 via-charcoal-950/70 to-charcoal-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />
        </div>

        <div className="container-page relative pt-36 pb-20 md:pt-40 md:pb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="w-10 h-px bg-leather-400/80" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-leather-300">
                Get In Touch
              </span>
            </div>
            <h1 className="font-serif font-semibold text-cream-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] mb-6 tracking-tight text-balance">
              Looking for reliable leather ball manufacturing?{' '}
              <span className="italic text-leather-300">Let&apos;s talk.</span>
            </h1>
            <p className="text-base md:text-lg text-charcoal-200 leading-relaxed max-w-2xl text-balance">
              Share your specs, target quantities, and destination — our export team will respond with pricing, samples, and a full execution plan within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ContactForm preselectedProduct={preselected} />
            </div>

            <aside className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-32 space-y-8">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent mb-3">
                  Why partner with us
                </div>
                <h2 className="heading-display text-3xl md:text-4xl mb-6 leading-[1.1] text-balance">
                  Serious manufacturing for <span className="italic text-accent">serious brands.</span>
                </h2>
                <ul className="space-y-3 mb-10">
                  {quickReasons.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span className="w-5 h-5 mt-0.5 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm md:text-[15px] text-charcoal-700 leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                {infoBlocks.map((b) => (
                  <a
                    key={b.title}
                    href={b.href}
                    target={b.title === 'Factory & Office' ? '_blank' : undefined}
                    rel={b.title === 'Factory & Office' ? 'noopener noreferrer' : undefined}
                    className="group block card p-5 md:p-6 card-hover"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-leather-50 text-leather-700 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                        {b.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] uppercase tracking-[0.22em] text-charcoal-500 font-semibold mb-1">
                          {b.title}
                        </div>
                        {b.lines.map((line, i) => (
                          <div
                            key={i}
                            className={`text-charcoal-900 leading-relaxed ${
                              i === 0 ? 'font-semibold text-sm md:text-base group-hover:text-accent transition-colors' : 'text-xs md:text-sm text-charcoal-500'
                            }`}
                          >
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="rounded-xl2 overflow-hidden shadow-card aspect-[5/3] border border-charcoal-100/80">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=aerial%20view%20sports%20goods%20manufacturing%20factory%20building%20industrial%20estate%20India%20daylight%20clean%20premium%20establishing%20shot&image_size=landscape_4_3"
                  alt="LeatherCraft Sports factory exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaSection
        variant="leather"
        eyebrow="Factory Visits"
        title={
          <>
            Visit our <span className="italic text-cream-50/95">factory.</span> See the difference.
          </>
        }
        description="Book an appointment to walk through our tannery, stitching workshop, and quality labs. Meet our craftsmen, inspect our process, and feel the leather before you commit."
        primaryText="Schedule Factory Visit"
        secondaryText="Back to Homepage"
        secondaryTo="/"
      />
    </div>
  );
}

export default Contact;
