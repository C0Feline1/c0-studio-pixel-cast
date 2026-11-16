# Using the sprites

Each character folder contains 16 animation sheets (13 shared + 3 signature), an expression sheet, a portrait, a badge and a Godot SpriteFrames example.

| Property | Value |
| --- | --- |
| Animation cell | 48 × 64 pixels |
| Animation sheet | 576 × 128 pixels, transparent PNG |
| Columns | 12 frames, read left to right |
| Rows | Top: facing right; bottom: facing left |
| Timing | `manifest.json` → character → actions → `frameMs` |
| Expressions | Ordered by `manifest.json` → `expressionOrder` |

Use nearest-neighbor filtering and integer scale factors. Do not resize the source PNGs with smoothing. Portraits and badges retain their own dimensions.

For an animation frame, crop `(frameIndex * 48, directionRow * 64, 48, 64)` where `directionRow` is 0 for right and 1 for left. Advance by the action's `frameMs` rather than applying one shared frame rate to every action.

Copy each complete character directory into your Godot project before using its `.tres` resource; textures are referenced alongside the resource. These are import examples, not a complete game controller. The supplied animations loop by default; configure one-shot actions to suit your game.

The metadata retains the original internal IDs and Chinese motion notes for compatibility; `nameEn` adds English display names. The original manifest version describes the source export, not the release number of this gallery.

Artwork: CC BY 4.0, credit C0 STUDIO. See ATTRIBUTION.md and LICENSE.
