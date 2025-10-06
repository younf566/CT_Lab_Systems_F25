function double (num) {
  return num * 2; // The function returns the sum of its two parameters.
}

let product = double(5); // The `add` function returns 8, which is stored in the `sum` variable.
console.log(product); // Output: 10

function sentence (string1, string2){
    console.log(`This is a sentence with ${string1} ${string2}`); 
}

sentence("and it says one thing", "and then another"); 

let score = 0; 

const likeBtn = document.getElementById('like-button');

likeBtn.addEventListener('click', function(){
    // console.log('click happened'); 
    score = score + 1;
    console.log(`The current score is ${score}`);
    document.getElementById('like-count').innerText = `Likes: ${score}`; 
}); 
