import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the mellow landing page shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /mellow/);
  assert.match(html, /大人女性のためのオンライン・パーソナルスタイリング/);
  assert.match(html, /今日の私、ちょっと好きかも。/);
  assert.match(html, /無料スタイル診断を受ける/);
  assert.match(html, /よくあるご質問/);
  assert.match(html, /Portfolio Demo/);
  assert.doesNotMatch(html, /NOCT CANDLE ACADEMY|Building your site|react-loading-skeleton/i);
});

test("keeps source focused on the requested emotional LP", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  for (const text of [
    "似合わなくなったのではありません。",
    "「似合う」が、",
    "変わっただけ。",
    "あなたなら、これ。",
    "スマホひとつ。",
    "あなただけの「似合う」を、一冊に。",
  ]) {
    assert.match(page, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(page, /aria-expanded=\{isOpen\}/);
  assert.match(page, /aria-controls="mobile-navigation"/);
  assert.match(page, /data-reveal/);
  assert.match(layout, /canonical:\s*"https:\/\/example\.com\/"/);
  assert.match(css, /@media \(max-width: 767px\)/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.doesNotMatch(page + layout + css, /NOCT|CANDLE|codex-preview|SkeletonPreview/);
});
