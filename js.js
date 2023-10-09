var readMoreButtons = document.querySelectorAll('.read-more-button');
var additionalContent = document.querySelectorAll('.additional-content');

readMoreButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        if (additionalContent[index].style.display === 'none' || additionalContent[index].style.display === '') {
            additionalContent[index].style.display = 'block';
            button.textContent = 'Kevesebb';
        } else {
            additionalContent[index].style.display = 'none';
            button.textContent = 'Több';
        }
    });
});
