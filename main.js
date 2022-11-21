let progressBar = document.getElementById('progress')
let circles = document.querySelectorAll('.circle')
let prevButton = document.getElementById('prev').addEventListener('click', prevButtonFunction)
let nextButton = document.getElementById('next').addEventListener('click', nextButtonFunction)
let prevButtonDom = document.getElementById('prev')
let nextButtonDom = document.getElementById('next')

let current = 1;
function nextButtonFunction() {
    current++;
    if (current > circles.length) {
       
        current = circles.length;
        
    }
    update();
}

function prevButtonFunction() {
    current--;
    if (current < 1) {

        current = 1;
    }
    update();
}

function update(){
    circles.forEach((circle, idx)=>{
        if (idx < current){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active")
        }
    });
    let actives = document.querySelectorAll('.active')
    progressBar.style.width = (actives.length-1) / (circles.length-1) * 350 + "px"
     if(current === 1) {
        prevButtonDom.disabled = true
    } else if(current === circles.length) {
        nextButtonDom.disabled = true
    } else {
        nextButtonDom.disabled = false
        prevButtonDom.disabled = false
    }
}
   

