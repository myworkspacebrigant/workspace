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
  - Aujourd’hui — Programme pédagogique IA : intégré à partir du PDF fourni
  - Demain — Programme pédagogique Julien : intégré à partir du PDF fourni
  - Analyse : en attente du support

## Présentation à l’écran

Chaque document disponible s’ouvre dans un visualiseur sans défilement vertical, à l’échelle de la fenêtre du navigateur (format de référence 16:9).

- Le seul bouton visible dans le visualiseur est **« ← Retour »**, en haut à droite.
- Le document « Déroulé pédagogique J4 » comporte **2 diapositives**. Cliquez sur la diapositive ou utilisez **→** pour la suivante, **←** pour la précédente, sans scroller.
- Utilisez **Échap** pour quitter la présentation et revenir au dossier.
- À chaque ouverture d’une page de navigation (accueil, Workspace, BRIEF, ATELIER), **les titres, textes et modules apparaissent successivement avec des mini-pixels**. Les documents s’ouvrent et se ferment immédiatement, sans animation. Les préférences de réduction de mouvement sont respectées.
- La charte du site suit les documents transmis : **fond blanc, orange, noir, gris, titres marqués et deux colonnes**.

Les supports de projection sont **reproduits en HTML et CSS**, sans défilement et avec un affichage net sur vidéoprojecteur. Le module `Hier / 02` présente **sur une slide** les réponses du fichier transmis `reponses-atelier test 1(3).csv` ; le CSV original est conservé dans `assets/reponses-atelier-test-1.csv`. Les réponses apparaissent dans une mise en page FollowU volontairement ancienne et épurée, avec le logo dans `assets/followu-logo.webp`. Le PPTX binaire n'est pas hébergé dans le dépôt. Le visuel `Hier / 01` peut être remplacé par `assets/hier-01-followu.png` si nécessaire. L'animation est définie dans `hier.js` et `hier.css`.

## Évolution

Ajouter les supports manquants ultérieurement sans modifier l’arborescence d’accueil, les rubriques ni les documents déjà intégrés.
