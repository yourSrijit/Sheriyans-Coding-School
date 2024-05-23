const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



let fixed=document.querySelector("#fixed-image");
let elmContainer=document.querySelector("#element-container")
let elm=document.querySelectorAll(".element");



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





