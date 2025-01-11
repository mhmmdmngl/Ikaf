document.addEventListener('DOMContentLoaded', function () {
    const quickButtonsSection = document.querySelector('.quick-buttons-section');
    const header = document.querySelector('header');
    let headerHeight = header.offsetHeight;
    let isSticky = false;

    const toggleSticky = () => {
        const shouldBeSticky = window.pageYOffset > quickButtonsSection.offsetTop;

        if (shouldBeSticky && !isSticky) {
            quickButtonsSection.classList.add('sticky');
            document.body.style.paddingTop = quickButtonsSection.offsetHeight + 'px';
            isSticky = true;
        } else if (!shouldBeSticky && isSticky) {
            quickButtonsSection.classList.remove('sticky');
            document.body.style.paddingTop = '0';
            isSticky = false;
        }
    };

    window.addEventListener('scroll', toggleSticky);
    window.addEventListener('resize', () => {
        headerHeight = header.offsetHeight;
    });
});