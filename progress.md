Original prompt: make the arrow buttons a bit smaller and match the visual ui with the other buttons style

- Updated `.nav` in `index.html` to use the same soft panel treatment and sizing language as `.action`, while reducing the arrow buttons from 64px to 52px.
- Added a mobile-specific reduction to 48px so the controls stay proportionate on smaller screens.
- Started a local HTTP server on port `4173` for verification.
- Automated browser verification is currently blocked because the workspace does not have the `playwright` package available to the shared web-game client.
- Next: if visual QA is needed, install Playwright in the workspace and rerun the browser check against `http://127.0.0.1:4173/`.
- Added a centered `Randomize Points` button between the tutorial arrows that only appears on step 3 and regenerates the six point positions within safe conic ranges before re-rendering the full construction.
- Reworked randomization to animate the existing SVG geometry in place over `520ms` instead of rebuilding the scene, which smooths the point motion and prevents later-step lines from flashing briefly during step 3.
- Added an instant hidden-stroke reset before step-3 randomization so future geometry fully collapses again; this preserves the proper stretch/draw animation when the user advances to the next step after randomizing.
- Replaced the fixed opposite-side extension length with an intersection-aware extension so each guide line always reaches past its computed intersection after randomization, even in longer/extreme layouts.
- Split the three opposite-side guide constructions into separate muted colors so each pair reads as a different construction instead of one uniform gray family.
- Rewrote the Korean copy to use more natural and mathematically accurate wording, including a fully translated title, cleaner step text, and consistent terminology such as `파스칼의 직선` and `마주보는 변`.
- Refined the language toggle pills so both EN and KR use matching icon badges, clearer secondary labels, and a more polished active state aligned with the rest of the button system.
- Added a short language-switch transition so localized text fades and lifts out, swaps language, then eases back in instead of changing instantly on click.
- Reduced the language-switch animation to a much simpler opacity fade and nudged the step-1 camera to the right so the opening ellipse sits more centrally in the viewport.
- Compressed the EN/KR language pills into smaller icon-plus-code toggles with a softer glassy surface so they feel like compact utility controls rather than oversized buttons.
- Reframed the outro as a references section by renaming the eyebrow label, tightening the Korean title wording around `드러납니다`, and making the subtitle explicitly describe the links as future source/reference slots.
