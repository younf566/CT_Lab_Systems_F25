// Toggle highlight class on Item 2
document.getElementById('toggleClassBtn').addEventListener('click', function() {
	const item2 = document.getElementById('item2');
	item2.classList.toggle('highlight');
});

// Toggle grid style
document.getElementById('toggleGridBtn').addEventListener('click', function() {
	const grid = document.getElementById('grid');
	grid.classList.toggle('alt-grid');
});

// Trigger animation on item 1 when clicked
const item1 = document.getElementById('item1');
item1.addEventListener('click', function() {
	item1.classList.add('animate-bounce');
});
item1.addEventListener('animationend', function() {
	item1.classList.remove('animate-bounce');
});

//if i've clicked on my character 
    // execute move function 
    // is selected 

//boolean to keep track of whether character is selected

//move function 
// set the x & y transform to my mouse position  

