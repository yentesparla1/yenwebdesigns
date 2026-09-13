        document.addEventListener("DOMContentLoaded", function() {
            const button = document.querySelector(".cta-button");
            let isDragging = false;
            let startX;
            
            button.addEventListener("mousedown", (e) => {
                isDragging = true;
                startX = e.clientX;
                button.style.transition = "none";
            });
            
            document.addEventListener("mousemove", (e) => {
                if (!isDragging) return;
                let moveX = e.clientX - startX;
                if (moveX > 0 && moveX < 180) {
                    button.style.transform = `translateX(${moveX}px)`;
                }
            });
            
            document.addEventListener("mouseup", (e) => {
                if (!isDragging) return;
                isDragging = false;
                button.style.transition = "transform 0.4s ease-in-out";
                if (parseInt(button.style.transform.replace("translateX(", "").replace("px)", "")) > 150) {
                    window.location.href = "mailto:yentesparla@hotmail.com";
                    setTimeout(() => {
                        button.style.transform = "translateX(0)";
                    }, 500);
                } else {
                    button.style.transform = "translateX(0)";
                }
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const aboutText = document.querySelector('.about-text');
        
            function checkVisibility() {
                const rect = aboutText.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    aboutText.classList.add('visible');
                    window.removeEventListener('scroll', checkVisibility); // Remove the event listener once the element is visible
                }
            }
        
            window.addEventListener('scroll', checkVisibility);
        });

        document.addEventListener('DOMContentLoaded', function() {
            const projectCards = document.querySelectorAll('.project-card');
        
            function checkVisibility() {
                projectCards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom >= 0) {
                        card.classList.add('visible');
                    }
                });
            }
        
            window.addEventListener('scroll', checkVisibility);
            checkVisibility(); // Initial check in case the elements are already in view
        });




        document.addEventListener('DOMContentLoaded', function () {
            const overlay = document.querySelector('.overlay'); // Selecteer de overlay
        
            // Functie om een modal te openen
            function openModal(modalId) {
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.style.display = 'block'; // Toon de modal
                    overlay.style.display = 'block'; // Toon de overlay
                    document.body.style.overflow = 'hidden'; // Blokkeer scrollen van de achtergrond
                }
            }
        
            // Functie om een modal te sluiten
            function closeModal(modalId) {
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.style.display = 'none'; // Verberg de modal
                    overlay.style.display = 'none'; // Verberg de overlay
                    document.body.style.overflow = ''; // Herstel scrollen van de achtergrond
                }
            }
        
            // Voeg klikgebeurtenissen toe aan projectknoppen
            const buttons = document.querySelectorAll('.project-button');
            buttons.forEach(button => {
                button.addEventListener('click', function (e) {
                    e.preventDefault(); // Voorkom standaard linkgedrag
                    const modalId = this.getAttribute('data-modal'); // Haal de modal-ID op
                    openModal(modalId); // Open de juiste modal
                });
            });
        
            // Voeg klikgebeurtenissen toe aan sluitknoppen
            const closeButtons = document.querySelectorAll('.close');
            closeButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const modal = button.closest('.modal'); // Zoek de dichtstbijzijnde modal
                    if (modal) {
                        closeModal(modal.id); // Sluit de modal
                    }
                });
            });
        
            // Sluit de modal wanneer je buiten de modal klikt
            overlay.addEventListener('click', function () {
                const openModal = document.querySelector('.modal[style*="display: block"]');
                if (openModal) {
                    closeModal(openModal.id); // Sluit de modal
                }
            });
        });
        
        
        


        
        document.addEventListener('DOMContentLoaded', function () {
            const sliderTrack = document.querySelector('.slider-track');
        
            sliderTrack.addEventListener('mouseenter', function () {
                sliderTrack.style.animationPlayState = 'paused'; // Stop animatie bij hover
            });
        
            sliderTrack.addEventListener('mouseleave', function () {
                sliderTrack.style.animationPlayState = 'running'; // Start animatie weer
            });
        });
        


        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');
        
            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        });

        document.addEventListener("DOMContentLoaded", () => {
            const button = document.querySelector(".cta-button");
            let isDragging = false;
            let startX = 0;
            let currentX = 0;
        
            // Functie om te starten met slepen
            function startDrag(e) {
                isDragging = true;
                startX = e.touches ? e.touches[0].clientX : e.clientX;
                button.style.transition = "none";
            }
        
            // Functie om te bewegen
            function onDrag(e) {
                if (!isDragging) return;
                currentX = e.touches ? e.touches[0].clientX : e.clientX;
                let moveX = currentX - startX;
        
                if (moveX > 0) { // Alleen naar rechts laten slepen
                    button.style.transform = `translateX(${moveX}px)`;
                }
            }
        
            // Functie om het slepen te stoppen
            function stopDrag() {
                if (!isDragging) return;
                isDragging = false;
                button.style.transition = "transform 0.4s ease-in-out";
        
                // Check of de knop ver genoeg is gesleept
                if (currentX - startX > 150) {
                    window.location.href = "mailto:yentesparla@hotmail.com";
                    setTimeout(() => {
                        button.style.transform = "translateX(0)";
                    }, 500);
                } else {
                    button.style.transform = "translateX(0)";
                }
            }
        
            // Eventlisteners voor zowel muis als touch
            button.addEventListener("mousedown", startDrag);
            button.addEventListener("mousemove", onDrag);
            button.addEventListener("mouseup", stopDrag);
            button.addEventListener("mouseleave", stopDrag);
        
            button.addEventListener("touchstart", startDrag);
            button.addEventListener("touchmove", onDrag);
            button.addEventListener("touchend", stopDrag);
        });

        document.addEventListener('DOMContentLoaded', function () {
            const buttons = document.querySelectorAll('.project-button');
            buttons.forEach(button => {
                button.addEventListener('click', function (e) {
                    e.preventDefault(); // Voorkom standaard linkgedrag
                    const modalId = this.getAttribute('data-modal');
                    const modal = document.getElementById(modalId);
                    if (modal) {
                        modal.style.display = 'block'; // Toon de modal
                    }
                });
            });
        
            // Sluit de modals wanneer je buiten de modal klikt
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                modal.addEventListener('click', function (e) {
                    if (e.target === modal) {
                        modal.style.display = 'none'; // Verberg de modal
                    }
                });
            });
        });

        

        document.addEventListener("DOMContentLoaded", () => {
            const elements = document.querySelectorAll(".skills .rectangle, .skills .div, .skills .rectangle-2, .skills .rectangle-3, .skills .rectangle-4, .skills .rectangle-5, .skills .rectangle-6, .skills .rectangle-7, .skills .rectangle-8, .skills .rectangle-9, .skills .text-wrapper, .skills .text-wrapper-2, .skills .text-wrapper-3, .skills .text-wrapper-4, .skills .text-wrapper-5, .skills .text-wrapper-6, .skills .text-wrapper-7, .skills .text-wrapper-8, .skills .text-wrapper-9, .skills .text-wrapper-10");
        
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate"); // Voeg de animatieklasse toe wanneer zichtbaar
                    }
                });
            }, { threshold: 0.5 });
        
            elements.forEach(element => observer.observe(element)); // Observeer elk element
        });
        