$(function(){

    var carusel = $('#slider-objects-list');
    var arrowPrevObj = $('#arrow-prev-obj');
    var arrowNextObj = $('#arrow-next-obj');

    var owlCarusel = carusel.owlCarousel({
        autoPlay: 10000,
        items : 4,
        dragBeforeAnimFinish: false,
        mouseDrag: false,
        touchDrag: false,
        pagination: false,
        navigation: false
    }).data('owlCarousel');

    arrowPrevObj.on('click', function(e){
        e.preventDefault();
        owlCarusel.prev();
    });

    arrowNextObj.on('click', function(e){
        e.preventDefault();
        owlCarusel.next();
    });

    var sliderHeader = $('#slider-header');
    var arrowPrevHeader = $('#arrow-prev-header');
    var arrowNextHeader = $('#arrow-next-header');

    var owlHeader = sliderHeader.owlCarousel({
        autoPlay: 10000,
        dragBeforeAnimFinish: false,
        mouseDrag: false,
        touchDrag: false,
        pagination: false,
        navigation: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    }).data('owlCarousel');

    arrowPrevHeader.on('click', function(e){
        e.preventDefault();
        owlHeader.prev();
    });

    arrowNextHeader.on('click', function(e){
        e.preventDefault();
        owlHeader.next();
    });

    var calculator = $('#calculator_new');
    var calculatorBtn = $('#calc_open_and_close');

    calculatorBtn.on('click', function(e){
        e.preventDefault();
        calculator.toggle();
    });

});
