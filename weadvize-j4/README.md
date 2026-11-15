# WeAdvize — Workspace Atelier J4

Site de présentation créé pour la formation « Atelier J4 ». Autonome, sans serveur applicatif, sans dépendances et sans collecte de données.

## Liens

- Site GitHub Pages : https://myworkspacebrigant.github.io/workspace/weadvize-j4/
- Code : https://github.com/myworkspacebrigant/workspace/tree/main/weadvize-j4

Ce site est installé dans le sous-dossier `weadvize-j4` pour ne pas modifier le Workspace principal BRIG / YOLO GROUP.

## Navigation

Écran d’accueil : **un seul dossier « Workspace »**.

- **BRIEF**
  - Document 01 : **Sommaire atelier J4**, intégré à partir de l’image « Sommaire atelier J4.png »
  - Document 02 : **Déroulé pédagogique J4**, intégré à partir des 2 diapositives du PowerPoint « Déroulé pédagogique J4(1).pptx »
- **ATELIER**
  - Hier — Page web fake test : en attente du support
  - Hier : en attente du support
  - Aujourd’hui / 03 : fiche des réponses CSV FollowU puis programme pédagogique IA, soit 2 diapositives navigables par clic ou flèches.
  - Demain — Programme pédagogique Julien : diapositive FollowU 16:9 issue du PowerPoint, avec original PPTX téléchargeable dans `assets/`
  - Analyse / 05 : analyse comparative FollowU « Aujourd’hui vs Demain », une diapositive 16:9.

## Présentation à l’écran

Chaque document disponible s’ouvre dans un visualiseur sans défilement vertical, à l’échelle de la fenêtre du navigateur (format de référence 16:9).

- Le seul bouton visible dans le visualiseur est **« ← Retour »**, en haut à droite.
- Le document « Déroulé pédagogique J4 » comporte **2 diapositives**. Cliquez sur la diapositive ou utilisez **→** pour la suivante, **←** pour la précédente, sans scroller.
- Utilisez **Échap** pour quitter la présentation et revenir au dossier.
- À chaque ouverture d’une page de navigation (accueil, Workspace, BRIEF, ATELIER), **les titres, textes et modules apparaissent successivement avec des mini-pixels**. Les documents s’ouvrent et se ferment immédiatement, sans animation. Les préférences de réduction de mouvement sont respectées.
- La charte du site suit les documents transmis : **fond blanc, orange, noir, gris, titres marqués et deux colonnes**.

Les supports de projection sont **reproduits en HTML et CSS**, sans défilement et avec un affichage net sur vidéoprojecteur. Le module `Hier / 02` présente **sur une slide** les réponses du fichier transmis `reponses-atelier test 1(3).csv` ; le CSV original est conservé dans `assets/reponses-atelier-test-1.csv`. Les réponses apparaissent dans une mise en page FollowU volontairement ancienne et épurée, avec le logo dans `assets/followu-logo.webp`. Les deux PowerPoint FollowU en une seule slide sont désormais **hébergés dans `assets/`**, avec leurs aperçus WebP haute définition. Les rubriques `Aujourd’hui` et `Demain` affichent les diapositives fidèles aux PowerPoint, ajustées à la fenêtre sans défilement. Le visuel `Hier / 01` peut être remplacé par `assets/hier-01-followu.png` si nécessaire. L'animation est définie dans `hier.js` et `hier.css`.

## Évolution

Ajouter les supports manquants ultérieurement sans modifier l’arborescence d’accueil, les rubriques ni les documents déjà intégrés.

## Présentations FollowU ajoutées

- **AUJOURD’HUI / 03 — Programme pédagogique IA (7 h, 1 slide)** : [Télécharger le PPTX](assets/programme-pedagogique-ia-followu-1-slide.pptx) ; [aperçu](assets/programme-pedagogique-ia-followu-1-slide.webp)
- **DEMAIN / 04 — Programme pédagogique Julien (6 h, 1 slide)** : [Télécharger le PPTX](assets/programme-pedagogique-julien-followu-1-slide.pptx) ; [aperçu](assets/programme-pedagogique-julien-followu-1-slide.webp)

La charte FollowU est conservée dans les fichiers eux-mêmes ; aucun autre document n'a été remplacé.

## Analyse / 05 et mini-pixels (novembre 2026)

La slide `assets/analyse-followu.svg` reproduit en SVG le visuel FollowU fourni : aujourd'hui IA seule / humain seul, demain modèle hybride IA + humain. Cette adaptation vectorielle permet de conserver la netteté sur un écran de projection. L'animation d'apparition des éléments du workspace a été renforcée (davantage de pixels et apparition plus différenciée). L'ouverture et la fermeture des fichiers restent instantanées, sans animation.

## Réorganisation du parcours (15 novembre 2026)

Le dossier ATELIER présente quatre modules : Hier / 01, Aujourd'hui / 03, Demain / 04 et Analyse / 05. Le module Hier / 02 a été retiré de la navigation. Son contenu est la **première diapositive d’Aujourd’hui**, avant le programme pédagogique IA existant. Un clic sur la slide ou les flèches du clavier permet d’alterner ces deux pages. Analyse / 05 conserve la comparaison FollowU en un écran, sans animation d'ouverture ni de fermeture.

## Ajustement brief et parcours (15 novembre 2026)

- BRIEF / 01, sommaire : le texte « Fichier sur le dossier de présentation » est remplacé par « Ma société de conseil WeAdvize est missionnée par le centre de formation FollowU pour optimiser l'intégration IA à la conception de ses programmes pédagogiques » ; le reste du contenu est conservé.
- ATELIER : Hier, Aujourd’hui et Demain occupent désormais trois blocs de largeur égale sur la première ligne ; Analyse est placé sur une ligne entière sous les trois étapes. Adaptation responsive conservée.

## Lien vérifiable vers le sommaire corrigé

Le fichier autonome [Sommaire atelier J4 corrigé](assets/sommaire-atelier-j4-corrige.html) reprend le sommaire visible dans BRIEF / 01 avec la nouvelle mission WeAdvize–FollowU et la mention « Fin de module 3 ». Le sommaire est également intégré dans le visualiseur de `index.html`. Les trois cartes Hier, Aujourd'hui, Demain sont de largeur égale en navigation ATELIER, Analyse occupant la largeur de la deuxième ligne.

## Logo loupe et quiz (15 novembre 2026)

- Logo WeAdvize de la barre supérieure : passage d'une loupe toutes les **5 secondes** avec agrandissement localisé du lettrage. Le mouvement est désactivé lorsque l'utilisateur préfère des animations réduites.
- Renumérotation sans changement des documents : **Hier / 01**, **Aujourd’hui / 02**, **Demain / 03**, **Analyse / 04**.
- Emplacement du quiz mi-parcours SharePoint : sa présence est indiquée dans Aujourd'hui / 02. L'URL participant exacte n'était pas fournie ni retrouvable au moment de la mise à jour ; un lien n'est activé qu'en renseignant `window.WEADVIZE_QUIZ_SHAREPOINT_URL` en tête du script. Le visualiseur affiche alors un bouton « Quiz mi-parcours » uniquement dans Aujourd’hui / 02. Ne jamais utiliser de lien inventé.
