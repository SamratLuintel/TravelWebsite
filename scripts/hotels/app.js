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

// Forcing grid on 1000px. Since I am not using Sass

const activities = document.querySelectorAll('.activities');

console.log(activities);

function onWindowResize(width){
    activities.forEach(activity =>{
        if(width < 1220 && activity.classList.contains('col-md-6')){
            activity.classList.remove('col-md-6');
            activity.classList.add('col-md-12');
    
        }
        if(width>1220 && activity.classList.contains('col-md-12')){
            activity.classList.remove('col-md-12');
            activity.classList.add('col-md-6');
        }
    })
    
}

window.addEventListener('resize',(event)=>{
    const width = event.target.outerWidth;
    onWindowResize(width);
})

onWindowResize(window.outerWidth)
