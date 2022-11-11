var progressArray = [];
var options = {
    color: "white",
    strokeWidth: 5,
    trailWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        value: '',
    },
    from: { color: '#ff8000', width: 4 },
    to: { color: '#ff8000', width: 4 },
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
}

for (let index = 0; index < 10; index++) {
    var bar = new ProgressBar.Circle('#bar' + index, options);
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '1.2rem';
    progressArray.push(bar);
}

progressArray[0].animate(0.75);
progressArray[1].animate(0.70);
progressArray[2].animate(0.30);
progressArray[3].animate(0.25);
progressArray[4].animate(0.18);
progressArray[5].animate(0.80);
progressArray[6].animate(0.35);
progressArray[7].animate(0.44);
progressArray[8].animate(0.25);
progressArray[9].animate(0.20);

$(document).ready(function() {
    $(window).scroll(function() {
        $('.hide').each(function(i) {
            var bottomObj = $(this).offset().top + $(this).outerHeight();
            var bottomWindow = $(window).scrollTop() + $(window).height();
            if (bottomWindow > bottomObj) {
                $(this).animate({ 'opacity': '1' }, 500);
            }
        });
    });
});