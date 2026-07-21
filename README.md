# Vanguard Fleet Public Site — Version 2.1

Upload all files directly into the root of the GitHub `vanguardfleet` repository.

Included pages:
- Home
- The Fleet
- Join
- Ships
- Academy
- Awards
- Community
- Development Roadmap

All assets use a flat, phone-friendly file structure. Replace existing files with matching names and upload the new HTML pages.


## Version 2.2 Cinematic Hero

This update adds:
- Clean Vanguard Station hero artwork
- Animated layered starfield
- Blue-purple nebula glow
- Moving cinematic light sweep
- LCARS accent bars
- Integrated live fleet-status strip
- Responsive mobile and desktop layouts

Upload every file into the repository root and replace files with matching names.


## Version 2.2.1 Fix

Corrects the Vanguard Station information card being clipped at the right edge on narrower desktop windows and mobile screens.


## Version 2.3 Command Header

Changes included:
- Fleet emblem centered and enlarged
- Clickable emblem with subtle hover glow
- Larger metallic Vanguard Fleet title
- Motto rebalanced beneath the title
- VICS expanded to “Vanguard Integrated Computer System”
- Animated online-status indicator
- LCARS-inspired Enter VICS control
- Responsive desktop, tablet and mobile header layout


## Version 2.3.2 Centered Logo Asset

- Rebuilt the uploaded fleet emblem on a balanced square canvas
- Added a transparent `vanguard-logo.png`
- Updated every page to use the PNG
- Removed CSS nudging and restored true horizontal and vertical centering
- Retained a JPG fallback


## Version 2.4 Awards Gallery

Adds original medal and ribbon artwork for:
- Star of Vanguard
- Vanguard Cross
- Distinguished Service Medal
- Explorer's Star
- Medical Excellence Medal
- Engineering Excellence Medal

Artwork is stored in `awards-assets/` as responsive SVG files.


## Version 2.4.1 True Logo Crop

This release isolates only the circular Vanguard Fleet seal from the original rectangular artwork, removes the surrounding background, places it on a transparent square canvas and restores true CSS centering.


## Version 2.4.2 Award Image Loading Fix

The award artwork is now:
- Converted from SVG to PNG
- Stored directly in the repository root
- Referenced without a nested folder
- Cache-busted so browsers load the new files immediately

Upload every extracted file directly into the repository root.


## Version 2.4.3 Critical Fix

- Corrects a filename error that changed `.png` to `.pn`
- Adds valid cache-busting to every award image
- Tightens the logo's transparent canvas
- Enlarges and mathematically centers the emblem
- Refreshes the service-worker cache

Upload every extracted file into the repository root and replace matching files.


## Version 2.4.4 Embedded Award Fix

The six award images are now embedded directly inside `awards.html`.
They no longer depend on separate image-file paths or folders, so GitHub Pages cannot lose or misroute them.

The fleet emblem was also enlarged again within the upper-left header panel.
