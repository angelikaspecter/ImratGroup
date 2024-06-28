document.addEventListener('DOMContentLoaded', function () {
    // Function to handle showing and hiding of nav dropdowns
    function handleNavDropdown(event) {
        const navLink = event.currentTarget;
        const dropdown = navLink.nextElementSibling;

        // Toggle the 'hide' class
        dropdown.classList.toggle('hide');

        // Hide all other dropdowns when one is clicked
        document.querySelectorAll('.header__nav-dropdown').forEach(function (otherDropdown) {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.add('hide');
            }
        });
    }

    // Function to handle showing and hiding of language dropdowns
    function handleLangDropdown(event) {
        const langButton = event.currentTarget;
        const dropdown = langButton.nextElementSibling;

        // Toggle the 'hide' class
        dropdown.classList.toggle('hide');

        // Hide all other dropdowns when one is clicked
        document.querySelectorAll('.header__btn-dropdown').forEach(function (otherDropdown) {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.add('hide');
            }
        });
    }

    // Function to handle showing and hiding of mobile navigation menu
    function handleMobileNav(event) {
        const mobileNavIconOpen = document.querySelector('.header__mobile-nav-icon--open');
        const mobileNavIconClose = document.querySelector('.header__mobile-nav-icon--close');
        const mobileNav = document.querySelector('.header__nav--mobile');

        // Toggle the 'hide' class for icons and mobile nav
        mobileNavIconOpen.classList.toggle('hide');
        mobileNavIconClose.classList.toggle('hide');
        mobileNav.classList.toggle('hide');
    }

    // Add event listeners to nav links
    document.querySelectorAll('.header__nav-link').forEach(function (navLink) {
        navLink.addEventListener('click', handleNavDropdown);
    });

    // Add event listeners to lang buttons
    document.querySelectorAll('.header__btn--main-lang').forEach(function (langButton) {
        langButton.addEventListener('click', handleLangDropdown);
    });

    // Add event listener to mobile nav button
    const mobileNavButton = document.querySelector('.header__mobile-nav');
    mobileNavButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the global click event listener
        handleMobileNav(event);
    });

    // Hide dropdowns and mobile nav when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.header__nav-link')) {
            document.querySelectorAll('.header__nav-dropdown').forEach(function (dropdown) {
                dropdown.classList.add('hide');
            });
        }

        if (!event.target.closest('.header__btn--main-lang')) {
            document.querySelectorAll('.header__btn-dropdown').forEach(function (dropdown) {
                dropdown.classList.add('hide');
            });
        }

        if (!event.target.closest('.header__mobile-nav') && !event.target.closest('.header__nav--mobile')) {
            const mobileNavIconOpen = document.querySelector('.header__mobile-nav-icon--open');
            const mobileNavIconClose = document.querySelector('.header__mobile-nav-icon--close');
            const mobileNav = document.querySelector('.header__nav--mobile');

            mobileNavIconOpen.classList.remove('hide');
            mobileNavIconClose.classList.add('hide');
            mobileNav.classList.add('hide');
        }
    });

    // Prevent event propagation when clicking on nav links or lang buttons
    document.querySelectorAll('.header__nav-link').forEach(function (navLink) {
        navLink.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });

    document.querySelectorAll('.header__btn--main-lang').forEach(function (langButton) {
        langButton.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });

    const nextActive = document.getElementById('NextActive');
    const nextDisabled = document.getElementById('NextDisabled');
    const prevActive = document.getElementById('PrevActive');
    const prevDisabled = document.getElementById('PrevDisabled');
    const progressBar = document.getElementById('progress-bar');
    const summaryWrap = document.getElementById('Summary');
    const infoWrap = document.getElementById('Info');

    nextActive.addEventListener('click', function () {
        nextActive.classList.add('hide');
        prevDisabled.classList.add('hide');
        nextDisabled.classList.remove('hide');
        prevActive.classList.remove('hide');
        summaryWrap.classList.add('hide');
        infoWrap.classList.remove('hide');
        progressBar.style.width = '100%';
    });

    prevActive.addEventListener('click', function () {
        nextActive.classList.remove('hide');
        prevDisabled.classList.remove('hide');
        nextDisabled.classList.add('hide');
        prevActive.classList.add('hide');
        summaryWrap.classList.remove('hide');
        infoWrap.classList.add('hide');
        progressBar.style.width = '50%';
    });

    const progressBars = [
        { id: 'progressBar1', targetHeight: 100 },
        { id: 'progressBar2', targetHeight: 60 },
        { id: 'progressBar3', targetHeight: 70 },
        { id: 'progressBar4', targetHeight: 60 },
        { id: 'progressBar5', targetHeight: 55 },
        { id: 'progressBar6', targetHeight: 50 }
    ];

    progressBars.forEach(bar => {
        const progressBar = document.getElementById(bar.id);
        let height = 0;

        const interval = setInterval(() => {
            if (height >= bar.targetHeight) {
                clearInterval(interval);
            } else {
                height++;
                progressBar.style.height = height + '%';
            }
        }, 50);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__item-question');
        const answer = item.querySelector('.faq__item-answer');
        const btnOpen = item.querySelector('.faq__btn--open');
        const btnClose = item.querySelector('.faq__btn--close');

        question.addEventListener('click', () => {
            answer.classList.toggle('hide');
            btnOpen.classList.toggle('hide');
            btnClose.classList.toggle('hide');
        });
    });
});
