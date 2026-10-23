#!/bin/sh
# Reconstruye el sitio cuando un nuevo blog es publicado.
set -eu
cd "$(dirname "$0")/.."

marca=$(find src/content/blog -type f -printf '%p %T@ %s\n' | sort | sha1sum)
[ "$marca" = "$(cat .blog-marca 2>/dev/null || true)" ] && exit 0
echo "$marca" > .blog-marca # se guarda antes: un build que falla no se repite hasta el siguiente cambio

rm -rf dist-next
if npx astro build --outDir dist-next; then
  rm -rf dist-old
  [ -d dist ] && mv dist dist-old
  mv dist-next dist
  rm -rf dist-old
  echo "publicado"
else
  rm -rf dist-next
  echo "el build fallo; se conserva la version anterior" >&2
  exit 1
fi
