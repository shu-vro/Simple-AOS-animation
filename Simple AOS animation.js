// Name of the targets.
var AnimationArray = [
    'box1',
    'box2',
    'box3',
    'box4',
    'box5',
    'box6',
];

for (let i = 0; i < AnimationArray.length; i++) {
    window.addEventListener('scroll', function () {
        // Select elements
        var target = document.getElementById('' + AnimationArray[i] + '');

        // Get position
        var position = target.getBoundingClientRect().top - (2 * window.innerHeight / 3);

        if (position <= 0) {
            target.classList.add('active');
        } else {
            target.classList.remove('active');
        }
    })
}
