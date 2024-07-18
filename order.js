document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.inputBox input[type="text"], .inputBox input[type="email"]').forEach(input => {
        let label = input.nextElementSibling;
        label.innerHTML = label.innerText.split('').map((letter, i) =>
            `<span style="transition-delay:${i * 50}ms">${letter}</span>`
        ).join('');
    });
});

function toggleSelect(checkbox, selectId) {
    const select = document.getElementById(selectId);
    if (checkbox.checked) {
        select.disabled = false;
        select.value = 'bronze'; 
    } else {
        select.disabled = true;
        select.value = 'none'; 
    }
}

function handleSubmit(event) {
    event.preventDefault(); 
    const modal = document.getElementById('myModal');
    const form = document.getElementById('order-form');
    modal.style.display = 'block'; 
    document.querySelector('.modal .close').addEventListener('click', () => {
        modal.style.display = 'none'; 
        form.submit(); 
    });
    return false; 
}

document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('myModal');

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.getElementById('order-form').submit(); 
        }
    });
});

function toggleNav() {
    var navDiv = document.getElementById("nav-div");
    if (navDiv.style.display === "flex") {
        navDiv.style.display = "none";
    } else {
        navDiv.style.display = "flex";
    }
}