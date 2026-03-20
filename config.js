/**
 * Configuration du site — Ma boutique
 * Modifiez les tableaux images et videos pour ajouter vos photos et vidéos.
 * Mettez les fichiers dans media/images/ et media/videos/ ou utilisez des URLs.
 */
window.SITE_CONFIG = {
  title: "Jaily",
  logo: "Jaily",

  heroWelcome: "Bienvenue",
  heroTitle: "Collection",
  heroDesc: "Une sélection élégante pour mettre en valeur votre style et votre confiance.",
  heroBtn: "Voir la galerie",
  heroBtnUrl: "#galerie",

  bannerText: "Viens ici à chaque instant — il y a du nouveau pour toi et notre histoire, il y a d'autres cadeaux ♥",

  // Lien quand on clique sur la zone « Follow » (Instagram, TikTok, Linktree…)
  followCtaUrl: "",
  followCtaTitle: "Follow me on social media",
  followCtaSubtitle: "New stories every day — there’s always more for you.",
  instagram: "#",
  tiktok: "#",

  // ═══════════════════════════════════════════════════════════
  // PHOTOS : mettez vos images dans le dossier media/images/
  // Puis ajoutez une ligne par photo comme ci‑dessous.
  // ═══════════════════════════════════════════════════════════
  images: [
    { file: "a.jpg", title: "Photo" },
    // Si ton fichier s’appelle a.png, remplace par : { file: "a.png", title: "Photo" },{ file: "b.png", title: "Photo" },{ file: "se.png", title: "Photo" },
    // Pour ajouter d’autres photos : { file: "nom-du-fichier.jpg", title: "Titre" },
  ],

  // ═══════════════════════════════════════════════════════════
  // VIDÉOS : mettez vos vidéos dans le dossier media/videos/
  // Puis ajoutez une ligne par vidéo comme ci‑dessous.
  // ═══════════════════════════════════════════════════════════
  videos: [
    { file: "tukif.mp4" }
    // Si l’extension est .webm : { file: "tukif.webm" }
    // Pour ajouter d’autres vidéos : { file: "nom.mp4" },
  ]
};
