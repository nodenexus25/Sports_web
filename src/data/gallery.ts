export interface GalleryImage {
  id: string;
  image: string;
  title: string;
  category: 'products' | 'manufacturing' | 'factory' | 'stitching' | 'packaging' | 'team' | 'action';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=extreme%20close%20up%20of%20hand%20stitching%20a%20cricket%20ball%20seam%20macro%20detail%20artisan%20craftsman%20hands%20needle%20and%20thread%20leather%20texture%20dramatic%20lighting&image_size=square_hd',
    title: 'Hand Stitching Detail',
    category: 'stitching',
    size: 'lg',
  },
  {
    id: 'g2',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20leather%20cricket%20balls%20arranged%20in%20elegant%20grid%20row%20red%20white%20pink%20balls%20dark%20charcoal%20wood%20surface%20studio%20product%20photography&image_size=square_hd',
    title: 'Premium Cricket Collection',
    category: 'products',
    size: 'md',
  },
  {
    id: 'g3',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=sports%20manufacturing%20factory%20interior%20wide%20shot%20workers%20arranging%20leather%20panels%20industrial%20lighting%20craftsmanship%20workshop%20clean%20organized&image_size=portrait_4_3',
    title: 'Factory Production Floor',
    category: 'factory',
    size: 'xl',
  },
  {
    id: 'g4',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=macro%20close%20up%20of%20leather%20cricket%20ball%20seam%20stitching%20texture%20detail%20red%20leather%20surface%20studio%20lighting%20premium%20craftsmanship%20depth&image_size=square_hd',
    title: 'Seam Detail — Red Ball',
    category: 'products',
    size: 'sm',
  },
  {
    id: 'g5',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=artisan%20cutting%20leather%20panels%20with%20metal%20die%20cutting%20tool%20workshop%20bench%20close%20up%20hands%20craftsmanship%20sports%20equipment%20manufacturing&image_size=portrait_4_3',
    title: 'Leather Cutting',
    category: 'manufacturing',
    size: 'md',
  },
  {
    id: 'g6',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cricket%20player%20batting%20action%20shot%20stadium%20lights%20dramatic%20night%20match%20red%20ball%20in%20motion%20high%20energy%20sports%20photography%20shallow%20depth&image_size=landscape_16_9',
    title: 'Match Day Action',
    category: 'action',
    size: 'xl',
  },
  {
    id: 'g7',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20sports%20ball%20packaging%20custom%20branded%20boxes%20arranged%20on%20wooden%20pallet%20factory%20warehouse%20clean%20organized%20export%20ready%20warm%20lighting&image_size=landscape_4_3',
    title: 'Export Packaging',
    category: 'packaging',
    size: 'lg',
  },
  {
    id: 'g8',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=team%20of%20craftsmen%20and%20craftswomen%20in%20sports%20ball%20factory%20group%20portrait%20smiling%20diverse%20workers%20professional%20industrial%20warm%20tone%20background&image_size=landscape_4_3',
    title: 'Our Manufacturing Team',
    category: 'team',
    size: 'lg',
  },
  {
    id: 'g9',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=leather%20soccer%20ball%20extreme%20close%20up%20panel%20texture%20and%20stitching%20premium%20black%20and%20white%20product%20photography%20dark%20moody%20background&image_size=square_hd',
    title: 'Soccer Ball Panel Detail',
    category: 'stitching',
    size: 'md',
  },
  {
    id: 'g10',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=quality%20control%20inspection%20of%20sports%20balls%20worker%20using%20gauge%20to%20measure%20circumference%20and%20weight%20factory%20bench%20premium%20standards&image_size=portrait_4_3',
    title: 'Quality Control Check',
    category: 'manufacturing',
    size: 'md',
  },
  {
    id: 'g11',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=rows%20of%20leather%20cricket%20balls%20hanging%20drying%20in%20factory%20atmospheric%20lighting%20craftsmanship%20heritage%20sports%20manufacturing%20cinematic&image_size=landscape_16_9',
    title: 'Curing — Leather Treatment',
    category: 'factory',
    size: 'xl',
  },
  {
    id: 'g12',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=soccer%20player%20foot%20about%20to%20kick%20leather%20football%20stadium%20grass%20pitch%20green%20dramatic%20sunset%20lighting%20action%20sports%20photography&image_size=landscape_16_9',
    title: 'Football Kickoff',
    category: 'action',
    size: 'lg',
  },
  {
    id: 'g13',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=volleyball%20players%20hands%20hitting%20premium%20leather%20volleyball%20indoor%20court%20net%20motion%20blur%20athletic%20action%20clean%20sport%20venue&image_size=landscape_4_3',
    title: 'Volleyball Court Action',
    category: 'action',
    size: 'md',
  },
  {
    id: 'g14',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=leather%20tanning%20drums%20in%20tannery%20industrial%20craftsmanship%20raw%20leather%20processing%20warm%20amber%20lighting%20manufacturing%20heritage&image_size=portrait_4_3',
    title: 'Leather Tannery',
    category: 'manufacturing',
    size: 'lg',
  },
  {
    id: 'g15',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=custom%20branded%20sports%20balls%20logo%20embossing%20premium%20leather%20surface%20detail%20shot%20embossed%20brand%20mark%20craftsmanship&image_size=square_hd',
    title: 'Branding &amp; Embossing',
    category: 'products',
    size: 'sm',
  },
  {
    id: 'g16',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=senior%20craftsman%20hand%20stitching%20rugby%20ball%20in%20workshop%20focused%20mature%20worker%20concentrated%20close%20up%20portrait%20heritage%20skills%20warm%20lighting&image_size=portrait_4_3',
    title: 'Master Craftsman at Work',
    category: 'team',
    size: 'lg',
  },
];

export const GALLERY_CATEGORIES: { id: GalleryImage['category'] | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'products', label: 'Products' },
  { id: 'stitching', label: 'Stitching Details' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'factory', label: 'Factory' },
  { id: 'packaging', label: 'Packaging' },
  { id: 'team', label: 'Team' },
  { id: 'action', label: 'Sports Action' },
];
