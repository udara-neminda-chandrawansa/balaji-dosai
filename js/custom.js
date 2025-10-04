// Run on load and resize
function setNavHeight() {
    const nav = document.getElementById('nav');
    const navHeight = nav.offsetHeight;
    document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
}

window.addEventListener('load', setNavHeight);
window.addEventListener('resize', setNavHeight);