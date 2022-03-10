let myLibrary = [];

function Book(title,author,page,read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
  // the constructor...
}



function addBookToLibrary() {
  // do stuff here
  const title = takeFromDom("#title");
  const author = takeFromDom("#author");
  const pages = takeFromDom("#pages");
  const read = takeFromDom("#read");
  if(title && author && pages){
    const book = new Book(title,author,pages,read);
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
    createCard(e.title,e.author,e.page,e.read);
  })
  function createCard(title,author,page,read){
    const card = document.createElement("div")
    const p_title = document.createElement("p")
    const p_author = document.createElement("p")
    const p_pages = document.createElement("p")
    const p_read = document.createElement("p")

    p_title.textContent = `Title : ${title}`
    p_author.textContent = `Author : ${author}`
    p_pages.textContent = `Pages : ${page}`
    p_read.textContent = `Did you read it? ${read}`

    card.appendChild(p_title);
    card.appendChild(p_author);
    card.appendChild(p_pages);
    card.appendChild(p_read);
    document.querySelector("#library").appendChild(card);
  }

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