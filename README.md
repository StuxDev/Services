<p align="center">
  <img src="https://global.media.stux.dev/logo.png" height="100" alt="Stux.Dev Logo">
</p>

# Stux.Dev Services

### *Every Stux.Dev service, tool and template, in one place.*

[Stux.Dev Services](https://services.stux.dev) is a small, static, no-build-step website that
indexes every Stux.Dev service, Labs project and template and links out to each one, with its own
site and, where it's public, its own repository. It's built the same way as
[StuxieDev Projects](https://github.com/StuxieDev/Projects), in Stux.Dev orange.

- Plain HTML, CSS and JavaScript: no framework, no bundler, no dependencies to install
- Dark and light themes, following your system setting
- **Live status** on each card, read from [status.stux.dev](https://status.stux.dev)
  (`StuxDev/Status`, powered by [GitHup](https://githup.stux.group))
- **Seasonal overlays** from [SeasonalOverlaysLibrary](https://seasonaloverlayslibrary.stuxapis.net)
  (StuxAPIs): today's preset plays once per visit (never with reduced motion), and the hero button replays it
- Deployed to [GitHub Pages](https://pages.github.com/) by `.github/workflows/pages.yml`
- No accounts, no ads, no cookies, no tracking scripts

---

## Cards listed here

Every card shows one badge. "Status source" is the `data-monitor` value (`stux-dev:<slug>`, read
from the `stux-dev` status source, `StuxDev/Status`), or `data-state` for the fixed badges.

### Featured

| Card | What it is | Site | Repo | Badge | Status source |
|---|---|---|---|---|---|
| Stux.Dev | Free web tools and utilities, no accounts, ads or trackers | [stux.dev](https://stux.dev) | [StuxDev](https://github.com/StuxDev) (organisation) | Coming soon | `stux-dev:stux-dev` |
| Stux.Dev Status | Live status and uptime history of every Stux.Dev service | [status.stux.dev](https://status.stux.dev) | [StuxDev/Status](https://github.com/StuxDev/Status) | Live, overall status (All operational / Degraded / Partial outage / Major outage) | `stux-dev:*` |

### Services

| Card | What it is | Site | Repo | Badge | Status source |
|---|---|---|---|---|---|
| Stuxs.Tools | Free browser utilities | [stuxs.tools](https://stuxs.tools) | private, not linked | Live | `stux-dev:stuxs-tools` |
| Downl.one | A media downloader | [downl.one](https://downl.one) | private, not linked | Live | `stux-dev:downl-one` |
| Sm.lol | Short links, bio pages, QR codes and more | [sm.lol](https://sm.lol) | none, not linked | Live | `stux-dev:sm-lol` |

### Labs

| Card | What it is | Site | Repo | Badge | Status source |
|---|---|---|---|---|---|
| Stux.Dev Labs | Experiments, prototypes and digital labs | [labs.stux.dev](https://labs.stux.dev) | private, not linked | Live | `stux-dev:stux-dev-labs` |
| AutoScroll | Auto-scrolling image gallery for Reddit | [autoscroll.stux.dev](https://autoscroll.stux.dev) | [StuxDev/AutoScroll](https://github.com/StuxDev/AutoScroll) | Live | `stux-dev:autoscroll` |

### Templates

| Card | What it is | Site | Repo | Badge | Status source |
|---|---|---|---|---|---|
| Soonpage | "Coming soon" page template | [soonpage.stux.dev](https://soonpage.stux.dev) | [StuxDev/soonpage](https://github.com/StuxDev/soonpage) | Template | none (`data-state="template"`) |
| Maintenancepage | Maintenance page template | [maintenancepage.stux.dev](https://maintenancepage.stux.dev) | [StuxDev/maintenancepage](https://github.com/StuxDev/maintenancepage) | Template | none (`data-state="template"`) |
| Servicepage | Placeholder for services not yet set up | [servicepage.stux.dev](https://servicepage.stux.dev) | [StuxDev/servicepage](https://github.com/StuxDev/servicepage) | Template | none (`data-state="template"`) |
| GitHub Pages Redirect | Redirects username.github.io to a custom domain | none | [StuxDev/stuxdev.github.io](https://github.com/StuxDev/stuxdev.github.io) | Template | none (`data-state="template"`) |

This list (and the matching cards on the site) is the source of truth for what's listed. Update
both together when a card is added, retired or renamed. Each card shows one badge above its
description: Discontinued, Template, Maintenance or Coming soon (from `data-state`, in that order
of precedence), otherwise a live badge when it has a `data-monitor` (`<source>:<slug>`, or
`<source>:*` for the source's overall status) matching a monitor slug in `StuxDev/Status`'s
`.githup.yml`.

## Local development

```
./dev-server.sh          # http://127.0.0.1:8080, DEV_MODE forced on
./dev-server.sh 3000 --no-dev-mode
```

On Windows, use `dev-server.bat` instead. No `npm install` needed: the dev server is a single
dependency-free Node script (`dev-server.js`); Node just needs to be installed. See
[CONTRIBUTING.md](CONTRIBUTING.md) for more.

## Releasing

1. Update `CHANGELOG.md`
2. Bump `VERSION.md`
3. Update this README if relevant
4. Run `./commit.sh` (or `commit.bat`): it reads `VERSION.md`, commits, and tags `vX.Y.Z`
5. `git push origin main --tags`; the release workflow then publishes a GitHub Release from the
   matching `CHANGELOG.md` section

## Hosting

GitHub Pages, deployed by Actions, with the custom domain `services.stux.dev` (the `CNAME` file and
the Pages settings). DNS: a `CNAME` record for `services` pointing at `stuxdev.github.io`.

## License

&copy; 2026 Stux.Dev. All rights reserved. This repository is not licensed for reuse or
redistribution. Lato and Poppins (`assets/fonts/`) are under the SIL Open Font License.

---

*Powering the Stux.Group Ecosystem | Part of the Stux.Group Brand of Companies.*

Stux.Dev is operated by **Stux Group Ltd**, a company registered in England and Wales (company no. 13160574), registered office 82a James Carter Road, Mildenhall, England, IP28 7DE.
