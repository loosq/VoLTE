document.addEventListener("DOMContentLoaded", function () {
    // slider-section
    let startBtn = document.querySelector('.start-btn');
    const startSlide = document.querySelector('.slide-sound');
    let midBtn = document.querySelector('.mid-btn');
    const midSlide = document.querySelector('.slide-multy-tasks');
    let lastBtn = document.querySelector('.last-btn');
    const lastSlide = document.querySelector('.slide-more-time');
    let startBtnArrow = document.querySelector('.start-btn .slider-section__arrow');
    let midBtnArrow = document.querySelector('.mid-btn .slider-section__arrow');
    let lastBtnArrow = document.querySelector('.last-btn .slider-section__arrow');
    let slides = document.querySelectorAll('.slider-section__slide');
    let prevBtn = document.querySelector('.mobile-slider__prev');
    let nextBtn = document.querySelector('.mobile-slider__next');
    let tabs = document.querySelectorAll('.slider-section-tabs__item');
    startBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (!startBtn.classList.contains('slider-section__btn--active')) {
            midBtn.classList.remove('slider-section__btn--active');
            lastBtn.classList.remove('slider-section__btn--active');
            midSlide.classList.remove('slider-section__slide--active');
            lastSlide.classList.remove('slider-section__slide--active');
            midBtnArrow.style.transform = 'rotate(0deg)';
            lastBtnArrow.style.transform = 'rotate(0deg)';

            startSlide.classList.add('slider-section__slide--active');
            startBtn.classList.add('slider-section__btn--active');
        }
    });
    midBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (!midBtn.classList.contains('slider-section__btn--active')) {
            startBtn.classList.remove('slider-section__btn--active');
            lastBtn.classList.remove('slider-section__btn--active');
            startSlide.classList.remove('slider-section__slide--active');
            lastSlide.classList.remove('slider-section__slide--active');
            startBtnArrow.style.transform = 'rotate(180deg)';
            lastBtnArrow.style.transform = 'rotate(0deg)';

            midSlide.classList.add('slider-section__slide--active');
            midBtn.classList.add('slider-section__btn--active');
        }
    });
    lastBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (!lastBtn.classList.contains('slider-section__btn--active')) {
            startBtn.classList.remove('slider-section__btn--active');
            midBtn.classList.remove('slider-section__btn--active');
            startSlide.classList.remove('slider-section__slide--active');
            midSlide.classList.remove('slider-section__slide--active');
            startBtnArrow.style.transform = 'rotate(0deg)';
            startBtnArrow.style.transform = 'rotate(180deg)';
            midBtnArrow.style.transform = 'rotate(180deg)';

            lastSlide.classList.add('slider-section__slide--active');
            lastBtn.classList.add('slider-section__btn--active');
        }
    });
    prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        for (let i = slides.length - 1; i >= 0; i--) {
            if (slides[i].classList.contains('slider-section__slide--active')) {
                if (i === 0) {
                    slides[i].classList.remove('slider-section__slide--active');
                    tabs[i].classList.remove('slider-section-tabs__item--active');
                    slides[slides.length - 1].classList.add('slider-section__slide--active');
                    tabs[slides.length - 1].classList.add('slider-section-tabs__item--active');
                    break;
                }
                slides[i].classList.remove('slider-section__slide--active');
                tabs[i].classList.remove('slider-section-tabs__item--active');
                slides[i - 1].classList.add('slider-section__slide--active');
                tabs[i - 1].classList.add('slider-section-tabs__item--active');
                break;
            }
        }
    });
    nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('slider-section__slide--active')) {
                if (i === (slides.length - 1)) {
                    slides[i].classList.remove('slider-section__slide--active');
                    tabs[i].classList.remove('slider-section-tabs__item--active');
                    slides[0].classList.add('slider-section__slide--active');
                    tabs[0].classList.add('slider-section-tabs__item--active');
                    break;
                }
                slides[i].classList.remove('slider-section__slide--active');
                tabs[i].classList.remove('slider-section-tabs__item--active');
                slides[i + 1].classList.add('slider-section__slide--active');
                tabs[i + 1].classList.add('slider-section-tabs__item--active');
                break;
            }
        }
    });
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function (e) {
            e.preventDefault();
            for (let j = 0; j < slides.length; j++) {
                slides[j].classList.remove('slider-section__slide--active');
                tabs[j].classList.remove('slider-section-tabs__item--active');
            }
            tabs[i].classList.add('slider-section-tabs__item--active');
            slides[i].classList.add('slider-section__slide--active');
        });
    }

    // tarif-section
    let tarifTabs = document.querySelectorAll('.tarif-desc__link');

    for (let j = 0; j <= tarifTabs.length - 1; j++) {
        tarifTabs[j].addEventListener('click', function (e) {
            e.preventDefault();
            for (let i = 0; i < tarifTabs.length; i++) {
                if (tarifTabs[i].classList.contains('tarif-desc__link--active')) {
                    tarifTabs[i].classList.remove('tarif-desc__link--active');
                }
            }
            this.classList.add('tarif-desc__link--active');
        });
    }

    //faq-section
    let faqItems = document.querySelectorAll('.faq-list-item__link');

    for (let i = 0; i < faqItems.length; i++) {
        faqItems[i].addEventListener('click', function (e) {
            e.preventDefault();
            if (this.classList.contains('faq-list-item__link--active')) {
                this.classList.remove('faq-list-item__link--active');
            } else {
                this.classList.add('faq-list-item__link--active');
            }
        })
    }

    //footer-section
    let footerSup = document.querySelectorAll('.footer-sup__link');
    let footerAdd = document.querySelectorAll('.footer-add-info__link');

    for (let i = 0; i < footerSup.length; i++) {
        footerSup[i].addEventListener('click', function (e) {
            e.preventDefault();
            if (this.classList.contains('footer-sup__link--active')) {
                this.classList.remove('footer-sup__link--active');
            } else {
                this.classList.add('footer-sup__link--active');
            }
        })
    }

    for (let i = 0; i < footerAdd.length; i++) {
        footerAdd[i].addEventListener('click', function (e) {
            e.preventDefault();
            if (this.classList.contains('footer-add-info__link--active')) {
                this.classList.remove('footer-add-info__link--active');
            } else {
                this.classList.add('footer-add-info__link--active');
            }
        })
    }
});
