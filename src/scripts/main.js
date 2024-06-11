AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-invisible");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const images = button.querySelectorAll("img");

            images.forEach((img) => {
                img.classList.toggle(
                    "cast__content__actors__item__btn__img--is-active"
                );
            });
        });
    });

    window.addEventListener("scroll", function () {
        const scroll = window.scrollY;
        const header = document.querySelector("header");

        if (scroll < 650) {
            header.classList.add("header--on-scroll");
        } else {
            header.classList.remove("header--on-scroll");
        }
    });

    const hamburger = document.getElementById("hamburger");
    const headerOptions = document.querySelectorAll(
        ".header__container__list__item"
    );

    hamburger.addEventListener("click", function () {
        toggleHeader();
    });

    headerOptions.forEach((headerOption) => {
        headerOption.addEventListener("click", function () {
            toggleHeader();
        });
    });

    const homeIcon = document.querySelector("#go-to-home");

    homeIcon.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });

    

});

function toggleHeader() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("header__container__list--open");
}
