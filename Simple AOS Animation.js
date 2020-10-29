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
        var target = container.getBoundingClientRect().top - (window.innerHeight / 2);

        if (target <= 0) {
            container.classList.add('active');
        } else {
            container.classList.remove('active');
        }
    })
}