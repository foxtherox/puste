const all = document.querySelectorAll(".panel, .painting-gallery");

function show(id) {
    all.forEach(el => el.classList.add("hidden"));

    const target = document.getElementById(id);
    if (target) target.classList.remove("hidden");
}

document.querySelectorAll(".painting-gallery img").forEach(img => {
    img.loading = "lazy";
    img.decoding = "async";
});

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
const contact = document.querySelector(".contact");


function show(id) {
    const target = document.getElementById(id);

    const isGallery = target?.classList.contains("painting-gallery");

    const heroTitle = document.querySelector(".hero-title");
    const heroImage = document.querySelector(".hero-image");

    panels.forEach(p => p.classList.add("hidden"));
    galleries.forEach(g => g.classList.add("hidden"));

    document.querySelectorAll("video").forEach(video => {
        video.pause();
    });

    if (target) target.classList.remove("hidden");

    if (isGallery) {
        logo.classList.add("hidden-ui");
        contact.classList.add("hidden-ui");
    } else {
        logo.classList.remove("hidden-ui");
        contact.classList.remove("hidden-ui");
    }

    if (window.innerWidth <= 768) {
    if (id === "about") {
        heroTitle.classList.add("hidden");
        heroImage.classList.add("hidden");
    } else {
        heroTitle.classList.remove("hidden");
        heroImage.classList.remove("hidden");
    }
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

const hero = document.querySelector(".hero-section");

if (id === "about") {
    hero.classList.add("hidden");
} else {
    hero.classList.remove("hidden");
}

