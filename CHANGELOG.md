# Changelog

All notable changes to Stux.Dev Services (services.stux.dev) are documented here. This
project adheres to [Date Versioning](https://datevers.ing) since v26.10.23 (`YY.MM.DD`, the UTC release date, with `-1`, `-2`… for later releases the same day); earlier releases used [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## v26.11.13

### Changed

- The Imprint page and the README give Stux Group Ltd's new registered office, 124 City Road, London, EC1V 2NX, England, United Kingdom, instead of 82a James Carter Road, Mildenhall, England, IP28 7DE. The company number (13160574) and "registered in England and Wales" are unchanged.

## v26.11.08

### Changed

- The Stux.Dev Status card, the status band and the status section say services are "checked regularly" instead of "every 5 minutes". GitHub runs the 5-minute schedule best-effort and often far less often, so the copy no longer promises 5 minutes; the status page shows the real check rhythm.

## v26.11.07-1

### Changed

- The GitHub Release is published when the release reaches `main`, not when its tag is pushed. Tags are pushed with
  `test` before the pull request is merged, so releases used to be announced before they were live. The workflow now
  runs on pushes to `main`, publishes the release for `VERSION.md`'s version if it doesn't exist yet (checking its tag
  is part of `main`), and does nothing otherwise. The README's release steps and CONTRIBUTING match.

## v26.11.07

### Added

- The eyebrow above the hero headline is now a live status badge too. It links to status.stux.dev and, once the status
  loads, shows only the overall status (All operational, Degraded, Partial outage or Major outage) in the status
  colour, with a dot that pulses when everything is up (not with reduced motion). It keeps the eyebrow's size and pill
  shape, reuses the cards' `summary.json` fetch, and stays the plain "Stux.Dev" eyebrow if the status can't load.
  CONTRIBUTING documents it.

## v26.11.06-2

### Added

- A `test` branch. Work happens on `test`, and changes reach `main` only through a pull request from `test`, which needs CI to pass and is reviewed and merged by Leo; release commits and tags are made on `test` and go live when it's merged. CONTRIBUTING has a Branches section, its release steps end by pushing `test` and opening that pull request, and the README's Versioning section says so.

### Changed

- CI also runs on pushes to `test`.

## v26.11.06-1

### Changed

- The README's release steps run the tests and give the tag as `vYY.MM.DD` (it still said `vX.Y.Z`), its copyright line
  names Stux.Group, and Sm.lol's repository is listed as private rather than missing. CONTRIBUTING notes the badge icons
  are 256 × 256.

## v26.11.06

### Added

- `scripts/badge-icons.py` (from StuxGroup/Services, adapted from TheRidgwells/Projects), which builds badge-style
  service icons in Stux.Dev's colours: the Stux.Dev mark on a round avatar, with a badge in the corner saying what the
  service is.

### Changed

- **Every card uses its full name, with its own icon.** "Status" is now Stux.Dev Status, with a heartbeat badge on the
  Stux.Dev mark; the templates are Stux.Dev Soonpage, Maintenancepage, Servicepage and GitHub Pages Redirect, each
  with its own badge (hourglass, spanner, browser window, arrow) instead of the shared Stux.Dev icon. The icons' alt
  text uses the same full names, and so do the README's tables.

### Removed

- `assets/img/services/status.svg`, replaced by the Stux.Dev Status badge icon.

## v26.10.23

### Added

- A custom Discord link preview on every page (a component embed in the page's `<head>`, in Stux.Dev orange): the homepage shows what the site is and links the main services, the other pages show their name and description. The 404 page and the `/changelog/` redirect have none
- A full favicon set: `favicon.ico` (16, 32 and 48px), `apple-touch-icon.png`, and `site.webmanifest` with 192px, 512px and maskable 512px icons, linked from every page including the 404 page
- `tests/site.test.js`, which checks every page's favicon tags and Discord embed (valid JSON, under 3,000 bytes, allowed components only), the web manifest, and that the changelog page reads `vYY.MM.DD` and `vYY.MM.DD-N` headings
- `tests/version.sh`, which checks that `VERSION.md` is a valid Date Version, a real calendar date not in the future, and the same as the newest entry in this changelog

### Changed

- Switched from Semantic Versioning to [Date Versioning](https://datevers.ing): releases are numbered by their UTC release date as `YY.MM.DD`, with `-1`, `-2`… for later releases the same day. This release follows v1.1.1
- `commit.sh` and `commit.bat` refuse a `VERSION.md` that isn't a valid Date Version or is dated in the future (UTC), and warn when it's dated before today
- `README.md` and `CONTRIBUTING.md` describe Date Versioning and the release steps
- The CI version check and the dev server now expect Date Versions and serve `.webmanifest` as `application/manifest+json`
- The favicon links now point at the local icon files instead of the media host's light and dark icons

## v1.1.1

### Changed

- Sm.lol's card uses its new tagline, "The internet, but smol", matching the rebranded sm.lol homepage

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
