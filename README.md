# Catiators

[Play in your browser](https://nalfeo.github.io/Catiators-play/).

Source build `da930a38` uses a 720p backing buffer by default, upscaled to your
window. Choose 1080p or Native in Settings if you want higher resolution.

A fresh profile reaches wave 1 with less than 20 MB of required downloads,
including the engine. All remaining assets, including higher-resolution art,
download in the background as soon as House Home loads. Time spent at Home can
therefore increase total downloaded bytes before the first wave.

Player profiles and settings stay in this browser. Do not clear site data to
update the game. A legacy resolution preference defaults to 720p.

Move with WASD, arrow keys or a controller. Weapons attack automatically.
Local co-op uses controllers.

[Open local performance diagnostics](https://nalfeo.github.io/Catiators-play/?diagnostics=1).
Physical-phone/Xbox performance and extended play still need device testing.

This repository contains only the checked browser artifact. The manually
triggered Pages workflow verifies every file against its export manifest.
The previous complete artifact remains available in Git history for rollback.
