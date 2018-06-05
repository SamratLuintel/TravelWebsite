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

/*Side-Navigation Mobile Area */
const scrollDowns= document.querySelectorAll("[data-scrolldown]");

scrollDowns.forEach((scrollDown,index)=>{
    const scrollDownUl=document.querySelector(`[data-scrolldownUl="${index}"]`);
    scrollDown.addEventListener('click',()=>{
        console.log(scrollDownUl)
        scrollDownUl.classList.toggle('hide');
    })
})


/*Wishlist display on heart hover */
const hearts = document.querySelectorAll('.fa-heart');

hearts.forEach((heart,index) =>{
  const wishlistWrapper=document.querySelector(`.wishlist-wrapper[data-key="${index+1}"]`)
  heart.addEventListener('mouseover',()=>{
      console.log("called");
      wishlistWrapper.classList.add('wishlist-expand')
  })
   heart.addEventListener('mouseout',()=>{
      wishlistWrapper.classList.remove('wishlist-expand')
  })
})

function myMap() {
    const mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

myMap();


// Forcing grid on 1000px. Since I am not using Sass

const toursPackages = document.querySelector('.tours-packages');

console.log(toursPackages);

function onWindowResize(width){
    if(width < 1040 && toursPackages.classList.contains('col-md-6')){
        toursPackages.classList.remove('col-md-6');
        toursPackages.classList.add('col-md-12');

    }
    if(width>1000 && toursPackages.classList.contains('col-md-12')){
        toursPackages.classList.remove('col-md-12');
        toursPackages.classList.add('col-md-6');
    }
}

window.addEventListener('resize',(event)=>{
    const width = event.target.outerWidth;
    onWindowResize(width);
})

onWindowResize(window.outerWidth)