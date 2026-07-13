export function getLanguageFromPath(currentPath: string) {
  const isDe = currentPath.startsWith("/de");
  const enHref = isDe ? currentPath.replace(/^\/de/, "") || "/" : currentPath;
  const deHref = isDe ? currentPath : `/de${currentPath === "/" ? "" : currentPath}`;

  return { isDe, enHref, deHref };
}
