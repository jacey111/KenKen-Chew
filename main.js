function smoothScrollTo(target, duration) {
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    const startTime = performance.now();

    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); 
        const ease = easeInOutQuad(progress); 
        window.scrollTo(0, start + distance * ease);

        if (elapsed < duration) {
            requestAnimationFrame(scrollStep); 
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    requestAnimationFrame(scrollStep);
}

function showAbout() {
    const aboutDiv = document.getElementById("about");

    aboutDiv.style.display = "block";

    setTimeout(() => {
        aboutDiv.classList.add("active");
        smoothScrollTo(aboutDiv, 1000);
    }, 10); 
}

function hideAbout() {
    const aboutDiv = document.getElementById("about");

    aboutDiv.classList.remove("active");

    smoothScrollTo(document.getElementById("overlay-about"), 1000);

    setTimeout(() => {
        aboutDiv.style.display = "none";
    }, 500);
}

function showGallery() {
    const galleryDiv = document.getElementById("gallery");

    galleryDiv.style.display = "block";

    setTimeout(() => {
        galleryDiv.classList.add("active");
        smoothScrollTo(galleryDiv, 1000);
    }, 10); 
}

function hideGallery() {
    const galleryDiv = document.getElementById("gallery");

    galleryDiv.classList.remove("active");

    smoothScrollTo(document.getElementById("overlay-gallery"), 1000);

    setTimeout(() => {
        galleryDiv.style.display = "none";
    }, 500);
}

function showAchievement() {
    const achievementDiv = document.getElementById("achievement");

    achievementDiv.style.display = "block";

    setTimeout(() => {
        achievementDiv.classList.add("active");
        smoothScrollTo(achievementDiv, 1000);
    }, 10); 
}

function hideAchievement() {
    const achievementDiv = document.getElementById("achievement");

    achievementDiv.classList.remove("active");

    smoothScrollTo(document.getElementById("overlay-achievement"), 1000);

    setTimeout(() => {
        achievementDiv.style.display = "none";
    }, 500);
}