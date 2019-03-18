
// btns is a collection of all the buttons on the page
// the buttons live within a class of "buttons".
// this says go inside the div.buttons and grab all the button elements
var btns = document.querySelectorAll(".buttons button");

// this returns an array of elements so only look at the 1st element
var cat = document.getElementsByClassName("cat")[0];

// setup event handling for the buttons
for (i = 0; i < btns.length; i++){
    // add event listener for incoming click events
    btns[i].addEventListener("click", manageCatClasses);
}

function manageCatClasses() {
    // add class of blue eyes if we click blueyes
    // we added data-add and data-remove classed for the buttons in html
    // target "cat" and target the class list and add a classList==>data-add
    // this adds the value of the data-add attribute, ie, blue-eyes.
    // target the button by using "this", then get the attribute the data-add.
    // wrap into if() only if the attribute that was clicked is data-add/remove.
    if (this.getAttribute("data-add")) {
        cat.classList.add(this.getAttribute("data-add"));
        // alert("data-add");
    }
    if (this.getAttribute("data-remove")) {
        cat.classList.remove(this.getAttribute("data-remove"));
        // alert("data-remove");
    }
}