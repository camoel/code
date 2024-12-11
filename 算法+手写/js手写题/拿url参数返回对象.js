function getUrlParams(url) {
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);
  const entries = params.entries();
  return Object.fromEntries(entries);
}
