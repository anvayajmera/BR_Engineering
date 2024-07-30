document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for fixed header
                behavior: 'smooth'
            });
        });
    });

    var galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(function(img) {
        img.addEventListener('click', function() {
            var src = this.getAttribute('src');
            var modal = document.createElement('div');
            modal.classList.add('modal');
            var modalContent = document.createElement('div');
            modalContent.classList.add('modal-content');
            var modalImg = document.createElement('img');
            modalImg.setAttribute('src', src);
            var closeButton = document.createElement('span');
            closeButton.classList.add('close');
            closeButton.innerHTML = '&times;';
            closeButton.addEventListener('click', function() {
                modal.remove();
            });
            modalContent.appendChild(closeButton);
            modalContent.appendChild(modalImg);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
        });
    });
});
