(() => {
 const item=DATA.animation.find(x=>x.id==='wof');
 item.title='Water, out of form';item.year='2026';item.subtitle='Public Screen Motion';
 // Only confirmed source material is shown; final and exhibition assets can be added here.
 const root='assets/works/water-out-of-form/';
 const m=window.WATER_MEDIA=Object.assign(window.WATER_MEDIA||{},{finalVideo:'https://youtu.be/rxcxt6Gfa28',exhibitionVideo:'https://youtu.be/yX-gTYs1jfw',exhibitionPhoto:root+'fed-square-screening.jpg'});
 item.video=m.finalVideo;
 const p=s=>`<p class="case-copy">${s}</p>`;
 const section=(title,content,cls='')=>`<section class="case-section ${cls}"><h2>${title}</h2>${content}</section>`;
 const img=(src,caption)=>src?`<figure class="case-figure"><img src="${src}" alt="${caption}" loading="lazy"><figcaption>${caption}</figcaption></figure>`:'';
 const video=(src,label,loop=false)=>{
  if(!src)return '';
  const embed=projectVideoEmbed(src);
  return `<div class="case-video">${embed?`<iframe src="${embed}?controls=1&rel=0" title="${label}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`:`<video src="${src}" aria-label="${label}" controls playsinline preload="metadata" ${loop?'loop muted':''}></video>`}</div>`;
 };
 const info=[['Created by','Thuy An Ngo and Julie Noh'],['My contribution','Concept Development, Filming, Motion Graphics, Editing and Compositing'],['Tools','After Effects and Premiere Pro'],['Outcome','Selected for a one-week public screening at Fed Square']];
 const original=window.renderDossier;
 window.renderDossier=(project,cat)=>{
  if(project.id!=='wof')return original(project,cat);
  const t=document.createElement('template');t.innerHTML=original(project,cat);
  const paper=t.content.querySelector('.article-paper');paper.classList.add('editorial-paper');
  const hero=video(m.finalVideo,'Water, out of form — original footage')||img(m.finalStill,'Water and numerical imagery')||'<div class="water-film-pending" role="status">Final film to be added</div>';
  let html=`<article class="case-study water-case"><header class="case-hero">${hero}<div class="case-hero-title"><span>2026</span><h1>Water, out of form</h1><span>Public Screen Motion</span></div></header><div class="case-under"><p>Digital Facades · Motion Design</p><button class="dossier-back" onclick="backToIndex('animation')">← album</button></div><dl class="case-information">${info.map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`;
  html+=section('Overview',`<div class="water-editorial-intro">${img(m.exhibitionPhoto,'Digital Facades, Fed Square')}<div>${p('<em>Water, Out of Form</em> is an experimental motion work I created in collaboration with Julie Noh as part of the Digital Facades course at RMIT University. Screened at Fed Square, the project explores Moore’s Paradox through the visual tension between numbers and water.')}</div>${img(m.finalStill,'Water and numerical imagery')}</div>`);
  html+=section('Moore paradox',p('Moore’s Paradox is about the difference between what someone says and what they believe. It happens when a person says something but also admits they do not believe it. Both statements can be true, but saying them together creates a contradiction.')+`<div class="water-paradox"><video src="${root}water-loop.webm" autoplay muted loop playsinline aria-hidden="true"></video><div><h3>CERTAINTY</h3><span>Numbers · Fixed · Measurable · Logical</span></div><span>versus</span><div><h3>BELIEF</h3><span>Water · Fluid · Unstable · Changing</span></div></div>`);
  html+=section('Concept: numbers and water',video(m.numericLoop,'Numerical forms disturbed by water',true)+p('Numbers were selected to represent certainty because they are usually fixed, exact and measurable. Water was used to suggest emotion and instability because it constantly moves, changes shape and responds to its surroundings.')+p('When fixed numerical forms are placed inside moving water, their meaning becomes visually unstable. This contrast became a metaphor for the conflict between certainty, expression and belief.'));
  html+=section('Visual experiments','<div class="water-experiments">'+['bubbles3','bubbles','bubbles6'].map((name,i)=>'<figure><video src="'+root+name+'.mp4" autoplay muted loop playsinline preload="none" aria-label="Water visual experiment '+(i+1)+'"></video><figcaption>Experiment 0'+(i+1)+'</figcaption></figure>').join('')+'</div>','case-process');
  html+=section('Filming and material collection','<div class="water-collection">'+img(root+'collection-01.png','Water footage collection — locations and textures')+img(root+'collection-02.png','Water footage collection — reflections and movement')+'</div>'+p('Different forms of water were filmed and collected to explore reflection, transparency, distortion and movement. The footage became the physical material through which the fixed numerical forms could be disrupted.'));
  html+=section('Motion and compositing',`<div class="case-grid">${img(root+'process-original.png','01 — Original water footage')}${img(root+'process-contrast.png','02 — Black-and-white contrast')}${img(root+'process-ascii.png','03 — ASCII composition')}</div>`+p('The filmed material and motion graphics were combined in After Effects. The footage was converted to black and white, with increased contrast to bring out the details of the water. An ASCII effect was then applied across all footage using an adjustment layer. The final composition and editing were completed in Adobe Premiere Pro.'),'case-process');
  html+=section('Screening at Fed Square',video(m.exhibitionVideo,'Water, out of form playing at Fed Square'));
  html+=section('Final outcome',video(m.finalVideo,'Water, out of form — original footage')+`<div class="case-grid">${img(m.fixed,'Fixed Form')}${img(m.unstable,'Visual Instability')}${img(m.outOfForm,'Out of Form')}</div>`);
  html+=section('Reflection',p('This project developed my skills in filming, motion graphics, editing and compositing. It also strengthened my experience in collaboration and taught me how an abstract theoretical idea could be translated into a clear visual system.')+p('Designing for Fed Square changed how I considered scale, pacing and viewing distance. The work needed to function not only as a video, but as part of an architectural and public environment.'),'case-reflection');
  html+=section('Credits',p('Created by Thuy An Ngo and Julie Noh')+p('My contribution: Concept Development, Filming, Motion Graphics, Editing and Compositing')+p('Tools: Adobe After Effects and Adobe Premiere Pro')+p('Context: Digital Facades, RMIT University')+p('Outcome: Public screening at Fed Square, 2026')+'<p class="water-reference">Research: <a href="https://plato.stanford.edu/entries/assertion/" target="_blank" rel="noopener noreferrer">Stanford Encyclopedia of Philosophy — Assertion and Moore’s Paradox</a></p><p class="water-reference">Music, sound and external material credits: to be confirmed.</p>','case-credits');
  paper.innerHTML=html+'</article>';return t.innerHTML;
 };
})();
