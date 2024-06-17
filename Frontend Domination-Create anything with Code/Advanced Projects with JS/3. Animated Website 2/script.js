const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function page4Animation(){
    let fixed=document.querySelector("#fixed-image");
    let elmContainer=document.querySelector("#element-container")
    let elm=document.querySelectorAll(".element");


    fixed.addEventListener("mouseenter",()=>{
        fixed.style.display="block";
        fixed.style.cursor="pointer";
    })
    elm.forEach((e)=>{
        e.addEventListener("mouseenter",()=>{
            let image=e.getAttribute("image-data");
            fixed.style.display="block";
            fixed.style.backgroundImage=`url(${image})`
        })
    })
    elmContainer.addEventListener("mouseleave",()=>{
        fixed.style.display="none";
    })

}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}

swiperAnimation();
page4Animation();



// Animated Cursor 
let cursor=document.querySelector("#animated-cursor");
let page4=document.querySelector("#page4");

page4.addEventListener("mouseenter",(e)=>{
    page4.style.cursor="none"


    cursor.style.display="flex"
    cursor.style.alignItems="center"
    cursor.style.justifyContent="center"

})

page4.addEventListener("mousemove",(e)=>{
   const x=e.pageX;
   const y=e.pageY;
   console.log(e);
   cursor.style.left=`${x}px`;
   cursor.style.top=`${y-300}px`;

})

page4.addEventListener("mouseleave",(e)=>{
    page4.style.cursor="default"
    cursor.style.display="none";
})
