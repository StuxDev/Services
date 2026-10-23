#!/usr/bin/env node
// Static-site checks: Discord component embeds, favicon set, changelog renderer.
// Run with: node tests/site.test.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const ROOT = path.resolve(__dirname, "..");
let pass = 0, fail = 0;
function ok(cond, name) { if (cond) { pass++; console.log("ok   - " + name); } else { fail++; console.log("FAIL - " + name); } }

function pages(dir) {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === ".git" || e.name === "node_modules" || e.name === ".github") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(pages(p));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

const ALLOWED = new Set([1, 2, 9, 10, 11, 12, 14, 17]);
function walk(c, f) { f(c); (c.components || []).forEach(x => walk(x, f)); }

for (const f of pages(ROOT)) {
  const rel = path.relative(ROOT, f).split(path.sep).join("/");
  const html = fs.readFileSync(f, "utf8");
  const head = (html.match(/<head>[\s\S]*?<\/head>/) || [""])[0];
  ok(/<link rel="icon" href="\/favicon\.ico" sizes="48x48">/.test(head) && /rel="apple-touch-icon"/.test(head) && /rel="manifest" href="\/site\.webmanifest"/.test(head) && /sizes="512x512"/.test(head), rel + ": favicon tags");
  const m = head.match(/<script id="discord:component-embed" type="application\/json">([\s\S]*?)<\/script>/);
  if (rel === "404.html" || rel === "changelog/index.html") { ok(!m, rel + ": no Discord embed"); continue; }
  ok(!!m, rel + ": Discord embed present");
  if (!m) continue;
  ok(Buffer.byteLength(m[1]) <= 3000, rel + ": embed under 3,000 bytes");
  let data; try { data = JSON.parse(m[1]); } catch (e) { ok(false, rel + ": embed is valid JSON"); continue; }
  const root = data.component;
  ok(root && root.type === 17 && typeof root.accent_color === "number", rel + ": one root Container");
  let n = 0, containers = 0, bad = 0, badBtn = 0;
  walk(root, c => {
    n++;
    if (c.type === 17) containers++;
    if (!ALLOWED.has(c.type)) bad++;
    if (c.type === 2) {
      const keys = Object.keys(c).every(k => ["id", "type", "url", "style", "label", "emoji", "disabled"].includes(k));
      if (c.style !== 5 || !keys || !/^https?:\/\//.test(c.url)) badBtn++;
    }
  });
  ok(containers === 1 && bad === 0 && n - 1 <= 40 && badBtn === 0, rel + ": component rules");
  ok(!/\$1/.test(m[1]) && !/<\/script/i.test(m[1]), rel + ": no literal $1, cannot close the script early");
}

// Files and manifest
for (const f of ["favicon.ico", "apple-touch-icon.png", "site.webmanifest"]) ok(fs.existsSync(path.join(ROOT, f)), f + " exists");
const man = JSON.parse(fs.readFileSync(path.join(ROOT, "site.webmanifest"), "utf8"));
ok(man.start_url === "/" && man.display === "browser" && man.icons.some(i => i.purpose === "maskable" && i.sizes === "512x512"), "manifest fields");
ok(man.icons.every(i => fs.existsSync(path.join(ROOT, i.src))), "manifest icons exist");

// Changelog renderer recognises Date Versioning headings and orders sections
const src = fs.readFileSync(path.join(ROOT, "assets/js/changelogs.js"), "utf8");
const body = { innerHTML: "" }, badge = { textContent: "" };
const md = "# Changelog\n\n## v26.10.23-1\n\n### Deprecated\n\n- d\n\n### Added\n\n- a\n\n## v26.10.23\n\n### Fixed\n\n- f\n";
const sandbox = {
  document: { getElementById: id => (id === "cl-body" ? body : badge) },
  fetch: url => Promise.resolve({ ok: true, text: () => Promise.resolve(/VERSION/.test(url) ? "26.10.23-1\n" : md) }),
};
vm.runInNewContext(src, sandbox);
setTimeout(() => {
  ok(body.innerHTML.includes("<h2>v26.10.23-1</h2>") && body.innerHTML.includes("<h2>v26.10.23</h2>"), "changelog renderer shows vYY.MM.DD and vYY.MM.DD-N headings");
  ok(body.innerHTML.indexOf("cl-label-added") < body.innerHTML.indexOf("cl-label-deprecated"), "changelog sections sorted Added before Deprecated");
  ok(badge.textContent === "v26.10.23-1", "version badge accepts a Date Version");
  console.log(pass + " passed, " + fail + " failed");
  process.exit(fail ? 1 : 0);
}, 50);
