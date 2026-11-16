/* Shared 48x64 art layers. Locomotion and hand/prop keyframes belong to the
   original sprite kits; head and cloth attachment follow their local joints. */
(function(){
  'use strict';
  const cast=window.StudioCostumeLayers;
  // Authored head layers already include their outside contour. Keep their
  // native silhouette instead of tracing a second one-pixel ring around it.
  const headInks=new Set(Object.values(cast).flatMap(actor=>Object.values(actor.heads).flatMap(h=>h.colors)));
  function stamp(r, layer, dx, dy, hem) {
    dx=Math.round(dx);dy=Math.round(dy);
    layer.rows.forEach((row,j)=>{
      const y=layer.y+j;
      const swish=hem && y>=44 ? Math.round(hem*(y-43)/10) : 0;
      for(let i=0;i<row.length;i++) if(row[i]!=='.') {
        r.dot(layer.x+i+dx+swish,y+dy,layer.colors[row.charCodeAt(i)-65]);
      }
    });
  }
  function head(r,id,bob,lean,state,phase,expression){
    let mood=expression || (state==='nap'?'sleepy':state==='cheer'||state==='wave'?'happy':'neutral');
    if(state==='idle' && phase===2 && !['love','cry','surprise'].includes(mood)) mood='blink';
    if(state==='talk' && [1,2,5,8,9].includes(phase) && ['neutral','smile','smug'].includes(mood)) mood='speaking';
    const layer=cast[id].heads[mood]||cast[id].heads.neutral;
    // Position the chin over the jacket collar. Tall ears and horns retain a
    // transparent margin on even the highest airborne pose.
    const dy=Math.max(-layer.y,Math.round(bob));
    const dx=Math.max(-layer.x,Math.min(48-layer.x-layer.rows[0].length,Math.round(lean)));
    stamp(r,layer,dx,dy);
    r.headBounds={left:layer.x+dx,top:layer.y+dy,right:layer.x+dx+layer.rows[0].length,bottom:layer.y+dy+layer.rows.length};
  }
  function body(r,id,bob,lean,state,phase){
    const layer=cast[id].body, running=state==='run', moving=running||state==='walk';
    const swing=moving?Math.sin(phase*Math.PI/6)*(running?2:1):0;
    const seated=state==='work'||state==='sit';
    layer.rows.forEach((row,j)=>{
      const y=layer.y+j, upper=Math.max(0,Math.min(1,(48-y)/14));
      const hem=Math.max(0,Math.min(1,(y-43)/10));
      const xOffset=Math.round(lean*upper+swing*hem);
      const drawY=y+Math.round(bob-(seated?2*hem:0));
      for(let i=0;i<row.length;i++)if(row[i]!=='.')r.dot(layer.x+i+xOffset,drawY,layer.colors[row.charCodeAt(i)-65]);
    });
  }
  function finish(r,flip){
    const c=document.createElement('canvas');c.width=48;c.height=64;
    const ctx=c.getContext('2d'); const rows=r.rows;
    for(let y=0;y<64;y++)for(let x=0;x<48;x++){
      let colour=rows[y][x];
      if(!colour){
        const b=r.headBounds;
        const nearHead=b && x>=b.left-1 && x<=b.right && y>=b.top-1 && y<=b.bottom;
        const adjacent=(px,py)=>{const c=rows[py][px];return c && (!nearHead || !headInks.has(c));};
        if((x&&adjacent(x-1,y))||(x<47&&adjacent(x+1,y))||(y&&adjacent(x,y-1))||(y<63&&adjacent(x,y+1)))colour='#493949';
      }
      if(colour){ctx.fillStyle=colour;ctx.fillRect(flip?47-x:x,y,1,1);}
    }
    const b=r.headBounds;
    if(b){c.headBounds={left:flip?48-b.right:b.left,right:flip?48-b.left:b.right,top:b.top,bottom:b.bottom};
      c.headBounds.centerX=(c.headBounds.left+c.headBounds.right)/2;}
    return c;
  }
  // Only the long styles extend below the head. Curl ends follow the gait;
  // the short cuts are already complete on the head layer.
  function hair(r,id,bob,trail){
    const ramps={gpt:['#9983ac','#c8b6d5','#f1e1eb'],deepseek:['#3b5186','#5782bd','#91b6db'],grok:['#a17a59','#d2a768','#f0cf90'],claude:['#9d6648','#ce8954','#eeb574']};
    const colors=ramps[id];if(!colors)return;
    const tip=(id==='grok'?48:id==='gpt'?45:41)+bob;
    const shift=Math.round(trail);
    for(const [x,side] of [[11,-1],[34,1]]){
      const end=x+side*(id==='grok'?3:1)-shift;
      r.poly([[x-3,24+bob],[x+4,24+bob],[x+4,32+bob],[end+2,tip-5],[end+4,tip-2],[end+1,tip],[end-3,tip-3],[end-4,tip-6],[x-2,32+bob]],colors[0]);
      r.poly([[x-1,28+bob],[x+2,27+bob],[x+2,32+bob],[end,tip-6],[end+1,tip-3],[end-2,tip-4],[end-2,tip-7]],colors[1]);
      r.line(x,32+bob,end-1,tip-7,colors[2]);
    }
  }
  // Stockings, cuffs and shoes occupy the existing joints. Stance and swing
  // share the same shoe drawing, including the heel-to-toe contact sequence.
  const clothing={
    C0:['#45627d','#30445c','#6b8597','#536e7f','#c4d2d0','#6abac5','trainer'],
    X0:['#80566c','#5c4157','#ac7a88','#75495f','#ad7584','#ca8c91','boot'],
    Feline1:['#f4e4e5','#cbafc3','#fff4ee','#ce6990','#e997b1','#fff2df','strap'],
    gpt:['#e7ddea','#b7a8c0','#fff3ec','#b8a9bf','#e3dce3','#9ecabb','strap'],
    deepseek:['#f1e5df','#c0b6c1','#fff1e4','#55729f','#91b1cf','#e7ebde','strap'],
    claude:['#f1cfb2','#ccaa97','#ffddc6','#926341','#c0946b','#f6deb3','boot'],
    grok:['#715367','#533a50','#976e7a','#4d394c','#8a5e65','#d5a879','boot'],
    gemini:['#d4b7d9','#a386ae','#eddbed','#695482','#b18fc3','#e7c574','strap'],
    kimi:['#dedbe2','#b5acc5','#f5eae3','#485674','#7383a1','#d4b8c6','strap'],
    doubao:['#f3d1bb','#d2aea2','#ffdfc5','#728597','#b8c8cc','#e8d3a5','trainer']
  };
  function leg(r,id,hip,knee,ankle,far,roll,tilt=0){
    const [cloth,shade,light,leather,shine,trim,style]=clothing[id];
    const h=hip,k=knee,a=ankle,x=Math.round(a.x),y=Math.round(a.y);
    r.poly([[h.x-1,h.y],[h.x+3,h.y],[k.x+2,k.y+1],[a.x+2,a.y],[a.x-1,a.y],[k.x-1,k.y]],cloth);
    r.line(h.x-1,h.y,k.x-1,k.y,shade);r.line(k.x-1,k.y,a.x-1,a.y,shade);
    if(!far)r.line(k.x+1,k.y+1,a.x+1,a.y-2,light);
    if(id==='C0'){
      r.line(k.x,k.y,k.x+2,k.y-1,shade);r.line(x-1,y-2,x+2,y-2,light);
    }else if(id==='doubao'||id==='claude'){
      r.rect(x-1,y-3,4,4,far?'#cdc4c3':'#f3ece0');r.line(x-1,y-3,x+2,y-3,shine);
    }else if(id==='gemini'){
      r.line(k.x,k.y+1,k.x+2,k.y+1,far?shade:light);
    }
    // Stamp each shoe about its ankle. A planted sole pivots at the heel or
    // toe; in flight the gait's own pitch turns the toe down, then up for contact.
    const slope=roll==='air'?tilt*.45+.08:roll==='heel'?-.28:roll==='toe'?.28:0;
    const pivot=roll==='heel'?-2:roll==='toe'?4:0;
    function point(dx,dy){return [x+dx,y+dy+Math.round((dx-pivot)*slope)];}
    function seam(x1,y1,x2,y2,tone){
      const start=point(x1,y1),end=point(x2,y2);r.line(start[0],start[1],end[0],end[1],tone);
    }
    const upper=style==='boot'?[[-2,-3],[2,-3],[2,0],[5,1],[5,2],[3,3],[-2,3]]:
      [[-2,-1],[0,-1],[2,1],[4,1],[6,2],[5,3],[-2,3]];
    r.poly(upper.map(v=>point(v[0],v[1])),leather);
    if(style==='boot'){
      seam(-2,-3,1,-3,far?shine:trim);seam(-1,-1,1,-1,shine);
    }else if(style==='strap'){
      seam(0,0,2,1,trim);const buckle=point(-1,1);r.dot(buckle[0],buckle[1],shine);
    }else{
      seam(0,-1,2,0,trim);seam(2,0,3,1,light);
    }
    seam(-2,3,4,3,style==='trainer'?shine:far?shade:leather);
    if(!far)seam(3,1,4,2,shine);
  }
  function restingLegs(r,id,state,phase){
    // Offset the two soles in depth; the near boot stays on the same baseline
    // as the near ankle at first contact in the running animation.
    const seated=state==='sit'||state==='work';
    const lift=seated?Math.round(Math.sin(phase*Math.PI/6)):0;
    const far={x:seated?32:28,y:57},near={x:seated?27+lift:19,y:59};
    leg(r,id,{x:26,y:47},{x:seated?33:28,y:52},far,true,'flat');
    leg(r,id,{x:21,y:48},{x:seated?29:20,y:54},near,false,'flat');
  }
  function cuff(r,id,ex,ey,wx,wy,far,visible){
    const dx=wx-ex,dy=wy-ey,n=Math.hypot(dx,dy)||1;
    const x=Math.round(wx-2*dx/n),y=Math.round(wy-2*dy/n);
    const [nx,ny]=Math.abs(dx)>Math.abs(dy)?[0,1]:[1,0];
    const tone=far?clothing[id][4]:clothing[id][5];
    for(let i=-1;i<=1;i++){
      const px=x+nx*i,py=y+ny*i;
      if(!visible||visible(px,py))r.dot(px,py,tone);
    }
  }
  // Elbow, wrist and palm angle in the shoulder's local plane. The two
  // reversals near the top come from the wrist while the elbow holds its height.
  const waveKeys=[
    [2,5,3,9,146],[3,5,6,6,105],[4,3,8,1,57],[5,1,10,-4,30],
    [5,0,10,-7,25],[5,0,8,-8,-14],[5,0,11,-7,29],[5,0,8,-8,-14],
    [5,1,10,-5,23],[4,2,8,-1,48],[3,4,6,4,100],[2,5,3,8,143]
  ];
  function wave(r,id,p,phase,sx,sy,side){
    const [elbowX,elbowY,wristX,wristY,angle]=waveKeys[phase];
    const ex=sx+side*elbowX,ey=sy+elbowY,wx=sx+side*wristX,wy=sy+wristY;
    const edge='#6d5365', skin='#ffdfca', shade='#dca3a0';
    const highlight=p.clothL||p.light, sleeve=p.cloth;
    r.line(sx-1,sy-1,ex-1,ey-1,edge,4);
    r.line(sx-1,sy-1,ex-1,ey-1,sleeve,3);
    r.line(sx,sy,ex,ey,highlight);
    r.line(ex-1,ey-1,wx-1,wy-1,edge,3);
    r.line(ex,ey,wx,wy,skin,2);
    r.line(ex,ey,(ex+wx)/2,(ey+wy)/2,sleeve,2);
    cuff(r,id,ex,ey,wx,wy,false);
    const radians=angle*Math.PI/180, sn=Math.sin(radians),cs=Math.cos(radians);
    function point(across,out){
      return [Math.round(wx+side*(across*cs+out*sn)),Math.round(wy+across*sn-out*cs)];
    }
    function shape(points,colour){r.poly(points.map(v=>point(v[0],v[1])),colour);}
    function mark(a,b,colour){const v=point(a,b);r.dot(v[0],v[1],colour);}
    if(id==='Feline1'){
      shape([[-2,0],[-3,2],[-3,4],[-2,6],[0,6],[1,7],[3,6],[4,4],[4,2],[2,0]],'#8a6885');
      shape([[-1,0],[-2,2],[-2,4],[-1,5],[1,5],[2,6],[3,4],[3,2],[1,0]],'#fff1ec');
      shape([[-1,2],[0,3],[1,3],[2,2],[1,1],[0,1]],'#e387aa');
      mark(-1,4,'#db78a2');mark(1,5,'#db78a2');mark(3,4,'#db78a2');
    }else{
      shape([[-1,0],[-2,1],[-3,3],[-2,4],[-1,3],[-1,6],[0,7],[1,6],[2,6],[3,5],[3,2],[2,1],[1,0]],edge);
      shape([[-1,1],[-2,3],[-1,2],[0,3],[0,6],[1,5],[2,5],[2,2],[1,1]],skin);
      mark(1,2,shade);mark(0,4,'#fff0df');
    }
  }
  // Wrist and ankle targets at the crest, ordered as camera-near then far.
  // Each takeoff starts from the same floor; the world supplies the jump height.
  const jumpShapes={
    Feline1:{hands:[[13,31],[39,30]],feet:[[16,52],[24,51]],dip:5,lean:1,trail:4},
    C0:{hands:[[12,25],[40,38]],feet:[[18,55],[32,52]],dip:3,lean:2,trail:1},
    X0:{hands:[[13,43],[39,30]],feet:[[15,53],[33,57]],dip:4,lean:1,trail:4},
    gpt:{hands:[[10,37],[41,35]],feet:[[23,55],[26,57]],dip:4,lean:0,trail:5},
    deepseek:{hands:[[19,42],[34,41]],feet:[[19,51],[28,51]],dip:6,lean:2,trail:7},
    claude:{hands:[[21,38],[38,35]],feet:[[16,54],[28,57]],dip:3,lean:-1,trail:4},
    grok:{hands:[[12,40],[39,32]],feet:[[32,52],[19,55]],dip:5,lean:3,trail:5},
    gemini:{hands:[[9,33],[41,33]],feet:[[16,55],[34,54]],dip:4,lean:0,trail:5},
    kimi:{hands:[[21,38],[35,39]],feet:[[23,56],[25,54]],dip:3,lean:-1,trail:2},
    doubao:{hands:[[15,33],[36,42]],feet:[[20,50],[32,55]],dip:5,lean:2,trail:2}
  };
  const jumpDip=[0,.55,1,.28,0,0,0,0,0,.12,.78,.24];
  const jumpReach=[0,0,0,.28,.61,.9,1,.98,.69,.23,.04,0];
  const jumpLag=[0,.25,.65,1,.8,.2,-.55,-1,-.65,-.12,.55,.35];
  function jumpPose(id,phase){
    const shape=jumpShapes[id], reach=jumpReach[phase], dip=jumpDip[phase];
    return {shape,phase,reach,bob:Math.round(shape.dip*dip),
      lean:Math.round(shape.lean*(reach+.4*dip)),trail:Math.round(shape.trail*jumpLag[phase])};
  }
  function jumpLeg(r,id,j,far){
    const i=far?1:0,hx=far?27:21,hy=(far?47:48)+j.bob;
    const p=j.shape.feet[i],stand=far?28:20,base=far?57:59;
    const ankle={x:stand+(p[0]-stand)*j.reach,y:base+(p[1]-base)*j.reach};
    const dx=ankle.x-hx,dy=ankle.y-hy,d=Math.max(1,Math.hypot(dx,dy));
    const bend=Math.sqrt(Math.max(0,6.4*6.4-d*d/4));
    const knee={x:(hx+ankle.x)/2+bend*dy/d,y:(hy+ankle.y)/2-bend*dx/d};
    const roll=j.phase===3?'toe':j.phase===9?'heel':j.reach>.3?'air':'flat';
    leg(r,id,{x:hx,y:hy},knee,ankle,far,roll,j.phase<7?.85:-.6);
  }
  function jumpHand(id,j,far){
    const i=far?1:0,p=j.shape.hands[i],sx=(far?31:19)+j.lean,sy=(far?36:38)+j.bob;
    const baseX=(far?33:17)-(j.phase<=2?3:1)*jumpDip[j.phase];
    const wx=Math.round(baseX+(p[0]-baseX)*j.reach+j.lean*.5);
    const wy=Math.round(sy+8+(p[1]-(far?44:46))*j.reach);
    const dx=wx-sx,dy=wy-sy,d=Math.max(1,Math.hypot(dx,dy));
    const bend=Math.sqrt(Math.max(0,5.9*5.9-d*d/4))*(far?-1:1);
    return {sx,sy,x:wx,y:wy,ex:(sx+wx)/2-bend*dy/d,ey:(sy+wy)/2+bend*dx/d};
  }
  function jumpArm(r,id,p,h,far,handOnly){
    const shadow=p.clothD||p.dark,lit=p.clothL||p.light;
    if(!handOnly){
      r.line(h.sx-1,h.sy-1,h.ex-1,h.ey-1,far?shadow:p.cloth,4);
      r.line(h.sx,h.sy,h.ex,h.ey,far?p.cloth:lit);
    }
    r.line(h.ex-1,h.ey-1,h.x-1,h.y-1,far?shadow:p.cloth,3);
    cuff(r,id,h.ex,h.ey,h.x,h.y,far);
    const x=h.x,y=h.y;
    if(id==='Feline1'){
      r.poly([[x-3,y],[x-2,y-3],[x+1,y-3],[x+3,y-1],[x+3,y+1],[x+1,y+3],[x-2,y+2]],'#936d89');
      r.rect(x-2,y-2,4,4,'#fff0ec');r.rect(x-1,y,2,2,'#ed9bb8');
      r.dot(x-2,y-1,'#d981a1');r.dot(x+1,y-2,'#d981a1');
    }else{
      r.rect(x-1,y-1,3,3,far?'#e5b9a7':'#ffe0cf');r.dot(x+1,y+1,'#c68f89');
    }
  }
  function jumpItem(r,id,near,far){
    const x=far.x,y=far.y;
    if(id==='X0'){
      r.line(x-2,y+3,x+4,y-6,'#784958',2);r.line(x-1,y+2,x+4,y-5,'#d8ad77');
      r.line(x+4,y-5,x+5,y-8,'#be7198',2);r.dot(x+5,y-8,'#fad3db');
    }else if(id==='claude'){
      const bx=near.x,by=near.y;
      r.poly([[bx-3,by-5],[bx+3,by-6],[bx+5,by-4],[bx+5,by+1],[bx,by+3],[bx-3,by+2]],'#815064');
      r.line(bx-2,by-4,bx+2,by-5,'#f7e5c2');r.line(bx+3,by-4,bx+3,by,'#d3ae80');
    }else if(id==='kimi'){
      r.line(x-1,y-1,x+2,y-4,'#9e876e');r.dot(x+2,y-4,'#f4d89c');
    }
  }
  function jump(r,id,p,j,expression){
    const far=jumpHand(id,j,true),near=jumpHand(id,j,false);
    jumpLeg(r,id,j,true);jumpLeg(r,id,j,false);
    jumpArm(r,id,p,far,true,false);
    body(r,id,j.bob,j.lean,'jump',j.phase);
    head(r,id,j.bob,j.lean,'jump',j.phase,expression==='auto'?'neutral':expression);
    jumpArm(r,id,p,far,true,true);jumpArm(r,id,p,near,false,false);
    jumpItem(r,id,near,far);
  }
  window.StudioCostume={head,body,hair,finish,leg,restingLegs,cuff,wave,jumpPose,jump};
})();
