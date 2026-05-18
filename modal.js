const all = document.querySelectorAll(".panel, .painting-gallery");

function show(id) {
    all.forEach(el => el.classList.add("hidden"));

    const target = document.getElementById(id);
    if (target) target.classList.remove("hidden");
}

/* MAIN NAV */
document.querySelectorAll("[data-open]").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        show(link.dataset.open);
    });
});

/* SUB NAV */
document.querySelectorAll("[data-open-sub]").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        show(link.dataset.openSub);
    });
});



const panels = document.querySelectorAll(".panel");
const galleries = document.querySelectorAll(".painting-gallery");
const logo = document.querySelector(".logo");

function show(id) {
    const target = document.getElementById(id);

    const isGallery = target?.classList.contains("painting-gallery");

    panels.forEach(p => p.classList.add("hidden"));
    galleries.forEach(g => g.classList.add("hidden"));

    if (target) target.classList.remove("hidden");

    if (isGallery) {
        logo.classList.add("hidden-logo");
    } else {
        logo.classList.remove("hidden-logo");
    }
}