import Swiper from "swiper";
import { Navigation, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/sass/style.scss";


try {
    const swiper = new Swiper('.works__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.icon-right',
        prevEl: '.icon-left'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {

        1200: {
            slidesPerView: 3,
            spaceBetween: 5
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 35
        }
    }
    });
}
catch (e) {

}