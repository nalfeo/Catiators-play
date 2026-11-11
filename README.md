# Catiators

[Play in your browser](https://nalfeo.github.io/Catiators-play/).

## Xbox crash diagnostics

Current build: `d6c1ecb`. Performance diagnostics now show FPS, frame cap, focus/background state, engine frame and physics time, draw calls and primitives. Xbox Series X can reach gameplay but severe lag and a combat WebGL context-loss crash remain under investigation. This is a diagnostic update, not a confirmed frame-rate fix. The existing export-only resizing, compaction and unused-asset policy remains enforced.

Open these links directly on your Xbox; no query strings to type.

- **[Test at 720p: FPS and memory diagnostics](https://nalfeo.github.io/Catiators-play/?diagnostics=1&render_720p=1&build=d6c1ecb)** — start here, then select Play on the title screen.
- **[Read the last crash trace](https://nalfeo.github.io/Catiators-play/?diagnostics=read&build=d6c1ecb)** — after a crash, reopen Edge and use this link on the same Xbox. It shows saved diagnostics without loading the game.
- [Compare: 720p with simpler house cats](https://nalfeo.github.io/Catiators-play/?diagnostics=1&render_720p=1&house_simple=1&build=d6c1ecb).
- [Compare: normal rendering with diagnostics](https://nalfeo.github.io/Catiators-play/?diagnostics=1&build=d6c1ecb).

These links run the same published build with different diagnostic settings. The overlay shows FPS, frame cap, focus/background state, engine frame/physics milliseconds, draw calls and memory. Take a photo while lagging in the house and combat; these counters help separate browser pacing, simulation and rendering work. Traces stay in this browser and are not uploaded automatically. If it crashes, share a photo of the recovery page's **Last recorded stage** and **Latest sample**. Do not clear site data before opening recovery.

Fully quit Edge before a fresh test. Xbox memory and WebGL-context-loss recovery are still under investigation; reaching the title screen is not a complete gameplay pass.

Cats battle for the amusement of the Empress. Move with WASD, arrow keys, or a controller; weapons attack automatically. Local co-op uses controllers.

This repository contains the exported browser game. Source is maintained separately. Publication is manual through the Publish playtest workflow; each game file is checked against the export manifest before deployment.
