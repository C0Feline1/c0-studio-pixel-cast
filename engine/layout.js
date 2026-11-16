/* Pure scene layout shared by preview and exported frames. */
(function(){
  'use strict';
  function mirrored(heading){return heading==='left';}
  function scrollLength(time,total){return 64+850*Math.max(0,Math.min(1,time/total));}
  function paperSegments(length){
    // One continuous strip winds around the feet, then folds inward. Keep the
    // whole route inside the small theatre floor instead of spilling off-stage.
    // Each route consumes one pixel of length per pixel of travel; strips are
    // ten pixels thick, and the final folds remain visibly separate.
    var routes=[
      {x:332,y:230,w:88,h:10},
      {x:410,y:240,w:10,h:64,vertical:true},
      {x:154,y:294,w:256,h:10,reverse:true},
      {x:154,y:242,w:10,h:52,vertical:true,reverse:true},
      {x:164,y:242,w:232,h:10},
      {x:386,y:252,w:10,h:28,vertical:true},
      {x:178,y:270,w:208,h:10,reverse:true},
      {x:178,y:256,w:10,h:14,vertical:true,reverse:true},
      {x:188,y:256,w:184,h:10}
    ],result=[],remaining=Math.max(0,Math.floor(Number(length)||0));
    routes.forEach(function(route){
      if(remaining<=0)return;
      var capacity=route.vertical?route.h:route.w,amount=Math.min(capacity,remaining),r=Object.assign({},route);
      if(route.vertical){r.h=amount;if(route.reverse)r.y=route.y+route.h-amount;}
      else{r.w=amount;if(route.reverse)r.x=route.x+route.w-amount;}
      result.push(r);remaining-=amount;
    });
    return result;
  }
  window.LocalTheaterLayout={mirrored:mirrored,scrollLength:scrollLength,paperSegments:paperSegments};
}());
