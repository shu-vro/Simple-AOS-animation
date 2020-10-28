var array = [
    'box1',
    'box2',
    'box3',
    'box4',
    'box5',
    'box6',
];

for (let i = 0; i < array.length; i++) {
    window.addEventListener('scroll', function () {
        // Select elements
        var container = document.getElementById('' + array[i] + '');

        // Get position
        var target = container.getBoundingClientRect().top - (2 * window.innerHeight / 3);

        if (target <= 0) {
            container.classList.add('active');
        } else {
            container.classList.remove('active');
        }
    })
}









// const sliderImage = document.querySelectorAll('.box');

// function checkSlider(e) {
//     sliderImage.forEach(sliderImage => {
//         // half way to the image
//         const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//         // bottom of the image
//         const imageBottom = sliderImage.offsetTop + sliderImage.height;
//         const isHalfShown = slideInAt > sliderImage.offsetTop;
//         const isNotScrolledPast = window.scrollY < imageBottom;
//         if (isHalfShown && isNotScrolledPast) {
//             sliderImage.classlist.add('active');
//         } else {
//             sliderImage.classlist.remove('active');
//         }
//     });
// }
// window.addEventListener('scroll', checkSlider);