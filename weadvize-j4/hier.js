
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
const synthese=`<div class="slide wa-slide" aria-label="Synthèse du besoin – Atelier Test 1">
<div class="wa-orange-corner"></div><div class="wa-orange-foot"></div>
<header class="wa-hero"><div class="wa-logo">We<span>Advize</span></div><div class="wa-head-divider"></div><div><div class="wa-title">Recueil du besoin – Atelier Test 1</div><div class="wa-subtitle">Synthèse de la réponse questionnaire</div></div></header>
<div class="wa-grid"><div class="wa-grid-top">
${card('Identification','person', [['Entreprise','Test 1'],['Contact','ju'],['Fonction','gerant'],['Date de l’entretien','10 novembre 2026']])}
${card('Contexte & problématique','target', [['Contexte','nouveaux outils IA pour conception de programmes de formation'],['Situation à faire évoluer',"motiver les formateurs sur la pertinence et l'efficacité des outils IA de conception de programmes de formation"],['Origine de la demande','Direction générale'],['Précision',"tous les formateurs ne sont pas motivés ou convaincus de l'utilité de ces outils"]],'context')}
${card('Public concerné','group', [['Nombre de personnes','8'],['Service concerné','service formation'],['Niveau actuel','ils concoivent eux-memes les programmes'],['Adaptations à prévoir','Non'],['Relais interne','le gérant, commanditaire']])}
</div><div class="wa-grid-bottom">
${card('Objectifs pédagogiques','cap', [['Résultat attendu','gain de productivité'],['Compétences à développer','aisance sur les outils et utilisation systématique'],['Thèmes à aborder','nouvelles demandes clients'],['À l’issue de la formation','utiliser les outils'],['Suivi à froid (3 à 6 mois)','gain de productivité']])}
${card('Organisation','cal', [['Durée envisagée','7h'],['Date souhaitée','15 décembre 2026'],['Jour privilégié','lundi'],['Lieu',"Dans l'entreprise"],['Format / salle','salle de réunion'],['Moyens disponibles','pc, wifi, outils IA'],['Financement','je ne sais pas'],['Supports participants','Non renseigné'],['Évaluation des acquis','Non renseigné']],'tight')}
</div></div></div>`;
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
originalIfAvailable('synthese','assets/hier-02-synthese.png','Synthèse du besoin – Atelier J4');

function replaceCard(search,doc,title,description){const btn=document.querySelector('[data-missing="'+search+'"]');if(!btn)return;btn.removeAttribute('data-missing');btn.removeAttribute('data-parent');btn.setAttribute('data-doc',doc);const h=btn.querySelector('h2');if(h)h.textContent=title;const p=btn.querySelector('p');if(p)p.textContent=description;const s=btn.querySelector('.state');if(s){s.textContent='Disponible';s.classList.add('ready')}}
replaceCard('Page web fake test','followu','Formulaire de contact FollowU','Formulaire fictif · présentation plein écran.');
replaceCard('Hier','synthese','Synthèse du besoin','Recueil du besoin · 1 diapositive.');
/* Transition pixelisée strictement limitée au module activé. */
const reducedMotion=window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
let moduleBusy=false;
window.modulePixelMotion={
  play:function(module,done){
    if(!module || (reducedMotion && reducedMotion.matches)){done();return;}
    if(moduleBusy)return;
    moduleBusy=true;
    const layer=document.createElement('span');
    layer.className='module-pixel-layer';
    layer.setAttribute('aria-hidden','true');
    const ncols=16,nrows=7;
    for(let i=0;i<ncols*nrows;i++){
      const pixel=document.createElement('span');
      pixel.className='module-pixel';
      const col=i%ncols,row=Math.floor(i/ncols);
      const tone=(col*13+row*7)%27;
      pixel.style.background=tone<9?'#f45b26':tone<15?'#ffae82':tone<23?'#ffffff':'#272a30';
      pixel.style.setProperty('--px-x',((col-7.5)*1.8)+'px');
      pixel.style.setProperty('--px-y',((row-3)*3.5)+'px');
      pixel.style.setProperty('--px-rotate',((i%9)-4)*5+'deg');
      pixel.style.animationDelay=(col*9+row*13)+'ms';
      layer.appendChild(pixel);
    }
    module.classList.add('module-transitioning');
    module.appendChild(layer);
    // La navigation se fait uniquement à la fin de l'animation de la carte.
    setTimeout(function(){
      try{done()}finally{
        layer.remove();
        module.classList.remove('module-transitioning');
        moduleBusy=false;
      }
    },510);
  }
};
})();