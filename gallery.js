/* Gallery UI. The original sprite and sound engines are intentionally separate. */
(()=>{'use strict';
 const $=id=>document.getElementById(id), original=JSON.parse(JSON.stringify(LocalTheaterData)), ids=['Feline1','C0','X0','gpt','deepseek','claude','gemini','grok','kimi','doubao'];
 const common=['idle','walk','run','work','wave','talk','read','coffee','nap','sit','carry','cheer','jump'];
 const labels={idle:['Idle','待机'],walk:['Walk','走路'],run:['Run','跑步'],work:['Work','工作'],wave:['Wave','招手'],talk:['Talk','交谈'],read:['Read','阅读'],coffee:['Coffee','咖啡'],nap:['Nap','打盹'],sit:['Sit','坐下'],carry:['Carry','搬运'],cheer:['Cheer','欢呼'],jump:['Jump','跳跃']};
 const moods={auto:['Auto · follows the motion','自动 · 跟随动作'],neutral:['Neutral','自然'],smile:['Smile','微笑'],focus:['Focused','专注'],confused:['Confused','困惑'],smug:['Smug','得意'],surprise:['Surprised','惊讶'],angry:['Angry','生气'],sad:['Sad','难过'],cry:['Crying','哭泣'],love:['Love','喜欢'],sleepy:['Sleepy','困倦'],happy:['Happy','开心']};
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');let selected='Feline1',action='idle',direction='right',expression='auto',frame=0,playing=!reduce.matches,speed=1,view='animation',last=0,elapsed=0,theater=null,heroVisible=true,stageVisible=false;
 const portraits=new Map(),hero=$('heroCanvas'),canvas=$('characterStage'),ctx=canvas.getContext('2d');
 const kit=id=>['Feline1','C0','X0'].includes(id)?StudioHeroSprites:AIStudioSprites;
 const person=id=>LocalTheaterData.cast.find(c=>c.id===id);
 const pair=a=>a[I18n.lang==='zh'?1:0];
 const name=id=>person(id).name;
 function localizeStories(){
   original.cast.forEach(src=>{
     const c=person(src.id), copy=JSON.parse(JSON.stringify(src)),en=EnglishStories[src.id];
     if(I18n.lang==='en'){
       ['name','tagline','title','impression','props','note'].forEach(k=>copy[k]=en[k]);
       copy.sound.label=en.sound[0];copy.sound.description=en.sound[1];
       copy.beats.forEach((b,i)=>{b.label=en.beats[i][0];b.line=en.beats[i][1];b.direction=en.beats[i][2];b.reuseNote=en.beats[i][2];});
       if(en.canon)copy.characterCanon={...copy.characterCanon,...en.canon};
       copy.quotes=src.quotes.map(q=>{const n=src.beats.findIndex(b=>b.line===q.text);return {...q,kind:n>=0?'Translated dialogue':'Original source quote (Chinese)',text:n>=0?en.beats[n][1]:q.text};});
     }
     Object.assign(c,copy);
   });
 }
 function drawInto(c,image){const g=c.getContext('2d');g.clearRect(0,0,c.width,c.height);g.imageSmoothingEnabled=false;g.drawImage(image,0,0,c.width,c.height);}
 function makeButton(text,attrs={}){const b=document.createElement('button');b.type='button';b.textContent=text;for(const [k,v] of Object.entries(attrs))b.setAttribute(k,v);return b;}
 function updateRoster(){
  $('castGrid').replaceChildren();ids.forEach(id=>{const b=makeButton('',{'class':'cast-button','data-id':id,'aria-pressed':String(id===selected),'aria-label':name(id)}),c=document.createElement('canvas');c.width=48;c.height=64;drawInto(c,kit(id).frame(id,'idle',0,'right','auto'));const label=document.createElement('span');label.textContent=name(id);b.append(c,label);b.onclick=()=>select(id);$('castGrid').append(b);});
 }
 function updateControls(){
   const data=person(selected);$('characterName').textContent=data.name;$('characterTagline').textContent=data.tagline;$('characterType').textContent=I18n.label(data.kind==='original'?'original':'fanTag');$('selectedId').textContent=data.name;
   $('actionControls').replaceChildren();common.forEach(a=>{const b=makeButton(pair(labels[a]),{'data-action':a,'aria-pressed':String(action===a)});b.onclick=()=>setAction(a);$('actionControls').append(b);});
   $('uniqueActionControls').replaceChildren();kit(selected).uniqueActions(selected).forEach(a=>{const b=makeButton(I18n.t(a.name),{'data-action':a.id,'aria-pressed':String(action===a.id)});b.onclick=()=>setAction(a.id);$('uniqueActionControls').append(b);});
   $('expressionSelect').replaceChildren();Object.entries(moods).forEach(([id,text])=>{const opt=document.createElement('option');opt.value=id;opt.textContent=pair(text);$('expressionSelect').append(opt);});$('expressionSelect').value=expression;
   document.querySelectorAll('#directionControls button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.direction===direction)));
   updatePlayback();updateFilmstrip();paint();
 }
 function select(id){if(!ids.includes(id))return false;selected=id;if(!common.includes(action))action='idle';frame=0;elapsed=0;updateRoster();updateControls();if(theater)theater.select(id);return true;}
 function setAction(a){action=a;frame=0;elapsed=0;view='animation';setView(view);updateControls();}
 function setView(v){view=v;document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===v)));$('stageSize').textContent=v==='animation'?'48 × 64':'PORTRAIT';$('exportSheet').disabled=v==='portrait';$('frameScrubber').disabled=v==='portrait';$('prevFrame').disabled=v==='portrait';$('nextFrame').disabled=v==='portrait';$('playToggle').disabled=v==='portrait';$('filmstrip').hidden=v==='portrait';$('exportFrame').querySelector('span').textContent=I18n.label(v==='portrait'?'savePortrait':'single');paint();}
 function updateFilmstrip(){
   $('filmstrip').replaceChildren();for(let n=0;n<12;n++){const b=makeButton('',{'data-frame':n,'aria-label':I18n.label('frame')+' '+(n+1),'aria-pressed':String(frame===n)}),c=document.createElement('canvas');c.width=48;c.height=64;drawInto(c,kit(selected).frame(selected,action,n,direction,expression));const label=document.createElement('span');label.textContent=String(n+1).padStart(2,'0');b.append(c,label);b.onclick=()=>{playing=false;frame=n;updatePlayback();paint();};$('filmstrip').append(b);}
 }
 function updatePlayback(){
   $('playToggle').textContent=playing?'Ⅱ':'▶';$('playToggle').setAttribute('aria-label',I18n.label(playing?'pause':'play'));$('playToggle').setAttribute('aria-pressed',String(playing));$('frameCounter').value=String(frame+1).padStart(2,'0')+' / 12';$('frameScrubber').value=frame;
   $('filmstrip').querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.frame)===frame)));
   $('cycleTime').textContent=(kit(selected).states[action].frameMs*12/1000).toFixed(2)+'s / '+(I18n.lang==='zh'?'循环':'cycle');
 }
 function paint(){
   ctx.clearRect(0,0,canvas.width,canvas.height);ctx.imageSmoothingEnabled=false;
   if(view==='portrait'){let im=portraits.get(selected);if(!im){im=new Image();im.src='portraits/'+selected+'.png';im.onload=()=>{if(view==='portrait')paint();};portraits.set(selected,im);}if(im.complete&&im.naturalWidth){const scale=Math.floor(310/im.naturalHeight);ctx.drawImage(im,(canvas.width-im.naturalWidth*scale)/2,(canvas.height-im.naturalHeight*scale)/2,im.naturalWidth*scale,im.naturalHeight*scale);}return;}
   ctx.drawImage(kit(selected).frame(selected,action,frame,direction,expression),168,24,240,320);
 }
 function paintHero(now){const g=hero.getContext('2d');g.clearRect(0,0,640,300);g.imageSmoothingEnabled=false;ids.forEach((id,i)=>{const col=i%5,row=Math.floor(i/5),x=35+col*119,y=row*143+8;g.fillStyle='#d8cce0';g.fillRect(x-5,y+122,92,2);g.drawImage(kit(id).frame(id,'idle',reduce.matches?0:Math.floor(now/kit(id).states.idle.frameMs)%12,'right','auto'),x,y,84,112);});}
 function downloadCanvas(c,file){c.toBlob(blob=>{if(!blob)return;const a=document.createElement('a'),url=URL.createObjectURL(blob);a.href=url;a.download=file;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);$('status').textContent=I18n.label('saved');});}
 $('exportFrame').onclick=()=>{if(view==='portrait'){const im=portraits.get(selected);if(im?.naturalWidth){const c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;c.getContext('2d').drawImage(im,0,0);downloadCanvas(c,selected+'-portrait.png');}return;}downloadCanvas(kit(selected).frame(selected,action,frame,direction,expression),selected+'-'+action+'-'+direction+'-'+String(frame+1).padStart(2,'0')+'.png');};
 $('exportSheet').onclick=()=>{const c=document.createElement('canvas');c.width=576;c.height=128;const g=c.getContext('2d');['right','left'].forEach((d,row)=>{for(let n=0;n<12;n++)g.drawImage(kit(selected).frame(selected,action,n,d,expression),n*48,row*64);});downloadCanvas(c,selected+'-'+action+'-right-left.png');};
 $('playToggle').onclick=()=>{playing=!playing;last=0;updatePlayback();};
 function step(n){playing=false;frame=(frame+n+12)%12;updatePlayback();paint();}
 $('prevFrame').onclick=()=>step(-1);$('nextFrame').onclick=()=>step(1);$('frameScrubber').oninput=e=>{playing=false;frame=Number(e.target.value);updatePlayback();paint();};$('playSpeed').onchange=e=>{speed=Number(e.target.value);};
 $('expressionSelect').onchange=e=>{expression=e.target.value;updateFilmstrip();paint();};
 document.querySelectorAll('[data-direction]').forEach(b=>b.onclick=()=>{direction=b.dataset.direction;updateControls();});
 document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>setView(b.dataset.view));
 $('gridToggle').onchange=e=>$('spriteStage').classList.toggle('no-grid',!e.target.checked);
 canvas.onkeydown=e=>{if(view==='portrait')return;if(['ArrowRight','ArrowLeft',' '].includes(e.key)){e.preventDefault();if(e.key===' ')$('playToggle').click();else step(e.key==='ArrowRight'?1:-1);}};
 function language(lang){const state=theater?.snapshot();I18n.set(lang);localizeStories();updateRoster();updateControls();setView(view);if(theater){theater.refresh();if(state){const time=$('characterTheater').querySelector('[data-theater=time]');time.value=state.time;time.dispatchEvent(new Event('input'));}document.querySelectorAll('[data-theater=cast] button').forEach(b=>b.textContent=name(b.dataset.id));const sound=document.querySelector('[data-theater=sound]');sound.textContent=I18n.t(LocalTheaterVoice.isEnabled()?'声调滴滴音：开 ♪':'开启声调滴滴音 ♪');document.querySelector('[data-theater=sound-status]').textContent='';}paintHero(0);}
 I18n.set(I18n.lang);localizeStories();updateRoster();updateControls();
 theater=LocalCharacterTheater.mount($('characterTheater'),{onSelect:id=>{if(selected!==id)select(id);},nameFor:name});
 document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>language(b.dataset.lang));
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.target===hero)heroVisible=e.isIntersecting;if(e.target===canvas)stageVisible=e.isIntersecting;}));io.observe(hero);io.observe(canvas);
 let lastHero=0;function tick(now){if(!document.hidden){if(heroVisible&&now-lastHero>90){paintHero(now);lastHero=now;}if(playing&&stageVisible&&view==='animation'){if(last)elapsed+=(now-last)*speed;const ms=kit(selected).states[action].frameMs;let changed=false;while(elapsed>=ms){elapsed-=ms;frame=(frame+1)%12;changed=true;}if(changed){updatePlayback();paint();}}}last=now;requestAnimationFrame(tick);}requestAnimationFrame(tick);paintHero(0);
 document.addEventListener('visibilitychange',()=>{last=0;elapsed=0;});reduce.addEventListener('change',e=>{if(e.matches){playing=false;updatePlayback();paintHero(0);}});
 window.CharacterLab={selectCharacter:select,snapshot:()=>({selected,state:action,direction,expression,frame,playing,view,language:I18n.lang,characters:10,commonActions:13,uniqueActions:kit(selected).uniqueActions(selected)})};
 window.GalleryLocale={set:language,originalStories:original};
})();
