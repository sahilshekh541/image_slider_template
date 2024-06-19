//elemnt is which you can scroll 
//direction left or right
//speed 10 25 30 as your need
//distance 100 200 300 as you need
//step how many steps on one time you scroll
//example
// var rightbutton = document.querySelector('.right-icon i');
// rightbutton.addEventListener("click",function(){
//     sideScroll(itemcontainer,'right',25,100,10);
// });


function sideScroll(element,direction,speed,distance,step){
    var scrollammount =0;
    var leftdir = element.scrollLeft;
    var rightdir = element.scrollLeft;
    var slidetimer = setInterval(
        function(){
            if(direction == 'left'){
                leftdir -= step;
                element.scrollLeft = leftdir
            }
            else{
                rightdir += step;
                element.scrollLeft = rightdir
            }
            scrollammount += step;
            if(scrollammount == distance){
                window.clearInterval(slidetimer);
            }
        },
        speed
    )
}
