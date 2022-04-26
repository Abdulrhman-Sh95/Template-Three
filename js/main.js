let links = document.querySelectorAll("nav ul li a")
let progress = document.querySelectorAll(".progress span")
let section = document.getElementById("skills")
let section2 = document.getElementById("stats")
let nums = document.querySelectorAll(".stats .box .num")
let start = false
links.forEach(element => {
    element.addEventListener("click",function() {
        let sec = document.getElementById(element.dataset.id)
       
        window.scrollTo({
            top : sec.offsetTop,
            behavior:"smooth",
        })
    })
});
function count(num) {
        let counter = setInterval(function() {
            num.textContent++
            if (num.textContent == num.dataset.num) {
                clearInterval(counter)
                console.log("asdzxc")
            }
        },2000 / num.dataset.num)
} 
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        progress.forEach((span) => {
            span.style.width = span.dataset.width
        })
    }
    if(window.scrollY >= section2.offsetTop) {
        if (!start){
            nums.forEach(function(num) {
                count(num)
            })    
}
start = true
    }
}

let test = "the-stealth-warrior"

function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    // console.log(test.match(regExp))
    return str.replace(regExp,function(el){
        console.log(el)
          return el.charAt(1).toUpperCase();
     });
}
console.log(toCamelCase(test))