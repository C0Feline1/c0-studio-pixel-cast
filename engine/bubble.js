/* Speech geometry follows the same actor transform as the scene. */
(function(){
  'use strict';
  function anchor(options){
    var localX=options.actorX+(options.front&&options.mirrored?96-options.headX:options.headX);
    var x=options.mirrored?576-localX:localX,y=options.headY;
    return options.room?{x:144+x*.5,y:164*1.8-263*.5+y*.5}:{x:x,y:y};
  }
  function place(options){
    var padding=6,gap=options.gap===undefined?12:options.gap;
    var x=Math.max(padding,Math.min(options.stageWidth-options.width-padding,options.headX-options.width*.54));
    var y=Math.max(padding,options.headY-options.height-gap);
    var tailHeight=Math.max(0,options.headY-y-options.height-2);
    return {x:Math.round(x),y:Math.round(y),tailX:Math.max(10,Math.min(options.width-10,options.headX-x)),tailHeight:Math.min(14,tailHeight)};
  }
  window.LocalTheaterBubble={anchor:anchor,place:place};
}());
