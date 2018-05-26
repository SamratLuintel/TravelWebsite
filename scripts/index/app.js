function OpenSlideMenu(){
    document.getElementById("side-menu").style.height="100vh";
    document.getElementById("side-menu").style.width="200px";
    document.getElementById("side-menu").style.padding="10px";
}

function CloseSlideMenu(){
    setTimeout(()=>{
        document.getElementById("side-menu").style.height="0px";
        document.getElementById("side-menu").style.padding="0px";
    },300)
    document.getElementById("side-menu").style.width="0px";
}

window.FontAwesomeConfig = {
    searchPseudoElements: true
}

/*Side-Navigation Mobile Area */
const scrollDowns= document.querySelectorAll("[data-scrolldown]");

scrollDowns.forEach((scrollDown,index)=>{
    const scrollDownUl=document.querySelector(`[data-scrolldownUl="${index}"]`);
    scrollDown.addEventListener('click',()=>{
        console.log(scrollDownUl)
        scrollDownUl.classList.toggle('hide');
    })
})


// Slider Area slider
const slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 300
    }
});

let sliderMin = document.getElementById("slider-min");

let sliderMax = document.getElementById("slider-max");

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
let checkin = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D/M/YYYY',
    onSelect: function() {
        console.log(this.getMoment().format('Do MMMM YYYY'));
    }
});

let checkout = new Pikaday({
    field: document.getElementById('datepicker2'),
    format: 'D/M/YYYY',
    onSelect: function() {
        console.log(this.getMoment().format('Do MMMM YYYY'));
    }
});


// Gallery Area slider
const gallerySlider= tns({
    "container": ".gallery-slider",
    "items": 4,
    "controlsContainer": "#customize-controls",
    "controls":true,
    "responsive":{
        700:{
            items:4
        },
        400:{
            items:2
        },
        200:{
            items:1
        }
  
    },
    "autoplay": true,
    "nav":false,
    "autoplayButtonOutput":false,
    "autoplayTimeout": 3000,
    "speed": 400
})

// Styles to All the select element
Select.init();