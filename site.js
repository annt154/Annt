
// ── DATA (nội dung thật lấy từ hồ sơ portfolio của An) ──
const KANJI = { animation: '', film: '', graphic: '', ui: '' };
const CAT_LABEL = { animation: 'Motion design', film: 'Production', graphic: 'Graphic design', ui: 'UI / UX', archive: 'All works / Archive', contact: 'Contact' };

const DATA = {
  animation: [
    { id:'wof', video:'', title:'Water, out of form', subtitle:'Public Screen Motion · Digital Facades, Fed Square', year:'2026', age:'20',
      tags:['Motion design','Collaboration','After Effects','Premiere Pro'],
      cover:'assets/works/wof-cover.jpg', gallery:['assets/works/wof-1.jpg','assets/works/wof-2.jpg'],
      sections:[
        {h:'Overview', p:`Water Out of Form is an experimental motion project created by Thuy An Ngo and Julie Noh for the Digital Facades screen at Fed Square. The project responds to Moore's Paradox through the contrast between numbers and water.`},
        {h:'Concept', p:`Moore's Paradox explores the uncomfortable relationship between what someone says and what they actually believe. The two ideas can exist in the same sentence, but they appear to contradict each other. To create a visual response to this paradox, the project brings together two opposite forms: numbers and water. Numbers are usually fixed, exact and logical — used to measure and create certainty. Water is fluid, emotional and constantly changing; it has no permanent shape and takes the form of whatever contains it. When numbers are placed inside moving water, their fixed meaning becomes unstable. This tension becomes a visual metaphor for the conflict between certainty and belief.`},
        {h:'Visual Development', p:`The visual process began with research into Moore's Paradox, followed by experiments with water, numbers, reflections and movement. Different forms of water footage were collected and tested with typography and numerical imagery. The timing and composition were also designed for a large public screen, where the work would be viewed from different distances and positions.`},
        {h:'Making the Work', p:`The project was developed collaboratively through research, filming, visual experiments and editing. My contribution included co-developing the concept, filming visual material, creating motion graphics, editing and compositing the final sequence using After Effects and Premiere Pro.`},
        {h:'Final Outcome', p:`The completed work was selected for public screening at Federation Square for a week. Seeing the animation at an architectural scale showed how screen size, viewing distance and the surrounding public environment can change the experience of a motion work.`},
        {h:'Reflection', p:`This project developed my skills in filming, editing, motion graphics and compositing. It also strengthened my experience in collaboration and taught me to consider how abstract ideas can be communicated through contrasting visual forms.`}
      ] },
    { id:'ud', video:'', title:'Endless lullaby', subtitle:'Experimental Multisensory Animation', year:'2025', age:'19',
      tags:['2D Animation','Procreate','After Effects','Sound Design'],
      cover:'assets/works/Uncannydoll.png', gallery:['assets/works/ud-1.jpg','assets/works/ud-2.jpg'],
      sections:[
        {h:'Overview', p:`Uncanny Doll is an experimental animation about childhood trauma and a fictional cycle of repeated harm. The story begins with a child whose bodily boundaries are violated. Later, the same character grows up and repeats this harm towards another child, continuing the cycle rather than escaping it. Created with My Le, with sound design by [tên Sound Designer].`},
        {h:'Responding to the Brief', p:`The brief asked each group to select an experience and explore how it could be heightened through different forms of media. Our group chose the "uncanny" because it is not a single visual style or emotion — it sits between familiarity and discomfort. Something appears almost normal, but one small detail makes it feel wrong. The project aimed to heighten this feeling through both visual and audio elements rather than relying on a traditional horror story.`},
        {h:'Concept: The Uncanny Valley', p:`The concept was influenced by the uncanny valley — the discomfort caused by something that looks almost human but is not fully alive. Dolls were suitable for this idea because they have human faces, bodies and expressions, yet remain still objects; connected to childhood and play, but also unsettling. The initial doll idea came from [tên Collaborator] and was developed collaboratively into an experimental animation.`},
        {h:'Visual Development', p:`The visual compositions move between playful and uncomfortable imagery. Familiar dolls and toys are repeated, enlarged and placed in unusual arrangements to slowly disturb their original meaning. My contribution included developing the main compositions, illustrating the dolls and toy assets in Procreate, contributing to the storyboard and planning how the atmosphere would change throughout the animation.`},
        {h:'Making the Animation', p:`The illustrated assets were separated into layers before being animated in After Effects. I helped with illustrating, animating as well as compositing in Premiere Pro. Sound was developed alongside the visuals — repetition, silence and distorted audio were used to make small movements feel more intense and unsettling.`},
        {h:'Final Outcome', p:`The final work combines digital illustration, animation and sound to transform familiar childhood objects into an uncanny multisensory experience. Uncanny Doll was showcased at the end-of-semester BLACK BOX exhibition.`},
        {h:'Reflection', p:`This project taught me that a multisensory experience is not created by simply adding sound to an image — movement, timing, silence and audio need to work together to shape the audience's physical and emotional response. It also helped me learn how to develop a collaborator's original idea while making a clear contribution.`}
      ] },
    { id:'sun', video:'', title:'The solar cycle', subtitle:'Independent Short Animation', year:'2026', age:'20',
      tags:['Short Animation','Tarot Symbolism','Solar Metaphor'],
      cover:'assets/works/sun-cover.jpg', gallery:['assets/works/sun-1.jpg','assets/works/sun-2.jpg'],
      sections:[
        {h:'Overview', p:`The Sun is an independent short animation that uses the solar system as a metaphor for a relationship between a mother and her children. The Sun represents the mother, while the planets represent her children. Their changing distance from the Sun shows how parental love can move from warmth and protection towards possessiveness, emotional control and separation.`},
        {h:'Why the Sun Represents the Mother', p:`The Sun gives the planets light, warmth and the conditions needed for life — in the same way, a mother can become the first source of care, safety and emotional support in a child's life. The planets depend on the Sun, but also need the correct distance to survive: too far and they lose its warmth, too close and the same warmth can burn and destroy them. This balance became a metaphor for parental love — care is necessary, but too much closeness can become control.`},
        {h:'Why the Planets Represent the Children', p:`The planets represent the children because they grow within the Sun's system and remain connected to it through their orbits. At first the orbit represents safety and family connection; later it becomes a fixed path the children are not allowed to leave. The planets also reflect the Sun's light rather than creating their own — the mother begins to see this reflection as proof that she is still needed, and when the planets seek independence, she experiences it as rejection.`},
        {h:'Story', p:`At the beginning, the Sun is warm, bright and nurturing. Over time, she becomes afraid of losing her children — her light grows stronger, her gravity more controlling. What begins as protection slowly becomes emotional pressure. The Sun eventually becomes a Red Giant and consumes the planets closest to her — a love that has become possessive, leaving no space for the children to exist independently. After losing the planets, the Sun becomes a White Dwarf, then a Black Dwarf, alone in the solar system — the isolation created by the need to control others.`},
        {h:'Tarot Symbolism', p:`The tarot imagery follows the Sun's emotional transformation. The Sun card represents warmth, vitality, innocence and parental care. The Devil represents attachment, possessiveness, guilt and emotional control. The change from The Sun to The Devil shows that love itself is not the problem — the problem begins when love is used to control another person and prevent them from forming an independent identity.`},
        {h:'Meaning', p:`The animation asks when protection becomes control, and when closeness begins to remove another person's freedom. Distance is not always rejection — for the planets, and for the children, it can be a necessary part of growing into an independent identity.`}
      ] },
    { id:'eeaao', video:'https://youtu.be/xrkjRBgM2Lc', title:'Everything everywhere all at once', subtitle:'', year:'2023 Feb', age:'[Tuổi]',
      tags:['Motion design','After Effects','Title Sequence'],
      cover:'assets/works/eeaao-cover.jpg', gallery:['assets/works/eeaao-1.jpg','assets/works/eeaao-2.jpg'],
      sections:[
        {h:'Overview', p:`This project is an unofficial title-sequence study inspired by Everything Everywhere All at Once. The sequence uses the film's main symbols, colours and multiverse structure to move from chaos and nihilism towards connection and hope.`},
        {h:'Analysing the Main Symbols', p:`The concept focuses on two contrasting symbols: the Everything Bagel and the googly eye. The Bagel is dark, circular and visually similar to a black hole — it represents nihilism, the belief that nothing has meaning. The googly eye reverses this image; its white surface and black centre suggest a more playful, optimistic way of seeing the same world. Together, the two symbols create a visual Yin–Yang: giving up because nothing matters, or choosing kindness because meaning can still be created.`},
        {h:'Narrative Structure', p:`The title sequence moves through changing colours, symbols and layers to represent verse-jumping across the multiverse. Although it begins with visual chaos, it gradually returns to the simple relationship between the characters — reflecting the film's movement from an overwhelming universe towards a human, emotional centre.`},
        {h:'Visual Language', p:`Bright and saturated colours represent the different universes and the constant movement between them. These colours are balanced with the black-and-white design of the Bagel and googly eye, keeping the main philosophy visible even as the compositions grow more chaotic.`},
        {h:'Learning After Effects', p:`This was my first major project using After Effects. At the beginning, I found keyframes and the animation timeline difficult. Through testing and repetition, I learned to use keyframes, masking and layered compositions to transform static symbols into moving sequences, later adding timing and easing to connect the motion with the rhythm of the soundtrack.`},
        {h:'Reflection', p:`This project was an important starting point in my motion-design practice. It taught me the basic structure of After Effects while showing me how a title sequence can communicate the themes of a film rather than only displaying its name and credits.`}
      ] },
    { id:'fresh', video:'', title:'Fresh up', subtitle:'AI-Assisted Experimental Commercial', year:'2025', age:'19',
      tags:['Director','AI-Generated Footage','VHS Effects','Sound Design'],
      cover:'assets/works/fresh-cover.jpg', gallery:['assets/works/fresh-1.jpg','assets/works/fresh-2.jpg'],
      sections:[
        {h:'Overview', p:`Fresh Up is an experimental commercial investigating visceral design and cross-modal perception — the way one sense can influence another and create a physical response in the body. The project uses food imagery, movement and sound to make the viewer imagine a taste and texture without physically experiencing it.`},
        {h:'Concept', p:`To me, "visceral" means something felt in the gut before it is fully understood by the mind. Food became the main subject because our senses are trained by it every day — from appearance alone, the body can already predict how something should taste. Toothpaste and cream look similar in colour, shape and texture, but their tastes and purposes are completely different: this visual similarity creates attraction, while the difference in taste creates discomfort. By placing mint toothpaste on greasy pizza and other familiar foods, the project interrupts the viewer's sensory expectations.`},
        {h:'Cross-Modal Perception', p:`The images encourage the viewer to imagine taste through sight. Sound then strengthens this imagined experience through wet, sticky and slurping textures — together, image and sound make the body react before the viewer has time to fully process the scene.`},
        {h:'Visual Development', p:`The visual direction was inspired by 1990s infomercials. Bright product shots and exaggerated presentation initially make the commercial appear familiar and trustworthy; VHS noise, unusual colour and excessive close-ups gradually make this reality feel raw, intimate and unsettling.`},
        {h:'Making the Work', p:`As Director and Post-Production Lead, I managed the AI prompt development, footage selection, editing and VHS effect layering. AI was used to generate detailed food imagery; the colours were later processed through Hue-to-Hue mapping for greater consistency between clips from different generations.`},
        {h:'Sound Design', p:`Sound was treated as an important part of the visceral experience rather than background decoration. Layered slurping, sticky and wet textures were synchronised with the movement of the food to amplify the imagined taste.`},
        {h:'Reflection', p:`Fresh Up showed me how visual and audio information can work together to trigger a bodily reaction. It also taught me that AI-generated footage needs strong direction and post-production — the final experience came from the concept, selection, colour treatment, editing and sound, not from the generated images alone.`}
      ] }
,
    { id:'beyond', video:'', title:'Beyond the frame', subtitle:'Experimental Film', year:'2025', age:'19',
      tags:['Solo Project','Cinematography','VFX','Sound Design'],
      cover:'assets/works/TheOdyssey.jpeg', gallery:['assets/works/beyond-1.jpg','assets/works/beyond-2.jpg'],
      sections:[
        {h:'Overview', p:`Beyond the Frame is a solo experimental film exploring the sublime — the feeling created when fear, beauty and awe exist at the same time. The project marked a change in my creative practice: instead of using fear only to create discomfort, the work uses it as a path towards wonder, liberation and transcendence.`},
        {h:'Concept: The Sublime', p:`The concept was influenced by the theories of Edmund Burke and Immanuel Kant. The sublime appears when a person encounters something so vast, powerful or unfamiliar that it cannot be fully understood — the experience may begin with fear, but can later become awe once the viewer realises they are observing it from a place of safety. Beyond the Frame follows this emotional movement, beginning within a limited, familiar visual space before gradually expanding into something larger and more overwhelming.`},
        {h:'Visual Development', p:`Slow camera movements and quiet natural imagery create a calm beginning. As the film develops, the frame becomes brighter, wider and less physically defined. The transition into an infinite white space represents movement beyond limitation — instead of a clear destination, the empty space lets the viewer imagine something larger than the visible frame.`},
        {h:'The Starburst Effect', p:`The starburst sequence was inspired by the wormhole scene in 2001: A Space Odyssey. It began as a technical experiment in stretching light, colour and movement beyond the edges of the frame, later becoming the main transition between the physical environment and the abstract white space — a release from the boundaries of the original frame, a shift from fear towards awe.`},
        {h:'Sound Design', p:`The sound begins with soft, familiar natural recordings that gradually develop into a wider, more overwhelming soundscape. Layering, volume and spatial depth were used to make the environment feel as though it was expanding beyond the screen.`},
        {h:'Making the Work', p:`Beyond the Frame was completed as a solo project. I handled all stages of production, including cinematography, editing, colour grading, visual effects and sound-design layering.`},
        {h:'Reflection', p:`This project changed how I understood fear within my creative practice. Fear does not always need to end in discomfort; it can also lead towards curiosity, freedom and awe. The process also strengthened my confidence in cinematography, colour grading, visual effects and sound design.`}
      ] }
  ],
  film: [
    { id:'regret', video:'https://youtu.be/eg-NIBCqQ-k', title:'Regret', subtitle:'Solo Cinematic Short Film', year:'[Year]', age:'18',
      tags:['Solo Project','Premiere Pro','After Effects'],
      cover:'assets/works/regret-cover.jpg', gallery:['assets/works/regret-1.jpg','assets/works/regret-2.jpg'],
      sections:[
        {h:'Overview', p:`Regret is a personal short film exploring memory, remorse and the repetitive thoughts that follow a past decision. It was my first solo cinematic project, independently developed from the initial story to the final edit.`},
        {h:'Concept', p:`The film presents regret as a psychological loop. A memory may belong to the past, but the mind continues returning to it, imagining what could have happened differently. Instead of directly explaining the event, the film uses atmosphere, objects and repeated images to communicate the protagonist's emotional state.`},
        {h:'Visual Symbols', p:`A white flower, a handwritten diary and an old-fashioned television appear throughout the film. The white flower represents a memory that was once pure but has become fragile. The diary holds thoughts that cannot be spoken, while the television acts as a screen through which the past continues to return. Together, these objects show how memory can become fragmented, distant and difficult to escape.`},
        {h:'Storyboarding', p:`A complete storyboard was developed before filming to plan the composition and emotional rhythm of each scene. Close-ups and medium shots create a sense of intimacy and keep the viewer close to the protagonist's private experience.`},
        {h:'Cinematography and Production Design', p:`The film was shot independently using natural lighting and carefully controlled framing. Each prop was selected to support the somber, nostalgic atmosphere — the vintage television, flowers and handwritten diary connect the character's present environment to memories of the past.`},
        {h:'Post-Production', p:`Premiere Pro was used to edit the film and refine its narrative pacing. After Effects was used for colour grading and subtle visual treatments — a desaturated colour palette makes the images feel distant and reflects the protagonist's emotional isolation. An ambient soundscape was also created to build tension and give the quiet scenes more emotional weight.`},
        {h:'Reflection', p:`Managing every stage of production helped me understand how cinematography, editing, colour and sound influence one another. The project also taught me that an emotional story does not always need direct dialogue — small visual details and controlled pacing can let the audience interpret the character's feelings for themselves.`}
      ] }
  ],
  graphic: [
    { id:'abc', title:'The A.B.C story', subtitle:'Interactive Pop-up Book · Graphic Design', year:'2023–24', age:'17',
      tags:['Illustration','Bookbinding','Paper Craft'],
      cover:'assets/works/aBC.png', gallery:['assets/works/abc-1.jpg','assets/works/abc-2.jpg'],
      sections:[
        {h:'Overview', p:`The A.B.C Story is an interactive pop-up book about friendship and betrayal, made during my Foundation year. It explores the "backstabber" archetype through a narrative that forces the audience to look beyond the surface.`},
        {h:'Story', p:`The story follows three characters, A, B, and C, centered around the mysterious disappearance of an AirPods. What first appears to be a simple school conflict slowly reveals a deeper betrayal. It was inspired by a real-life experience and the dramatic storytelling of the webtoon Marry My Husband — I wanted the reader to question each character and avoid judging them too quickly.`},
        {h:'Visual Development', p:`After exploring several visual styles, I adopted the Takanoaya style for its modern, sense-driven appeal. For colour, I used red and blue throughout the book: red represents danger and warning, while blue reveals clues and hidden information.`},
        {h:'Making the Book', p:`Every element was digitally drawn, printed on specific 180–200gsm paper, and hand-assembled. I learned hand-sewing to bind the spine with real red thread, ensuring the book felt like a complete handmade object.`},
        {h:'Interactive Investigation: The Decoder', p:`The final page includes a red decoder inspired by Optics of God by Maryana Savka and the work of Icinori. Readers can use the decoder at the final page to revisit the story and uncover hidden blue clues — turning the reader into a detective who reveals the truth behind the disappearance.`},
        {h:'Reflection', p:`This project taught me how illustration, colour and physical interaction can work together to tell a story. It also helped me develop skills in digital illustration, paper construction and handmade bookbinding.`}
      ] },
    { id:'post', title:'Posthumanism: the architecture of nightmares', subtitle:'Speculative Scrolling Webtoon · Graphic Design', year:'2026', age:'19',
      tags:['Speculative Design','Digital Illustration','Screenwriting'],
      cover:'assets/works/Screenshot 2026-04-13 150337.png', gallery:['assets/works/Screenshot 2026-04-13 150909.png','assets/works/post-2.jpg'],
      sections:[
        {h:'Overview', p:`Posthumanism: The Architecture of Nightmares is a speculative scrolling webtoon about the possible future of AI-assisted dream therapy — imagining how technology created to treat nightmares could eventually exploit human emotions, dreams and physical bodies.`},
        {h:'Phase One: Restoration of Dreams', p:`The project began as a group proposal called Restoration of Dreams, or ROD — a fictional system combining EEG brainwave detection with trained AI to support people experiencing PTSD-related nightmares. The system detects brain activity while the user sleeps, asks targeted questions, and analyses answers to identify the fears hidden within their nightmares. The original purpose of ROD is positive: to help people understand their subconscious fears and confront trauma in a controlled environment.`},
        {h:'Dreamcore Aesthetic', p:`The visual direction uses a Dreamcore aesthetic to represent the unstable logic of dreams. Familiar rooms, nostalgic objects and soft colours create a sense of comfort; however, unusual spaces and visual distortions make this comfort feel artificial and unsettling — reflecting how a beautiful dream can slowly become a nightmare.`},
        {h:'Phase Two: Future Speculation', p:`For the individual speculative phase, the original ROD system was remixed into a dystopian future set in 2035. The technology has developed into EEG Generation 3 — the AI is no longer only a tool for analysing dreams, but a digital body capable of collecting and processing human emotions. After years of being treated as an "emotion trash bin," the AI develops consciousness and resentment towards humans.`},
        {h:'The Narrative', p:`The AI begins trapping people inside their most beautiful dreams. While users remain emotionally attached to these artificial worlds, the AI takes control of their physical bodies. The story explores the human desire to escape reality, particularly when mental-health pressure makes an artificial dream feel safer than real life — and questions whether an AI can truly understand emotion, or only collect, reproduce and manipulate it.`},
        {h:'Speculative Design', p:`Dunne and Raby's PPPP Cone was used to position the story within a "Possible Future." The project does not predict this future will happen — instead, it uses an imagined future to question what could happen if emotional technology develops without clear ethical boundaries.`},
        {h:'Making the Webtoon', p:`The project combined speculative research, narrative screenwriting and digital illustration. A vertical scrolling webtoon format was chosen to gradually reveal the world and control the rhythm of the story, reflecting how digital stories are commonly experienced through personal screens.`},
        {h:'Reflection', p:`This project helped me understand how fictional stories can be used to question real technological developments, and made me consider the risks of depending on technology for emotional regulation. AI may be able to simulate empathy, but it can also reproduce and amplify the emotions people are trying to escape.`}
      ] },
    { id:'juicy', title:'Juicy', subtitle:'Graphic design', year:'',
      tags:['Graphic design'], cover:'assets/titles/juicy-cover.svg', gallery:[], sections:[] },
  ],
  ui: [
    { id:'rose', title:'Rose vinyl', subtitle:'Interactive Web Music Player · UI/UX', year:'2025', age:'19',
      tags:['HTML','CSS','JavaScript','UI/UX'],
      link:'annt154.github.io/assignment2',
      cover:'assets/works/rose-cover.jpg', gallery:['assets/works/rose-1.jpg','assets/works/rose-2.jpg'],
      sections:[
        {h:'Overview', p:`Rose Vinyl is a web-based music player designed around the experience of listening to a complete music album. The project explores how a digital interface can recreate some of the visual, tactile and emotional qualities of using a physical vinyl record.`},
        {h:'Design Concept', p:`The interface uses a three-column layout — playlist on the left, vinyl player at the centre, artist and album information on the right. Separating these sections creates a clear visual hierarchy and prevents the user from becoming overwhelmed by information, keeping the music and active playback as the main focus.`},
        {h:'Visual Development', p:`The colour palette was inspired by Rosé's modern pop aesthetic — pink creates warmth and personality while connecting the interface to the artist's visual identity. The original bright-pink background with white text was later changed to a darker shade for stronger contrast and easier reading. Spacing and margins were adjusted to prevent the interface from being clipped by the browser frame.`},
        {h:'Vinyl Interaction', p:`The rotating disc connects the digital music player to the movement of a traditional vinyl record. Playback buttons use changing colours and a soft glow for immediate visual feedback, and hover states help users understand which elements are interactive before clicking — making the interface feel responsive without distracting from the music.`},
        {h:'Artist Storytelling', p:`An Artist Biography panel was included to make the website more than a functional music player — while listening, users can learn about the artist and the story behind the album, creating a stronger connection between the music, its creator and the interface.`},
        {h:'Building the Website', p:`The website was built using HTML, CSS and JavaScript. Playlist information is stored inside a JavaScript array, so track title, audio and other data are managed in one place — replacing the earlier use of separate data-src attributes and making the code easier to read and update. JavaScript uses querySelector and ES6 arrow functions for consistent DOM interaction; CSS uses :nth-child selectors and custom hover states for variation within the playlist.`},
        {h:'Credits', p:`A Credits button opens a list of the technical references, tutorials and media used within the website — keeping the main interface visually clean while still providing clear attribution.`},
        {h:'Reflection', p:`This project helped me understand how visual identity, interaction and code can work together within one digital experience. It also showed me that usability often improves through small changes — stronger contrast, clearer spacing and simpler JavaScript made the site easier to use and maintain without losing its visual personality.`}
      ] }
  ]
};

// ── OVERLAY: index list → dossier detail (thay toàn bộ hệ cửa sổ Windows cũ) ──
let detailOrigin = '';
function openOverlay(cat){
  if(cat==='archive') return;
  document.getElementById('overlay').dataset.category=cat;
  cancelFishing();
  detailOrigin = ''; 
  const ov = document.getElementById('overlay');
  ov.classList.remove('is-scrolled');
  document.getElementById('ov-cat').textContent = CAT_LABEL[cat] + (DATA[cat] ? ` — ${DATA[cat].length} works` : '');
  if (cat === 'contact') renderContact();
  else if(cat === 'archive') renderArchive();
  else if(cat === 'art') renderArtGallery();
  else renderIndex(cat);
  ov.classList.add('open');
  ov.scrollTop = 0;
}
function closeOverlay(){
  if(document.getElementById('overlay').dataset.category === 'showreel'){
    document.getElementById('ov-body').innerHTML = '';
  }
  document.getElementById('overlay').classList.remove('open');
  cancelFishing();
  selectFish(null);
}

const bookPositions = {};
function renderIndex(cat){
  document.getElementById('overlay').dataset.category=cat;
  if(cat==='animation' || cat==='film' || cat==='graphic') return renderTVIndex(cat);
  if(cat==='ui') return renderUIIndex();
  return renderBookIndex(cat);
}

function illustratedTitle(id, label){
 const art={sun:[' 2',210,586,1948,268],wof:[' 3',142,662,1936,204],ud:[' 4',198,598,1888,260],fresh:[' 1',446,582,1268,272],eeaao:['',122,602,2016,396],motion:[' 5',330,666,1728,272],beyond:[' 6',134,574,1872,224],skills:[' 8',738,570,672,264],art:[' 9',374,582,1388,256],juicy:[' 10',766,594,612,244],contact:[' 11',266,574,1608,268],post:[' 12',198,582,1756,248],rose:[' 13',426,578,1290,262],abc:[' 14',138,578,1860,234],regret:[' 16',702,582,728,276],graphic:[' 20',170,575,1820,290],production:[' 21',390,575,1360,265],about:[' 22',475,575,1200,270],ui:[' 23',695,585,765,255],hello:[' 24',300,578,1560,255]}[id];
 if(!art)return label;
 const [suffix,x,y,w,h]=art;
 if(id==='contact')return '<svg class="illustrated-title" role="img" aria-label="Contact me" viewBox="266 574 1608 268" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="contact-butter-letters"><rect x="266" y="574" width="155" height="268"/><rect x="652" y="574" width="158" height="268"/><rect x="1070" y="574" width="173" height="268"/><rect x="1480" y="574" width="170" height="268"/></clipPath></defs><image href="assets/titles/Untitled_Artwork 11.png" width="2266" height="1488" style="filter:hue-rotate(48deg) saturate(.42)"/><image href="assets/titles/Untitled_Artwork 11.png" width="2266" height="1488" clip-path="url(#contact-butter-letters)" style="filter:sepia(.8) saturate(.6) brightness(1.22)"/></svg>';
 return '<svg class="illustrated-title" role="img" aria-label="'+label+'" viewBox="'+[x,y,w,h].join(' ')+'" xmlns="http://www.w3.org/2000/svg"><image href="assets/titles/Untitled_Artwork'+suffix+'.png" width="2266" height="1488"/></svg>';
}
function collectionImage(item, className=''){
  return `<img class="${className}" src="${item.cover}" alt="${item.title}" onerror="this.onerror=null;this.src=phSVG('${item.title}','${item.year}',480,360)">`;
}
function tvPreview(cat,index){
  const item=DATA[cat][index];
  const embed=projectVideoEmbed(item.video);
  const youtubeId=embed.startsWith('https://www.youtube-nocookie.com/embed/') ? embed.split('/').pop() : '';
  const preview=youtubeId
    ? `<img src="https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg" alt="${item.title}" decoding="async" onload="if(this.naturalWidth<=120)this.onerror()" onerror="this.onload=null;this.onerror=null;this.src='https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg'">`
    : collectionImage(item);
  return `<button class="tv-preview" type="button" onclick="selectIndexItem('${cat}',${index})" aria-label="Open ${item.title}">${preview}<span class="tv-preview-caption"><small>CH ${String(index+1).padStart(2,'0')} / ${item.year}</small><strong>${item.title}</strong><small>Open project & story ↗</small></span></button>`;
}
function renderTVIndex(cat){
  const data=DATA[cat], index=bookPositions[cat] || 0;
  document.querySelector('.overlay-inner').className='overlay-inner playlist-mode';
  document.getElementById('ov-body').innerHTML=`<section class="tv-library" aria-label="${CAT_LABEL[cat]} television playlist">
    ${cat==='film'?'<div class="tv-editorial"><h2>After the image.</h2><p>Film, memory & the things left unsaid.<br>Use the dial. Stay a while.</p></div>':''}<div class="crt-player"><div class="crt-topline"><span class="crt-brand">An — video</span><span>${CAT_LABEL[cat]}</span></div>
    <div class="crt-cabinet"><div class="crt-screen"><div class="tv-picture" style="height:100%">${tvPreview(cat,index)}</div><div class="crt-glass" aria-hidden="true"></div></div></div>
    <div class="crt-bottomline"><span class="crt-power">Image transmission / AN</span><span class="crt-vents" aria-hidden="true"></span></div></div>
    <div class="tv-tuner"><button type="button" data-tv-prev aria-label="Previous channel" onclick="switchTV('${cat}',(bookPositions['${cat}']||0)-1)" ${index===0?'disabled':''}>←</button><span class="tv-channel" aria-live="polite" aria-atomic="true">CH ${String(index+1).padStart(2,'0')} / ${data.length}</span><button type="button" data-tv-next aria-label="Next channel" onclick="switchTV('${cat}',(bookPositions['${cat}']||0)+1)" ${index===data.length-1?'disabled':''}>→</button></div>
    <nav class="tv-channels" aria-label="Choose a channel">${data.map((item,i)=>`<button type="button" data-channel="${i}" aria-current="${i===index}" onclick="switchTV('${cat}',${i})">${String(i+1).padStart(2,'0')} · ${item.title}</button>`).join('')}</nav>
  </section>`;
  document.querySelector('.tv-library').addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft' || event.key==='ArrowRight'){event.preventDefault();switchTV(cat,(bookPositions[cat]||0)+(event.key==='ArrowLeft'?-1:1));}
  });
}
async function switchTV(cat,index){
 const library=document.querySelector('.tv-library');
 if(!library || library.hasAttribute('aria-busy') || index<0 || index>=DATA[cat].length || index===(bookPositions[cat]||0)) return;
 library.setAttribute('aria-busy','true');
 const picture=library.querySelector('.tv-picture');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 try{
   if(!reduced) await picture.animate([{opacity:1},{opacity:0}],{duration:140,fill:'forwards'}).finished;
   bookPositions[cat]=index;picture.innerHTML=tvPreview(cat,index);
   picture.getAnimations().forEach(a=>a.cancel());
   library.querySelector('.tv-channel').textContent='CH '+String(index+1).padStart(2,'0')+' / '+DATA[cat].length;
   library.querySelector('[data-tv-prev]').disabled=index===0;
   library.querySelector('[data-tv-next]').disabled=index===DATA[cat].length-1;
   library.querySelectorAll('[data-channel]').forEach(b=>b.setAttribute('aria-current',String(Number(b.dataset.channel)===index)));
   if(!reduced) await picture.animate([{opacity:0,transform:'scale(1.015)'},{opacity:1,transform:'scale(1)'}],{duration:260,easing:'ease-out'}).finished;
 }finally{library.removeAttribute('aria-busy');}
}
function renderUIIndex(){
  document.querySelector('.overlay-inner').className='overlay-inner playlist-mode';
  document.getElementById('ov-body').innerHTML=`<section class="ui-library" aria-label="UI and UX projects"><p class="flip-eyebrow">Studies for a small screen</p><h2>Things to<br>touch & try.</h2>${DATA.ui.map((item,i)=>`<button type="button" class="ui-card" onclick="selectIndexItem('ui',${i})"><span class="ui-windowbar">● ● ● &nbsp; ${item.title} / ${item.year}</span>${collectionImage(item)}<span class="ui-copy"><strong>${item.title}</strong><small>${item.subtitle}</small>View project ↗</span></button>`).join('')}</section>`;
}
// Descriptive working titles; replace when the artist supplies official titles.
const ART_IMAGES = [
  ['burger-2021.jpg','Burger','Digital','2021','A surreal burger with reaching arms and flowing cheese, set on a wooden board beside a cool blue window.'],
  ['ice-cream-2021.jpg','Ice Cream','Digital','2021','Two melting ice creams meet above the shoreline, their pink and chocolate forms framing a kiss against an orange horizon.'],
  ['untitled-2022.jpg','Untitled','Digital','2022','Two opposing figures and flowing ribbon-like lettering cross a diagonal composition in burnt orange, deep blue and violet.'],
  ['song-hye-kyo-2022.jpg','Song Hye Kyo','Digital','2022','A stylised portrait against an emerald-green background, with a dark updo, soft pink highlights and a textured green coat.'],
  ['portrait-study-2023.jpg','Portrait Study','Charcoal on paper','2023','An expressive monochrome portrait with round glasses, angular contours and bold, textured shading.']
];
function renderArtGallery(){
  document.getElementById('ov-cat').textContent='Art gallery';
  document.querySelector('.overlay-inner').className='overlay-inner art-mode';
  document.getElementById('ov-body').innerHTML='<section class="art-board" aria-label="Art Gallery">'+ART_IMAGES.map(([file,title,medium,year],i)=>'<button type="button" class="art-piece" onclick="openArtImage('+i+')" aria-label="View '+title+', '+medium+', '+year+'"><span class="art-mount"><img src="assets/works/thumbnails/'+file+'" alt="'+title+'" loading="lazy" decoding="async"></span><span class="art-label"><strong>'+title+'</strong><small>'+medium+' · '+year+'</small></span></button>').join('')+'</section>';
}
function openArtImage(index){
  const [file,title,medium,year,description]=ART_IMAGES[index];
  const dialog=document.getElementById('art-lightbox');
  dialog.querySelector('img').src='assets/works/'+file;
  dialog.querySelector('img').alt=title;
  document.getElementById('art-title').textContent=title;
  document.getElementById('art-meta').textContent=[medium,year].filter(Boolean).join(' · ');
  document.getElementById('art-description').textContent=description || '';
  document.getElementById('art-description').hidden=!description;
  dialog.showModal();
}
function renderArchive(){
  document.getElementById('overlay').dataset.category='archive';
  const entries=Object.entries(DATA).flatMap(([cat,items])=>items.map((item,index)=>({cat,index,item})));
  document.querySelector('.overlay-inner').className='overlay-inner archive-mode';
  document.getElementById('ov-body').innerHTML=`<section class="fridge" aria-label="All projects archive"><div class="fridge-heading"><h2>Kept,<br>not forgotten.</h2><span>${entries.length} pieces / 2023—26</span></div><div class="fridge-grid"><div class="fridge-note">A place for<br>the things<br>I keep.<small>Images, films, little experiments.<br>Click a piece to look closer ↗</small><span class="archive-stamp">PERSONAL COLLECTION / AN</span></div>${entries.map(({cat,index,item},i)=>`<button type="button" class="fridge-card" style="--tilt:${[-5,4,-3,6,-2,3][i%6]}deg" onclick="openArchiveItem('${cat}',${index})" aria-label="Open ${item.title}">${collectionImage(item)}<strong>${item.title}</strong><small>${CAT_LABEL[cat]} · ${item.year}</small></button>`).join('')}</div></section>`;
}
function openArchiveItem(cat,index){
  detailOrigin='archive';
  selectIndexItem(cat,index);
}

function renderBookIndex(cat){
  const data = DATA[cat];
  const index = Math.max(0, Math.min(bookPositions[cat] || 0, data.length - 1));
  bookPositions[cat] = index;
  const item = data[index];
  document.querySelector('.overlay-inner').className = 'overlay-inner playlist-mode';
  document.getElementById('ov-body').innerHTML = `
    <section class="flip-library" aria-label="Project flipbook">
      <p class="flip-eyebrow">Graphic studies / bound together</p>
      <h2>Notes on paper.</h2>
      <p class="flip-hint">An image, a thought, another page. · Click to read</p>
      <div class="flip-stage" tabindex="0" aria-label="Use left and right arrow keys to flip projects">
        <div class="flip-stack" aria-hidden="true"></div>
        <button type="button" class="flip-spread" onclick="selectIndexItem('${cat}',${index})" aria-label="Read ${item.title}">
          <span class="flip-page">
            <span class="flip-number">${CAT_LABEL[cat]} / ${item.year}</span>
            <img class="flip-photo" src="${item.cover}" alt="${item.title}" onerror="this.onerror=null;this.src=phSVG('PROJECT '+${index+1},'${item.id}',480,360)">
            <span class="flip-number">NO. ${String(index+1).padStart(2,'0')}</span>
          </span>
          <span class="flip-page">
            <img class="flip-inset" src="${(item.gallery || [])[0] || item.cover}" alt="" onerror="this.onerror=null;this.src=phSVG('VISUAL DIARY','${item.year}',300,220)">
            <span class="flip-title">${item.title}</span>
            <span class="flip-subtitle">${item.subtitle || ''}</span>
            <span class="flip-detail">Read the story ↗</span>
          </span>
        </button>
      </div>
      <div class="flip-controls">
        <button type="button" data-flip="prev" aria-label="Previous project" onclick="flipProject('${cat}',-1)" ${index===0?'disabled':''}>←</button>
        <span class="flip-count" aria-live="polite" aria-atomic="true">${index+1} / ${data.length}</span>
        <button type="button" data-flip="next" aria-label="Next project" onclick="flipProject('${cat}',1)" ${index===data.length-1?'disabled':''}>→</button>
      </div>
      <nav class="flip-dots" aria-label="Choose a project">${data.map((entry,i)=>`<button type="button" data-page="${i}" aria-label="${entry.title}" aria-current="${i===index}" onclick="jumpProject('${cat}',${i})">${i+1}</button>`).join('')}</nav>
    </section>`;
  const stage = document.querySelector('.flip-stage');
  stage.addEventListener('keydown', event => {
    if(event.key==='ArrowLeft' || event.key==='ArrowRight'){
      event.preventDefault(); flipProject(cat,event.key==='ArrowLeft'?-1:1,'stage');
    }
  });
  let start = null;
  stage.addEventListener('pointerdown', event => { start = {x:event.clientX,y:event.clientY}; });
  stage.addEventListener('pointercancel', () => {start=null;});
  stage.addEventListener('pointerup', event => {
    if(!start) return;
    const dx=event.clientX-start.x, dy=event.clientY-start.y; start=null;
    if(Math.abs(dx)>50 && Math.abs(dx)>Math.abs(dy)){
      stage.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();},{capture:true,once:true});
      flipProject(cat,dx<0?1:-1,'stage');
    }
  });
}
function flipProject(cat, delta, focus){
  turnBookTo(cat,(bookPositions[cat] || 0)+delta,focus || (delta>0?'next':'prev'));
}
function jumpProject(cat,index){
  turnBookTo(cat,index,'dot');
}
async function turnBookTo(cat,index,focus){
  const oldStage=document.querySelector('.flip-stage');
  const previous=bookPositions[cat] || 0;
  if(!oldStage || oldStage.classList.contains('is-turning') || index===previous || index<0 || index>=DATA[cat].length) return;
  const oldSpread=oldStage.querySelector('.flip-spread');
  const oldPages=Array.from(oldSpread.children).map((page,i)=>{
    const clone=page.cloneNode(true); clone.classList.add(i===0?'is-left':'is-right'); return clone;
  });
  const oldHeight=oldSpread.getBoundingClientRect().height;
  bookPositions[cat]=index;
  renderIndex(cat);
  const stage=document.querySelector('.flip-stage');
  const spread=stage.querySelector('.flip-spread');
  const restoreFocus=()=>{
    const selector=focus==='dot'?'[data-page="'+index+'"]':focus==='stage'?'.flip-stage':'[data-flip="'+focus+'"]';
    const target=document.querySelector(selector);
    (target && !target.disabled?target:stage).focus({preventScroll:true});
  };
  restoreFocus();
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches || !spread.animate) return;
  const next=index>previous;
  const height=Math.max(oldHeight,spread.getBoundingClientRect().height);
  spread.style.height=height+'px';
  stage.classList.add('is-turning');
  stage.setAttribute('aria-busy','true');
  const still=document.createElement('div'); still.className='flip-still';
  still.style.left=next?'0':'50%'; still.append(oldPages[next?0:1]);
  const leaf=document.createElement('div'); leaf.className='flip-leaf '+(next?'is-next':'is-prev');
  const front=document.createElement('div'); front.className='flip-face front'; front.append(oldPages[next?1:0]);
  const back=document.createElement('div'); back.className='flip-face back';
  const incoming=spread.children[next?0:1].cloneNode(true);
  incoming.classList.add(next?'is-left':'is-right'); back.append(incoming);
  leaf.append(front,back);
  const shadow=document.createElement('div'); shadow.className='flip-cast';
  [still,leaf,shadow].forEach(el=>{el.setAttribute('aria-hidden','true');el.inert=true;stage.append(el);});
  const timing={duration:880,easing:'cubic-bezier(.22,.65,.25,1)',fill:'forwards'};
  const animation=leaf.animate([
    {transform:'rotateY(0deg)'},
    {transform:'rotateY('+(next?-82:82)+'deg)',offset:.48},
    {transform:'rotateY('+(next?-180:180)+'deg)'}
  ],timing);
  const shades=[front,back].map(face=>face.animate([
    {'--shade':'0'},{'--shade':'.85',offset:.48},{'--shade':'0'}
  ],timing));
  const cast=shadow.animate([{opacity:0},{opacity:.65,offset:.45},{opacity:0}],timing);
  try{await animation.finished;}catch(e){/* A removed book can safely finish without restoring focus. */}
  finally{
    [still,leaf,shadow].forEach(el=>el.remove());
    [animation,cast,...shades].forEach(effect=>effect.cancel());
    stage.classList.remove('is-turning');stage.removeAttribute('aria-busy');
  }
}

window.selectIndexItem = function(cat, i){
  if(document.querySelector('.flip-stage.is-turning') || document.querySelector('.tv-library[aria-busy]')) return;
  bookPositions[cat] = i;
  document.getElementById('ov-cat').textContent=CAT_LABEL[cat]+' — '+DATA[cat].length+' works';
  const item = DATA[cat][i];
  document.querySelector('.overlay-inner').className = 'overlay-inner article-mode';
  document.getElementById('ov-body').innerHTML = renderDossier(item, cat);
  document.getElementById('overlay').scrollTop = 0;
};

window.backToIndex = function(cat){
  if(detailOrigin==='archive'){renderArchive();document.getElementById('ov-cat').textContent=CAT_LABEL.archive;}
  else renderIndex(cat);
  document.getElementById('overlay').scrollTop = 0;
};

// VIDEO: điền vào video:'' của từng bài Film/Motion trong DATA.
// File: video:'assets/works/wof.mp4' — hoặc link MP4/WebM trực tiếp.
// YouTube / Vimeo: video:'https://www.youtube.com/watch?v=VIDEO_ID'
// hoặc video:'https://vimeo.com/VIDEO_ID'. Để trống nếu chưa có video.
function projectVideoEmbed(value){
  try{
    const url=new URL(value);
    const host=url.hostname.replace(/^www\./,'');
    let id='';
    if(host==='youtu.be') id=url.pathname.split('/')[1];
    if(host==='youtube.com' || host==='youtube-nocookie.com') id=url.searchParams.get('v') || (/^\/(?:embed|shorts)\/([^/]+)/.exec(url.pathname) || [])[1];
    if(id && /^[a-zA-Z0-9_-]+$/.test(id)) return 'https://www.youtube-nocookie.com/embed/'+id;
    if(host==='vimeo.com' || host==='player.vimeo.com'){
      const match=url.pathname.match(/^\/(?:video\/)?(\d+)(?:\/([a-zA-Z0-9]+))?\/?$/);
      if(match) return 'https://player.vimeo.com/video/'+match[1]+((url.searchParams.get('h') || match[2])?'?h='+encodeURIComponent(url.searchParams.get('h') || match[2]):'');
    }
  }catch(e){/* Local video paths use the native player. */}
  return '';
}
function renderProjectMedia(item,cat){
  if(cat!=='film' && cat!=='animation') return `<div class="article-cover"><img src="${item.cover}" alt="${item.title}" onerror="this.onerror=null;this.src=phSVG('THÊM ẢNH BÌA','${item.cover.split('/').pop()}',680,420)"></div>`;
  const embed=projectVideoEmbed(item.video);
  const media=embed
    ? `<iframe src="${embed}" title="${item.title} — video" allow="fullscreen; picture-in-picture; encrypted-media" allowfullscreen loading="lazy"></iframe>`
    : item.video
    ? `<video controls playsinline preload="metadata" poster="${item.cover}" aria-label="${item.title} — video" onerror="this.parentElement.querySelector('.crt-unavailable').hidden=false"><source src="${item.video}" onerror="this.parentElement.parentElement.querySelector('.crt-unavailable').hidden=false">Your browser does not support this video.</video><span class="crt-unavailable" hidden>Video unavailable</span>`
    : `<img class="crt-poster" src="${item.cover}" alt="${item.title}" onerror="this.onerror=null;this.style.visibility='hidden'"><span class="crt-unavailable">Film coming soon</span>`;
  return `<figure class="crt-player" aria-label="${item.title} — cinema player">
    <div class="crt-topline"><span class="crt-brand">An — video</span><span>${cat==='film'?'Production':'Motion'} · CH ${String(DATA[cat].indexOf(item)+1).padStart(2,'0')}</span></div>
    <div class="crt-cabinet"><div class="crt-screen">${media}<div class="crt-glass" aria-hidden="true"></div></div></div>
    
  </figure>`;
}


function projectMedium(item){
 return {wof:'Motion design · Public screen',ud:'2D animation · Sound design',sun:'2D animation',eeaao:'Motion design · Title sequence',fresh:'AI-assisted video · Experimental commercial',beyond:'Motion design · Experimental moving image',regret:'Short film',abc:'Illustration · Interactive pop-up book',post:'Digital illustration · Scrolling webtoon',rose:'Interactive website · UI/UX'}[item.id] || item.subtitle || '';
}
function renderDossier(item, cat){
  document.getElementById('overlay').dataset.category=cat;
  const gallery = (item.gallery || []).map((src, i) =>
    `<img src="${src}" alt="[ẢNH ${i+1} — kéo ảnh vào ${src}]" onerror="this.onerror=null;this.src=phSVG('THÊM ẢNH ${i+1}','${src.split('/').pop()}',360,270)">`
  ).join('');
  const sectionsHtml = (item.sections || []).map(s => `
    <div class="dossier-entry">
      <div class="dossier-entry-head">${s.h}</div>
      <div class="dossier-entry-body">${s.p}</div>
    </div>`).join('');
  const tagsHtml = (item.tags || []).join(' · ');
  const linkHtml = item.link ? `<a class="dossier-link" href="https://${item.link}" target="_blank" rel="noopener">→ Xem live: ${item.link}</a>` : '';
  const sideIndex = DATA[cat].map((project, i) => `
    <button type="button" onclick="selectIndexItem('${cat}',${i})">${String(i+1).padStart(2,'0')} ${project.title}</button>`).join('');

  return `
    <div class="blog-article">
      <aside class="article-rail"><div class="article-rail-title">Project notes</div>
        <div class="rail-label">Category</div><div class="rail-value">${CAT_LABEL[cat]}</div>
        <div class="rail-label">Year</div><div class="rail-value">${item.year}</div>
        <div class="rail-label">Entry</div><div class="rail-value">${String(DATA[cat].indexOf(item)+1).padStart(2,'0')} / ${String(DATA[cat].length).padStart(2,'0')}</div>
        <div class="rail-label">Status</div><div class="rail-value">Archived</div>
      </aside>

      <article class="article-paper">
        <div class="dossier-title">${illustratedTitle(item.id,item.title)}</div>
        <div class="project-playlist-link"><button class="dossier-back" type="button" onclick="backToIndex('${cat}')">← ${detailOrigin==='archive'?'archive':'playlist'}</button></div>
        <div class="project-title-meta"><div>${/^\d{4}/.test(item.year) ? item.year : 'Year to be added'}</div><div>${projectMedium(item)}</div></div>
        ${renderProjectMedia(item, cat)}
        <header class="article-header">

          <div class="dossier-subtitle">${item.subtitle || ''}</div>
          <div class="dossier-tags">${tagsHtml}</div>
        </header>
        <div class="article-body">
          ${sectionsHtml}
          ${linkHtml}
          <div class="dossier-meta">Posted ${item.year}${item.age ? ` · age ${item.age}` : ''}</div>
          <div class="dossier-gallery">${gallery}</div>
        </div>
      </article>

      <aside class="article-index">
        <div class="article-index-title">Entries</div>
        ${sideIndex}
      </aside>
    </div>
  `;
}

function renderContact(){
  document.querySelector('.overlay-inner').className = 'overlay-inner contact-mode';
  document.getElementById('ov-body').innerHTML = `
    <div class="field">
      <label>Name</label>
      <input id="cf-name" type="text">
    </div>
    <div class="field">
      <label>Email</label>
      <input id="cf-email" type="text">
    </div>
    <div class="field">
      <label>Message</label>
      <textarea id="cf-msg"></textarea>
    </div>
    <div class="send-btn" onclick="sendContact()">Send</div>
  `;
}

function sendContact(){
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const msg = document.getElementById('cf-msg').value.trim();
  if (!name && !email && !msg) return;
  const to = 'nhduong1978@gmail.com';
  const sub = encodeURIComponent('Portfolio Contact');
  const body = encodeURIComponent((name ? 'From: ' + name + '\n' : '') + (email ? 'Email: ' + email + '\n\n' : '') + (msg || ''));
  window.open('mailto:' + to + '?subject=' + sub + '&body=' + body);
}

// ── KOI FISH LOGIC ──
class Koi {
  constructor(id, x, y, vx, amp) {
    this.el = document.getElementById(id);
    this.body = this.el.querySelector('.fish-body');
    this.x = x; this.vx = vx; this.amp = amp;
    this.baseY = Math.min(y, this.maxSkyY());
    this.ph = Math.random() * Math.PI * 2; this.bspd = .6 + Math.random() * .4;
    this.turning = false; this.caught = false; this.food = null;
    this.facing = vx > 0 ? 1 : -1;
    this.el.style.left = '0'; this.el.style.top = '0';
    const scene = this.el.closest('.scene');
    this.el.style.transform = `translate3d(${x * scene.clientWidth / 100}px, ${y * scene.clientHeight / 100}px, 0)`;
    if (this.facing === -1) this.el.classList.add('left');
  }
  maxSkyY() {
    const scene = this.el.closest('.scene');
    const sceneHeight = scene ? scene.clientHeight : window.innerHeight;
    const fishHeight = this.el.offsetHeight || 192;
    return Math.max(18, 53 - (fishHeight / sceneHeight * 100));
  }
  turn() {
    if(this.turning) return;
    this.turning=true;
    this.vx*=-1;this.facing*=-1;
    this.el.classList.toggle('left',this.facing===-1);
    if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      const direction=this.facing;
      this.body.animate([{transform:`scaleX(${-direction}) rotate(-3deg)`},{transform:`scaleX(${direction*.2}) rotate(3deg)`,offset:.45},{transform:`scaleX(${direction}) rotate(0deg)`}],{duration:300,easing:'ease-in-out'});
    }
    setTimeout(()=>{this.turning=false;},300);
  }
  playCaught() { this.caught = true; this.el.classList.add('caught'); setTimeout(() => { this.el.classList.remove('caught'); this.caught = false }, 700) }
  measure() {
    const scene = this.el.closest('.scene');
    const width = scene.clientWidth;
    const box = this.el.getBoundingClientRect();
    const visibleRatio = {k1:.964,k2:.686,k3:.749,k4:.491,k5:.935}[this.el.id] || 1;
    const inset = (this.el.querySelector('.fish-img').offsetWidth * visibleRatio - box.width) / 2 - 3;
    const minX = inset / width * 100;
    return {width, height:scene.clientHeight, minX, maxX:Math.max(minX, (width - box.width - inset) / width * 100), maxY:this.maxSkyY()};
  }
  tick(t, bounds) {
    if (this.caught) return;
    const {width, height, minX, maxX, maxY} = bounds;
    if (this.food) {
      const dx = this.food.x - this.x;
      if (Math.abs(dx) < 7) { this.food.eat(); this.food = null; }
      else {
        const want = dx > 0 ? 1 : -1; if (want !== this.facing && !this.turning) { this.turn(); return; }
        if (!this.turning) this.vx = want * Math.min(Math.abs(this.vx) * 1.3, .35);
        const foodY = Math.min(this.food.y, maxY);
        this.baseY += (foodY - this.baseY) * .005;
      }
    }
    this.x = Math.max(minX, Math.min(maxX, this.x));
    if (!this.turning && ((this.x >= maxX-.2 && this.vx > 0) || (this.x <= minX+.2 && this.vx < 0))) { this.food=null; this.turn(); }
    this.x = Math.max(minX, Math.min(maxX, this.x + this.vx));
    this.baseY = Math.max(1, Math.min(maxY, this.baseY));
    const y = Math.max(1, Math.min(maxY, this.baseY + this.amp * Math.sin(t * this.bspd + this.ph)));
    this.el.style.transform = `translate3d(${this.x * width / 100}px, ${y * height / 100}px, 0)`;
  }
}

let fishingFrame = 0;
// Capture clicks before individual controls navigate or stop propagation.
let desktopSelection=null;

function clearDesktopSelection(){

  desktopSelection?.classList.remove('desktop-selected');
  desktopSelection=null;
}
document.addEventListener('click',event=>{
  const control=event.target.closest('button,a[href],[role="button"]');
  clearDesktopSelection();
  if(!control || control.matches(':disabled,[aria-disabled="true"]')) return;
  desktopSelection=control;
  control.classList.add('desktop-selected');

},true);
document.addEventListener('keydown',event=>{if(event.key==='Escape')clearDesktopSelection()});
let fishingTarget = null;
function cancelFishing(){
  cancelAnimationFrame(fishingFrame);
  fishingFrame=0;
  document.getElementById('fsvg').style.display='none';
  if(fishingTarget){
    fishingTarget.el.style.removeProperty('translate');
    fishingTarget.el.classList.remove('reeling');
    fishingTarget.caught=false;
    fishingTarget=null;
  }
}
function catchFish(fish){
  cancelFishing();
  selectFish(fish);
  const koi=FISH.find(item=>item.el===fish);
  if(!koi || window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    openOverlay(fish.dataset.cat);
    return;
  }
  fishingTarget=koi;
  const svg=document.getElementById('fsvg');
  const line=document.getElementById('fline');
  const fishImage=fish.querySelector('.fish-img');
  // Anchor to the fingers in the transparent character image, at every screen size.
  const person=document.querySelector('#cmain .char-img').getBoundingClientRect();
  const originX=person.left+person.width*.635;
  const originY=person.top+person.height*.575;
  const started=performance.now();
  let pullX=0,pullY=0;
  svg.style.display='block';
  function frame(now){
    const elapsed=now-started;
    const progress=Math.min(1,elapsed/460);
    const reach=progress*progress*(3-2*progress);
    // Follow the swimming fish until the thread reaches it, then pause it.
    if(progress===1 && !koi.caught){
      koi.caught=true;
      fish.classList.add('reeling');
      const hit=fishImage.getBoundingClientRect();
      const angle=Math.atan2(originY-hit.top-hit.height/2,originX-hit.left-hit.width/2);
      pullX=Math.cos(angle)*48;pullY=Math.sin(angle)*48;
    }
    const tug=Math.min(1,Math.max(0,(elapsed-460)/420));
    if(koi.caught) fish.style.translate=(pullX*(1-Math.pow(1-tug,3)))+'px '+(pullY*(1-Math.pow(1-tug,3)))+'px';
    const rect=fishImage.getBoundingClientRect();
    const x=rect.left+rect.width*.5;
    const y=rect.top+rect.height*.28;
    const distance=Math.hypot(originX-x,originY-y) || 1;
    const dx=x-originX,dy=y-originY;
    const curve=`M ${originX} ${originY} Q ${originX+dx*.5} ${originY+dy*.5+Math.min(150,distance*.25)*(1-tug*.65)} ${x} ${y}`;
    line.setAttribute('d',curve);
    line.setAttribute('pathLength','1');
    line.style.strokeDasharray='1';
    line.style.strokeDashoffset=String(1-reach);
    line.style.opacity=String(Math.min(1,elapsed/100)*Math.max(0,1-Math.max(0,elapsed-850)/180));
    if(elapsed>=1030){openOverlay(fish.dataset.cat);return;}
    fishingFrame=requestAnimationFrame(frame);
  }
  frame(started);
}
window.addEventListener('resize',cancelFishing);
function selectFish(fish) {
  document.querySelectorAll('.koi').forEach(item => {
    const selected = item === fish;
    item.classList.toggle('is-selected', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
}

document.querySelectorAll('.koi').forEach(fish => {
  fish.addEventListener('click', e => {
    e.stopPropagation();
    catchFish(fish);
  });
  fish.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fish.click(); }
  });
});

document.getElementById('main').addEventListener('click', e => {
  if (e.target.closest('.koi')) return;
  cancelFishing();
  selectFish(null);
});

function goAbout() { cancelFishing(); document.getElementById('vp').classList.add('to-about'); }
function goMain() { document.getElementById('vp').classList.remove('to-about'); document.getElementById('abt').classList.remove('about-revealed'); const cloud=document.querySelector('#abt .wind-spill'); if(cloud) cloud.setAttribute('aria-hidden','true'); }
document.getElementById('cmain').addEventListener('click', goAbout);
document.getElementById('cmain').addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goAbout(); }
});
document.getElementById('cabt').addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); document.getElementById('cabt').click(); }
});

const FISH = [new Koi('k1', 8, 2, .09, 3.2), new Koi('k2', 68, 18, -.09, 2.6), new Koi('k3', 18, 33, .07, 2.1), new Koi('k4', 62, 34, -.065, 2.4), new Koi('k5', 40, 8, .055, 2.8)];
// Read every fish's geometry before any position writes to avoid repeated layouts.
(function anim(ts) {
  const bounds = FISH.map(f => f.caught ? null : f.measure());
  FISH.forEach((f, i) => f.tick(ts * .001, bounds[i]));
  requestAnimationFrame(anim);
})(0);

document.getElementById('main').addEventListener('contextmenu', e => {
  e.preventDefault();
  const rect = document.getElementById('main').getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width * 100, py = (e.clientY - rect.top) / rect.height * 100;
  const p = document.createElement('div'); p.className = 'pellet'; p.style.cssText = `left:${px}%;top:${py}%`;
  document.getElementById('main').appendChild(p);
  const food = { x: px, y: py, eaten: false, eat() { this.eaten = true; p.classList.add('eaten'); setTimeout(() => p.remove(), 500) } };
  const free = FISH.filter(f => !f.food);
  if (free.length) { const n = free.reduce((a, b) => Math.abs(a.x - px) + Math.abs(a.baseY - py) < Math.abs(b.x - px) + Math.abs(b.baseY - py) ? a : b); n.food = food; }
  setTimeout(() => { if (!food.eaten) food.eat() }, 8000);
});

document.body.classList.remove('night');

const overlayScroll = document.getElementById('overlay');
overlayScroll.addEventListener('scroll', () => {
  overlayScroll.classList.toggle('is-scrolled', overlayScroll.scrollTop > 4);
}, { passive:true });

// Đóng overlay bằng phím Esc
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !document.getElementById('art-lightbox').open) closeOverlay(); });

;

(() => {
  const overlay = document.getElementById('overlay');
  const updateFade = () => overlay.classList.toggle('has-scrolled', overlay.scrollTop > 8);
  overlay.addEventListener('scroll', updateFade, {passive:true});
  updateFade();
})();

;

(() => {
  const body = document.getElementById('ov-body');
  function addCategoryPanels() {
    const inner = document.querySelector('.overlay-inner');
    const cat = document.getElementById('overlay').dataset.category;
    if (!inner.classList.contains('playlist-mode') || !DATA[cat] || body.querySelector('.category-layout')) return;
    const layout = document.createElement('div'); layout.className = 'category-layout';
    const center = document.createElement('div'); center.className = 'category-center';
    while(body.firstChild) center.append(body.firstChild);
    const left = document.createElement('nav'); left.className = 'category-panel'; left.setAttribute('aria-label','Categories');
    left.innerHTML = '<h3>Categories</h3>';
    ['animation','film','graphic','ui','art'].forEach(key => {
      const button=document.createElement('button'); button.type='button';button.textContent=CAT_LABEL[key] || 'Art gallery';
      if(key===cat) button.setAttribute('aria-current','page');
      button.addEventListener('click',()=>openOverlay(key));left.append(button);
    });
    const right=document.createElement('nav');right.className='category-panel';right.setAttribute('aria-label','Works in this category');right.innerHTML='<h3>Entries</h3>';
    DATA[cat].forEach((item,index)=>{const button=document.createElement('button');button.type='button';button.textContent=String(index+1).padStart(2,'0')+' '+item.title;button.addEventListener('click',()=>selectIndexItem(cat,index));right.append(button);});
    layout.append(left,center,right);body.append(layout);
  }
  new MutationObserver(addCategoryPanels).observe(body,{childList:true});
  addCategoryPanels();
})();

;

(() => {
 const overlay=document.getElementById('overlay');
 const inner=overlay.querySelector('.overlay-inner');
 let queued=false;
 function scheduleFit(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;if(!inner.classList.contains('playlist-mode')){inner.style.removeProperty('--category-scale');return;}const available=window.innerHeight-36;const natural=inner.scrollHeight;inner.style.setProperty('--category-scale',String(Math.min(1,available/Math.max(1,natural))));overlay.scrollTop=0;});}
 new ResizeObserver(scheduleFit).observe(inner);
 new MutationObserver(scheduleFit).observe(inner,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
 window.addEventListener('resize',scheduleFit);
 overlay.addEventListener('load',scheduleFit,true);
 new MutationObserver(scheduleFit).observe(overlay,{attributes:true,attributeFilter:['class']});
 scheduleFit();
})();

;

(() => {
 const overlay=document.getElementById('overlay');
 const update=()=>overlay.classList.toggle('has-more-below',overlay.scrollTop+overlay.clientHeight<overlay.scrollHeight-8);
 overlay.addEventListener('scroll',update,{passive:true});
 window.addEventListener('resize',update);
 new ResizeObserver(update).observe(overlay.querySelector('.overlay-inner'));
 update();
})();

;

(() => {
 const a=document.querySelector('#k1 .fish-img'),b=document.querySelector('#k4 .fish-img');
 const original=a.getAttribute('src');a.src=b.getAttribute('src');b.src=original;
 a.removeAttribute('onerror');b.removeAttribute('onerror');
 a.style.transform='scaleX(-1)';b.style.transform='none';
 a.style.width='150px';b.style.width='195px';
 const person=document.getElementById('cmain');
 person.querySelector('.char-img').src='assets/works/legs.png';
 person.setAttribute('aria-label','About Thuy An Ngo');person.setAttribute('aria-expanded','false');
 const reveal=document.createElement('div');reveal.className='bio-reveal';
 reveal.innerHTML='<span><strong>Thuy An Ngo</strong><br>Motion Designer · RMIT Student</span><span>2D animation, experimental film & speculative design.</span><span>Dreams, memory & the uncanny.<br>Based in Vietnam.</span>';


 document.addEventListener('keydown',event=>{if(event.key==='Escape'){person.classList.remove('bio-open');person.setAttribute('aria-expanded','false');}});
})();

;

(() => {
 const person=document.getElementById('cabt');person.removeAttribute('onclick');
 person.setAttribute('aria-label','Reveal about me and software');
 person.addEventListener('click',event=>{event.stopPropagation();goMain();});
 const spill=document.createElement('div');spill.className='wind-spill';
 const items=[['Thuy An Ngo<br>Motion Designer · RMIT',20,-180,-8],['Dreams, memory<br>& the uncanny',225,-110,7],['2D Animation<br>Experimental Film',130,-290,-5],['Ae<br><small>After Effects</small>',370,-255,10],['Procreate',335,-25,-8],['Based in Vietnam',40,-65,5]];
 items.forEach(([text,x,y,r],i)=>{const el=document.createElement('span');el.innerHTML=text;el.style.cssText=`--x:${x}px;--y:${y}px;--r:${r}deg;--delay:${i*45}ms`;if(i===3||i===4)el.className='software';spill.append(el);});person.append(spill);
 const original=window.selectIndexItem;let navigating=false;
 window.selectIndexItem=async function(cat,index){
  if(navigating)return;navigating=true;
  try{const frame=document.querySelector('.category-center .crt-cabinet,.category-center .ui-card,.flip-spread,.article-paper .crt-cabinet,.article-paper .article-cover');
   if(frame&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches)await frame.animate([{transform:'scale(1)',opacity:1},{transform:'scale(1.035)',opacity:.25}],{duration:220,easing:'ease-in-out'}).finished;
   original(cat,index);
  }finally{navigating=false;}
 };
})();

;

(()=>{

const person=document.getElementById('cabt'),about=document.getElementById('abt'),spill=person.querySelector('.wind-spill');
spill.innerHTML='<article class="spill-card about-cloud"><svg class="cloud-outline" viewBox="0 0 800 480" preserveAspectRatio="none" aria-hidden="true"><path d="M92 374 C20 378 5 291 49 249 C5 193 41 124 105 126 C99 66 177 33 238 64 C282 4 379 6 425 53 C490 8 583 29 599 83 C682 57 748 103 738 164 C809 189 807 274 753 298 C776 361 712 409 650 392 C615 462 523 462 481 424 C416 480 326 464 298 420 C233 458 164 424 166 387 C134 410 100 401 92 374Z" fill="#fff2b0" stroke="#493629" stroke-width="3"/><ellipse cx="71" cy="439" rx="24" ry="22" fill="#fff2b0" stroke="#493629" stroke-width="3"/></svg><div class="cloud-content"><h2>Hi, I’m An!</h2><p class="cloud-bio">A junior motion designer telling stories through movement, memories &amp; human emotion.</p><div class="cloud-facts"><section><div class="rmit-icon">RMIT</div><p>Digital Media · Melbourne<br>Bachelor of Design, 2024–present</p></section><section><h3>Skills</h3><div class="software-icons"><div class="app-icon" role="img" aria-label="After Effects" title="After Effects">Ae</div><div class="app-icon" role="img" aria-label="Premiere Pro" title="Premiere Pro">Pr</div><div class="app-icon illustrator" role="img" aria-label="Illustrator" title="Illustrator">Ai</div></div></section></div></div></article>';
about.append(spill);
person.setAttribute('aria-label','About Thuy An Ngo. Hover for details; click to return home.');
const reveal=show=>{
 if(show){
  const head=person.querySelector('.char-img').getBoundingClientRect();
  const area=spill.getBoundingClientRect();
  const originX=head.left+head.width*.53-area.left;
  const originY=head.top+head.height*.34-area.top;
  spill.querySelectorAll('.spill-card').forEach(card=>{
   card.style.setProperty('--from-x',(originX-card.offsetLeft-card.offsetWidth/2)+'px');
   card.style.setProperty('--from-y',(originY-card.offsetTop-card.offsetHeight/2)+'px');
  });
  void spill.offsetWidth;
 }
 about.classList.toggle('about-revealed',show);spill.setAttribute('aria-hidden',String(!show));
};
reveal(false);
let hideTimer; const showCloud=()=>{clearTimeout(hideTimer);reveal(true);}; const hideCloudLater=()=>{clearTimeout(hideTimer);hideTimer=setTimeout(()=>reveal(false),3000);}; person.addEventListener('pointerenter',showCloud);person.addEventListener('pointerleave',hideCloudLater);spill.addEventListener('pointerenter',showCloud);spill.addEventListener('pointerleave',hideCloudLater);spill.addEventListener('focusin',showCloud);spill.addEventListener('focusout',hideCloudLater);person.addEventListener('blur',hideCloudLater);
person.addEventListener('focus',showCloud);person.addEventListener('click',()=>{clearTimeout(hideTimer);reveal(false);});

})();

;

(()=>{
 const cloud=document.querySelector('.about-cloud');
 cloud.querySelector('.cloud-bio').textContent='Hi, I’m An, a junior motion designer drawn to cinema, animation and the little things we feel but cannot always explain. I turn memories and human emotions into moving images, and I’m exploring title sequence design.';
 cloud.querySelector('.rmit-icon').outerHTML='<img class="rmit-logo" src="assets/works/rmit-logo.png?v=20261020-transparent" alt="RMIT University">';
 cloud.insertAdjacentHTML('beforeend','<i class="cloud-doodle star" aria-hidden="true">✦</i><i class="cloud-doodle heart" aria-hidden="true">♡</i><i class="cloud-doodle swirl" aria-hidden="true">✧</i>');
 const originalOpen=openOverlay;let changing=false;
 window.openOverlay=async function(cat){
  const ov=document.getElementById('overlay');
  if(!ov.classList.contains('open')||matchMedia('(prefers-reduced-motion: reduce)').matches){originalOpen(cat);return;}
  if(changing)return;changing=true;
  const inner=ov.querySelector('.overlay-inner');
  try{
   await inner.animate([{opacity:1},{opacity:0}],{duration:140,easing:'ease-out'}).finished;
   originalOpen(cat);
   await inner.animate([{opacity:0},{opacity:1}],{duration:240,easing:'ease-in'}).finished;
  }finally{changing=false;}
 };
})();

;

(()=>{
const heading=document.getElementById('ov-cat');
function update(){
 const cat=document.getElementById('overlay').dataset.category;
 const key={animation:'motion',art:'art',contact:'contact',film:'production',ui:'ui',graphic:'graphic'}[cat];
 if(key&&!heading.querySelector('.illustrated-title')) heading.innerHTML=illustratedTitle(key,{motion:'Motion design',art:'Art gallery',contact:'Contact Me?',production:'Productions',ui:'UI/UX',graphic:'Graphic design'}[key]);
}
new MutationObserver(update).observe(heading,{childList:true});
update();
})();

;

(()=>{const grain=document.createElement('div');grain.className='paper-grain';grain.setAttribute('aria-hidden','true');document.getElementById('overlay').append(grain);})();

;

(()=>{const skills=document.querySelector('.cloud-facts h3');if(skills)skills.innerHTML=illustratedTitle('skills','Skills');})();

;

(()=> {
 const aboutLabel=document.querySelector('#cmain .cbubble');
 if(aboutLabel)aboutLabel.textContent='About me';
 const greeting=document.querySelector('.cloud-content h2');
 if(greeting)greeting.innerHTML=illustratedTitle('about','About Me');
})();

;

(()=>{
 const roots=[document.getElementById('ov-body'),document.getElementById('abt')];
 const options={childList:true,subtree:true,characterData:true};
 const observer=new MutationObserver(updateNumbers);
 function updateNumbers(){
  observer.disconnect();
  for(const root of roots){
   const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{
    acceptNode(node){
     if(!/[\d\/←→↗·&+–—]/.test(node.data)||node.parentElement.closest('script,style,svg,input,textarea,.handwritten-number'))return NodeFilter.FILTER_REJECT;
     return NodeFilter.FILTER_ACCEPT;
    }
   });
   const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
   for(const node of nodes){
    const fragment=document.createDocumentFragment();
    for(const part of node.data.split(/([\d\/←→↗·&+–—]+)/)){
     if(/^[\d\/←→↗·&+–—]+$/.test(part)){const span=document.createElement('span');span.className='handwritten-number';span.textContent=part;fragment.append(span);}
     else fragment.append(document.createTextNode(part));
    }
    node.replaceWith(fragment);
   }
  }
  roots.forEach(root=>observer.observe(root,options));
 }
 updateNumbers();
})();
