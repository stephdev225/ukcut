# DESIGN_SYSTEM — UKCUT

## Couleurs (src/styles/global.css)
| Token | Valeur | Usage | Contraste |
|---|---|---|---|
| --ink | #101113 | fonds sombres, texte | texte blanc dessus : 18,9:1 |
| --plaster | #F2F0EC | fond clair | --ink dessus : 16,6:1 |
| --muted | #5C5A56 | texte secondaire sur clair | 6,0:1 (AA) |
| --muted-dark | #A9A6A0 | texte secondaire sur sombre | 7,7:1 (AA) |
| --tile | #2F4B45 | bandeaux d'accent | blanc dessus : 9,4:1 |
| --tile-soft | #C9D6D0 | texte secondaire sur vert, puces | 6,3:1 sur --tile |
| --line / --ink-line | #D5D1C9 / #2B2E32 | filets | décoratif |

## Typographie
- Titres : Archivo Variable, largeur 68 %, graisse 800, capitales, interligne 0,9.
- Accent : Instrument Serif italique (un mot par titre, pas plus).
- Texte : Instrument Sans Variable, 16 px, interligne 1,55.

## Espacements
- Marges latérales 20 px (mobile) / 40 px (≥ 900 px), largeur max 1240 px.
- Sections : 56 px (mobile) / 88 px (ordinateur). Volontairement serré.

## Mouvement
- --t-fast 180 ms (survols), --t-med 520 ms (liens, menu), --t-slow 900 ms (apparitions).
- Courbe : cubic-bezier(0.22, 1, 0.36, 1). `prefers-reduced-motion` respecté.

## Règles fixes
- Barre de navigation fixe, identique en haut et au défilement, jamais masquée.
- Les éléments du menu sont de vraies pages. Les cartes et les lignes de service sont des liens.
- Chaque sous-page a un bouton « Retour à l'accueil ».
