function filter(category) {
    document.querySelectorAll('#kotakbody31').forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function gantiMode() {
    let ambil = document.querySelector('.btngantiMode');
    var github = document.querySelector('.iconGithub');

    if (document.body.classList.contains('lightMode')) {
        document.body.classList.remove('lightMode');
        github.src = 'github-white-icon.webp';
        ambil.textContent = '🌙 Dark';
    } else {
        document.body.classList.add('lightMode');
        github.src = 'github-black.png';
        ambil.textContent = '☀️ Light';
    }

    // tes
}