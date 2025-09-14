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
