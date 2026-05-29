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

    document.querySelectorAll("video").forEach(video => {
        video.pause();
    });

    if (target) target.classList.remove("hidden");

    if (isGallery) {
        logo.classList.add("hidden-logo");
    } else {
        logo.classList.remove("hidden-logo");
    }

        if (target) {
        target.classList.remove("hidden");

        const targetVideo = target.querySelector("video");

        if (targetVideo) {
            targetVideo.play().catch(() => {});
        }
    }
}

const contactModal = document.getElementById("contactModal");
const openContact = document.getElementById("openContact");
const contactWindow = document.querySelector(".contact-window");

openContact.addEventListener("click", (e) => {
    e.preventDefault();

    contactModal.classList.remove("hidden");
});

contactModal.addEventListener("click", () => {
    contactModal.classList.add("hidden");
});

contactWindow.addEventListener("click", (e) => {
    e.stopPropagation();
});

