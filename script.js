const menuBtn = document.getElementById('menu-btn');
const drawer = document.getElementById('drawer');
const mainContent = document.getElementById('main-content');

menuBtn.onclick = (e) => {
    e.stopPropagation();
    drawer.classList.toggle('open');
};

document.onclick = (e) => {
    if (!drawer.contains(e.target) && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
    }
};
