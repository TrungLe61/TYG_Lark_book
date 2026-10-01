import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = path.resolve('dist');
const base = '/TYG_Lark_book/';
async function filesIn(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const groups = await Promise.all(entries.map(e => e.isDirectory() ? filesIn(path.join(dir,e.name)) : [path.join(dir,e.name)]));
  return groups.flat();
}
const files = await filesIn(root);
const htmlFiles = files.filter(f => f.endsWith('.html'));
assert(htmlFiles.length >= 4, 'Missing generated guide pages');
let links = 0, images = 0;
for (const file of htmlFiles) {
  const html = await readFile(file,'utf8');
  assert(html.includes('lang="vi"'), `Missing Vietnamese language: ${file}`);
  assert(!/https?:\/\/[a-z0-9]+\.jp\.larksuite\.com|larksuite\.com\/approval\/admin\/createApproval\?|@[^\s"<>]+\.(com|vn)/i.test(html), `Private data in output: ${file}`);
  for (const match of html.matchAll(/<(a|link|script|img)\b[^>]*?\b(?:href|src)="([^"]+)"/g)) {
    const [,tag,url] = match;
    if (/^(https?:|data:|mailto:)/.test(url)) continue;
    const [pathname, fragment] = url.split('#');
    let target = file;
    if (pathname) {
      assert(pathname.startsWith(base), `Unprefixed project URL: ${url}`);
      target = path.join(root,decodeURIComponent(pathname.slice(base.length)));
      if (pathname.endsWith('/')) target = path.join(target,'index.html');
      await stat(target).catch(() => assert.fail(`Broken ${tag}: ${url} in ${file}`));
    }
    if (fragment && target.endsWith('.html')) {
      const targetHtml = target === file ? html : await readFile(target,'utf8');
      assert(targetHtml.includes(`id="${fragment}"`), `Broken anchor: ${url}`);
    }
    links++;
    if(tag === 'img') images++;
  }
}
assert(images >= 48, 'Missing screenshot-led guides');
console.log(`PASS: ${htmlFiles.length} pages, ${links} internal references, ${images} image references; Vietnamese markup, project base paths and private identifiers checked.`);
