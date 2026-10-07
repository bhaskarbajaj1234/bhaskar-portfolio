(function () {
    var header = document.querySelector(".header-inner");
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!header || !toggle || !nav) return;
    function setOpen(open) {
        header.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    toggle.addEventListener("click", function () {
        setOpen(!header.classList.contains("is-open"));
    });
    nav.addEventListener("click", function (event) {
        if (event.target.tagName === "A") setOpen(false);
    });
})(); 