gsap.to(".navv" , {
    backgroundColor:"rgba(0, 0, 0, 0.901)",

    duration:0.5,
    height:"90px",
    scrollTrigger:{
        trigger:"#navv",
        scroller:"body",
        start:"top -10%",   
        end:"top -11%",
        scrub:0.5,
     }
} )
gsap.to("#main",{
    backgroundColor:"rgba(0, 0, 0, 0.98)",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -50%",
        end:"top -150%",
        scrub:1,
    }
})
/*-----------------page4--------------------*/
const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);
