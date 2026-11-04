import assert from "node:assert/strict";
import { resumir } from "../src/data/eventos.js";

const ev = (type, repo, payload = {}, created_at = "2026-11-04T10:00:00Z") => ({ type, repo: { name: repo }, payload, created_at });
const r = resumir(
  [
    ev("IssueCommentEvent", "TheodoreMeyer/SimpleVoice-Geyser", { action: "created", issue: { number: 61, title: "Velocity Support" } }),
    ev("PushEvent", "pbarrera813/Discord-bot", { ref: "refs/heads/dev" }),
    ev("CreateEvent", "pbarrera813/pbarrera813", { ref_type: "repository" }),
    ev("IssueCommentEvent", "TheodoreMeyer/SimpleVoice-Geyser", { issue: { number: 60, title: "older" } }),
    ev("PullRequestEvent", "pbarrera813/Discord-bot", { action: "merged", number: 2 }),
    ev("WatchEvent", "someone/else"),
  ],
  "pbarrera813"
);

assert.deepEqual(r.map((x) => x.name), ["SimpleVoice-Geyser", "Discord-bot", "else"]);
assert.equal(resumir([ev("PushEvent", "a/old", {}, "2026-01-01T00:00:00Z"), ev("PushEvent", "a/new", {}, "2026-02-01T00:00:00Z")], "x")[0].name, "new");
assert.equal(r[0].owner, "TheodoreMeyer");
assert.equal(r[1].owner, "");
assert.equal(r[0].en, 'Commented on "Velocity Support" (#61)');
assert.equal(r[1].es, "Subió cambios a dev");
assert.equal(resumir([ev("PullRequestEvent", "a/b", { action: "merged", number: 2 })], "x")[0].en, "Pull request #2 merged");
assert.equal(resumir([ev("DeleteEvent", "a/b")], "x")[0].en, "Activity");
console.log("check-eventos ok");
