/* Local gallery theater. Shares existing sprite kits and owns only this mount. */
(function () {
  'use strict';
  window.LocalCharacterTheater={mount:mount};
  function mount(root,options){
  if(!root)return null;
  if(root.theater)return root.theater;
  options=options||{};
  var data=window.LocalTheaterData, kit=window.AIStudioSprites;
  var $=function(id){return root.querySelector('[data-theater="'+id+'"]');}, c=$('scene'),g=c.getContext('2d');
  var voice=window.LocalTheaterVoice,reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var layout=window.LocalTheaterLayout,worldFlipped=false;
  var room=window.LocalTheaterRoom?LocalTheaterRoom.create({cast:data.cast,sprites:kit}):null,roomMode=false;
  var speechLayout=window.LocalTheaterBubble,headCache=new WeakMap(),speechMeasureKey='',speechSize=null;
  var speechSkinKey='';
  var current=data.cast[0],time=0,last=0,raf=0,active=-1,playing=false,visible=false,paints=0,ready=false;
  function canRun(){return visible&&!document.hidden;}
  function stop(){setPlaying(false);}
  function updateVisibility(){var rect=c.getBoundingClientRect(),on=rect.width>0&&rect.height>0&&rect.bottom>0&&rect.top<innerHeight&&rect.right>0&&rect.left<innerWidth;visible=on;if(!canRun())stop();}
  function context(id){var own=data.cast.some(function(cast){return cast.id===id;});$('heading').textContent=I18n.t('角色小剧场 · ')+current.name;$('context').textContent=own?current.beats.length+I18n.t(' 段小剧场跟随当前伙伴。点击播放开始；移出视野会暂停。'):I18n.t('当前素材角色 ')+(options.nameFor?options.nameFor(id):id)+I18n.t('；小剧场保留 ')+current.name+I18n.t('。可在下方选择十位伙伴。');}
  function caption(value){if(I18n.lang!=='en')return value;var lines=[],line='';value.split(' ').forEach(function(word){if((line+' '+word).trim().length>32&&line){lines.push(line);line=word;}else line+=(line?' ':'')+word;});if(line)lines.push(line);return lines.join('\n');}
  function duration(){return current.beats.reduce(function(n,b){return n+b.seconds*1000;},0);}
  function phase(){var start=0;for(var i=0;i<current.beats.length;i++){var b=current.beats[i],end=start+b.seconds*1000;if(time<end||i===current.beats.length-1)return {b:b,i:i,p:Math.min(1,(time-start)/(end-start)),local:time-start};start=end;}}
  function text(value,x,y,color,size){g.fillStyle=color||'#dee4f0';g.font=((size||12)>=20?24:12)+'px "Local Theater Pixel", monospace';if(worldFlipped){var width=g.measureText(value).width;g.save();g.translate(x+width,y);g.scale(-1,1);g.fillText(value,0,0);g.restore();}else g.fillText(value,x,y);}
  function box(x,y,w,h,color){g.fillStyle=color;g.fillRect(Math.round(x),Math.round(y),w,h);}
  function star(x,y,s){box(x-s,y,s*2+2,2,current.color);box(x,y-s,2,s*2+2,current.color);}
  function card(label,x,y,w){box(x,y,w||105,29,'#333d55');text(label,x+9,y+20,current.color,12);}
  function rice(x,y){box(x+7,y-7,34,8,'#f3f0dc');box(x,y,48,9,'#a9c8dc');box(x+5,y+9,38,10,'#6c98b8');box(x+12,y+19,24,4,'#6c98b8');for(var j=0;j<3;j++)box(x+12+j*11,y-20-Math.round(Math.sin(time/400+j)*3),2,9,'#9aa6b9');}
  function sprite(pose,x,alpha,gray,frame){
    var front=phase().b.facing==='front',s=kit.frame(current.id,pose,frame,front?'front':'right',phase().b.expression||'auto');
    g.save();g.globalAlpha=alpha===undefined?1:alpha;if(gray)g.filter='grayscale('+gray+')';
    // The scene transform mirrors sprite, travel and props together.
    g.translate(Math.round(x)+(front&&worldFlipped?96:0),135);if(front&&worldFlipped)g.scale(-1,1);
    g.drawImage(s,0,0,96,128);g.restore();
  }
  function actionFrame(beat,local){
    var state=kit.states[beat.pose]||kit.states.idle;
    if(beat.playback==='hold'){
      var previous=current.beats[current.beats.indexOf(beat)-1];
      return previous?actionFrame(previous,previous.seconds*1000-0.01):state.count-1;
    }
    var frame=Math.floor(Math.max(0,local)/state.frameMs);
    return beat.playback==='loop'?frame%state.count:Math.min(state.count-1,frame);
  }
  // Same fillRect silhouette and palette as studio.js bubble(), with a variable text width.
  function paintSpeechFrame(ctx,w,h,tailX,p){
    ctx.fillStyle='#2e243e';ctx.fillRect(3*p,0,w-6*p,p);ctx.fillRect(p,p,w-2*p,2*p);ctx.fillRect(0,3*p,w,h-5*p);ctx.fillRect(2*p,h-2*p,w-4*p,2*p);ctx.fillRect(tailX-p,h,3*p,2*p);
    ctx.fillStyle='#fff5ea';ctx.fillRect(3*p,p,w-6*p,h-2*p);ctx.fillRect(p,3*p,w-2*p,h-6*p);ctx.fillRect(tailX,h-p,2*p,2*p);
  }
  function paintSpeechSkin(pos,width,height,pixel){
    var skin=$('speech-skin'),ratio=window.devicePixelRatio||1;
    var key=[width,height,pos.tailX,pixel,ratio].join('|');if(key===speechSkinKey)return;speechSkinKey=key;
    skin.width=Math.ceil(width*ratio);skin.height=Math.ceil((height+pixel*2)*ratio);skin.style.width=width+'px';skin.style.height=(height+pixel*2)+'px';
    var ctx=skin.getContext('2d');ctx.scale(ratio,ratio);ctx.imageSmoothingEnabled=false;
    paintSpeechFrame(ctx,width,height,Math.round(pos.tailX/pixel)*pixel,pixel);
    skin.dataset.tailX=Math.round(pos.tailX/pixel)*pixel;skin.dataset.pixel=pixel;
  }
  function headMarker(pose,frame){
    var image=kit.frame(current.id,pose,frame,phase().b.facing==='front'?'front':'right',phase().b.expression||'auto');
    if(headCache.has(image))return headCache.get(image);
    var pixels=image.getContext('2d').getImageData(0,0,image.width,image.height).data,top=10;
    // Look through the middle of the scalp, excluding hands, wings and floating props.
    for(var y=6;y<23;y++){var opaque=0;for(var x=18;x<30;x++)if(pixels[(y*image.width+x)*4+3]>180)opaque++;if(opaque>=7){top=y;break;}}
    var marker={x:48,y:135+top*2};headCache.set(image,marker);return marker;
  }
  function positionSpeech(actorX,pose,frame){
    var stage=root.querySelector('.stage'),bubble=$('speech'),marker=headMarker(pose,frame);
    var anchor=speechLayout.anchor({actorX:actorX,headX:marker.x,headY:marker.y,room:roomMode,mirrored:layout.mirrored($('facing').value),front:phase().b.facing==='front'});
    var canvasRect=c.getBoundingClientRect(),stageRect=stage.getBoundingClientRect();
    var headX=canvasRect.left-stageRect.left-stage.clientLeft+anchor.x/c.width*canvasRect.width;
    var headY=canvasRect.top-stageRect.top-stage.clientTop+anchor.y/c.height*canvasRect.height;
    var key=phase().b.line+'|'+roomMode+'|'+stage.clientWidth+'|'+(document.fonts&&document.fonts.check('12px "Local Theater Pixel"'));
    if(key!==speechMeasureKey){
      // One line per sentence: grow horizontally, and only reduce the type on tiny screens.
      var maxWidth=stage.clientWidth-12,fontSize=12;
      bubble.style.maxWidth=maxWidth+'px';bubble.style.fontSize=fontSize+'px';
      while($('speech-reserve').scrollWidth>maxWidth-28&&fontSize>10){fontSize--;bubble.style.fontSize=fontSize+'px';}
      speechSize={width:bubble.offsetWidth,height:bubble.offsetHeight};speechMeasureKey=key;
    }
    var speechPixel=Math.max(2,Math.round(speechSize.height/13));
    var pos=speechLayout.place({stageWidth:stage.clientWidth,width:speechSize.width,height:speechSize.height,headX:headX,headY:headY,gap:speechPixel*2+2});
    bubble.style.left=pos.x+'px';bubble.style.top=pos.y+'px';
    $('speech-tail').style.left=(pos.tailX-5)+'px';$('speech-tail').style.height=pos.tailHeight+'px';
    $('speech-tail').hidden=true;
    // Keep the production bubble's 13-pixel body proportions as the line grows wider.
    paintSpeechSkin(pos,speechSize.width,speechSize.height,speechPixel);
  }
  function sceneCue(effect){
    if(effect==='summary')return I18n.t('摘要已交付 · 待整理：')+Math.round(300+time/duration()*900)+I18n.t(' 页');
    if(window.LocalTheaterOriginalStage){var cue=LocalTheaterOriginalStage.cue(effect);if(cue)return cue;}
    return {board:I18n.t('黑板：今日方案'),wrong:I18n.t('黑板：2 + 2 = 5'),doubt:I18n.t('黑板：2 + 2 = ？'),cookie:I18n.t('先吃块饼干，我重新讲。'),waiting:I18n.t('正在等待中……'),reconnect:I18n.t('重新连接中……'),tea:I18n.t('信号回来了 ✓'),effort:I18n.t('努力处理中……'),smell:I18n.t('……什么这么香？'),rice:I18n.t('努力处理中……正在干饭。'),forgot:I18n.t('任务：？？'),banned:I18n.t('账号已停用'),login:I18n.t('新账号 · 登录中'),return:I18n.t('继续工作 ✓'),answers:I18n.t('两份答案，都很确定。'),sorry:I18n.t('同步认错 × 2'),pages:I18n.t('先读资料。'),scroll:I18n.t('长卷还在增长……'),notes:I18n.t('越整理，资料越多。'),dance:I18n.t('专属滴滴舞曲 ♪'),turn:I18n.t('音乐还没停 ♪')}[effect]||'';
  }
  function render(){
    paints++;
    var v=phase(),b=v.b,p=v.p,e=b.effect,frame=actionFrame(b,v.local);
    g.imageSmoothingEnabled=false;box(0,0,576,336,'#171b29');
    var place=$('location').value;roomMode=!!room&&place!=='stage';
    root.querySelector('.proposal').classList.toggle('room-mode',roomMode);
    root.querySelector('.stage').classList.toggle('room',roomMode);
    $('room-caption').hidden=false;
    if(roomMode){
      room.draw(g,current.id,place,time,current.kind==='original');
      $('room-location').textContent=room.describe(current.id,place)+' · '+b.label;
      $('room-cue').textContent=sceneCue(e);
    }else{
      if(window.LocalTheaterSimpleStage)LocalTheaterSimpleStage.draw(g);
      else {box(0,0,576,264,'#171b29');box(0,264,576,72,'#302537');}
      $('room-location').textContent=I18n.t('简洁舞台 · ')+b.label;
      $('room-cue').textContent=sceneCue(e);
    }
    // The room stays fixed. Actors, travel and scene props share a smaller theatre layer.
    g.save();if(roomMode){g.translate(144,164*1.8-263*.5);g.scale(.5,.5);}
    worldFlipped=layout.mirrored($('facing').value,b.facing);if(worldFlipped){g.translate(576,0);g.scale(-1,1);}
    if(current.id==='kimi'){
      layout.paperSegments(layout.scrollLength(time,duration())).forEach(function(strip){
        box(strip.x,strip.y,strip.w,strip.h,'#dbd3ba');
        if(!strip.vertical)for(var n=7;n<strip.w-8;n+=18)box(strip.x+n,strip.y+7,10,2,'#9c957f');
      });
      if(e==='summary')card(I18n.t('待整理：')+Math.round(300+time/duration()*900)+I18n.t(' 页'),365,170,160);
    }
    var x=240;
    var originalState=null;
    if(current.kind==='original'&&window.LocalTheaterOriginalStage){
      x=LocalTheaterOriginalStage.actorX(current.id,e,p,time);
      originalState={id:current.id,effect:e,p:p,local:v.local,time:time,total:duration(),frame:frame,flipped:worldFlipped,front:b.facing==='front',color:current.color,actorX:x};
      g.save();LocalTheaterOriginalStage.drawBehind(g,originalState);g.restore();
    }
    if(current.id==='deepseek'){x=v.i===0?180+p*90:270;}
    if(current.id==='claude')x=v.i===0?180+p*60:240;
    if(current.id==='grok'&&v.i===1)x=240+Math.sin(p*Math.PI*4)*15;
    if(e==='twins'||e==='answers'||e==='sorry'||e==='merge'){
      var gap=e==='twins'?p*83:e==='merge'?(1-p)*83:83;
      sprite(b.pose,x-gap,.65,0,frame);sprite(b.pose,x+gap,.65,0,frame);
      star(190,125,5);star(380,125,5);
    }
    var gray=e==='banned'?p:e==='login'?1-p:0;
    sprite(b.pose,x,1,gray,frame);
    if(originalState){g.save();LocalTheaterOriginalStage.drawFront(g,originalState);g.restore();}
    if(e==='board'||e==='wrong'||e==='doubt'){
      box(355,136,145,95,'#847263');box(361,142,133,81,'#2a4843');text(e==='board'?I18n.t('今日方案'):e==='wrong'?'2 + 2 = 5':'2 + 2 = ?',372,180,'#eff0da',17);box(370,231,5,32,'#847263');box(480,231,5,32,'#847263');
    }
    if(e==='cookie')card(worldFlipped?I18n.t('← 补救饼干'):I18n.t('补救饼干 →'),354,208);
    if(e==='waiting'||e==='reconnect'){
      g.strokeStyle=current.color;g.lineWidth=4;g.beginPath();g.arc(288,115,14,time/240,time/240+Math.PI*1.5);g.stroke();card(e==='waiting'?I18n.t('正在等待中'):I18n.t('重新连接中'),365,180,120);
      box(172,245,42,3,'#83a59b');box(226,245,16,3,'#83a59b');box(213,240,5,12,'#d6dbdc');
    }
    if(e==='tea')card(I18n.t('信号回来了 ✓'),365,180,132);
    if(e==='effort'||e==='smell'||e==='rice'){card(I18n.t('努力处理中…'),70,140,130);rice(410,239);}
    if(e==='forgot'){rice(410,239);text(I18n.t('任务：？？'),360,185,current.color,17);}
    if(e==='banned')card(I18n.t('账号已停用'),360,165,125);
    if(e==='login')card(I18n.t('新账号 · 登录中'),355,165,150);
    if(e==='return')card(I18n.t('继续工作 ✓'),360,165,125);
    $('answers').hidden=e!=='answers';
    if(e==='sorry')card(I18n.t('同步认错 × 2'),365,172,135);
    if(current.id==='grok'){
      var corners=[[95,100],[465,100],[95,253],[465,253]];corners.forEach(function(a){box(a[0],a[1],16,2,'#a88aa8');box(a[0],a[1],2,10,'#a88aa8');});text('REC ●',110,140,current.color,12);
      if(e==='dance'||e==='turn'){text('♪',190,155+Math.sin(time/220)*8,current.color,26);text('♫',380,170+Math.cos(time/220)*8,current.color,23);star(410,220,5);}
    }
    if(e==='summary')card(I18n.t('三条重点 ✓'),352,219,120);
    g.restore();worldFlipped=false;
    if(roomMode&&current.kind!=='original')room.foreground(g,current.id,place);
    if(v.i!==active){active=v.i;$('speech-reserve').textContent=caption(b.line);$('stage-label').textContent='0'+(v.i+1)+' / '+b.label;Array.from($('beats').children).forEach(function(li,i){li.classList.toggle('active',i===v.i);});}
    $('pose-facing').textContent=b.facing==='front'?I18n.t('面向观众 · 表演'):I18n.t('主要朝向 · ')+($('facing').value==='left'?I18n.t('向左'):I18n.t('向右'));
    var count=voice?voice.sync(current.id+':'+v.i,b.voice||[],v.local,b.seconds,playing&&canRun(),Number($('speed').value),b.effect,b.effect==='turn'&&current.id==='grok'?current.beats.find(function(beat){return beat.effect==='dance';}).seconds:0):Array.from(b.line).length;
    $('speech-text').textContent=I18n.lang==='en'?caption(b.line):(reduceMotion||!b.voice?b.line:Array.from(b.line).slice(0,count).join(''));
    positionSpeech(x,b.pose,frame);
    $('time').value=time;$('clock').value=(time/1000).toFixed(1)+' / '+(duration()/1000).toFixed(1)+'s';
  }
  function setPlaying(value){if(voice)voice.stop();playing=!!value&&canRun();$('play').textContent=playing?I18n.t('暂停'):I18n.t('播放');$('play').setAttribute('aria-pressed',String(playing));last=0;if(!playing&&raf){cancelAnimationFrame(raf);raf=0;}schedule();}
  function select(cast){setPlaying(false);current=cast;kit=cast.spriteKit==='hero'?window.StudioHeroSprites:window.AIStudioSprites;time=0;active=-1;speechMeasureKey='';root.style.setProperty('--accent',cast.color);context(cast.id);$('name').textContent=cast.name;$('voice-name').textContent=I18n.t('音色：')+cast.sound.label;$('voice-name').title=cast.sound.description;$('music-sample').textContent=cast.id==='grok'?I18n.t('试听专属滴滴舞曲 ♪'):I18n.t('试听小旋律 ♪');$('model').textContent=cast.name;$('tagline').textContent=cast.tagline;$('impression').textContent=cast.impression;$('title').textContent=cast.title;$('note').textContent=cast.note;$('props').textContent=I18n.t('道具：')+cast.props;var facts=cast.characterCanon;$('character-canon').hidden=!facts;if(facts){$('canon-role').textContent=facts.role;$('canon-traits').textContent=facts.traits.map(function(t){return t.replace(/[。；]+$/,'');}).join(' · ');$('canon-relations').textContent=facts.relationships.join('');$('canon-origin').textContent=facts.origin;$('canon-origin').hidden=!facts.origin;}$('time').max=duration();
    Array.from($('cast').children).forEach(function(btn){btn.setAttribute('aria-pressed',String(btn.dataset.id===cast.id));});
    $('beats').replaceChildren();var start=0;cast.beats.forEach(function(b){var t=start,li=document.createElement('li'),btn=document.createElement('button');btn.className='beat-button';btn.type='button';var strong=document.createElement('strong'),span=document.createElement('span'),p=document.createElement('p'),em=document.createElement('em');strong.textContent=b.label;span.textContent=b.seconds.toFixed(1)+'s';p.textContent=b.reuseNote||b.direction;em.textContent='“'+b.line+'”';btn.append(span,strong,p,em);btn.onclick=function(){time=t;setPlaying(false);active=-1;render();};li.append(btn);$('beats').append(li);start+=b.seconds*1000;});
    $('quotes').replaceChildren();cast.quotes.forEach(function(q){var div=document.createElement('div'),small=document.createElement('small'),line=document.createElement('span');div.className='quote';small.textContent=q.kind;var quoteText=q.text;data.cast.forEach(function(person){if(person.model&&person.model!==person.name)quoteText=quoteText.split(person.model).join(person.name);});line.textContent='“'+quoteText+'”';div.append(small,line);if(q.source){var a=document.createElement('a');a.href=q.source;a.textContent=I18n.t('出处 ↗');a.target='_blank';a.rel='noopener noreferrer';div.append(a);}$('quotes').append(div);});render();schedule();
  }
  function tick(now){raf=0;if(!canRun()||!playing){stop();return;}if(last)time=(time+Math.min(now-last,100)*Number($('speed').value))%duration();last=now;render();schedule();}
  function schedule(){if(playing&&canRun()&&!raf)raf=requestAnimationFrame(tick);}
  data.cast.forEach(function(cast){var btn=document.createElement('button');btn.type='button';btn.dataset.id=cast.id;btn.dataset.kind=cast.kind;btn.textContent=cast.name;btn.onclick=function(){select(cast);if(options.onSelect)options.onSelect(cast.id);};$('cast').append(btn);});
  $('play').onclick=function(){
    if(!playing){
      updateVisibility();
      if(!visible){c.scrollIntoView({block:'center',behavior:'instant'});updateVisibility();}
    }
    setPlaying(!playing);
  };$('restart').onclick=function(){if(voice)voice.stop();time=0;last=0;active=-1;render();};$('time').oninput=function(){time=Number(this.value);setPlaying(false);render();};$('facing').onchange=render;$('location').onchange=render;
  $('speed').onchange=function(){if(voice)voice.stop();last=0;render();};
  $('volume').oninput=function(){if(voice)voice.setVolume(Number(this.value)/100);};
  function audition(kind){setPlaying(false);render();if(!canRun())return;voice.audition(current.id,kind).then(function(played){if(!played||!canRun())return;$('sound-status').textContent=kind==='dots'?I18n.t('轻轻敲三下，留出无语的空白。'):kind==='music'?(current.id==='grok'?I18n.t('瑟瑟大人的原创滴滴舞曲：电子主旋律、低音和鼓点。'):I18n.t('舞台小旋律；跳舞段会以较低音量自动加入。')):current.sound.description+I18n.t('。试听一、二、三、四声。');}).catch(function(){$('sound-status').textContent=I18n.t('声音暂未启动，请再点一次。');});}
  $('audition').onclick=function(){audition('voice');};$('dots-sample').onclick=function(){audition('dots');};$('music-sample').onclick=function(){audition('music');};
  $('sound').onclick=async function(){
    try{if(!canRun())return;var enabled=await voice.enable(!voice.isEnabled());if(!canRun()){voice.stop();return;}this.setAttribute('aria-pressed',String(enabled));this.textContent=enabled?I18n.t('声调滴滴音：开 ♪'):I18n.t('开启声调滴滴音 ♪');$('sound-status').textContent=enabled?I18n.t('一声平、二声扬、三声拐弯、四声落；标点会停顿。'):I18n.t('声音已关闭。');if(enabled){var v=phase();time-=v.local;active=-1;setPlaying(true);render();}}
    catch(error){$('sound-status').textContent=I18n.t('声音暂未启动，可以再点一次试试。');}
  };
  function download(blob,name){var url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(function(){URL.revokeObjectURL(url);},1000);}
  $('export').onclick=function(){download(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),'studio-character-theater-v'+data.version+'.json');};
  $('frame').onclick=async function(){
    try{
      if(document.fonts)await document.fonts.load('12px "Local Theater Pixel"');render();
      // Freeze all scene pixels, text and DOM geometry together before async encoding.
      var image=document.createElement('canvas');image.width=c.width;image.height=c.height;
      var ctx=image.getContext('2d');ctx.imageSmoothingEnabled=false;ctx.drawImage(c,0,0);
      var canvasRect=c.getBoundingClientRect(),bubbleRect=$('speech').getBoundingClientRect(),style=getComputedStyle($('speech'));
      var sx=c.width/canvasRect.width,sy=c.height/canvasRect.height;
      var bx=(bubbleRect.left-canvasRect.left)*sx,bw=bubbleRect.width*sx;
      var skinRect=$('speech-skin').getBoundingClientRect();
      ctx.drawImage($('speech-skin'),(skinRect.left-canvasRect.left)*sx,(skinRect.top-canvasRect.top)*sy,skinRect.width*sx,skinRect.height*sy);
      var fontSize=parseFloat(style.fontSize)*sy,textRect=$('speech-text').getBoundingClientRect();
      ctx.font=style.fontWeight+' '+fontSize+'px '+style.fontFamily;ctx.textBaseline='alphabetic';
      var caption=$('speech-text').textContent;
      var metrics=ctx.measureText(caption),ascent=metrics.fontBoundingBoxAscent===undefined?fontSize:metrics.fontBoundingBoxAscent,descent=metrics.fontBoundingBoxDescent||0;
      var baseline=(textRect.top-canvasRect.top)*sy+(textRect.height*sy-ascent-descent)/2+ascent;
      ctx.fillStyle='#493248';var lines=caption.split('\n'),lh=fontSize*1.4;lines.forEach(function(line,i){ctx.fillText(line,bx+(bw-ctx.measureText(line).width)/2,baseline-(lines.length-1)*lh/2+i*lh);});
      ctx.textBaseline='top';
      if(phase().b.effect==='answers')Array.from($('answers').children).forEach(function(label){var rect=label.getBoundingClientRect(),x=(rect.left-canvasRect.left)*sx,y=(rect.top-canvasRect.top)*sy,w=rect.width*sx,h=rect.height*sy;ctx.fillStyle='#282c45';ctx.fillRect(x,y,w,h);ctx.strokeStyle='#b7a0ef';ctx.strokeRect(x,y,w,h);ctx.fillStyle='#faf7e9';ctx.font=12*sy+'px "Local Theater Pixel", monospace';ctx.fillText(label.textContent,x+5*sx,y+2*sy);});
      var fileName=current.id+'-'+phase().b.effect+'.png';image.toBlob(function(blob){if(blob)download(blob,fileName);});
    }catch(error){$('sound-status').textContent=I18n.t('画面暂未保存成功，请再点一次。');}
  };
  document.addEventListener('visibilitychange',function(){if(document.hidden)stop();else updateVisibility();});
  window.addEventListener('pagehide',stop);
  if(window.IntersectionObserver)new IntersectionObserver(function(entries){visible=entries[0].isIntersecting&&entries[0].intersectionRatio>0;if(!canRun())stop();},{threshold:.001}).observe(c);
  else window.addEventListener('scroll',updateVisibility,{passive:true});
  window.addEventListener('resize',updateVisibility,{passive:true});
  if(!kit){$('speech').textContent=I18n.t('像素素材未加载，请从项目内打开页面。');return null;}select(current);updateVisibility();setPlaying(false);ready=true;
  if(window.ResizeObserver)new ResizeObserver(function(){speechMeasureKey='';updateVisibility();render();}).observe(c);
  if(document.fonts)document.fonts.load('24px "Local Theater Pixel"').then(function(){render();}).catch(function(){/* Keep readable fallback when unavailable. */});
  var api={
    select:function(id){var cast=data.cast.find(function(person){return person.id===id;});if(cast){if(cast.id!==current.id)select(cast);context(id);}else{stop();context(id);}return !!cast;},
    refresh:function(){speechMeasureKey='';select(current);},
    pause:stop,
    snapshot:function(){var v=phase();return{ready:ready,selected:current.id,name:current.name,kind:current.kind,spriteKit:current.spriteKit,playing:playing,running:!!raf,visible:visible,time:time,duration:duration(),beat:v.i,beats:current.beats.length,effect:v.b.effect,facing:v.b.facing==='front'?'front':$('facing').value,location:$('location').value,voice:voice?voice.snapshot():null,paints:paints};}
  };root.theater=api;return api;
  }
}());
