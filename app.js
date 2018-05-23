function OpenSlideMenu(){
    document.getElementById("side-menu").style.height="100vh";
    document.getElementById("side-menu").style.width="250px";
}

function CloseSlideMenu(){
    setTimeout(()=>document.getElementById("side-menu").style.height="0px",300)
    document.getElementById("side-menu").style.width="0px";
}


window.FontAwesomeConfig = {
    searchPseudoElements: true
}


// Slider Area slider
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 300
    }
});

var sliderMin = document.getElementById("slider-min");

var sliderMax = document.getElementById("slider-max");

slider.noUiSlider.on('update', function( values, handle ) {

	var value = values[handle];

	if ( handle ) {
		sliderMax.textContent = Math.round(value);
	} else {
		sliderMin.textContent = Math.round(value);
	}
});

sliderMin.addEventListener('change', function(){
	slider.noUiSlider.set([this.value, null]);
});

sliderMax.addEventListener('change', function(){
	slider.noUiSlider.set([null, this.value]);
});
// Slider area date picker
var checkin = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D/M/YYYY',
    onSelect: function() {
        console.log(this.getMoment().format('Do MMMM YYYY'));
    }
});

var checkout = new Pikaday({
    field: document.getElementById('datepicker2'),
    format: 'D/M/YYYY',
    onSelect: function() {
        console.log(this.getMoment().format('Do MMMM YYYY'));
    }
});


// Gallery Area slider
var slider= tns({
    "container": ".gallery-slider",
    "items": 4,
    "controlsContainer": "#customize-controls",
    "controls":true,
    "autoplay": true,
    "nav":false,
    "autoplayButtonOutput":false,
    "autoplayTimeout": 3000,
    "speed": 400
})

// Styles to All the select element
Select.init();