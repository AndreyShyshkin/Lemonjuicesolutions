/*

prev = document.querySelector('.prev');
next = document.querySelector('.next');
sliderBtn1 = document.querySelector('.sliderBtn1');
sliderBtn2 = document.querySelector('.sliderBtn2');
sliderBtn3 = document.querySelector('.sliderBtn3');
SliderBlock = document.querySelector('.SliderBlock');
SliderBlockInfo = document.querySelector('.SliderBlockInfo');

slideNum = 1;


let firstBlock = `<div class="SliderBlock firstSliderImg">`
    + `<img src="./img/Ellipse 1.png">`
    + `<h3>“It’s is prime  property located right on the sound!”</h3>`
    + `<p>“We love staying at Marina Bay Resort! It is prime property located on the sound! They have a wonderful outdoor heated pool overlooking the sound and a great very large hot tub in their courtyard. They have a game room. A nice place to stay and not over-prices!”</p>`
    + `<p class="nameSliderBlock">Stephanie Engle</p>`
    + `</div>`

    + `<div class="SliderBlock secondSliderImg">`
    + `<img src="./img/Ellipse 1-1.png">`
    + `<h3>“It’s is prime  property located right on the sound!”</h3>`
    + `<p>“We love staying at Marina Bay Resort! It is prime property located on the sound! They have a wonderful outdoor heated pool overlooking the sound and a great very large hot tub in their courtyard. They have a game room. A nice place to stay and not over-prices!”</p>`
    + `<p class="nameSliderBlock">Stephanie  1</p>`
    + `</div>`

let secondBlock = `<div class="SliderBlock firstSliderImg">`
    + `<img src="./img/Ellipse 2.png">`
    + `<h3>“It’s is prime  property located right on the sound!”</h3>`
    + `<p>“We love staying at Marina Bay Resort! It is prime property located on the sound! They have a wonderful outdoor heated pool overlooking the sound and a great very large hot tub in their courtyard. They have a game room. A nice place to stay and not over-prices!”</p>`
    + `<p class="nameSliderBlock">Stephanie 1</p>`
    + `</div>`

    + `<div class="SliderBlock secondSliderImg">`
    + `<img src="./img/Ellipse 2-1.jpg">`
    + `<h3>“It’s is prime  property located right on the sound!”</h3>`
    + `<p>“We love staying at Marina Bay Resort! It is prime property located on the sound! They have a wonderful outdoor heated pool overlooking the sound and a great very large hot tub in their courtyard. They have a game room. A nice place to stay and not over-prices!”</p>`
    + `<p class="nameSliderBlock">Stephanie 2</p>`
    + `</div>`

let thirdBlock = `<div class="SliderBlock firstSliderImg">`
    + `<img src="./img/Ellipse 3.png">`
    + `<h3>“It’s is prime  property located right on the sound!”</h3>`
    + `<p>“We love staying at Marina Bay Resort! It is prime property located on the sound! They have a wonderful outdoor heated pool overlooking the sound and a great very large hot tub in their courtyard. They have a game room. A nice place to stay and not over-prices!”</p>`
    + `<p class="nameSliderBlock">Stephanie 3</p>`
    + `</div>`

    + `<div class="SliderBlock secondSliderImg">`
    + `<img src="./img/Ellipse 3-1.jpg">`
    + `<h3>“It’s is prime  property located right on the sound!”</h3>`
    + `<p>“We love staying at Marina Bay Resort! It is prime property located on the sound! They have a wonderful outdoor heated pool overlooking the sound and a great very large hot tub in their courtyard. They have a game room. A nice place to stay and not over-prices!”</p>`
    + `<p class="nameSliderBlock">Stephanie 3</p>`
    + `</div>`

next.onclick = function() {
    let currentSlide = document.querySelector('.isActive');
    let nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
        currentSlide.classList.remove('isActive');
        nextSlide.classList.add('isActive');
        slideNum++;
    }

    document.querySelector('.firstSliderImg').remove();
    document.querySelector('.secondSliderImg').remove();

    if(slideNum == 1){
        SliderBlockInfo.innerHTML = firstBlock;
    }else if(slideNum == 2){
        SliderBlockInfo.innerHTML = secondBlock;
    }else if(slideNum == 3){
        SliderBlockInfo.innerHTML = thirdBlock;
    }

}

prev.onclick = function() {
    let currentSlide = document.querySelector('.isActive');
    let prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) {
        currentSlide.classList.remove('isActive');
        prevSlide.classList.add('isActive');
        slideNum--;
    }

    document.querySelector('.firstSliderImg').remove();
    document.querySelector('.secondSliderImg').remove();

    if(slideNum == 1){
        SliderBlockInfo.innerHTML = firstBlock;
    }else if(slideNum == 2){
        SliderBlockInfo.innerHTML = secondBlock;
    }else if(slideNum == 3){
        SliderBlockInfo.innerHTML = thirdBlock;
    }
}

sliderBtn1.onclick = function() {
    sliderBtn2.classList.remove("isActive");
    sliderBtn3.classList.remove("isActive");
    sliderBtn1.classList.add("isActive");
}

sliderBtn2.onclick = function() {
    sliderBtn1.classList.remove("isActive");
    sliderBtn3.classList.remove("isActive");
    sliderBtn2.classList.add("isActive");
}

sliderBtn3.onclick = function() {
    sliderBtn1.classList.remove("isActive");
    sliderBtn2.classList.remove("isActive");
    sliderBtn3.classList.add("isActive");
}

*/



let slideNum = 1;

let firstBlock = `<div class="SliderBlock firstSliderImg">`
    + `<img src="./img/avatars/avatar 1.png">`
    + `<h3>“It’s is prime  property located right on the sound!”</h3>`
    + `<p>“We love staying at Marina Bay Resort! It is prime property located on the sound! They have a wonderful outdoor heated pool overlooking the sound and a great very large hot tub in their courtyard. They have a game room. A nice place to stay and not over-prices!”</p>`
    + `<p class="nameSliderBlock">Stephanie Engle</p>`
    + `</div>`

    + `<div class="SliderBlock secondSliderImg">`
    + `<img src="./img/avatars/avatar 1-1.png">`
    + `<h3>“It’s is prime  property located right on the sound!”</h3>`
    + `<p>“We love staying at Marina Bay Resort! It is prime property located on the sound! They have a wonderful outdoor heated pool overlooking the sound and a great very large hot tub in their courtyard. They have a game room. A nice place to stay and not over-prices!”</p>`
    + `<p class="nameSliderBlock">Stephanie  1</p>`
    + `</div>`;

let secondBlock = `<div class="SliderBlock firstSliderImg">`
    + `<img src="./img/avatars/avatar 2.png">`
    + `<h3>“It’s is prime  property located right on the sound!”</h3>`
    + `<p>“We love staying at Marina Bay Resort! It is prime property located on the sound! They have a wonderful outdoor heated pool overlooking the sound and a great very large hot tub in their courtyard. They have a game room. A nice place to stay and not over-prices!”</p>`
    + `<p class="nameSliderBlock">Stephanie 1</p>`
    + `</div>`

    + `<div class="SliderBlock secondSliderImg">`
    + `<img src="./img/avatars/avatar 2-1.jpg">`
    + `<h3>“It’s is prime  property located right on the sound!”</h3>`
    + `<p>“We love staying at Marina Bay Resort! It is prime property located on the sound! They have a wonderful outdoor heated pool overlooking the sound and a great very large hot tub in their courtyard. They have a game room. A nice place to stay and not over-prices!”</p>`
    + `<p class="nameSliderBlock">Stephanie 2</p>`
    + `</div>`;

let thirdBlock = `<div class="SliderBlock firstSliderImg">`
    + `<img src="./img/avatars/avatar 3.png">`
    + `<h3>“It’s is prime  property located right on the sound!”</h3>`
    + `<p>“We love staying at Marina Bay Resort! It is prime property located on the sound! They have a wonderful outdoor heated pool overlooking the sound and a great very large hot tub in their courtyard. They have a game room. A nice place to stay and not over-prices!”</p>`
    + `<p class="nameSliderBlock">Stephanie 3</p>`
    + `</div>`

    + `<div class="SliderBlock secondSliderImg">`
    + `<img src="./img/avatars/avatar 3-1.jpg">`
    + `<h3>“It’s is prime  property located right on the sound!”</h3>`
    + `<p>“We love staying at Marina Bay Resort! It is prime property located on the sound! They have a wonderful outdoor heated pool overlooking the sound and a great very large hot tub in their courtyard. They have a game room. A nice place to stay and not over-prices!”</p>`
    + `<p class="nameSliderBlock">Stephanie 3</p>`
    + `</div>`;

$('.next').on('click', function() {
    let currentSlide = $('.isActive');
    let nextSlide = currentSlide.next();
    if (nextSlide.length) {
        currentSlide.removeClass('isActive');
        nextSlide.addClass('isActive');
        slideNum++;
    }

    $('.firstSliderImg').remove();
    $('.secondSliderImg').remove();

    if (slideNum == 1) {
        $('.SliderBlockInfo').html(firstBlock);
    } else if (slideNum == 2) {
        $('.SliderBlockInfo').html(secondBlock);
    } else if (slideNum == 3) {
        $('.SliderBlockInfo').html(thirdBlock);
    }
});

$('.prev').on('click', function() {
    let currentSlide = $('.isActive');
    let prevSlide = currentSlide.prev();
    if (prevSlide.length) {
        currentSlide.removeClass('isActive');
        prevSlide.addClass('isActive');
        slideNum--;
    }

    $('.firstSliderImg').remove();
    $('.secondSliderImg').remove();

    if (slideNum == 1) {
        $('.SliderBlockInfo').html(firstBlock);
    } else if (slideNum == 2) {
        $('.SliderBlockInfo').html(secondBlock);
    } else if (slideNum == 3) {
        $('.SliderBlockInfo').html(thirdBlock);
    }
});

$('.sliderBtn1').on('click', function() {
    $('.sliderBtn2').removeClass('isActive');
    $('.sliderBtn3').removeClass('isActive');
    $('.sliderBtn1').addClass('isActive');

    slideNum = 1;

    $('.firstSliderImg').remove();
    $('.secondSliderImg').remove();

    $('.SliderBlockInfo').html(firstBlock);
});

$('.sliderBtn2').on('click', function() {
    $('.sliderBtn1').removeClass('isActive');
    $('.sliderBtn3').removeClass('isActive');
    $('.sliderBtn2').addClass('isActive');

    slideNum = 2;

    $('.firstSliderImg').remove();
    $('.secondSliderImg').remove();

    $('.SliderBlockInfo').html(secondBlock);
});

$('.sliderBtn3').on('click', function() {
    $('.sliderBtn1').removeClass('isActive');
    $('.sliderBtn2').removeClass('isActive');
    $('.sliderBtn3').addClass('isActive');

    slideNum = 3;

    $('.firstSliderImg').remove();
    $('.secondSliderImg').remove();

    $('.SliderBlockInfo').html(thirdBlock);
});