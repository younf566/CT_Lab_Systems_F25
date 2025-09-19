//defining our variables to hold references to our html elements
const likeButton = document.getElementById('likeBtn');
const likeCountDisplay = document.getElementById('likeCount');

//our likeCount variable will hold the number of likes 
// it is a let because the value will change with each click
let likeCount = 0;

//creating a function to update our like display
// this function will update the text content of our likeCountDisplay element
function updateLikeDisplay() {
    likeCountDisplay.textContent = likeCount;
}

//adding an event listener to our like button
// when the button is clicked, we increment the likeCount and update the display
likeButton.addEventListener('click', () => {
    likeCount++;
    updateLikeDisplay();
});

//initial call to set the display to 0 likes at the start
updateLikeDisplay();