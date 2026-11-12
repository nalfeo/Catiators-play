# Catiators

[Play in your browser](https://nalfeo.github.io/Catiators-play/).

## Xbox crash diagnostics

Current live build: **`e836553`**, deployed successfully in [Pages run 43140796492](https://github.com/nalfeo/Catiators-play/actions/runs/43140796492). All seven live game files match the checked local export.

With diagnostics and telemetry sharing enabled, this build sends `catiators_web_diagnostics` to PostHog at most once per ten seconds, plus bounded error markers. The payload includes FPS, frame cap, focus/background state, engine/physics time, draw calls, memory counters and build/view context. Combat rendering now rebuilds once after physics catch-up instead of eight or nine times per displayed frame, preserving every simulation tick. In a four-cat wave 10 native script-backend window, FPS rose from 4.7 to 33.3; stable 60 FPS remains unmet. Three before/after earned arena and shadow images match exactly. The earlier shadow, cat-layer and House Home CPU improvements and export asset policy remain included. Actual Xbox speedup, combat lag and context-loss acceptance remain unverified.

Open these links directly on your Xbox; no query strings to type.

- **[Test at 720p: FPS and memory diagnostics](https://nalfeo.github.io/Catiators-play/?diagnostics=1&render_720p=1&build=e836553)** — start here, then select Play on the title screen.
- **[Read the last crash trace](https://nalfeo.github.io/Catiators-play/?diagnostics=read&build=e836553)** — after a crash, reopen Edge and use this link on the same Xbox. It shows saved diagnostics without loading the game.
- [Compare: 720p with simpler house cats](https://nalfeo.github.io/Catiators-play/?diagnostics=1&render_720p=1&house_simple=1&build=e836553).
- [Compare: normal rendering with diagnostics](https://nalfeo.github.io/Catiators-play/?diagnostics=1&build=e836553).

These links run the same published build with different diagnostic settings. The overlay shows FPS, frame cap, focus/background state, engine frame/physics milliseconds, draw calls and memory. Take a photo while lagging in the house and combat; these counters help separate browser pacing, simulation and rendering work. Local traces stay in this browser. Choose Share telemetry at first launch, or enable sharing in Settings → Feedback, to send future diagnostic samples to PostHog. The overlay shows whether sharing is enabled. Existing saved traces and pre-consent samples are never uploaded; the recovery page sends nothing. Queued events are not proof of delivery, and a browser kill can prevent the last sample arriving. If it crashes, share a photo of the recovery page's **Last recorded stage** and **Latest sample**. Do not clear site data before opening recovery.

Fully quit Edge before a fresh test. Xbox memory and WebGL-context-loss recovery are still under investigation; reaching the title screen is not a complete gameplay pass.

Cats battle for the amusement of the Empress. Move with WASD, arrow keys, or a controller; weapons attack automatically. Local co-op uses controllers.

This repository contains the exported browser game. Source is maintained separately. Publication is manual through the Publish playtest workflow; each game file is checked against the export manifest before deployment.
