window.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');

    document.querySelectorAll('.cute-image').forEach(function(img) {
        img.addEventListener('click', function() {
            document.body.classList.remove('loaded');
            setTimeout(function() {
                document.body.classList.add('loaded');
            }, 1500); // 1.5s = same as CSS transition
        });
    });
});