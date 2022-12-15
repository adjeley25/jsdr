const items = document.querySelectorAll('.item');

const expand = (item, select) => {
  console.log(item.clicked);

  // At this point check all items clicked value
  // If there is an item opened and item.clicked is true reduce all to 15vw
  // If there is none open and we are opening item.clicked then reduce all others to 8vw
  gsap.to(items, 2, { width: item.clicked ? '15vw' : '8vw', ease: 'elastic(1, 0.6)'})

  // At this point update the selected item.clicked value
  // If its closed and false - change to true
  // If its opened and true  - change to false 
  item.clicked = !item.clicked;
  console.log(item.clicked);
  
  // At this point we animate selected item width to 42 if true or back to 15 if false
  gsap.to(item, 3, {width: item.clicked ? '42vw' : '15vw', ease: 'elastic(1 , 0.3)'})
}

items.forEach((item, index) => {
  // Set all items.clicked to false
  item.clicked = false;
  item.addEventListener('click', () => expand(item, index) );
})