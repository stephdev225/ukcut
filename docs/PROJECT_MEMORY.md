# PROJECT_MEMORY — UKCUT

## Décisions
| ID | Date | Décision | Raison | Statut |
|---|---|---|---|---|
| D-001 | 2026-11-16 | Astro statique + CSS maison, déploiement Vercel | rapide, léger, facile à reprendre | ACTIVE |
| D-002 | 2026-11-16 | Palette et motif tirés du salon (béton, vert carreau, hexagone) | identité réelle, pas un gabarit | ACTIVE |
| D-003 | 2026-11-16 | Réservation par lien Fresha (phase 1) | intégration réservation/paiement prévue après validation | ACTIVE |
| D-004 | 2026-11-16 | Pas de témoignages cités, seulement la note Fresha avec lien | les avis récupérés étaient paraphrasés, pas mot pour mot | ACTIVE |
| D-006 | 2026-11-16 | Pas d'iframe Google Maps, lien vers l'itinéraire | fiabilité, rapidité | ACTIVE |
| D-005 | 2026-11-16 | Pas de photos de clients qui semblent mineurs | prudence, consentement | ACTIVE |

## Journal
### 2026-11-16
- Fait : recherche (Instagram, Linktree, Fresha), 5 pages + 404, images « site sur téléphone ».
- Vérifié : build sans erreur ; captures mobile 390 px et ordinateur 1440 px des 5 pages ; aucun débordement horizontal ; menu mobile, navigation, lightbox, aperçu au survol, statut ouvert/fermé testés avec Chrome (Playwright) ; aucun lien mort interne.
- Carte Google intégrée retirée (elle ne se chargeait pas en ligne), remplacée par une carte photo qui ouvre l'itinéraire Google Maps.
- En ligne : https://ukcut.vercel.app (projet Vercel « ukcut », repo GitHub stephdev225/ukcut, branche main).
- Non vérifié : rendu sur vrai iPhone/Android.
- Limite : les photos sont des captures d'écran d'Instagram (≈ 934 px de large, 1401 px pour le hero). À remplacer par les originaux du client.

## Questions ouvertes (à valider avec UKCUT)
- Noms exacts et prix des services (repris de Fresha, à confirmer).
- Numéro de téléphone du salon (non trouvé de façon fiable, donc absent du site).
- Année et catégorie du prix Choix du consommateur.
- Accord des clients visibles sur les photos de coupes.
- Photos et courtes bios des barbiers de l'équipe.
- Version anglaise souhaitée ?
