// Import our custom CSS
import '../scss/styles.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import'waypoints/lib/noframework.waypoints.min';
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import { Tooltip, Toast, Popover } from 'bootstrap';

let navBar = document.querySelector(".navBar");
let showFilter  = document.getElementById("show-filter")
let filterDetail = document.querySelector(".filter-detail");
let searchText = document.querySelector("#searchText");
let nftItems = document.getElementById("nftItems");
let nftJourney = document.getElementById("nft-journey");
let catalogItems = document.getElementById("catalog-items");
let catalogSearchText = document.querySelector("#catalogSearchText");
let scrollToTop = document.querySelector(".scrollToTop");


// catalog.addEventListener("mouseenter", function (){
//     console.log ("show items")
//     catalogItems.classList.toggle("d-none")
// })
// catalog.addEventListener("mouseout", function (){
//     console.log ("hide items")
//     catalogItems.classList.toggle("d-none")
// })


//filter
showFilter.addEventListener("click",function (){
    console.log("click")
    filterDetail.classList.toggle("d-none");
    filterDetail.classList.toggle("animate__backInDown")
})

//countDownClock 
let countDownAll = document.querySelectorAll(".count-down");
function clock (){
    for (let i=0; i<countDownAll.length; i++){
        let date1 = new Date();
        let countDownClock =  `${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`;
        countDownAll[i].innerText = countDownClock;
    }
}
setInterval(clock,1000)

//navBar Show
let waypoint1 = new Waypoint({
    element: document.getElementById('nftItems'),
    handler: function(direction) {
        if(direction === "down"){
            // console.log("waypoint start");
            navBar.classList.toggle("shadow");
            navBar.classList.toggle("animate__fadeInDown");
            navBar.classList.toggle("py-4");
            scrollToTop.classList.toggle("d-none");
            scrollToTop.classList.toggle("animate__fadeInUp")
        }else if(direction === "up") {
            // console.log("restart");
            navBar.classList.toggle("animate__fadeInDown");
            navBar.classList.toggle("shadow");
            navBar.classList.toggle("py-4");
            scrollToTop.classList.toggle("d-none")
            scrollToTop.classList.toggle("animate__fadeInUp")
        }
    },
    offset: '10%'
});

