document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.inputBox input[type="text"], .inputBox input[type="email"]').forEach(input => {
        let label = input.nextElementSibling;
        label.innerHTML = label.innerText.split('').map((letter, i) =>
            `<span style="transition-delay:${i * 50}ms">${letter}</span>`
        ).join('');
    });
});