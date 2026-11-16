/* Optional proposal-only room view. Shared room and sprite sources stay intact. */
(function () {
  'use strict';
  var VIEW_W = 320, VIEW_H = 180, SCALE = 1.8, OUT_W = 576, OUT_H = 336;
  var ZONE_NAMES = { office: '原来的小屋', cowork: '共享工作室', atelier: '星光工作区', garden: '月光休息区' };

  function create(options) {
    options = options || {};
    var world = window.StudioWorld, room = window.StudioRoom, px = window.PX;
    if (!world || !room || !px) throw new Error('Room backdrop requires pixel.js, studio-room.js and studio-world.js.');
    var cast = options.cast || [], sprites = options.sprites || window.AIStudioSprites;
    var byId = {}, originals = {}, names = {}, stations = world.workstations || [];
    cast.forEach(function (actor) { byId[actor.id] = actor; names[actor.id] = actor.name; });
    var background = world.build(room.background);
    var maxCamera = Math.max(0, world.width - VIEW_W);
    var labels = null, labelFontReady = null, labelLanguage=null;

    // This page owns its room runtime. Warm the private station caches without
    // the original AI brand names, then immediately restore the source metadata.
    var warm = px.make(world.width, VIEW_H), warmContext = warm.getContext('2d');
    stations.forEach(function (station) {
      if (byId[station.id]) { names[station.id] = byId[station.id].name; originals[station.id] = station.name; station.name = ''; }
    });
    try { world.drawWorkstations(warmContext, [], 0); }
    finally { stations.forEach(function (station) { if (Object.prototype.hasOwnProperty.call(originals, station.id)) station.name = originals[station.id]; }); }
    warm = null; warmContext = null;

    function stationFor(id) { return stations.find(function (station) { return station.id === id; }); }
    function cameraOffset(id, location) {
      if (location === 'office') return 0;
      if (location === 'lounge') return Math.min(maxCamera, 960);
      var station = stationFor(id);
      return Math.round(Math.max(0, Math.min(maxCamera, (station ? station.x : 480) - VIEW_W / 2)));
    }
    function boundsFor(id, location) { var x = cameraOffset(id, location); return { left: x, right: x + VIEW_W }; }
    function inBounds(object, bounds) { return object.x + (object.w || 0) >= bounds.left && object.x <= bounds.right; }
    function setup(ctx, camera) {
      ctx.setTransform(SCALE, 0, 0, SCALE, -camera * SCALE, 0);
      ctx.imageSmoothingEnabled = false;
      ctx.beginPath(); ctx.rect(camera, 0, VIEW_W, VIEW_H); ctx.clip();
    }
    function nicknameLayer() {
      var ready = !!(document.fonts && document.fonts.check('6px "Local Theater Pixel"', I18n.t('糖包')));
      if (labels && labelFontReady === ready && labelLanguage===I18n.lang) return labels;
      labels = px.make(world.width, VIEW_H); labelFontReady = ready; labelLanguage=I18n.lang;
      var g = labels.getContext('2d'); g.imageSmoothingEnabled = false;
      g.font = '6px "Local Theater Pixel", monospace'; g.textBaseline = 'alphabetic';
      stations.forEach(function (station) {
        var name = byId[station.id]?byId[station.id].name:names[station.id]; if (!name) return;
        var w = Math.min(68, Math.ceil(g.measureText(name).width) + 8), x = Math.round(station.deskX + 54 - w / 2), y = 73;
        g.fillStyle = '#120d20'; g.fillRect(x, y, w, 9);
        g.fillStyle = station.color; g.fillRect(x, y, w, 1);
        g.fillStyle = '#65516f'; g.fillRect(x, y + 8, w, 1);
        g.fillStyle = station.color; g.fillText(name, x + 4, y + 7, w - 8);
      });
      return labels;
    }
    function legacyHero(id) {
      if (!originals['sprite-' + id] && px.buildChar) originals['sprite-' + id] = px.buildChar(id);
      return originals['sprite-' + id];
    }
    function drawFriend(ctx, station, tick, index) {
      var kit = sprites.characters.some(function (actor) { return actor.id === station.id; }) ? sprites : window.StudioHeroSprites;
      var state = Math.floor(tick / 80 + index) % 5 === 0 ? 'idle' : 'work';
      var width = 27, height = 36, x = station.x - width / 2, y = station.y - height;
      ctx.fillStyle = 'rgba(0,0,0,.22)'; ctx.fillRect(Math.round(station.x - 8), station.y - 1, 16, 2);
      if (kit && typeof kit.draw === 'function') {
        var motion = kit.states[state] || kit.states.idle;
        var frame = Math.floor((tick * 50 + index * 137) / motion.frameMs) % motion.count;
        kit.draw(ctx, station.id, state, frame, x, y, width, false, 'right');
      } else if (['C0','X0','Feline1'].indexOf(station.id)>=0) {
        var old = legacyHero(station.id);
        if (old) ctx.drawImage(old.idle[Math.floor(tick / 15 + index) % old.idle.length], x, y, width, height);
      }
      return { id: station.id, state: state, x: station.x, y: station.y, path: [] };
    }
    function draw(ctx, id, location, time, hideFriends) {
      var bounds = boundsFor(id, location), tick = Math.max(0, Number(time) || 0) / 50, actors = [];
      ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = '#100c1d'; ctx.fillRect(0, 0, OUT_W, OUT_H);
      setup(ctx, bounds.left);
      ctx.drawImage(background, bounds.left, 0, VIEW_W, VIEW_H, bounds.left, 0, VIEW_W, VIEW_H);
      stations.forEach(function (station, index) {
        if (hideFriends || station.id === id || !inBounds({ x: station.x - 20, w: 40 }, bounds)) return;
        actors.push(drawFriend(ctx, station, tick, index));
      });
      // The merged world checks labels on every draw; keep its private cache blank.
      stations.forEach(function (station) { if (byId[station.id]) station.name = ''; });
      try { world.drawWorkstations(ctx, actors, tick, bounds); }
      finally { stations.forEach(function (station) { if (byId[station.id]) station.name = originals[station.id]; }); }
      // Characters at their desks have feet at y126. Repaint transparent furniture
      // above that depth; the selected theatre actor will be composed afterwards.
      (world.occluders || []).filter(function (prop) { return prop.footY > 126 && inBounds(prop, bounds); })
        .sort(function (a, b) { return a.footY - b.footY; }).forEach(function (prop) { prop.draw(ctx); });
      ctx.drawImage(nicknameLayer(), bounds.left, 0, VIEW_W, VIEW_H, bounds.left, 0, VIEW_W, VIEW_H);
      var cat = world.catHome;
      if (cat && room.cat && cat.x >= bounds.left - 20 && cat.x < bounds.right) ctx.drawImage(room.cat.sleep, cat.x, cat.y - 12);
      ctx.restore();
    }
    function foreground(ctx, id, location) {
      var bounds = boundsFor(id, location);
      ctx.save(); setup(ctx, bounds.left);
      (world.occluders || []).filter(function (prop) { return prop.footY > 164 && inBounds(prop, bounds); })
        .sort(function (a, b) { return a.footY - b.footY; }).forEach(function (prop) { prop.draw(ctx); });
      ctx.restore();
    }
    function describe(id, location) {
      if (location === 'office') return I18n.t('原来的小屋');
      if (location === 'lounge') return I18n.t('月光休息区');
      var station = stationFor(id), zone = (world.zones || []).find(function (entry) { return station && station.x >= entry.x && station.x < entry.end; });
      return (byId[id]?byId[id].name:I18n.t('伙伴')) + I18n.t('的工位前 · ') + (zone ? I18n.t(ZONE_NAMES[zone.id]) || I18n.t('工作室') : I18n.t('工作室'));
    }
    return { draw: draw, foreground: foreground, describe: describe, cameraOffset: cameraOffset };
  }
  window.LocalTheaterRoom = { create: create };
}());
