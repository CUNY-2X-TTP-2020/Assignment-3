// 1 - Select the section with an id of container without using querySelector
let container = document.getElementById("container");
console.log(container); // <section id="container">...</section>

// 2 - Select the section with an id of container using querySelector
let querySelected = document.querySelector("section");
console.log(querySelected); // <section id="container">...</section>

// 3 - Select all of the list items with a class of "second"
let second = document.getElementsByClassName("second");
console.log(second); // [li.second, li.second]

// 4 - Select a list item with a class of third, but only the list item inside of the ol tag
let item = document.getElementsByClassName("third")[1];
console.log(item); // <li class="third">three</li>

// 5 - Give the section with an id of container the text "Hello!"
let section = document.getElementById("container");
section.innerText = "Hello";
console.log(section); // <section id="container">...</section>

// 6 - Add the class main to the div with a class of footer
document.getElementsByClassName("footer")[0].classList.add("main");
// <div class="footer main"></div>

// 7 - Remove the class main on the div with a class of footer
document.getElementsByClassName("footer")[0].classList.remove("main");
// <div class="footer"></div>

// 8 - Create a new li element
let newLiElement = document.createElement("li");

// 9 - Give the li the text "four"
newLiElement.innerHTML = 'four'; // "four"

// 10 - Append the li to the ul element


// 11 - Loop over all of the lis inside the ol tag and give them a background color of "green"


// 12 - Remove the div with a class of footer
