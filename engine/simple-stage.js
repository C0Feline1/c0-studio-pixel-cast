/* A quiet pixel theatre. The finished scenery is cached after its first draw. */
(function () {
  'use strict';
  var scene = null;

  function build() {
    var canvas = document.createElement('canvas');
    canvas.width = 576; canvas.height = 336;
    var g = canvas.getContext('2d');
    function rect(x, y, w, h, color) {
      g.fillStyle = color; g.fillRect(x, y, w, h);
    }

    // Flat, low-contrast backdrop leaves the dialogue and props easy to read.
    rect(0, 0, 576, 336, '#141523');
    rect(32, 20, 512, 244, '#191d2d');
    rect(42, 30, 492, 234, '#1b1f30');
    rect(52, 48, 472, 216, '#1c2031');
    rect(52, 236, 472, 28, '#1b1e2e');
    rect(42, 258, 492, 6, '#171925');

    // A few small stitched stars stay above the main performance area.
    [[87,63],[160,42],[232,70],[344,49],[422,67],[491,43]].forEach(function (p, i) {
      rect(p[0], p[1], 2, 2, i % 2 ? '#3a354b' : '#37384c');
      if (i === 0 || i === 4) {
        rect(p[0] - 2, p[1], 6, 1, '#343347');
        rect(p[0], p[1] - 2, 1, 6, '#343347');
      }
    });
    rect(59, 87, 10, 1, '#2e2d40');
    rect(64, 82, 1, 10, '#2e2d40');
    rect(510, 109, 8, 1, '#2b2d40');
    rect(514, 105, 1, 9, '#2b2d40');

    // Curtains occupy the margins, with broad folds rather than busy texture.
    rect(0, 16, 29, 248, '#302339');
    rect(0, 22, 8, 242, '#271e30');
    rect(9, 22, 10, 242, '#3a2a41');
    rect(20, 22, 5, 242, '#463047');
    rect(28, 22, 7, 170, '#32243a');
    rect(31, 22, 7, 94, '#32243a');
    rect(35, 22, 6, 47, '#2a2134');
    rect(26, 188, 3, 69, '#231c2d');
    rect(4, 255, 22, 4, '#4a3349');
    rect(0, 261, 30, 3, '#251d2d');

    rect(547, 16, 29, 248, '#302339');
    rect(568, 22, 8, 242, '#271e30');
    rect(557, 22, 10, 242, '#3a2a41');
    rect(551, 22, 5, 242, '#463047');
    rect(541, 22, 7, 170, '#32243a');
    rect(538, 22, 7, 94, '#32243a');
    rect(535, 22, 6, 47, '#2a2134');
    rect(547, 188, 3, 69, '#231c2d');
    rect(550, 255, 22, 4, '#4a3349');
    rect(546, 261, 30, 3, '#251d2d');

    // Low valance and three warm lamps; no light beam crosses the actors.
    rect(0, 0, 576, 14, '#37263d');
    rect(0, 0, 576, 3, '#4b334a');
    rect(0, 12, 576, 4, '#251d30');
    [[0,97],[102,123],[230,116],[351,123],[479,97]].forEach(function (p) {
      rect(p[0], 16, p[1], 3, '#33253b');
      rect(p[0] + 5, 19, p[1] - 10, 3, '#2b2134');
      rect(p[0] + 14, 22, p[1] - 28, 2, '#211c2d');
    });
    [88, 288, 488].forEach(function (x) {
      rect(x - 14, 27, 28, 8, '#252435');
      rect(x - 10, 31, 20, 8, '#292738');
      rect(x - 7, 20, 14, 4, '#4a3c48');
      rect(x - 5, 24, 10, 3, '#b39a79');
      rect(x - 3, 24, 6, 2, '#e5cba0');
      rect(x - 7, 27, 14, 1, '#6c574f');
    });

    // Floor starts at the actors' feet. Wider boards read cleanly at any scale.
    rect(0, 264, 576, 72, '#332831');
    rect(0, 264, 576, 2, '#82626a');
    rect(0, 266, 576, 2, '#513d48');
    rect(0, 268, 576, 16, '#3e3038');
    rect(0, 284, 576, 1, '#241f29');
    rect(0, 285, 576, 1, '#57404a');
    rect(0, 286, 576, 21, '#3b2d35');
    rect(0, 307, 576, 2, '#241e27');
    rect(0, 309, 576, 1, '#503b44');
    rect(0, 310, 576, 15, '#352831');
    [67, 179, 291, 403, 515].forEach(function (x) {
      rect(x, 268, 1, 16, '#2b242d');
      rect(x + 1, 269, 1, 14, '#4c3943');
    });
    [12, 124, 236, 348, 460, 572].forEach(function (x) {
      rect(x, 286, 1, 21, '#29222b');
      rect(x + 1, 287, 1, 19, '#47343e');
    });
    [68, 180, 292, 404, 516].forEach(function (x) {
      rect(x, 310, 1, 15, '#261f28');
    });
    [[27,275,20],[206,271,31],[433,277,17],[80,297,28],[275,291,18],[490,301,26],[155,317,19],[364,314,30]].forEach(function (p) {
      rect(p[0], p[1], p[2], 1, '#493640');
    });

    // The dark front apron grounds the scene without covering floor-level props.
    rect(0, 325, 576, 2, '#60464f');
    rect(0, 327, 576, 2, '#271f2a');
    rect(0, 329, 576, 7, '#1a1722');
    rect(0, 330, 576, 1, '#30232f');
    rect(0, 335, 576, 1, '#110f19');
    return canvas;
  }

  window.LocalTheaterSimpleStage = {
    draw: function (ctx) {
      if (!scene) scene = build();
      ctx.save();
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(scene, 0, 0);
      ctx.restore();
    }
  };
}());
