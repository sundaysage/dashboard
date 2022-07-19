var bars6h =document.querySelector("#bars6h");
var bars3h = document.querySelector("#bars3h");
var bars5h =document.querySelector("#bars5h");
var popimg = document.querySelector("#pop")
var popimg2 = document.querySelector("#pop2")
var popimg3 = document.querySelector("#pop3")

bars6h.addEventListener("click",function(e){
    popimg.classList.toggle("popimgs")
    // setTimeout(function(){
    //     popimg.classList.toggle("popimg")
    // },1000)
    e.preventDefault()
})
bars3h.addEventListener("mouseover",function(e){
    popimg2.classList.toggle("popimgs2")
    e.preventDefault()

})
bars5h.addEventListener("mouseover",function(e){
    popimg3.classList.toggle("popimgs3")
    e.preventDefault()

})
o