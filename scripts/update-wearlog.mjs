#!/usr/bin/env node
// Refreshes _data/wearlog.json from the public WearLog export.
// Only items referenced by a review's `wearlog_id` are kept, and only whitelisted fields.
// Usage: node scripts/update-wearlog.mjs   (WEARLOG_URL overrides https://wearlog.pages.dev)
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises'

const base = (process.env.WEARLOG_URL ?? 'https://wearlog.pages.dev').replace(/\/$/, '')

const ids = new Set()
for (const f of await readdir('_reviews')) {
  if (!f.endsWith('.md')) continue
  const m = (await readFile(`_reviews/${f}`, 'utf8')).match(/^wearlog_id:\s*(\S+)\s*$/m)
  if (m) ids.add(m[1])
}

const res = await fetch(`${base}/api/public/export.json`)
if (!res.ok) { console.error(`Export failed: ${res.status}`); process.exit(1) }
const { stats = {} } = await res.json()

const items = {}
for (const id of ids) {
  const s = stats[id]
  if (!s) { console.warn(`No stats for wearlog_id ${id}`); continue }
  items[id] = { comfort_range: s.comfort_range ?? null, wear_count: s.wear_count ?? 0 }
}

await mkdir('_data', { recursive: true })
await writeFile('_data/wearlog.json', JSON.stringify({ generated_at: new Date().toISOString(), items }, null, 2) + '\n')
console.log(`Wrote _data/wearlog.json with ${Object.keys(items).length} of ${ids.size} items`)
