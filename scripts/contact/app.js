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

const myMap = ()=> {
    let mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
    }
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
myMap();
