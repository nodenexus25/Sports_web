import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';
import CtaSection from '../components/CtaSection';
import { COMPANY } from '../data/company';

const expertise = [
  {
    eyebrow: 'Cricket',
    title: 'Cricket Ball Manufacturing',
    description: 'Red, white, pink, and T20 variants — 2-piece and 4-piece construction with alum-tanned premium leather, hand-stitched for consistency.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    eyebrow: 'Football',
    title: 'Soccer & Futsal Balls',
    description: '18 and 32-panel genuine leather footballs — match, training, and futsal low-bounce specifications with hand-stitched panels.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 18.523 2 13 6.477 3 12 3zm0 0l3 4m-3-4l-3 4m3-4v4m-3 4h6m-8.5 3l3-2m11 2l-3-2m-6 6l1-3.5m5 3.5l-1-3.5" />
      </svg>
    ),
  },
  {
    eyebrow: 'Volleyball',
    title: 'Volleyball & Basketball',
    description: 'Top-grain leather volleyballs (indoor & beach) and composite leather basketballs with superior grip and balanced flight.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12c3 0 3-3 6-3s3 3 6 3 3-3 6-3M3 12c3 0 3 3 6 3s3-3 6-3 3 3 6 3M12 3c0 3-3 3-3 6s3 3 3 6M12 3c0 3 3 3 3 6s-3 3-3 6" />
      </svg>
    ),
  },
  {
    eyebrow: 'Specialty',
    title: 'Rugby & Training Equipment',
    description: '4-panel hand-stitched rugby balls and traditional leather medicine balls for functional strength and conditioning facilities.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const quality = [
  {
    title: 'Material Traceability',
    description: 'Every leather hide is batch-tracked from the tannery with thickness, tear-strength, and grain-grade reports.',
  },
  {
    title: 'Weight & Balance',
    description: 'Each ball is weighed and balanced within ±2g of spec for predictable performance across play.',
  },
  {
    title: 'Water Resistance',
    description: 'Waterproofing tested via 4-hour submersion — verified weight-gain under 2% on premium match models.',
  },
  {
    title: 'Stitch Integrity',
    description: '2000+ cycle abrasion simulation per seam before approval — match seams never open in play.',
  },
  {
    title: 'Shape Retention',
    description: '2000 full-rebound compression tests guarantee perfect sphericity for up to 120 matches.',
  },
  {
    title: 'Certified Compliance',
    description: 'REACH, CPSIA, and CA Prop 65 compliant — full material safety dossiers available on demand.',
  },
];

const mfgCapabilities = [
  { label: 'Monthly Capacity', value: '250,000 balls' },
  { label: 'Tannery Area', value: '45,000 sq. ft.' },
  { label: 'Skilled Artisans', value: '150+ craftsmen' },
  { label: 'SKU Customization', value: 'Unlimited' },
  { label: 'Prototype Lead Time', value: '5–7 days' },
  { label: 'Production MOQ', value: '500 units' },
];

function About() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-end md:items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cinematic%20wide%20portrait%20of%20two%20generations%20of%20craftsmen%20standing%20in%20leather%20sports%20ball%20factory%20workshop%20proud%20heritage%20warm%20editorial%20lighting%20depth%20of%20field&image_size=landscape_16_9"
            alt="Multi-generational craftsmen in factory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950/85 via-charcoal-950/60 to-charcoal-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent md:block" />
        </div>

        <div className="container-page relative pt-36 pb-24 md:pt-40 md:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 mb-7">
              <span className="w-10 h-px bg-leather-400/80" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-leather-300">
                About LeatherCraft Sports
              </span>
            </div>
            <h1 className="font-serif font-semibold text-cream-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] mb-6 tracking-tight text-balance">
              Six decades of <span className="italic text-leather-300">craftsmanship.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-charcoal-200 leading-relaxed max-w-xl text-balance">
              An Indian export house dedicated to leather sports balls — where heritage hand-stitching meets modern quality systems.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <SectionHeader
                  eyebrow="Who We Are"
                  title={<>A <span className="italic text-accent">family of craftsmen</span>, since 1962.</>}
                />
                <div className="mt-8 rounded-xl2 overflow-hidden shadow-deep aspect-[4/5]">
                  <img
                    src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=portrait%20senior%20craftsman%20holding%20finished%20premium%20leather%20cricket%20ball%20in%20workshop%20proud%20expression%20warm%20natural%20light%20editorial%20heritage%20story%20telling&image_size=portrait_4_3"
                    alt="Master craftsman with finished ball"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {[
                {
                  num: '01',
                  h: 'Our Roots',
                  p: 'Founded in the sports manufacturing belt of Meerut, India, LeatherCraft Sports began as a small tannery and stitching workshop serving local cricket clubs. Three generations later, we export to 35+ countries — while still producing every ball on the same street our grandfather started on.',
                },
                {
                  num: '02',
                  h: 'Our Obsession',
                  p: 'We believe sports balls deserve the same rigor as precision instruments. From leather grain density to the exact pull-strength on every stitch — there is no &ldquo;good enough&rdquo; inside our factory. Every ball that leaves our door is a ball we would put our own name on.',
                },
                {
                  num: '03',
                  h: 'Our Partners',
                  p: 'We work with distributors, clubs, leagues, brands, and national federations — from 500-unit private-label orders to 50,000-unit league contracts. Our clients stay for years because every shipment matches the first sample.',
                },
              ].map((block) => (
                <div key={block.num} className="card p-7 md:p-9 relative">
                  <div className="text-5xl font-serif font-semibold text-charcoal-100 absolute top-5 right-6 select-none">
                    {block.num}
                  </div>
                  <h3 className="heading-display text-2xl md:text-3xl text-charcoal-900 mb-4 tracking-tight">
                    {block.h}
                  </h3>
                  <p
                    className="text-base md:text-lg text-charcoal-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: block.p }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="section-padding bg-white/60 border-y border-charcoal-100/80">
        <div className="container-page">
          <div className="mb-14">
            <SectionHeader
              align="center"
              eyebrow="Our Expertise"
              title={<>Products we <span className="italic text-accent">engineer.</span></>}
              description="Deep, vertical expertise across six sports ball categories. If it is round, leather, and meant for competition — we make it."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {expertise.map((e, i) => (
              <FeatureCard key={e.title} {...e} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY COMMITMENT */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl2 overflow-hidden aspect-[3/4] shadow-card">
                  <img
                    src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=macro%20detail%20cricket%20ball%20seam%20stitching%20needle%20passing%20through%20leather%20extreme%20close%20up%20warm%20craftsmanship%20lighting%20texture&image_size=portrait_4_3"
                    alt="Seam stitching detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl2 overflow-hidden aspect-square shadow-card">
                  <img
                    src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cricket%20ball%20bounce%20test%20machine%20laboratory%20equipment%20quality%20control%20clean%20workshop%20precision&image_size=square_hd"
                    alt="Bounce testing equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl2 overflow-hidden aspect-square shadow-card">
                  <img
                    src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=worker%20weighing%20finished%20leather%20balls%20precision%20digital%20scale%20factory%20bench%20quality%20audit&image_size=square_hd"
                    alt="Weight quality check"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl2 overflow-hidden aspect-[3/4] shadow-card">
                  <img
                    src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20leather%20cricket%20balls%20final%20inspection%20white%20gloves%20QC%20officer%20clean%20workspace%20editorial&image_size=portrait_4_3"
                    alt="Final inspection with gloves"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeader
                eyebrow="Quality Commitment"
                title={<>The ball we ship is the <span className="italic text-accent">ball we approve.</span></>}
                description="Our quality process is systematic, documented, and uncompromising. We publish test results on request — and stand behind every ball with a replacement policy our competitors simply cannot match."
              />

              <div className="mt-10 space-y-4">
                {quality.map((q) => (
                  <div
                    key={q.title}
                    className="flex items-start gap-4 p-4 md:p-5 rounded-xl bg-white border border-charcoal-100/80 hover:border-leather-200 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-leather-50 text-leather-700 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base text-charcoal-900 mb-1">{q.title}</h4>
                      <p className="text-xs md:text-sm text-charcoal-600 leading-relaxed">{q.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANUFACTURING CAPABILITY */}
      <section className="section-padding bg-charcoal-900 text-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-leather-300 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container-page relative">
          <div className="mb-14">
            <SectionHeader
              align="center"
              eyebrow="Manufacturing Capability"
              title={
                <>
                  <span className="text-cream-50">Scale with </span>
                  <span className="italic text-leather-300">certainty.</span>
                </>
              }
              description="Vertically integrated in-house production — from tanning to packaging — so your timelines, specs, and branding are never outsourced."
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {mfgCapabilities.map((c, i) => (
              <div
                key={c.label}
                className="rounded-xl2 p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-colors duration-300 group text-center"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="font-serif font-semibold text-2xl md:text-3xl text-cream-50 mb-2 group-hover:text-leather-300 transition-colors duration-300">
                  {c.value}
                </div>
                <div className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-charcoal-400 font-medium leading-tight">
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <SectionHeader
                  eyebrow="Why Choose Us"
                  title={<>Long-term <span className="italic text-accent">partnerships</span>, not one-off orders.</>}
                  description={`${COMPANY.name} is built for repeat business. Our clients stay with us for years because we deliver consistently — every specification, every shipment, every season.`}
                />

                <div className="mt-10 rounded-xl2 overflow-hidden shadow-deep aspect-[4/3]">
                  <img
                    src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=senior%20team%20engineer%20showing%20new%20sample%20of%20leather%20ball%20to%20client%20in%20factory%20meeting%20room%20export%20business%20discussion%20clean%20premium&image_size=landscape_4_3"
                    alt="Client discussing samples in factory"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ol className="relative border-l border-charcoal-200 ml-3 space-y-10">
                {[
                  {
                    h: 'Dedicated Account Manager',
                    p: 'A single point of contact owns your account from first sample to repeat PO — no ticket queues, no lost context.',
                  },
                  {
                    h: 'Sample in 5–7 Days',
                    p: 'Rapid prototyping with full spec engineering — leather, stitching, weight, branding, and packaging mocked up before mass production.',
                  },
                  {
                    h: 'Pre-shipment Inspection',
                    p: 'Full AQL-level inspection photos, videos, and QC documents shared before container loading — every box.',
                  },
                  {
                    h: 'Complete Export Support',
                    p: 'FOB, EXW, CIF and door delivery. Full customs documentation, phytosanitary, and material dossiers for your market.',
                  },
                  {
                    h: 'OEM & Private Label',
                    p: 'Debossed, embossed, or printed branding — plus custom packaging design with your logo and retail-ready cartons.',
                  },
                ].map((item, i) => (
                  <li key={i} className="ml-8 relative">
                    <span className="absolute -left-[46px] top-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-semibold shadow-soft">
                      {i + 1}
                    </span>
                    <h4 className="heading-display text-xl text-charcoal-900 mb-2">{item.h}</h4>
                    <p className="text-sm md:text-base text-charcoal-600 leading-relaxed">{item.p}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Partner With Us"
        title={
          <>
            Manufacture your sports balls with <span className="italic text-leather-300">the experts.</span>
          </>
        }
        description="Whether you need a single pallet of match balls or an annual OEM contract — our team builds a plan tailored to your market, budget, and timeline."
        primaryText="Start an Inquiry"
        secondaryText="View Our Products"
      />
    </div>
  );
}

export default About;
