/**
 * Configuration du site — Ma boutique
 * - imagesFree  = photos GRATUITES (galerie normale, clic = agrandir)
 * - imagesPaid  = photos PAYANTES (section blur, clic = Stripe)
 * Les deux listes doivent être différentes (pas les mêmes fichiers).
 */
window.SITE_CONFIG = {
  title: "Jaily",
  logo: "Jaily",
  influencerName: "jailyneojeda",

  heroWelcome: "Bienvenue",
  heroTitle: "Collection",
  heroDesc: "Une sélection élégante pour mettre en valeur votre style et votre confiance.",
  heroStoryPromo: "Follow my stories every moment - always something new for you.",
  heroBtn: "Voir la galerie",
  heroBtnUrl: "#galerie-gratuite",

  bannerText: "Follow the stories every moment - there is always something new and special for you ♥",

  followCtaUrl: "https://www.instagram.com/jailyneojeda?igsh=MXEyNmtrbG5mdHN6bA==",
  followCtaTitle: "Abonnez-vous sur social media",
  followCtaSubtitle: "Snapchat, Instagram, Facebook - suivez-moi partout.",
  stripeUrl: "https://buy.stripe.com/9B65kCbiC6qSbBLbeO3Nm02",
  blurTitle: "Premium — payant",
  blurSubtitle: "Aperçu flouté — débloquez le contenu complet après paiement.",
  blurCtaText: "Get private access - pay now",
  videosTitle: "Vidéos premium",
  videosHint: "Locked videos — click any video to unlock with Stripe.",
  lockVideos: true,
  freeGalleryTitle: "Photos gratuites",
  freeGalleryHint: "Ces photos sont gratuites. La section Premium en dessous est réservée au contenu payant.",
  footerCopyright: "© 2025 Jaily",

  // Écran +18 : true = affiche le bouton à chaque ouverture du site (rien n’est mémorisé)
  // false = une fois validé, le navigateur se souvient (localStorage / session si ageGateSessionOnly)
  ageGateAlwaysShow: true,
  ageGateSessionOnly: false,
  ageGateStorageKey: "jaily_age_confirmed",
  ageGateButtonText: "I'm +18",
  // Laisser vide "" pour reprendre le même texte que le bouton ; sinon ex. "+18" pour une bande courte
  ageStripText: "",

  blogTitle: "Blog",
  blogSubtitle: "Abonnez-vous sur social media",

  snapchat: "https://www.snapchat.com/@jailyneojeda?sender_web_id=26eb9d53-e556-4075-b291-d63980d4b49e&device_type=ios&is_copy_url=true",
  instagram: "https://www.instagram.com/jailyneojeda?igsh=MXEyNmtrbG5mdHN6bA==",
  facebook: "https://www.facebook.com/share/1CPtDeKby1/?mibextid=wwXIfr",
  tiktok: "#",

  // ═══ GRATUIT : mets tes fichiers d.png, e.png, f.png (ou autres) dans media/images/
  imagesFree: [
    { file: "d.png", title: "Gratuit D" },
    { file: "e.png", title: "Gratuit E" },
    { file: "f.png", title: "Gratuit F" },
  ],

  // ═══ PAYANT (blur + Stripe) : fichiers différents, ex. a b c dans media/images/
  imagesPaid: [
    { file: "a.png.png", title: "Premium A" },
    { file: "bpng.jpg", title: "Premium B" },
    { file: "se.png", title: "Premium C" },
  ],

  videos: [
    { url: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Aperçu" }
  ]
};
