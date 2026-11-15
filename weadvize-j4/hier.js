
(function(){
'use strict';
const icons={
person:'<svg viewBox="0 0 48 48"><circle cx="24" cy="11" r="8"/><path d="M8 40v-4c0-10 8-15 16-15s16 5 16 15v4c-8 7-24 7-32 0z"/></svg>',
target:'<svg viewBox="0 0 48 48"><circle cx="23" cy="25" r="17"/><circle cx="23" cy="25" r="9"/><path d="M23 25l17-17M34 8h7v7"/></svg>',
group:'<svg viewBox="0 0 48 48"><circle cx="23" cy="12" r="7"/><path d="M11 42V32c0-8 5-13 12-13s12 5 12 13v10z"/><circle cx="6" cy="22" r="4"/><path d="M2 39v-9c0-4 3-6 7-6"/><circle cx="42" cy="22" r="4"/><path d="M46 39v-9c0-4-3-6-7-6"/></svg>',
cap:'<svg viewBox="0 0 48 48"><path d="M3 17l21-11 21 11-21 11zM12 23v10c8 7 16 7 24 0V23M42 20v13"/></svg>',
cal:'<svg viewBox="0 0 48 48"><rect x="5" y="10" width="38" height="33" rx="3"/><path d="M5 20h38M15 5v10M33 5v10M14 28h5M27 28h5M14 36h5M27 36h5"/></svg>'
};
const bullets=arr=>'<ul>'+arr.map(([label,value])=>'<li><span><strong>'+label+' :</strong> '+value+'</span></li>').join('')+'</ul>';
const card=(title,icon,content,classes='')=>'<section class="wa-card '+classes+'"><div class="wa-card-head">'+icons[icon]+'<span>'+title+'</span></div><div class="wa-card-body">'+bullets(content)+'</div></section>';
const synthese=`<div class="slide retro-slide" aria-label="FollowU — Réponses au questionnaire, version historique, source CSV" data-source-file="assets/reponses-atelier-test-1.csv"><img class="retro-logo" src="assets/followu-logo.webp" alt="FollowU"><header class="retro-header"><h1>Réponses au questionnaire</h1><p>Fiche de recueil des besoins&nbsp; | &nbsp;Entreprise : Test 1&nbsp; | &nbsp;10/11/2026</p></header><div class="retro-columns"><div class="retro-column retro-column-1"><section class="retro-section"><h2>Identité du demandeur</h2><p class="retro-line"><strong>Entreprise / organisation :</strong> Test 1</p><p class="retro-line"><strong>Prénom / pseudonyme :</strong> ju</p><p class="retro-line"><strong>Fonction :</strong> gerant</p><p class="retro-line"><strong>Entretien envisagé :</strong> 2026-11-10</p></section><section class="retro-section"><h2>Public concerné</h2><p class="retro-line"><strong>Personnes à former :</strong> 8</p><p class="retro-line"><strong>Service :</strong> service formation</p><p class="retro-line"><strong>Expérience :</strong> ils concoivent eux-memes les programmes</p><p class="retro-line"><strong>Adaptations :</strong> Non</p><p class="retro-line"><strong>Aménagements :</strong> Non renseigné</p><p class="retro-line"><strong>Relais interne :</strong> le gérant, commanditaire</p></section></div><div class="retro-column retro-column-2"><section class="retro-section"><h2>Contexte de la demande</h2><p class="retro-line"><strong>Contexte :</strong> nouveaux outils IA pour conception de programmes de formation</p><p class="retro-line"><strong>Situation à faire évoluer :</strong> motiver les formateurs sur la pertinence et l'efficacité des outils IA de conception de programmes de formation</p><p class="retro-line"><strong>À l’origine :</strong> Direction générale</p><p class="retro-line"><strong>Précisions :</strong> tous les formateurs ne sont pas motivés ou convaincus de l'utilité de ces outils</p></section><section class="retro-section"><h2>Objectifs de la formation</h2><p class="retro-line"><strong>Résultats attendus :</strong> gain de productivité</p><p class="retro-line"><strong>Compétences :</strong> aisance sur les outils et utilisation systématique</p><p class="retro-line"><strong>Thèmes :</strong> nouvelles demandes clients</p><p class="retro-line"><strong>En fin de formation :</strong> utiliser les outils</p></section></div><div class="retro-column retro-column-3"><section class="retro-section"><h2>Organisation</h2><p class="retro-line"><strong>Durée :</strong> 7h</p><p class="retro-line"><strong>Période :</strong> 15 décembre 2026</p><p class="retro-line"><strong>Jours :</strong> lundi</p><p class="retro-line"><strong>Lieu :</strong> Dans l’entreprise</p><p class="retro-line"><strong>Format / lieu :</strong> salle de réunion</p><p class="retro-line"><strong>Matériel :</strong> pc ; wifi ; outils IA</p><p class="retro-line"><strong>Financement :</strong> je ne sais pas</p></section><section class="retro-section"><h2>Supports et suivi</h2><p class="retro-line"><strong>Supports :</strong> Non renseigné</p><p class="retro-line"><strong>Évaluation :</strong> Non renseigné</p><p class="retro-line"><strong>Suivi à 3–6 mois :</strong> gain de productivité</p><p class="retro-line"><strong>Autres informations :</strong> Non renseigné</p></section></div></div></div>`;
const followu=`<div class="slide fu-slide" aria-label="Formulaire de contact FollowU, aperçu fictif"><div class="fu-canvas">
<div class="fu-top-curve"></div><div class="fu-bottom-curve"></div>
<div class="fu-brand"><div class="fu-arc"></div><div class="fu-name">Follow<span>U</span></div><div class="fu-tagline">Centre de formation pour entreprises</div></div>
<div class="fu-form-panel"><div class="fu-envelope">✉</div><div class="fu-form-title">Contactez-nous</div>
<p class="fu-desc">Parlez-nous de votre projet de formation,<br>nous vous accompagnons avec une solution sur mesure.</p>
<div class="fu-field"><span class="fu-field-icon">▦</span>Nom de l’entreprise</div>
<div class="fu-field"><span class="fu-field-icon">✉</span>Email</div>
<div class="fu-field message"><span class="fu-field-icon">☏</span>Description de votre besoin</div>
<div class="fu-send">Envoyer <span>→</span></div>
</div></div></div>`;
function addTemplate(id,markup){const t=document.createElement('template');t.id='tpl-'+id;t.innerHTML=markup;document.body.appendChild(t)}
addTemplate('followu',followu);addTemplate('synthese',synthese);
/* Dès que les PNG d'origine sont déposés dans assets/, ils remplacent les reconstitutions HTML. */
function originalIfAvailable(id,path,alt){
  const img=new Image();
  img.onload=function(){
    const tpl=document.getElementById('tpl-'+id);
    if(!tpl)return;
    tpl.innerHTML='<div class="slide asset-full"><img src="'+path+'" alt="'+alt+'"></div>';
  };
  img.src=path;
}
originalIfAvailable('followu','assets/hier-01-followu.png','Formulaire de contact FollowU');
// Le support Hier / 02 reprend désormais la slide FollowU historique, sans ancien remplacement PNG.

function replaceCard(search,doc,title,description){const btn=document.querySelector('[data-missing="'+search+'"]');if(!btn)return;btn.removeAttribute('data-missing');btn.removeAttribute('data-parent');btn.setAttribute('data-doc',doc);const h=btn.querySelector('h2');if(h)h.textContent=title;const p=btn.querySelector('p');if(p)p.textContent=description;const s=btn.querySelector('.state');if(s){s.textContent='Disponible';s.classList.add('ready')}}
replaceCard('Page web fake test','followu','Formulaire de contact FollowU','Formulaire fictif · présentation plein écran.');
// La fiche de réponses est désormais la première page d’Aujourd’hui ; aucun module Hier / 02.

/* Effet de construction par mini-pixels, page par page.
   Ne s'applique jamais aux documents, ni à leur ouverture ou fermeture. */
window.workspacePagePixels={
 play:function(screen){
   if(!screen)return;
   const old=screen.querySelectorAll('.ui-pixel-target');
   old.forEach(function(el){
     el.classList.remove('ui-pixel-target','ui-pixel-animate');
     el.style.removeProperty('--ui-enter-delay');
     el.querySelectorAll(':scope > .ui-pixel-cloud').forEach(function(n){n.remove()});
   });
   if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
   const targets=[].slice.call(screen.querySelectorAll(
     '.intro > .eyebrow, .intro > h1, .intro > p, .folder-main, '+
     '.section-heading .eyebrow, .section-heading h1, .section-heading p, .section-count, '+
     '.cards > .card, .placeholder-card'
   ));
   targets.forEach(function(el,index){
     const delay=Math.min(index*185,1750);
     el.classList.add('ui-pixel-target');
     el.style.setProperty('--ui-enter-delay',delay+'ms');
     const cloud=document.createElement('span');
     cloud.className='ui-pixel-cloud';
     cloud.setAttribute('aria-hidden','true');
     const count=el.classList.contains('card')||el.classList.contains('folder-main')?92:48;
     for(let i=0;i<count;i++){
       const pixel=document.createElement('i');
       pixel.className='ui-pixel-point';
       // Positionnement déterministe : dispersé dans chaque composant, sans hasard visuel.
       const x=(i*61+index*17)%99,y=(i*29+index*11)%95;
       pixel.style.left=x+'%';
       pixel.style.top=y+'%';
       pixel.style.setProperty('--point-size',((i%5)+3)+'px');
       pixel.style.setProperty('--point-delay',((i*37)%350)+'ms');
       pixel.style.setProperty('--point-color',(i%6===0?'#202327':i%4===0?'#c6cbd0':'#f45b26'));
       cloud.appendChild(pixel);
     }
     el.appendChild(cloud);
   });
   requestAnimationFrame(function(){
     if(!screen.classList.contains('active'))return;
     targets.forEach(function(el){el.classList.add('ui-pixel-animate')});
   });
 }
};
})();