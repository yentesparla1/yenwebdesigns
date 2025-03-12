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
            function openModal(modalId) {
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.style.display = "block";
                    document.body.classList.add('modal-open'); // Achtergrond scroll blokkeren
                } else {
                    console.error(`Modal met ID '${modalId}' niet gevonden.`);
                }
            }
        
            function closeModal(modalId) {
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.style.display = "none";
                    document.body.classList.remove('modal-open'); // Achtergrond scroll herstellen
                } else {
                    console.error(`Modal met ID '${modalId}' niet gevonden.`);
                }
            }
        
            // Alleen cirkelHuisstijl-afbeeldingen openen de modal
            document.querySelectorAll('.clickable-image').forEach(image => {
                image.addEventListener('click', function () {
                    const modalId = this.getAttribute('data-modal'); // Haal modal ID op
                    if (modalId) {
                        openModal(modalId);
                    } else {
                        console.error("Geen data-modal attribuut gevonden op afbeelding.");
                    }
                });
            });
        
            // Laat sluitknoppen de juiste modal sluiten
            document.querySelectorAll('.close').forEach(button => {
                button.addEventListener('click', function () {
                    const modal = button.closest('.modal'); // Zoek de juiste modal
                    if (modal) {
                        closeModal(modal.id);
                    }
                });
            });
        
            // Klik buiten de modal om te sluiten
            window.addEventListener('click', function (event) {
                if (event.target.classList.contains('modal')) {
                    closeModal(event.target.id);
                }
            });
        
            // Voorkom dat de modal doorscrolt naar de achtergrond
            document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('wheel', function (event) {
                    const modalContent = modal.querySelector('.padding'); // Zorg dat we het binnenste gedeelte targetten
                    if (modalContent.scrollHeight > modalContent.clientHeight) {
                        const isAtTop = modalContent.scrollTop === 0;
                        const isAtBottom = modalContent.scrollTop + modalContent.clientHeight >= modalContent.scrollHeight;
        
                        if ((isAtTop && event.deltaY < 0) || (isAtBottom && event.deltaY > 0)) {
                            event.preventDefault(); // Voorkomt dat de achtergrond scrolt als je bovenaan of onderaan bent
                        }
                    }
                }, { passive: false });
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
        