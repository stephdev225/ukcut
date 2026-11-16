// Source des données : fiche Fresha du salon + profil Instagram @ukcut1 (relevés le 16 nov. 2026).
// Tout ce qui est ici doit être validé par le client avant la mise en ligne finale.

export const site = {
  name: 'Barbershop Chez UKCUT',
  short: 'UKCUT',
  tagline: 'Barbier de la ville de Québec',
  street: '832, rue Saint-Joseph Est',
  city: 'Québec (QC) G1K 3C9',
  district: 'Saint-Roch',
  booking: 'https://www.fresha.com/fr/a/barbershop-ukcut-quebec-639-rue-saint-francois-est-wdp7ek8j/booking',
  bookingUk: 'https://fr.fresha.com/book-now/salon-lowtown-utptlo3b/services?lid=766773&eid=2002042&pId=720506',
  reviews: 'https://www.fresha.com/fr/a/barbershop-ukcut-quebec-639-rue-saint-francois-est-wdp7ek8j',
  maps: 'https://www.google.com/maps/search/?api=1&query=832+rue+Saint-Joseph+Est%2C+Qu%C3%A9bec%2C+QC+G1K+3C9',
  instagram: 'https://www.instagram.com/ukcut1/',
  instagramShop: 'https://www.instagram.com/barbershop_chezukcut/',
  tiktok: 'https://www.tiktok.com/@ukcut1',
  rating: '4,9',
  reviewCount: '936',
};

// 0 = dimanche … 6 = samedi. Heures en format 24 h, fuseau America/Toronto.
export const hours = [
  { day: 'Lundi', d: 1, open: 11, close: 18 },
  { day: 'Mardi', d: 2, open: 10, close: 19 },
  { day: 'Mercredi', d: 3, open: 10, close: 20 },
  { day: 'Jeudi', d: 4, open: 10, close: 20 },
  { day: 'Vendredi', d: 5, open: 10, close: 22 },
  { day: 'Samedi', d: 6, open: 10, close: 20 },
  { day: 'Dimanche', d: 0, open: 12, close: 18 },
];

export type Service = { name: string; time: string; price: string; note?: string };

export const services: { title: string; blurb: string; items: Service[] }[] = [
  {
    title: 'Coupes',
    blurb: 'Fade, taper, ciseaux ou transformation complète.',
    items: [
      { name: 'Coupe', time: '30 – 45 min', price: 'dès 40 $', note: 'Sans moustache ni barbe' },
      { name: 'Coupe et barbe', time: '45 min – 1 h', price: 'dès 50 $' },
      { name: 'Coupe ciseaux', time: '1 h', price: '60 $' },
      { name: 'Transformation', time: '1 h', price: '60 $' },
      { name: 'Coupe avec UKCUT', time: '45 min', price: 'dès 65 $', note: 'Nouveau client, avec le propriétaire' },
    ],
  },
  {
    title: 'Barbe et contours',
    blurb: 'Les lignes nettes, le détail qui change tout.',
    items: [
      { name: 'Rasage à la lame', time: '1 h', price: '60 $' },
      { name: 'Contour complet', time: '30 min', price: '30 $' },
      { name: 'Barbe', time: '20 min', price: '20 $' },
      { name: 'Contour', time: '15 min', price: '15 $' },
    ],
  },
  {
    title: 'Tarifs doux',
    blurb: 'Pour les plus jeunes, les étudiants et les aînés.',
    items: [
      { name: 'Coupe étudiant', time: '45 min', price: 'dès 35 $', note: 'Le mercredi' },
      { name: 'Coupe enfant', time: '45 min', price: '35 $' },
      { name: 'Coupe aîné', time: '1 h', price: 'dès 30 $', note: '65 ans et plus' },
    ],
  },
  {
    title: 'Tresses, twists et locks',
    blurb: 'Avec Ange, spécialiste des twists et des tresses.',
    items: [
      { name: 'Tresses et cornrows', time: 'Selon le style', price: 'Sur Fresha' },
      { name: 'Twists', time: 'Selon le style', price: 'Sur Fresha' },
      { name: 'Dreadlocks', time: 'Selon le style', price: 'Sur Fresha' },
    ],
  },
];

export const team = [
  { name: 'UKCUT', role: 'Maître barbier · Propriétaire' },
  { name: 'Khadim', role: 'Barbier' },
  { name: 'Simy', role: 'Barbier junior' },
  { name: 'Matti', role: 'Barbier junior' },
  { name: 'Maiky', role: 'Apprenti barbier' },
  { name: 'Ange', role: 'Twists et tresses' },
];

export const styles = ['High fade', 'Taper', 'Lineup', 'Twisty cut', 'Burst fade', 'Box haircut', 'Wave cut', 'Curly', 'Tresses', 'Twists'];

export const amenities = [
  'Avec ou sans rendez-vous',
  'Confirmation instantanée',
  'Enfants bienvenus',
  'Accessible en fauteuil roulant',
  'Stationnement à proximité',
  'Près du transport en commun',
];

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/equipe/', label: 'Équipe' },
  { href: '/galerie/', label: 'Galerie' },
  { href: '/contact/', label: 'Contact' },
];
