let els = document.querySelectorAll('.js-fadeIn');

els.forEach(function(fadeIn) {
  let windowHeight = window.innerHeight;

  window.addEventListener('scroll', function() {
    let offset = fadeIn.getBoundingClientRect().top;
    let scroll = window.scrollY;

    if(scroll > offset - windowHeight + 250){
       fadeIn.classList.add('is-scrollIn');
    }
  })
})

var target = document.querySelectorAll('.js-fadeIn');
target.forEach(function(target) {
    var offsetY = target.getBoundingClientRect().top;
    var viewportHeight = getViewportHeight();
    var style = target.currentStyle || document.defaultView.getComputedStyle(target, '');
    var height = parseInt(style.height);

    if (0 < offsetY && offsetY + height < viewportHeight) {
        target.classList.add('is-scrollIn');
    } else {
        // 見えてない
    }
});

function getViewportHeight()
{
    var height = window.innerHeight;
    if (!height) {
        var mode = document.compatMode;
        if (mode) {
            var domObject = mode == "CSS1Compat" ? document.documentElement : document.body;
            height = domObject.clientHeight;
        }
    }
    return height;
}