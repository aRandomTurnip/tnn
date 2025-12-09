// Reads ?lang=xx from the URL
function getLangFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang") || "en"; // default language
}

// Replaces all elements that have data-i18n="key"
function translatePage(lang) {
  const dict = translations[lang] || translations["en"];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");

    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getLangFromURL();

  // Update <html lang="xx">
  document.documentElement.setAttribute("lang", lang);

  // Translate all elements with data-i18n
  translatePage(lang);
});