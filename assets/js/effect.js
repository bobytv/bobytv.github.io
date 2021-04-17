
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var myVar = "";

//var colors = ['#00bff2','#ee4d83','#98c93c'];
var colors = [0.1,1];
var count = 1;
document.getElementsByClassName('buttont')[0].style.opacity = 0.1;
console.log(0.1);
async function myTimer() {
    if (count >= 2){
        count = 0;
    }
    //if ((colors.length-1) == count){
        
        //console.log(colors[count]);
    //}
    count = count+1;
    //console.log(colors[count-1]);
    //console.log(count);
    document.getElementsByClassName('buttont')[0].style.opacity = colors[count-1];
    //await sleep(4000);
    //console.log('teste');
    //clearInterval(myVar);
}

function carousel(){
    himg = document.querySelector('.imgs-carousel img').offsetHeight;
    document.getElementById('carousel').style.height = himg+'px';
    document.getElementById('shadow-carousel-right').style.height = himg+'px';
}

window.addEventListener("load", function(event) {
    carousel();
    myVar = setInterval(myTimer, 2000);
});

window.addEventListener("resize", function(event) {
    //console.log('resize');
    carousel();
});

document.addEventListener('swiped', function(e) {

    console.log(e.target); // the element that was swiped
    console.log(e.detail);
    console.log(e.detail.dir); // swiped direction

    document.getElementsByTagName('nav')[0].style.display = 'block';
    document.getElementById('zap').style.display = 'none'
    if (e.detail.dir == 'up'){
        document.getElementsByTagName('nav')[0].style.display = 'none';
        document.getElementById('zap').style.display = 'block'
    }

});

elmcontainermenu = document.getElementById('container-options-menu');
elmmenu = document.getElementById('menu-icon');


elmmenu.addEventListener("click", function(event) {
    console.log(elmcontainermenu.style.display);

    if ((elmcontainermenu.style.display == 'none') || (elmcontainermenu.style.display == '')){

        elmcontainermenu.style.display = 'block';

    }else{

        elmcontainermenu.style.display = 'none';

    }
});

elmcontainermenu.addEventListener("click", function(event) {
    //console.log('resize');
    elmcontainermenu.style.display = 'none';
});

