const verbo = {
  opened: ["abierto", "opened"],
  closed: ["cerrado", "closed"],
  merged: ["fusionado", "merged"],
  reopened: ["reabierto", "reopened"],
};

// PushEvent has no commit count in the public API, only the ref.
function texto({ type, payload: p }) {
  const n = p.number ?? p.issue?.number ?? p.pull_request?.number;
  const t = p.issue?.title ?? p.pull_request?.title;
  const ref = t ? `"${t}" (#${n})` : n ? `#${n}` : "";
  const [ves, ven] = verbo[p.action] ?? ["actualizado", p.action];
  const rama = p.ref?.replace("refs/heads/", "");
  switch (type) {
    case "PushEvent":
      return { es: `Subió cambios${rama ? ` a ${rama}` : ""}`, en: `Pushed${rama ? ` to ${rama}` : ""}` };
    case "IssueCommentEvent":
      return { es: `Comentó en ${ref}`, en: `Commented on ${ref}` };
    case "PullRequestEvent":
      return { es: `Pull request ${ref} ${ves}`, en: `Pull request ${ref} ${ven}` };
    case "PullRequestReviewEvent":
    case "PullRequestReviewCommentEvent":
      return { es: `Revisó el pull request ${ref}`, en: `Reviewed pull request ${ref}` };
    case "IssuesEvent":
      return { es: `Issue ${ref} ${ves}`, en: `Issue ${ref} ${ven}` };
    case "CreateEvent":
      return p.ref_type === "repository"
        ? { es: "Creó el repositorio", en: "Created the repository" }
        : { es: `Creó ${p.ref_type === "tag" ? "la etiqueta" : "la rama"} ${p.ref}`, en: `Created ${p.ref_type} ${p.ref}` };
    case "ForkEvent":
      return { es: "Hizo un fork", en: "Forked it" };
    case "WatchEvent":
      return { es: "Le dio una estrella", en: "Starred it" };
    case "ReleaseEvent":
      return { es: "Publicó una versión", en: "Published a release" };
    default:
      return { es: "Actividad", en: "Activity" };
  }
}

export function resumir(eventos, user, max = 4) {
  const porRepo = new Map();
  for (const e of [...eventos].sort((a, b) => b.created_at.localeCompare(a.created_at))) {
    const [owner, name] = e.repo.name.split("/");
    if (name === user || porRepo.has(e.repo.name)) continue;
    porRepo.set(e.repo.name, {
      owner: owner === user ? "" : owner,
      name,
      url: `https://github.com/${e.repo.name}`,
      ...texto(e),
      fecha: e.created_at,
    });
    if (porRepo.size === max) break;
  }
  return [...porRepo.values()];
}
