class Book {
  constructor(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status ? "Completed" : "Not read yet";
  }
}

window.onload = function(){
  let addToBtn = document.getElementById('addToList');
    addToBtn.addEventListener('click', () => {
     let returnObj = convertToObj() // return value becomes the Variable 
      addBookToLibrary(returnObj)
      console.log(myLibrary[0])
      redraw()
  });
// for(i = 0; i < deleteBtn.length; ++i){
//   deleteBtn[i].addEventListener('click', () => {
//     console.log(i)
//     deletebookListing(this.id)
//   })
// } 
  render()
}

let myLibrary = [new Book('titlhebde', 'book', 200, true)];

const formObj = {
  openForm: function(){
    document.getElementById("myForm").style.display = "block";
  },
  closeForm: function(){
    document.getElementById("myForm").style.display = "none";
  }
}

function checkboxStatus(){
  let completedVal = document.getElementById('checkbox')
  return completedVal.checked;
}

///////edit
// let convertToObj = {
//   titleTextValue: document.getElementById('title').value,
//   authorTextValue: document.getElementById('author').value,
//   pagesNumValue: document.getElementById('pages').value,
  
// }
///////edit
function convertToObj(){
  const titleTextValue = document.getElementById('title').value;
  const authorTextValue = document.getElementById('author').value;
  const pagesNumValue = document.getElementById('pages').value;
  const status = checkboxStatus()
  // if(titleTextValue == "" && authorTextValue == "" && pagesNumValue == ""){
  //     alert('You need to enter the')
  // }
  
  return new Book(
    titleTextValue,
    authorTextValue,
    pagesNumValue,
    status
  )
}


function addBookToLibrary(obj) {
  return myLibrary.unshift(obj)
}

const createCardObj = {
  bookListDom: document.querySelector('#bookList'),
  createBook: function(){
    for(i = 0; i < myLibrary.length; ++i){
      this.bookListDom;
      const bookCard = document.createElement('p');
      const button = document.createElement('BUTTON');
        bookCard.id = `book-card`
        bookCard.style.cssText = "text-align: center; font-size: 20px; border: 1px solid black; padding: 10px 0px";
        bookCard.textContent = [`${myLibrary[i].title}, ${myLibrary[i].author}, ${myLibrary[i].pages} Pages, ${myLibrary[i].status}`];
        button.id = i;
        button.className = 'deleteBtn'
        button.setAttribute('onclick', 'deletebookListing(this.id)')
        button.textContent = 'Delete'
        button.style.cssText = 'float: right; ';
        bookList.appendChild(bookCard);
        bookCard.appendChild(button);
        console.log('its working')
    }
  }
}

function render(){ 
  createCardObj.createBook();
}


function deletebookListing(clickedId){
  let bookCard = document.getElementById('bookList');
  myLibrary.splice(clickedId, 1);
    while(bookCard.firstChild){
      bookCard.removeChild(bookCard.firstChild);
    }
  render()
}

function redraw(){
  let bookCard = document.getElementById('bookList');
    while(bookCard.firstChild){
      bookCard.removeChild(bookCard.firstChild);
    }
  render()
}
