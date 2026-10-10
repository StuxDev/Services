# Changelog

All notable changes to Stux.Dev Services (services.stux.dev) are documented here. This
project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## v1.1.0

### Added

- A light/dark toggle at the end of the header on every page, like the brand pages': it shows the theme it switches to (a sun on dark, a moon on light). Until it's used the site follows the system theme; after that the choice is remembered in this browser

## v1.0.7

### Changed

- The favicon follows the browser's light or dark theme: the deep icon (`icon-dark.png`) on light and the bright one (`icon-light.png`) on dark, straight from the brand's media host instead of a local copy, so a brand colour change is just a new file there
- The logos and icons in the Markdown docs (README and the like) follow GitHub's light or dark theme, using each brand's `logo-light`/`logo-dark` and `icon-light`/`icon-dark` files

## v1.0.6

### Changed

- The favicon follows the browser's light or dark theme: the deep icon (`icon-dark.png`) on light and the bright one (`icon-light.png`) on dark, straight from the brand's media host instead of a local copy, so a brand colour change is just a new file there
- The logos and icons in the Markdown docs (README and the like) follow GitHub's light or dark theme, using each brand's `logo-light`/`logo-dark` and `icon-light`/`icon-dark` files

## v1.0.5

### Changed

- The status card is titled just "Status" (and its icon's alt text "Status icon") instead of repeating "Stux.Dev Status"

## v1.0.4

### Removed

- The `.project-icon.on-tile` style, so icons can't be put in the bordered tile again

## v1.0.3

### Fixed

- Stux.Dev is marked Coming soon (`data-state="soon"`)

## v1.0.2

### Fixed

- The hero credits "SeasonalOverlaysLibrary from StuxAPIs" with a link to its site, like the other Stux.Group listing pages
- SeasonalOverlaysLibrary loads from https://seasonaloverlayslibrary.stuxapis.net instead of a vendored copy, so it stays up to date; the Privacy Policy lists it

## v1.0.1

### Fixed

- Sm.lol's icon no longer sits in the bordered tile

## v1.0.0

### Added

- The Stux.Dev services page: every Stux.Dev service, Labs project and template in one place, modelled on Stux.Group Services and branded for Stux.Dev (accent `#fd6602`, dark and light themes)
- Cards for Stux.Dev and Stux.Dev Status (featured), Stuxs.Tools, Downl.one and Sm.lol (services), Stux.Dev Labs and AutoScroll (Labs), and the Soonpage, Maintenancepage, Servicepage and GitHub Pages Redirect templates
- One badge per card by precedence (Discontinued, Template, Maintenance, Coming soon), otherwise a live badge read from status.stux.dev (`stux-dev` source, the default for `data-monitor`): Online / Degraded / Offline per monitor, or the overall status for `stux-dev:*`
- A status band with an animated dot, reading the overall status of Stux.Dev Status
- Seasonal overlays from a vendored copy of SeasonalOverlaysLibrary, with a hero button (for example Pumpkins? / Pumpkins!) that replays today's preset
- Boring Legal Stuff hub with its six sub-pages, `/changelogs` (with a `/changelog` redirect), a sitemap page, `sitemap.xml` and `robots.txt`
- A 404 page and the shared dev-mode site banner component
- A footer with the muted Stux.Dev logo, an auto-updating copyright year, a version link to the changelogs, and "Created with love, code and coffee by Stux.Dev"
- `dev-server` (Node, `DEV_MODE` on by default with `--no-dev-mode`), `commit.sh` / `commit.bat`, `scripts/check-repo-links.sh`, a GitHub Pages workflow, CI and release workflows
