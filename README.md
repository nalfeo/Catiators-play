# Catiators

[Play in your browser](https://nalfeo.github.io/Catiators-play/).

## Xbox crash diagnostics

Open these links directly on your Xbox; no query strings to type.

- **[Try the reduced-memory build: 720p + simpler house cats](https://nalfeo.github.io/Catiators-play/?diagnostics=1&render_720p=1&house_simple=1&build=2bb522f)** — start here, then select Play on the title screen.
- **[Read the last crash trace](https://nalfeo.github.io/Catiators-play/?diagnostics=read&build=2bb522f)** — after a crash, reopen Edge and use this link on the same Xbox. It shows saved diagnostics without loading the game.
- [Compare: 720p with normal house cats](https://nalfeo.github.io/Catiators-play/?diagnostics=1&render_720p=1&build=2bb522f).
- [Compare: normal rendering with diagnostics](https://nalfeo.github.io/Catiators-play/?diagnostics=1&build=2bb522f).

These links run the same published build with different diagnostic settings. The overlay shows the build and last loading stage. Traces stay in this browser and are not uploaded automatically. If it crashes, share a photo of the recovery page's **Last recorded stage** and **Latest sample**. Do not clear site data before opening recovery.

Fully quit Edge before a fresh test. Xbox memory and WebGL-context-loss recovery are still under investigation; reaching the title screen is not a complete gameplay pass.

Cats battle for the amusement of the Empress. Move with WASD, arrow keys, or a controller; weapons attack automatically. Local co-op uses controllers.

This repository contains the exported browser game. Source is maintained separately. Publication is manual through the Publish playtest workflow; each game file is checked against the export manifest before deployment.
