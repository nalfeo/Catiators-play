# Catiators

[Play in your browser](https://nalfeo.github.io/Catiators-play/).

## Xbox Series X testing

Build `3dffc59` is live. [Pages deployment](https://github.com/nalfeo/Catiators-play/actions/runs/43331894549).

- [Play at 720p in Performance mode](https://nalfeo.github.io/Catiators-play/?diagnostics=1&render_720p=1&visual_quality=performance&test_device=xbox_series_x&build=3dffc59)
- [Play at 720p with Xbox diagnostics](https://nalfeo.github.io/Catiators-play/?diagnostics=1&render_720p=1&test_device=xbox_series_x&build=3dffc59)
- [Play with normal resolution and Xbox diagnostics](https://nalfeo.github.io/Catiators-play/?diagnostics=1&test_device=xbox_series_x&build=3dffc59)
- [Compare simpler House cats at 720p](https://nalfeo.github.io/Catiators-play/?diagnostics=1&render_720p=1&house_simple=1&test_device=xbox_series_x&build=3dffc59)
- [Read the last crash trace](https://nalfeo.github.io/Catiators-play/?diagnostics=read&build=3dffc59)
- [Run the 720p rendering benchmark](https://nalfeo.github.io/Catiators-play/?render_benchmark=1&render_720p=1&benchmark_long=1&build=3dffc59)

Start with the first link. Try House Home, then a new run through combat. The
overlay shows FPS, focus, canvas size, visual tier, draw calls, frame
intervals, and combat or House workload counts. Use **Settings → Visual quality** to compare
Auto, Full, and Performance at the same resolution. Auto adapts House
animation as well as arena effects.

If Edge crashes, reopen it and use the recovery link before clearing site
data. The rendering benchmark is a separate synthetic scene with no combat
or saves.

Development builds can send future diagnostic summaries to PostHog.
Use **Settings → Feedback** to opt out. The recovery page reads local
history without loading the game.

Cats battle for the amusement of the Empress. Move with WASD, arrow keys, or
a controller. Weapons attack automatically. Local co-op uses controllers.

This repository contains the checked browser artifact. The Pages workflow
checks the files against the export manifest before deployment.
