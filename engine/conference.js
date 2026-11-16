/* F1's sunflower-seed conference. No original-character badges or work orders. */
(function () {
  'use strict';
  var ids=['doubao','gpt','deepseek','claude','gemini','grok','kimi'];
  var colors=['#b6d8e8','#94cbb9','#7aaff0','#e9a16f','#b7a0ef','#dba0ba','#a9b7eb'];
  var seats=[[344,151],[402,133],[464,154],[490,211],[449,267],[382,270],[322,220]];
  var periods=[.48,.63,.52,.71,.57,.68,.46],cache=Object.create(null);
  var INK='#2a2237',CREAM='#fff0da';
  function clamp(v){return Math.max(0,Math.min(1,v));}
  function ease(v){v=clamp(v);return v*v*(3-2*v);}
  function mix(a,b,t){return a+(b-a)*clamp(t);}
  function rect(g,x,y,w,h,c){if(w<=0||h<=0)return;g.fillStyle=c;g.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h));}
  function line(g,x0,y0,x1,y1,c,size){x0=Math.round(x0);y0=Math.round(y0);x1=Math.round(x1);y1=Math.round(y1);var dx=Math.abs(x1-x0),sx=x0<x1?1:-1,dy=-Math.abs(y1-y0),sy=y0<y1?1:-1,err=dx+dy;for(;;){rect(g,x0,y0,size||2,size||2,c);if(x0===x1&&y0===y1)break;var twice=2*err;if(twice>=dy){err+=dy;x0+=sx;}if(twice<=dx){err+=dx;y0+=sy;}}}
  function icon(g,id,x,y,size,alpha){if(!cache[id]&&window.AIStudioBadges)cache[id]=AIStudioBadges.createIcon(id);if(alpha<=0)return;g.save();g.globalAlpha*=alpha===undefined?1:clamp(alpha);g.imageSmoothingEnabled=false;if(cache[id])g.drawImage(cache[id],Math.round(x),Math.round(y),size,size);else{rect(g,x,y,size,size,INK);rect(g,x+4,y+4,size-8,size-8,colors[ids.indexOf(id)]);}g.restore();}
  function heart(g,x,y,p){p=p||2;var c='#eea0bf';rect(g,x,y,3*p,2*p,c);rect(g,x+4*p,y,3*p,2*p,c);rect(g,x-p,y+p,9*p,2*p,c);rect(g,x,y+3*p,7*p,p,c);rect(g,x+p,y+4*p,5*p,p,c);rect(g,x+2*p,y+5*p,3*p,p,c);rect(g,x+3*p,y+6*p,p,p,c);}
  function stool(g,x,y){rect(g,x,y,35,7,'#a17a72');rect(g,x+3,y+7,4,14,'#775466');rect(g,x+28,y+7,4,14,'#775466');rect(g,x+6,y+15,24,3,'#775466');}
  function table(g){
    rect(g,388,233,7,56,'#775466');rect(g,460,233,7,56,'#775466');rect(g,394,271,69,4,'#775466');
    rect(g,388,197,80,7,'#442e43');rect(g,368,204,120,9,'#442e43');rect(g,356,213,144,16,'#442e43');rect(g,368,229,120,9,'#442e43');rect(g,387,237,82,5,'#442e43');
    rect(g,389,194,78,7,'#d8b08e');rect(g,369,201,118,9,'#d8b08e');rect(g,357,210,142,15,'#d8b08e');rect(g,369,225,118,8,'#c3957c');rect(g,388,233,80,5,'#a67a6c');
    rect(g,377,212,104,2,'#e9c4a3');rect(g,385,225,89,2,'#b68b78');
  }
  function bag(g,x,base,fill){
    fill=clamp(fill);var h=17+18*fill,y=base-h;
    rect(g,x+3,y,30,h,'#b99768');rect(g,x,y+5,36,h-4,'#e5c58e');rect(g,x+3,y+3,30,4,'#92704e');
    if(fill>.08){rect(g,x+10,y+12,16,13,'#786045');rect(g,x+15,y+13,4,10,'#fff1bf');rect(g,x+20,y+14,2,8,'#dccc9a');}
    else {rect(g,x+7,y+9,22,5,'#947254');rect(g,x+12,y+13,12,2,'#e5c58e');}
  }
  function shells(g,count){
    rect(g,413,226,45,4,'#9f96a9');
    for(var n=0;n<count;n++){var row=Math.floor(n/8),col=n%8;var x=415+col*5+(row%2?2:0),y=224-row*4;rect(g,x,y,4,2,'#e4d9b1');rect(g,x+1,y+2,2,1,'#8e785e');}
  }
  function symbol(g,type,x,y,color){
    var c=color||'#9d7c9e';
    if(type==='dots'){rect(g,x,y+7,2,2,c);rect(g,x+5,y+7,2,2,c);rect(g,x+10,y+7,2,2,c);}
    else if(type==='!'){rect(g,x+5,y,3,6,c);rect(g,x+5,y+8,3,3,c);}
    else {rect(g,x+3,y,7,2,c);rect(g,x+1,y+2,3,3,c);rect(g,x+8,y+2,3,4,c);rect(g,x+5,y+5,5,2,c);rect(g,x+5,y+7,2,2,c);rect(g,x+5,y+11,2,2,c);}
  }
  function chatter(g,i,x,y,local,busy,flipped){
    var clock=(local||0)/1000,period=periods[i]*(busy?.76:1),phase=((clock+i*.137)%period)/period;
    if(phase>(busy?.82:.66))return;
    var lift=busy?(i%2)*5:0,bx=x+(i%2?12:-6),by=y-24-lift,w=29,h=17;
    rect(g,bx+4,by,w-8,2,INK);rect(g,bx+1,by+2,w-2,3,INK);rect(g,bx,by+5,w,9,INK);rect(g,bx+3,by+14,w-6,3,INK);rect(g,bx+10,by+17,5,4,INK);
    rect(g,bx+4,by+2,w-8,13,CREAM);rect(g,bx+2,by+5,w-4,8,CREAM);rect(g,bx+11,by+15,3,4,CREAM);
    var type=['dots','!','?'][Math.floor(clock/period+i)%3];
    // Question and exclamation glyphs remain readable when the whole theatre mirrors.
    g.save();if(flipped){g.translate(bx+w,by);g.scale(-1,1);symbol(g,type,7,3,colors[i]);}else symbol(g,type,bx+7,by+3,colors[i]);g.restore();
    if(busy&&i%2===0){rect(g,bx+w+4,by+6,3,3,colors[i]);rect(g,bx+w+9,by+3,2,2,colors[i]);}
  }
  function escapePhase(s){
    if(s.effect==='f1_refill')return .42*ease((clamp(s.p)-.45)/.55);
    if(s.effect==='f1_abandoned')return .42+.58*ease(clamp(s.p)/.45);
    return 0;
  }
  function guest(s,i){
    var base=seats[i],x=base[0],y=base[1],alpha=1,flee=0,p=clamp(s.p);
    if(s.effect==='f1_open'){var arrival=ease((p-i*.05)/.65);x=mix(720+i*14,x,arrival);y=mix(250,y,arrival);alpha=arrival;}
    if(s.effect==='f1_news'||s.effect==='f1_chatter')y-=Math.max(0,Math.sin((s.local||0)/(periods[i]*160)+i))*2;
    if(s.effect==='f1_refill'||s.effect==='f1_abandoned'){
      flee=clamp((escapePhase(s)-i*.065)/(1-i*.065));var move=ease(flee);
      x=mix(x,1000+i*13,move);y=mix(y,[119,83,150,214,307,327,279][i],move);
      alpha=1-ease((flee-.68)/.32);
    }
    return{x:x,y:y,alpha:alpha,flee:flee};
  }
  function drawGuest(g,s,i){var pos=guest(s,i);if(pos.alpha<=0)return;g.save();g.globalAlpha*=pos.alpha;rect(g,pos.x+5,pos.y+34,22,3,'#17111f');icon(g,ids[i],pos.x,pos.y,32,1);g.restore();if(s.effect==='f1_news'||s.effect==='f1_chatter')chatter(g,i,pos.x,pos.y,s.local,s.effect==='f1_chatter',s.flipped);}
  function wind(g,p){
    var drift=36*ease(p);line(g,345+drift,155,376+drift,155,'#9d98b3',2);rect(g,375+drift,152,5,2,'#9d98b3');line(g,430+drift,174,465+drift,174,'#817b96',2);rect(g,430+drift,171,5,2,'#817b96');
    rect(g,407,188,3,3,'#d6c3d6');rect(g,417,188,3,3,'#d6c3d6');rect(g,427,188,3,3,'#d6c3d6');
  }
  function behind(g,s){
    var e=s.effect,p=clamp(s.p);
    seats.forEach(function(pos){stool(g,pos[0]-1,pos[1]+31);});
    stool(g,145,251);
    [0,1,2].forEach(function(i){drawGuest(g,s,i);});
    table(g);
    var fill=e==='f1_open'?1:e==='f1_news'?1-.35*p:e==='f1_chatter'?.65*(1-p):e==='f1_abandoned'?1:0;
    bag(g,357,222,fill);
    var amount=e==='f1_open'?Math.floor(p*6):e==='f1_news'?6+Math.floor(p*26):e==='f1_chatter'?32+Math.floor(p*40):72;
    shells(g,amount);
    [3,4,5,6].forEach(function(i){drawGuest(g,s,i);});
    if(e==='f1_empty'){
      seats.forEach(function(pos,i){if(i%2===0){rect(g,pos[0]+10,pos[1]-10,2,2,colors[i]);rect(g,pos[0]+16,pos[1]-10,2,2,colors[i]);rect(g,pos[0]+22,pos[1]-10,2,2,colors[i]);}});
    }
    if(e==='f1_abandoned'&&p>.45)wind(g,(p-.45)/.55);
  }
  function front(g,s){
    if(s.effect!=='f1_refill')return;
    var p=clamp(s.p),delivery=ease(p/.78),x=mix(622,357,delivery),base=mix(151,222,delivery);
    bag(g,x,base,1);
    if(p<.9){g.save();g.globalAlpha*=1-ease((p-.7)/.2);heart(g,x+10,base-52,1.5);g.restore();}
  }
  var cues={f1_open:'猫猫大会开张：瓜子摆好，七位入座。',f1_news:'七嘴八舌，一边听八卦一边嗑瓜子。',f1_chatter:'越聊越起劲，瓜子壳已经堆成小山。',f1_empty:'全场停半拍：这一包怎么空得这么快？',f1_refill:'妈妈再来一包——七位趁她回头偷偷溜。',f1_abandoned:'新瓜子到了，大家却都跑光了。只剩一圈空凳。'};
  window.LocalTheaterConference={
    drawBehind:function(ctx,s){ctx.save();ctx.imageSmoothingEnabled=false;behind(ctx,s);ctx.restore();},
    drawFront:function(ctx,s){ctx.save();ctx.imageSmoothingEnabled=false;front(ctx,s);ctx.restore();},
    cue:function(effect){return I18n.t(cues[effect]||'');}
  };
}());
