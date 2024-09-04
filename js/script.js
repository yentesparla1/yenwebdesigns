/* Toggle theme */
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const elementsToToggle = document.querySelectorAll('header, nav ul li a, .explore-button button, .toggle-theme, .toggle-icon, .introduction, .intro-text, .content-container, .projects, .navigation a, .background, .blok, .content, .skills-banner, .skills-tags .skill-tag, .stats-container, .stat-card, .stat-arrow, .testimonials, .testimonial, .page-container, .video-section h2, .video-player, .video-controls .control-button, .video-buttons .video-button, .footer-container, .footer-content, .contact-section, .contact-section h6, .contact-section h5, .contact-section p, .contact-section label, .contact-section input, .book-button, .flatpickr-calendar, .flatpickr-months, .flatpickr-day');
    elementsToToggle.forEach(element => element.classList.toggle('dark-mode'));
}

/* Video speler */
document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    const videoButtons = document.querySelectorAll('.video-button');
    const playPauseButton = document.getElementById('play-pause-button');
    const fastForwardButton = document.getElementById('fast-forward-button');
    const nextButton = document.getElementById('next-button');


    videoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video');
            videoSource.src = videoUrl;
            videoElement.load();
            videoElement.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        });
    });

    playPauseButton.addEventListener('click', function() {
        if (videoElement.paused) {
            videoElement.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            videoElement.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    nextButton.addEventListener('click', function() {
        const currentVideoIndex = Array.from(videoButtons).findIndex(button => button.getAttribute('data-video') === videoSource.src);
        const nextVideoIndex = (currentVideoIndex + 1) % videoButtons.length;
        const nextVideoUrl = videoButtons[nextVideoIndex].getAttribute('data-video');
        videoSource.src = nextVideoUrl;
        videoElement.load();
        videoElement.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    });

    fastForwardButton.addEventListener('click', function() {
        videoElement.currentTime += 10;
    });
});


/* Datepicker */
document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#date-picker", {
        inline: true,
        enableTime: false,
        dateFormat: "Y-m-d",
        defaultDate: new Date(),
    });

    flatpickr("#time-picker", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        defaultDate: "12:00",
    });
});

/* Typing effect */
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed("#typed-text", {
        strings: ["Bekijk de gave projecten wat ik dit jaar heb gemaakt!"],
        typeSpeed: 60,
        backSpeed: 25,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: "|",
    });
    var typedSamenwerken = new Typed("#typed-text-samenwerken", {
        strings: ["Samenwerken? Maak dan zeker een afspraak hieronder!"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: "|",
    });
});

    // Modal voor fotografie projecten
document.addEventListener("DOMContentLoaded", function() {
    var modalFotografie = document.getElementById("modal-fotografie");
    var btnFotografie = document.getElementById("btnFotografie");
    var spanFotografie = modalFotografie.querySelector(".close");

    btnFotografie.onclick = function() {
        modalFotografie.style.display = "block";
    }

    spanFotografie.onclick = function() {
        modalFotografie.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modalFotografie) {
            modalFotografie.style.display = "none";
        }
    }

    // Modal voor het online magazine
    var modalMagazine = document.getElementById("modal-magazine");
    var btnMagazine = document.getElementById("btnMagazine");
    var spanMagazine = modalMagazine.querySelector(".close-magazine");

    btnMagazine.onclick = function() {
        modalMagazine.style.display = "block";
    }

    spanMagazine.onclick = function() {
        modalMagazine.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modalMagazine) {
            modalMagazine.style.display = "none";
        }
    }

    // Modal voor de leescampagne
    var modalLeescampagne = document.getElementById("modal-leescampagne");
    var btnLeescampagne = document.getElementById("btnLeescampagne");
    var spanLeescampagne = modalLeescampagne.querySelector(".close-leescampagne");

    btnLeescampagne.onclick = function() {
        modalLeescampagne.style.display = "block";
    }

    spanLeescampagne.onclick = function() {
        modalLeescampagne.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modalLeescampagne) {
            modalLeescampagne.style.display = "none";
        }
    }

    // Modal voor posters en flyers
    var modalPosters = document.getElementById("modal-posters");
    var btnPosters = document.getElementById("btnPosters");
    var spanPosters = modalPosters.querySelector(".close-posters");

    btnPosters.onclick = function() {
        modalPosters.style.display = "block";
    }

    spanPosters.onclick = function() {
        modalPosters.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modalPosters) {
            modalPosters.style.display = "none";
        }
    }

    // Modal voor generatieve kunst
    var modalGenArt = document.getElementById("modal-genart");
    var btnGenArt = document.getElementById("btnGenArt");
    var spanGenArt = modalGenArt.querySelector(".close-genart");

    btnGenArt.onclick = function() {
        modalGenArt.style.display = "block";
    }

    spanGenArt.onclick = function() {
        modalGenArt.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modalGenArt) {
            modalGenArt.style.display = "none";
        }
    }

    // Modal voor album cover
    var modalAlbumCover = document.getElementById("modal-albumcover");
    var btnAlbumCover = document.getElementById("btnAlbumCover");
    var spanAlbumCover = modalAlbumCover.querySelector(".close-albumcover");

    btnAlbumCover.onclick = function() {
        modalAlbumCover.style.display = "block";
    }

    spanAlbumCover.onclick = function() {
        modalAlbumCover.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modalAlbumCover) {
            modalAlbumCover.style.display = "none";
        }
    }

// Modal for Workshop
var modalWorkshop = document.getElementById("modal-workshop");
var btnWorkshop = document.getElementById("btnWorkshop");
var spanWorkshop = modalWorkshop.querySelector(".close-workshop");

btnWorkshop.onclick = function() {
    modalWorkshop.style.display = "block";
}

spanWorkshop.onclick = function() {
    modalWorkshop.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalWorkshop) {
        modalWorkshop.style.display = "none";
    }
}

// Modal for Coodle
var modalCoodle = document.getElementById("modal-coodle");
var btnCoodle = document.getElementById("btnCoodle");
var spanCoodle = modalCoodle.querySelector(".close-coodle");

btnCoodle.onclick = function() {
    modalCoodle.style.display = "block";
}

spanCoodle.onclick = function() {
    modalCoodle.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalCoodle) {
        modalCoodle.style.display = "none";
    }
}
});




