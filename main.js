function smoothScrollTo(target, duration) {
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    const startTime = performance.now();

    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); 
        const ease = easeOutQuad(progress); 
        window.scrollTo(0, start + distance * ease);

        if (elapsed < duration) {
            requestAnimationFrame(scrollStep); 
        }
    }

    function easeOutQuad(t) {
        return 1 - (1 - t) * (1 - t); 
    }

    requestAnimationFrame(scrollStep);
}

function showAbout() {
    const aboutDiv = document.getElementById("about");

    aboutDiv.style.display = "block";

    setTimeout(() => {
        aboutDiv.classList.add("active");
        smoothScrollTo(aboutDiv, 400);
    }, 10); 
}

function hideAbout() {
    const aboutDiv = document.getElementById("about");

    aboutDiv.classList.remove("active");

    smoothScrollTo(document.getElementById("overlay-about"), 400);

    setTimeout(() => {
        aboutDiv.style.display = "none";
    }, 300);
}

function showGallery() {
    const galleryDiv = document.getElementById("gallery");

    galleryDiv.style.display = "block";

    setTimeout(() => {
        galleryDiv.classList.add("active");
        smoothScrollTo(galleryDiv, 600);
    }, 10); 
}

function hideGallery() {
    const galleryDiv = document.getElementById("gallery");

    galleryDiv.classList.remove("active");

    smoothScrollTo(document.getElementById("overlay-gallery"), 600);

    setTimeout(() => {
        galleryDiv.style.display = "none";
    }, 300);
}

function showAchievement() {
    const achievementDiv = document.getElementById("achievement");

    achievementDiv.style.display = "block";

    setTimeout(() => {
        achievementDiv.classList.add("active");
        smoothScrollTo(achievementDiv, 600);
    }, 10); 
}

function hideAchievement() {
    const achievementDiv = document.getElementById("achievement");

    achievementDiv.classList.remove("active");

    smoothScrollTo(document.getElementById("overlay-achievement"), 600);

    setTimeout(() => {
        achievementDiv.style.display = "none";
    }, 300);
}