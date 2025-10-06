// Run on load and resize
function setNavHeight() {
    const nav = document.getElementById('nav');
    const navHeight = nav.offsetHeight;
    document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
}

window.addEventListener('load', setNavHeight);
window.addEventListener('resize', setNavHeight);

// ====================================
// Menu Tab Functionality
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuItems = document.querySelectorAll('.menu-item');

    // Show dosa items by default
    menuItems.forEach(item => {
        if (item.getAttribute('data-category') === 'dosa') {
            item.classList.add('active');
        }
    });

    // Tab click handler
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // Update active tab
            menuTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Filter menu items
            menuItems.forEach(item => {
                if (item.getAttribute('data-category') === category) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        });
    });

    // ====================================
    // FAQ Accordion Functionality
    // ====================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
});