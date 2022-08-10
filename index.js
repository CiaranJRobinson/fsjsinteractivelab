// console.log("Hello world");
document.querySelector("#message");

function addMovie(event){
    event.preventDefault();
    const inputField = document.querySelector("#input-movie");
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie); //Step 4
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);
    document.querySelector("ul").appendChild(movie);
}

function logInputValue(){
    console.log(inputField.value);
}
document.querySelector("form").addEventListener("submit", addMovie);


function deleteMovie(event){
    event.target.parentNode.remove();
    message.textContent(`${event.target.parentNode} deleted!`);
    revealMessage()
}

function crossOffMovie (event) { //Step 4
    event.target.classList.toggle("checked");
    if(event.target.classList.contains("checked")===true){
        message.textContent(`${event.target.textContent} watched!`);
    }else{ message.textContent(`${event.target.textContent} added back!`)
    }
    revealMessage()
}
function revealMessage() {
    message.classList.remove('hide')
    
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}