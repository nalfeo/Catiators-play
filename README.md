# Catiators

[Play in your browser](https://nalfeo.github.io/Catiators-play/).

## Xbox crash diagnostics

Current live build: **`2619459`**, deployed successfully in [Pages run 43166071807](https://github.com/nalfeo/Catiators-play/actions/runs/43166071807). All seven live game files match the checked local export.

Arena enemies now share a texture with their contact shadows, prepared automatically during export. In native fixtures using the exported textures, 120 rats dropped from 240 to 1 draw call; mixed rats/hares/toads from 240 to 36; overlapping enemies with authored art and status indicators from 279 to 108. All three rendered comparisons differ by at most one colour level and preserve fixture state. These are component measurements, not Xbox FPS claims. The previous House Home batching remains included. This applies in every visual-quality mode; Auto still adapts combat decoration only. Actual Xbox FPS needs a fresh test.

Visual quality defaults to **Auto**. It steps down combat decoration during sustained foreground slowdown and restores it slowly. Use **Settings → Visual quality → Performance** for the lowest decorative tier or **Full** to retain authored effects.

Development builds now start telemetry sharing automatically. Use a diagnostics link below to include FPS, frame/physics timing, draw calls and quality samples; **Settings → Feedback** can opt out for the current session. The overlay should indicate sharing rather than **local only**. Samples are limited to one per ten seconds; previously saved traces are never backfilled.

Open these links directly on your Xbox; no query strings to type.

- **[Test at 720p: FPS and memory diagnostics](https://nalfeo.github.io/Catiators-play/?diagnostics=1&render_720p=1&build=2619459)** — start here, then select Play on the title screen.
- **[Read the last crash trace](https://nalfeo.github.io/Catiators-play/?diagnostics=read&build=2619459)** — after a crash, reopen Edge and use this link on the same Xbox. It shows saved diagnostics without loading the game.
- [Compare: 720p with simpler house cats](https://nalfeo.github.io/Catiators-play/?diagnostics=1&render_720p=1&house_simple=1&build=2619459).
- [Compare: normal rendering with diagnostics](https://nalfeo.github.io/Catiators-play/?diagnostics=1&build=2619459).

These links run the same published build with different diagnostic settings. The overlay shows FPS, frame cap, focus/background state, engine frame/physics milliseconds, draw calls and memory. Take a photo while lagging in the house and combat; these counters help separate browser pacing, simulation and rendering work. Local traces stay in this browser. Development builds share future diagnostic samples with PostHog by default; Settings → Feedback can opt out for the current session. The overlay shows whether sharing is enabled. Existing saved traces and pre-consent samples are never uploaded; the recovery page sends nothing. Queued events are not proof of delivery, and a browser kill can prevent the last sample arriving. If it crashes, share a photo of the recovery page's **Last recorded stage** and **Latest sample**. Do not clear site data before opening recovery.

Fully quit Edge before a fresh test. Xbox memory and WebGL-context-loss recovery are still under investigation; reaching the title screen is not a complete gameplay pass.

Cats battle for the amusement of the Empress. Move with WASD, arrow keys, or a controller; weapons attack automatically. Local co-op uses controllers.

This repository contains the exported browser game. Source is maintained separately. Publication is manual through the Publish playtest workflow; each game file is checked against the export manifest before deployment.
