let myLibrary = [];

function Book(title,author,page,read,index) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
    this.index = index;
  // the constructor...
}

Book.prototype.changeStatus = function(){
 const currentObj = myLibrary[this.parentNode.parentNode.dataset.index]
 

  if(currentObj.read == "Yes"){
    currentObj.read = "No"
  } else { 
    currentObj.read = "Yes"
  }

  displayBooks()
}


function addBookToLibrary() {
  // do stuff here
  const title = takeFromDom("#title");
  const author = takeFromDom("#author");
  const pages = takeFromDom("#pages");
  const read = takeFromDom("#read");
  const index = myLibrary.length
  if(title && author && pages){
    const book = new Book(title,author,pages,read,index);
    myLibrary.push(book)
  }
  

}
/* Used in addBookToLibrary() */
function takeFromDom(selector){
  return document.querySelector(selector).value
}

function resetInputs(){
  document.querySelectorAll("input").forEach(e=>{
    e.value = "";
  })
}

function displayBooks(){
  document.querySelectorAll("#library div").forEach(e=>e.remove())

  myLibrary.forEach(e=>{
    createCard(e.title,e.author,e.page,e.read,e.index);
  })
  function createCard(title,author,page,read,index){

    const bcg =  document.createElement("div");
    bcg.setAttribute("class","bcg");
    const card = document.createElement("div");
    card.setAttribute("data-index",index);
    card.setAttribute("class","face");
    const remove = document.createElement("button");
    remove.textContent = "X";
    remove.setAttribute("class","remove");

    const statusBtn = document.createElement("button");
    statusBtn.textContent = "C";
    statusBtn.setAttribute("class","status")
   

    const p_title = document.createElement("p")
    const p_author = document.createElement("p")
    const p_pages = document.createElement("p")
    const p_read = document.createElement("p")

    p_title.textContent = `Title : ${title}`
    p_author.textContent = `Author : ${author}`
    p_pages.textContent = `Pages : ${page}`
    p_read.textContent = `Did you read it? ${read}`
    p_read.appendChild(statusBtn);

    card.appendChild(remove)
    card.appendChild(p_title);
    card.appendChild(p_author);
    card.appendChild(p_pages);
    card.appendChild(p_read);
    bcg.appendChild(card)
    document.querySelector("#library").appendChild(bcg);
  }

  document.querySelectorAll(".remove").forEach(e=>{
    e.addEventListener("click",removeBook)
  })
 
  document.querySelectorAll(".status").forEach(e=>{
    e.addEventListener("click",Book.prototype.changeStatus)
  })

}

function toggleCLass(){
  document.querySelector(".newBook").classList.toggle("hidden");
  document.querySelector(".card").classList.toggle("hidden");
}

const button = document.querySelector("#create");

button.addEventListener("click",addBookToLibrary);

button.addEventListener("click",resetInputs);

button.addEventListener("click",displayBooks);

const buttonAdd = document.querySelector("#add")

buttonAdd.addEventListener("click",toggleCLass);

button.addEventListener("click",toggleCLass);

/* Remove book feature */

function removeBook(){
  const index = +this.parentNode.dataset.index;
  myLibrary.splice(index,1);
  updateIndex();
  displayBooks();
  
}

function updateIndex(){
    myLibrary.forEach(e=>e.index = myLibrary.indexOf(e))
}


function essay(){
  console.log("mouhaha")
}