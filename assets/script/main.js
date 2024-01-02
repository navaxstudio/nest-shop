function box_menu_init(id) {
  const menu = document.getElementById(id);
  const menu_box = document.getElementById(id + '_box');
  const html = document.querySelector('html');
  let isOpen = false;

  menu.onclick = (e) => {
    e.stopPropagation();
    isOpen ? close() : open();
  };
  menu_box.onclick = (e) => {
    e.stopPropagation();
  };
  html.onclick = () => {
    close();
  };

  function close() {
    menu_box.classList.add('hidden');
    isOpen = false;
  }
  function open() {
    menu_box.classList.remove('hidden');
    isOpen = true;
  }
}

box_menu_init('all_categories');

new Swiper('#cat-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});

new Swiper('.products_slider', {
  slidesPerView: 2,
  spaceBetween: 16,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 18
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 22
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 24
    }
  }
});
new Swiper('.our-offer-slider', {
  slidesPerView: 2,
  spaceBetween: 16,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 18
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 22
    }
  }
});

new Swiper('.deals-slider', {
  slidesPerView: 1,
  spaceBetween: 16,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 22
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 22
    }
  }
});

new Swiper('.top-sliders', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 18
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 22
    }
  }
});

document.querySelectorAll('.add-product').forEach((element) => {
  element.querySelector('button').addEventListener('click', function () {
    element.querySelector('.input-product__container').classList.remove('hidden');
    element.querySelector('.input-product__container').classList.add('flex');
    element.querySelector('button').classList.add('hidden');
    element.querySelector('input').value = 1;
  });
  element.querySelector('input').addEventListener('input', function (e) {
    if (Number(e.target.value) === 0) {
      element.querySelector('.input-product__container').classList.add('hidden');
      element.querySelector('.input-product__container').classList.remove('flex');
      element.querySelector('button').classList.remove('hidden');
    }
  });
  element.querySelector('.up').addEventListener('click', function (e) {
    element.querySelector('input').value = Number(element.querySelector('input').value) + 1;
  });
  element.querySelector('.down').addEventListener('click', function (e) {
    element.querySelector('input').value = Number(element.querySelector('input').value) - 1;
    if (Number(element.querySelector('input').value) === 0) {
      element.querySelector('.input-product__container').classList.add('hidden');
      element.querySelector('.input-product__container').classList.remove('flex');
      element.querySelector('button').classList.remove('hidden');
    }
  });
});

document.querySelectorAll('.toggle').forEach((element) => {
  element.onclick = () => {
    if (element.nextElementSibling.tagName === 'UL') {
      if (element.nextElementSibling.classList.contains('hidden')) {
        element.nextElementSibling.classList.remove('hidden');
        element.querySelector('i').classList.add('rotate-180');
        console.log(element.querySelector('i'));
      } else {
        element.nextElementSibling.classList.add('hidden');
        element.querySelector('i').classList.remove('rotate-180');
      }
    }
  };
});
