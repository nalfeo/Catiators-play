# Catiators

[Play in your browser](https://nalfeo.github.io/Catiators-play/).

## Xbox crash diagnostics

Candidate build: `d901b64`, awaiting Pages deployment. Current live build remains `4f2d86f` until deployment and live hash verification succeed.

Visual quality now defaults to **Auto**. It starts with full visuals and steps down decoration during sustained foreground combat slowdown: blood/crowd motion, projected shadows, then dynamic lighting. It restores quality slowly and ignores paused/background time. Use **Settings → Visual quality → Performance** for the cheapest tier immediately, or **Full** to keep authored effects. Character/weapon animation, hazards, gameplay and saves remain independent of quality. The earlier CPU fixes remain included. Native earned-window comparisons and complete headless replay passed before the latest balance merge; the combined build passed fresh engine and gameplay checks. Actual Xbox speedup, long-session recovery and stable co-op 60 FPS remain unverified.

With diagnostics and telemetry sharing enabled, this build sends `catiators_web_diagnostics` to PostHog at most once per ten seconds, plus bounded error markers. Samples now include quality mode, tier, latest change reason, change count and sampled/target FPS alongside frame timing, focus, draw calls and build context. Existing saved traces and pre-consent samples are never backfilled.

Open these links directly on your Xbox; no query strings to type.

- **[Test at 720p: FPS and memory diagnostics](https://nalfeo.github.io/Catiators-play/?diagnostics=1&render_720p=1&build=d901b64)** — start here, then select Play on the title screen.
- **[Read the last crash trace](https://nalfeo.github.io/Catiators-play/?diagnostics=read&build=d901b64)** — after a crash, reopen Edge and use this link on the same Xbox. It shows saved diagnostics without loading the game.
- [Compare: 720p with simpler house cats](https://nalfeo.github.io/Catiators-play/?diagnostics=1&render_720p=1&house_simple=1&build=d901b64).
- [Compare: normal rendering with diagnostics](https://nalfeo.github.io/Catiators-play/?diagnostics=1&build=d901b64).

These links run the same published build with different diagnostic settings. The overlay shows FPS, frame cap, focus/background state, engine frame/physics milliseconds, draw calls and memory. Take a photo while lagging in the house and combat; these counters help separate browser pacing, simulation and rendering work. Local traces stay in this browser. Choose Share telemetry at first launch, or enable sharing in Settings → Feedback, to send future diagnostic samples to PostHog. The overlay shows whether sharing is enabled. Existing saved traces and pre-consent samples are never uploaded; the recovery page sends nothing. Queued events are not proof of delivery, and a browser kill can prevent the last sample arriving. If it crashes, share a photo of the recovery page's **Last recorded stage** and **Latest sample**. Do not clear site data before opening recovery.

Fully quit Edge before a fresh test. Xbox memory and WebGL-context-loss recovery are still under investigation; reaching the title screen is not a complete gameplay pass.

Cats battle for the amusement of the Empress. Move with WASD, arrow keys, or a controller; weapons attack automatically. Local co-op uses controllers.

This repository contains the exported browser game. Source is maintained separately. Publication is manual through the Publish playtest workflow; each game file is checked against the export manifest before deployment.
