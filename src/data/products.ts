export interface Product {
  id: string;
  name: string;
  category: 'cricket' | 'soccer' | 'volleyball' | 'basketball' | 'rugby' | 'training';
  description: string;
  specifications: string[];
  featured?: boolean;
  image: string;
  tags?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'test-cricket-red',
    name: 'Test Grade Red Cricket Ball',
    category: 'cricket',
    description: 'Four-piece premium alum-tanned leather construction with hand-stitched seam for match-day performance.',
    specifications: ['4-piece construction', 'Grade A Alum-tanned leather', 'Cork &amp; latex core', '156g / 5.5oz', 'Hand-stitched seam'],
    featured: true,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20red%20cricket%20leather%20ball%20on%20dark%20charcoal%20background%20studio%20product%20photography%20high%20contrast%20dramatic%20lighting%20texture%20detail%20professional&image_size=square_hd',
    tags: ['Test Match', '4-Piece', 'Hand Stitched'],
  },
  {
    id: 'odi-cricket-white',
    name: 'ODI White Cricket Ball',
    category: 'cricket',
    description: 'Premium white leather one-day ball with reinforced core and durable stitching for 50-over matches.',
    specifications: ['4-piece construction', 'Grade A white leather', 'PU-coated finish', '156g / 5.5oz', 'Water resistant'],
    featured: true,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20white%20ODI%20cricket%20leather%20ball%20studio%20photography%20clean%20minimal%20background%20high%20detail%20seam%20stitching%20professional%20sports%20gear&image_size=square_hd',
    tags: ['ODI', 'White Leather', '50 Over'],
  },
  {
    id: 't20-cricket-pink',
    name: 'T20 Pink Cricket Ball',
    category: 'cricket',
    description: 'High-visibility pink leather engineered for day-night matches with excellent shape retention.',
    specifications: ['4-piece construction', 'Flouro-tanned pink leather', 'Cork &amp; rubber core', '156g / 5.5oz', 'Day/night visibility'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=pink%20cricket%20leather%20ball%20day%20night%20match%20ball%20dark%20studio%20background%20high%20detail%20texture%20professional%20product%20shot%20dramatic%20lighting&image_size=square_hd',
    tags: ['T20', 'Pink Ball', 'Day/Night'],
  },
  {
    id: 'practice-cricket',
    name: 'Club Practice Cricket Ball',
    category: 'cricket',
    description: 'Durable 2-piece leather ball designed for training sessions and club-level matches.',
    specifications: ['2-piece construction', 'Grade B leather', 'Cork core', '156g / 5.5oz', 'High durability'],
    featured: true,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=club%20practice%20cricket%20leather%20ball%20two%20piece%20simple%20studio%20shot%20warm%20background%20high%20detail%20sports%20equipment&image_size=square_hd',
    tags: ['Practice', '2-Piece', 'Club Level'],
  },
  {
    id: 'match-soccer-5',
    name: 'Match Soccer Ball — Size 5',
    category: 'soccer',
    description: '32-panel hand-stitched genuine leather football engineered for professional league play.',
    specifications: ['32-panel construction', 'Genuine cowhide leather', 'Latex bladder', 'Size 5 / FIFA weight', 'Waterproof'],
    featured: true,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20leather%20soccer%20ball%20football%2032%20panel%20professional%20match%20ball%20dark%20moody%20studio%20background%20high%20contrast%20texture%20detail&image_size=square_hd',
    tags: ['Match', '32 Panel', 'Size 5'],
  },
  {
    id: 'training-soccer-4',
    name: 'Training Soccer Ball — Size 4',
    category: 'soccer',
    description: 'Durable grain leather training ball with consistent bounce for youth and club sessions.',
    specifications: ['18-panel construction', 'Grain leather', 'Butyl bladder', 'Size 4', 'Abrasion resistant'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=leather%20soccer%20training%20ball%20size%204%20studio%20shot%20clean%20white%20background%20high%20detail%20panel%20stitching%20youth%20sports%20gear&image_size=square_hd',
    tags: ['Training', 'Size 4', 'Youth'],
  },
  {
    id: 'futsal-leather',
    name: 'Futsal Leather Ball',
    category: 'soccer',
    description: 'Low-bounce futsal ball with premium leather skin designed for indoor court play.',
    specifications: ['32-panel low-bounce', 'Soft leather skin', 'Foam backing', 'Size 4 Futsal', 'Indoor court ready'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=futsal%20indoor%20leather%20football%20ball%20low%20bounce%20studio%20photography%20warm%20toned%20background%20premium%20sports%20product&image_size=square_hd',
    tags: ['Futsal', 'Indoor', 'Low Bounce'],
  },
  {
    id: 'indoor-volleyball',
    name: 'Indoor Competition Volleyball',
    category: 'volleyball',
    description: '18-panel premium leather volleyball with soft touch and precision flight for indoor courts.',
    specifications: ['18-panel construction', 'Top-grain leather', 'Latex bladder', '260–280g', 'FIVB specs'],
    featured: true,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20leather%20indoor%20volleyball%2018%20panel%20studio%20photography%20dramatic%20dark%20background%20high%20detail%20texture%20professional%20sports&image_size=square_hd',
    tags: ['Indoor', 'Competition', '18 Panel'],
  },
  {
    id: 'beach-volleyball',
    name: 'Beach Volleyball',
    category: 'volleyball',
    description: 'Water-resistant leather volleyball designed for outdoor and beach play with UV protection.',
    specifications: ['18-panel construction', 'UV-resistant leather', 'Synthetic backing', '260–280g', 'Sand &amp; water proof'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=beach%20volleyball%20leather%20ball%20outdoor%20sunny%20beige%20sand%20background%20high%20detail%20premium%20sports%20product%20photography&image_size=square_hd',
    tags: ['Beach', 'Outdoor', 'UV Resistant'],
  },
  {
    id: 'match-basketball-7',
    name: 'Match Basketball — Size 7',
    category: 'basketball',
    description: 'Composite leather match basketball with deep pebble channels for superior grip and control.',
    specifications: ['12-panel composite leather', 'Deep channel grip', 'Butyl bladder', 'Size 7 / 600–650g', 'FIBA weight'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20tan%20leather%20basketball%20size%207%20dark%20charcoal%20studio%20background%20dramatic%20lighting%20high%20texture%20detail%20professional%20product%20shot&image_size=square_hd',
    tags: ['Match', 'Size 7', 'Composite Leather'],
  },
  {
    id: 'rugby-union',
    name: 'Rugby Union Match Ball',
    category: 'rugby',
    description: 'Hand-stitched 4-panel leather rugby ball with balanced flight and excellent grip for match play.',
    specifications: ['4-panel construction', 'Grain leather', '3-ply backing', '410–460g', 'Hand stitched'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=leather%20rugby%20union%20match%20ball%20oval%20shaped%20studio%20photography%20deep%20green%20background%20high%20detail%20stitching%20premium%20sports%20product&image_size=square_hd',
    tags: ['Rugby Union', 'Match', '4 Panel'],
  },
  {
    id: 'medicine-ball',
    name: 'Leather Medicine Ball',
    category: 'training',
    description: 'Hand-stitched premium leather medicine ball for strength, core, and functional training.',
    specifications: ['Genuine leather shell', 'Sand &amp; cotton fill', 'Hand stitched', '2kg — 10kg options', 'Double-laced closure'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=vintage%20style%20leather%20medicine%20ball%20gym%20training%20equipment%20dark%20wood%20background%20premium%20craftsmanship%20high%20detail%20product%20shot&image_size=square_hd',
    tags: ['Training', 'Strength', 'Leather'],
  },
];

export const CATEGORIES: { id: Product['category'] | 'all'; label: string }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'cricket', label: 'Cricket Balls' },
  { id: 'soccer', label: 'Soccer / Footballs' },
  { id: 'volleyball', label: 'Volleyballs' },
  { id: 'basketball', label: 'Basketballs' },
  { id: 'rugby', label: 'Rugby Balls' },
  { id: 'training', label: 'Training Equipment' },
];
