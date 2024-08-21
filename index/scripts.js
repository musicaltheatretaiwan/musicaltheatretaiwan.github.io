document.getElementById('zh-TW-btn').addEventListener('click', function() {
    setLanguage('zh-TW');
});

document.getElementById('en-btn').addEventListener('click', function() {
    setLanguage('en');
});

function setLanguage(language) {
    let elements = document.querySelectorAll('.lang');
    elements.forEach(function(element) {
        if (element.getAttribute('lang') === language) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}
