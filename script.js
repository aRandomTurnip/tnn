document.addEventListener("DOMContentLoaded", () => {
    const params = window.location.search;

    document.querySelectorAll("a").forEach(a => {
        // only modify internal links
        if (a.href.startsWith(location.origin)) {
            a.href += params;
        }
    });
});