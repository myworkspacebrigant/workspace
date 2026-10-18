# WORKSPACE V17 — Version consolidée du 14 octobre 2026

## Référence et fidélité
Basé sur le ZIP utilisateur **WORKSPACE-V16-SANS-GO(1).zip**. Conservation du moteur de navigation BRIG / YOLO GROUP, des outils du groupe (Zeendoc, Benou, Yolo Heures, Gmail et réseaux sociaux), de la page NEURAL/Michel, du raccourci ChatGPT et de la commande vocale sans « go ». Ajout d'un tableau de bord, IMMO, modules agents dans Pilotage et commercial AGH.

## Évolutions présentes
- Tableau de bord local avec échéances et accès directs.
- YOLO → Pilotage → Super Agent : registre GitHub Issues en lecture publique + préparation d'une Issue non confidentielle par l'utilisateur. `data/evolutions.json` recense les demandes consolidées.
- YOLO → Pilotage → RH YOLO : missions, outils, règles de confidentialité.
- YOLO → Pilotage → Compta : emplacement Suivi activité quotidienne et accès au dernier email VIGIE sur Gmail ; preview intégrée non disponible tant qu'une authentification API n'est pas ajoutée.
- YOLO → Pilotage → Avis clients : points d'accès publics Google / Tripadvisor des six restaurants et cahier des charges des rapports mensuels ; rapports non automatisés.
- YOLO → Pilotage → Nouveautés IA : rubrique volontaire sans notifications, aucun signal non vérifié.
- YOLO → Pilotage → Agent Créa, Maintenance, projection d'équipes.
- YOLO → AGH → commercial : périmètre de veille et animations événementielles.
- BRIG conservé ; IMMO accessible séparément, liens OneDrive génériques.
- Todoist supprimé de la liste de connecteurs.
- Guides agents dans `agents/`.

## Connexions et limites de sécurité
L'application est une PWA statique **sans serveur d'identité ni backend privé**. Les comptes ChatGPT et Gmail connectés dans ChatGPT ne donnent pas accès à une page GitHub Pages. Le registre GitHub Issues n'est partagé qu'après création effective d'une Issue (lien avec validation de l'utilisateur). Les agents de conversations différentes n'émettent **pas** automatiquement d'issues. Le registre ne doit contenir aucune donnée RH / financière / confidentielle. Aucune authentification de 15 min ni déconnexion d'une plateforme externe ne peut être garantie sans backend et mécanismes d'authentification du fournisseur. Le site conserve uniquement des tâches et préférences **locales non chiffrées** : ne pas saisir de secrets.

## Publication / versions
Cette V17 est une version groupée : ne pas publier une nouvelle version pour chaque remontée. Les futures demandes seront suivies dans GitHub Issues et le Super Agent proposera des regroupements. Pour tester localement, lancer un serveur HTTP (ex. `python -m http.server 8000`) puis ouvrir `http://localhost:8000`. L'ouverture directe de fichiers HTML peut empêcher le chargement de certaines données JSON.
