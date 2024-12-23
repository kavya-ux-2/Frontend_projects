const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active');  // Use toggle to add/remove the class
    });
}