// Tiny unique-visitor counter. POST /visitas {"id": "<uuid>"} stores the ID once; GET /visitas returns
// the total. Only random IDs are stored (one per line in VISITAS_FILE): no IP, no cookie, no name.
// Run: PORT=<port> node scripts/visitas.mjs   (listens on 127.0.0.1; put the reverse proxy in front)
import { createServer } from "node:http";
import { appendFileSync, existsSync, readFileSync } from "node:fs";

const PORT = Number(process.env.PORT);
if (!PORT) throw new Error("Set PORT");
const FILE = process.env.VISITAS_FILE ?? "visitas.txt";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const ids = new Set(existsSync(FILE) ? readFileSync(FILE, "utf8").split("\n").filter(Boolean) : []);

// rate limit per address, in memory only (never written anywhere): 20 registrations per minute
const hits = new Map();
setInterval(() => hits.clear(), 60_000).unref();
const permitido = (req) => {
  const quien = req.headers["cf-connecting-ip"] || req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const n = (hits.get(quien) ?? 0) + 1;
  hits.set(quien, n);
  return n <= 20;
};

const send = (res, code, body) => {
  res.writeHead(code, { "content-type": "application/json", "cache-control": "no-store" });
  res.end(JSON.stringify(body));
};

createServer((req, res) => {
  const total = () => ({ total: ids.size });
  if (req.method === "GET") return send(res, 200, total());
  if (req.method !== "POST") return send(res, 405, { error: "method" });
  if (!permitido(req)) return send(res, 429, { error: "slow down" });

  let body = "";
  req.on("data", (c) => {
    body += c;
    if (body.length > 200) req.destroy();
  });
  req.on("end", () => {
    try {
      const { id } = JSON.parse(body);
      if (!UUID.test(id)) return send(res, 400, { error: "id" });
      if (!ids.has(id)) {
        ids.add(id);
        appendFileSync(FILE, id + "\n");
      }
      send(res, 200, total());
    } catch {
      send(res, 400, { error: "body" });
    }
  });
}).listen(PORT, "127.0.0.1");
