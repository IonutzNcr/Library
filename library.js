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
    statusBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    statusBtn.setAttribute("class","status")
   

    const div_title = document.createElement("div")
    const div_author = document.createElement("div")
    const div_pages = document.createElement("div")
    const div_read = document.createElement("div")

    div_title.textContent = `Title : ${title}`
    div_author.textContent = `Author : ${author}`
    div_pages.textContent = `Pages : ${page}`
    div_read.textContent = "I read it: "+" "+" " + `${read}`
    div_read.appendChild(statusBtn);

    card.appendChild(remove)
    card.appendChild(div_title);
    card.appendChild(div_author);
    card.appendChild(div_pages);
    card.appendChild(div_read);
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