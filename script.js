const all = document.getElementById('all');
const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const shakes = document.getElementById('shakes');
const dinner = document.getElementById('dinner');

let everyItem = document.querySelectorAll(".box");
const array = Array.from(everyItem);


var buttons = [all, breakfast, lunch, shakes, dinner];

buttons.forEach(function (element) {
    element.addEventListener("click", btnPress)
}
);

function btnPress (e) {
    console.log("tero bau");
    array.forEach(
        function(element) {
            element.classList.remove("show");
            element.classList.add("hide");
        } 
    )
    //start of button press where everything is reset.

    //for all
    if (this.id == "all") {
        array.forEach(
            function(element) {
                element.classList.add("show");
            })
    };

    //for everthing else
    let group = document.querySelectorAll(`.${this.id}`);
    let array1 = Array.from(group);
    array1.forEach (function(element) {
        element.classList.add("show");
    });

    
}