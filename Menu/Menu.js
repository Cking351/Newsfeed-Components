/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/

const heading = document.querySelector('.menu-button')

function menuMaker(array) {
  
  // Created variables for HTML structure
  const mainDiv = document.createElement('div')
  const menuUl = document.createElement('ul')


  // Attached the ul to the div
  mainDiv.appendChild(menuUl)
  
  // Gave the div the class of 'menu'
  mainDiv.classList.add('menu')


  // A loop that adds the array elements into a li and appends them to the ul
  array.forEach(element => {
    const menuLi = document.createElement('li')
    menuLi.textContent = element
    menuUl.appendChild(menuLi)
  })

  // Added click with anon function that toggles the menu--open class everytime the event occurs
  heading.addEventListener ('click', () => {
    mainDiv.classList.toggle('menu--open')
  })
return mainDiv
}

// Creating a variable that stores the function with our targeted array
const createMenu = menuMaker(menuItems)

// Appending the new variable to the body of the page so it can be seen
document.body.appendChild(createMenu)


// This was really hard