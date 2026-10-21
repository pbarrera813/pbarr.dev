export function seconds(name) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value.endsWith("ms") ? parseFloat(value) / 1000 : parseFloat(value);
}
