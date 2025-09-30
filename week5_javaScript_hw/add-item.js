const submitBtn = document.getElementById("submit-btn");
const itemInput = document.getElementById("task-input");
const itemList = document.getElementById("todo-list");


submitBtn.addEventListener('click', function(){
    console.log('click happened'); //check that event listener is working

    let inputValue = itemInput.value; 
    if (inputValue !== '') {
        const newItem = document.createElement('li') //create a new li item
        // newItem.innerHTML = inputValue;

        //OR 
        newItem.appendChild(document.createTextNode(inputValue));

        itemList.appendChild(newItem); 

        itemInput.value = ''; 
    }
});
