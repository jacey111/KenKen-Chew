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
    aboutDiv.style.opacity = "1";

    smoothScrollTo(aboutDiv, 300);
}

function hideAbout() {
    const aboutDiv = document.getElementById("about");

    aboutDiv.style.opacity = "0";
    aboutDiv.style.display = "none";

    smoothScrollTo(document.getElementById("overlay-about"), 100);
}

function showGallery() {
    const galleryDiv = document.getElementById("gallery");

    galleryDiv.style.display = "block";
    galleryDiv.style.opacity = "1";

    smoothScrollTo(galleryDiv, 300);
}

function hideGallery() {
    const galleryDiv = document.getElementById("gallery");

    galleryDiv.style.opacity = "0";
    galleryDiv.style.display = "none";

    smoothScrollTo(document.getElementById("overlay-gallery"), 100);
}

function showAchievement() {
    const achievementDiv = document.getElementById("achievement");

    achievementDiv.style.display = "block";
    achievementDiv.style.opacity = "1";

    smoothScrollTo(achievementDiv, 300);
}

function hideAchievement() {
    const achievementDiv = document.getElementById("achievement");

    achievementDiv.style.opacity = "0";
    achievementDiv.style.display = "none";

    smoothScrollTo(document.getElementById("overlay-achievement"), 100);
}

const video = document.getElementById('video-bg');

video.addEventListener('click', (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 
});