(() => {
  const p=window.UNDER_FOREST,m=p.media;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const paragraph=key=>`<p>${esc(p.copy[key])}</p>`;
  const pending=label=>`<div class="forest-pending"><span>${esc(label)}</span><small>Asset to be supplied</small></div>`;
  const figure=(src,label)=>src?`<figure><img src="${esc(src)}" alt="${esc(label)}" loading="lazy" decoding="async"><figcaption>${esc(label)}</figcaption></figure>`:pending(label);
  const section=(n,title,body)=>`<section class="forest-section"><header><span>${n}</span><h2>${title}</h2></header>${body}</section>`;
  const allVideos=()=>!!(m.left&&m.middle&&m.right);
  const youtube=(url,label)=>'<div class="forest-youtube"><iframe src="'+esc(projectVideoEmbed(url))+'?rel=0" title="'+esc(label)+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div><a href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a>';
  function viewer(id){
    if(id==='forest-hero')return '<section class="forest-viewer forest-combined-player" aria-label="Full combined three-channel film">'+youtube(m.combined,'A Macro Odyssey — full combined three-channel film')+'</section>';
    return '<section class="forest-channel-grid" aria-label="Individual projection channels">'+[['left','Left'],['middle','Middle'],['right','Right']].map(([key,label])=>'<div><h3>'+label+' channel</h3>'+youtube(m[key],'A Macro Odyssey — '+label+' channel')+'</div>').join('')+'</section>';
  }
  const installationDiagram=()=>`<figure class="forest-diagram"><svg viewBox="0 0 650 320" role="img" aria-label="Schematic U-shaped installation: middle screen ahead, left and right screens around the audience"><path d="M135 230V65H515V230" fill="none" stroke="#91ab8e" stroke-width="9"/><path d="M145 90L300 220M500 90L350 220M325 78V198" stroke="#719ba5" stroke-dasharray="5 8" fill="none"/><circle cx="325" cy="237" r="20" fill="#d2bd8e"/><g fill="#e2e7d8" font-family="monospace" font-size="15"><text x="285" y="40">MIDDLE</text><text x="64" y="160">LEFT</text><text x="543" y="160">RIGHT</text><text x="280" y="292">AUDIENCE</text></g></svg><figcaption>Explanatory schematic of the supplied U-shaped arrangement; not an installation photograph.</figcaption></figure>`;
  const layersDiagram=()=>`<figure class="forest-diagram"><svg viewBox="0 0 650 330" role="img" aria-label="Exploded schematic of foreground, midground and background planes along the Z-axis"><g stroke-width="2"><path d="M270 50H550V200H270Z" stroke="#608792" fill="#163139"/><path d="M175 95H455V245H175Z" stroke="#92a67b" fill="#203c32"/><path d="M80 140H360V290H80Z" stroke="#cab783" fill="#35473a"/></g><g fill="#eef0df" font-family="monospace" font-size="16"><text x="290" y="80">Background</text><text x="195" y="125">Midground</text><text x="100" y="173">Foreground</text><text x="470" y="285">Z-axis →</text></g></svg><figcaption>Explanatory layer diagram based on the supplied process description.</figcaption></figure>`;
  function render(){
    const story=[['ENTER','The viewer enters a dark grass environment from ground level.'],['SEARCH','Layered plants move around the viewer as the path becomes narrower and less familiar.'],['IMPACT','A descending human foot becomes the visual and sonic climax.'],['ENDURE','The final view opens towards the sky, shifting the story from powerlessness towards biological resilience.']];
    return `<article class="underforest" aria-label="${esc(p.title)}">${viewer('forest-hero')}<header class="forest-header"><p>${p.year}</p><h1 tabindex="-1">${p.title}</h1><p class="forest-subtitle">${p.subtitle}</p><p>${p.tags}</p></header><dl class="study-info forest-info">${[['Created by',p.creators],['My contribution',p.role],['Tools',p.tools],['Format',p.subtitle]].map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`+
      section('01','Overview',`<div class="forest-two"><div>${paragraph('overview')}${paragraph('overview2')}</div>${figure(m.overview,'Final worm’s-eye-view still')}</div>`)+
      section('02','Concept — Culture shock',`<div class="forest-steps">${['Familiar Environment','Loss of Scale','Unseen Pressure','Adaptation'].map(s=>`<span>${s}</span>`).join('')}</div>${paragraph('concept')}${paragraph('concept2')}`)+
      section('03','Storyboard','<div class="forest-storyboards">'+Array.from({length:10},(_,i)=>figure('assets/works/macro-odyssey/storyboard-'+String(i+1).padStart(2,'0')+'.png','Storyboard '+String(i+1).padStart(2,'0')+' — Left / Middle / Right')).join('')+'</div>')+
      section('04','Spatial installation',installationDiagram()+paragraph('spatial')+paragraph('spatial2')+'<div class="forest-steps"><span>Peripheral Vision</span><span>Architectural Scale</span><span>Shared Spatial Experience</span></div>')+
      section('05','Visual development',figure(m.final,'Final composited environment')+paragraph('visual')+`<div class="forest-grid">${figure(m.reference,'Worm’s-eye-view reference photography')}${figure(m.assets,'Grass, flower, tree and mushroom assets')}${figure(m.colour,'Dark environmental colour tests')}</div>`)+
      section('06','From multiplane to 360°','<div class="forest-steps"><span>2D MULTIPLANE ENVIRONMENT</span><span aria-hidden="true">→</span><span>360° PRACTICAL CLIMAX</span></div>'+paragraph('multiplane')+paragraph('practical'))+
      section('07','Technical breakdown',`<div class="forest-grid">${[['Asset Preparation','Layered images prepared in Photoshop'],['Depth and Movement','Assets arranged and animated along the Z-axis in After Effects'],['Three-Channel Composition','The completed environment divided and adjusted for Left, Middle and Right projections']].map(([h,t])=>`<div><h3>${h}</h3><p>${t}</p></div>`).join('')}</div>`+layersDiagram())+
      section('08','Transition development',(m.transition?`<video class="forest-excerpt" src="${esc(m.transition)}" controls playsinline preload="none" aria-label="Multiplane to 360-degree transition comparison"></video>`:pending('Multiplane → 360° transition comparison'))+paragraph('transition'))+
      section('09','Three-screen composition problem',`<div class="forest-two">${figure(m.before,'Centre screen — before adjustment')}${figure(m.after,'Centre screen — after adjustment')}</div>`+paragraph('composition')+paragraph('vignette'))+
      section('09b','Challenge — Black Box projection setup','<p>'+esc("Another technical challenge we encountered involved the three-screen setup within the Black Box. The existing configuration featured the left screen on one wall, while the center and right screens were placed together on an adjacent wall. However, to better suit our project’s narrative and immersive quality, a continuous 'U-shaped' layout—where each video is projected independently onto three surrounding walls—was required. To overcome this spatial limitation, we had to install and calibrate additional independent projectors to deliver the intended visual experience rather than relying on the default theater setup.")+'</p><div class="forest-projector-tests">'+figure('assets/works/macro-odyssey/projector-test-01.png','Independent projector setup and connection test')+figure('assets/works/macro-odyssey/projector-test-02.png','Projection alignment and calibration test')+'</div>'+figure(m.poster,'Final calibrated three-screen installation at RMIT Black Box'))+
      section('10','Sound and presence','<div class="forest-sound-map" role="img" aria-label="Conceptual sound map: left environment, central pathway and footstep, right environment"><span>Left environment</span><span>Pathway · Footstep</span><span>Right environment</span></div><p class="forest-caption">Conceptual sound map; exact speaker routing to be confirmed.</p>'+paragraph('sound')+paragraph('sound2'))+
      section('11','AI and source-material disclosure',paragraph('ai')+paragraph('ai2'))+
      section('12','Final outcome',figure(m.poster,'Final three-screen installation at RMIT Black Box')+viewer('forest-final'))+
      section('13','Reflection',paragraph('reflection')+paragraph('reflection2'))+
      section('14','Credits',`<p>Created by ${p.creators}</p><p>Visual development, animation, compositing and editing: ${p.creators}</p><p>Format: ${p.subtitle}</p><p>Tools: ${p.tools}</p><div class="forest-credit-pending"><p>External sound and licences: to be supplied.</p><p>External footage and licences: to be supplied.</p><p>AI tools, models and generated-source credits: to be supplied.</p><p>Reference photography and other source material: credits to be supplied.</p></div>`)+ '</article>';
  }
  const item=DATA.animation.find(x=>x.id==='odyssey');
  Object.assign(item,{title:p.title,subtitle:p.subtitle,year:p.year,tags:p.tags.split(' · '),cover:m.poster,video:m.combined});
  const original=window.renderDossier;
  window.renderDossier=(item,cat)=>{
    const html=original(item,cat);if(item.id!=='odyssey')return html;
    const t=document.createElement('template');t.innerHTML=html;
    const paper=t.content.querySelector('.article-paper');paper.classList.add('underforest-paper');
    paper.querySelector('.portfolio-study').outerHTML=render();
    return t.innerHTML;
  };
  let mounted=[];
  const format=t=>`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,'0')}`;
  new MutationObserver(()=>{
    mounted.forEach(controller=>controller.destroy());mounted=[];
    document.querySelectorAll('[data-forest-viewer]').forEach(view=>{
      const videos=[...view.querySelectorAll('.forest-triptych video')];
      const full=view.querySelector('[data-fullscreen]');
      full.onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else if(view.requestFullscreen)await view.requestFullscreen();else view.querySelector('[data-status]').textContent='Fullscreen is unavailable here. Rotate your device for a wider view.';}catch{view.querySelector('[data-status]').textContent='Fullscreen is unavailable here. Rotate your device for a wider view.';}};
      if(videos.length!==3)return;
      const play=view.querySelector('[data-play]'),timeline=view.querySelector('[data-timeline]'),sound=view.querySelector('[data-sound]');
      let state;
      const controller=window.createForestTransport(videos,next=>{
        state=next;play.textContent=next.wanted?'Pause':'Play';timeline.disabled=!next.duration;timeline.max=next.duration;timeline.value=next.time;
        view.querySelector('[data-time]').textContent=`${format(next.time)} / ${format(next.duration)}`;
        sound.textContent=next.muted?'Enable sound':'Mute sound';sound.setAttribute('aria-pressed',String(!next.muted));
        if(next.playing)view.querySelector('.forest-poster')?.setAttribute('hidden','');
        if(next.message)view.querySelector('[data-status]').textContent=next.message;
      });
      mounted.push(controller);
      play.onclick=()=>{if(state.wanted)controller.pause();else{mounted.filter(c=>c!==controller).forEach(c=>c.pause());controller.play();}};
      timeline.oninput=()=>controller.seek(timeline.value);sound.onclick=()=>controller.sound();
    });
  }).observe(document.getElementById('ov-body'),{childList:true});
})();
