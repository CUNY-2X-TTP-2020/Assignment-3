// 1 - Select the section with an id of container without using querySelector



// 2 - Select the section with an id of container using querySelector



// 3 - Select all of the list items with a class of "second"



// 4 - Select a list item with a class of third, but only the list item inside of the ol tag



// 5 - Give the section with an id of container the text "Hello!"



// 6 - Add the class main to the div with a class of footer



// 7 - Remove the class main on the div with a class of footer



// 8 - Create a new li element



// 9 - Give the li the text "four"



// 10 - Append the li to the ul element
let ul =document.querySelector('ul');
let li=document.createElement("li");
li.innerText = "Batman";
ul.appendChild(li);
// 11 - Loop over all of the lis inside the ol tag and give them a background color of "green"
let ol = document.querySelector("ol");
let items = ol.getElementsByTagName("li");
for (let i = 0; i < items.length; ++i) {
  // do something with items[i], which is a <li> element
	items[i].style.backgroundColor = "#228B22";                      
}
// 12 - Remove the div with a class of footer
let myObj = document.getElementsByClassName('footer');
for(let i=0;i<myObj;i++){
  myObj[i].remove();
}
