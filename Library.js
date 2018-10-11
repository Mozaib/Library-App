class Book {
  constructor(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status ? "Read" : "Not read";
  }
}

window.onload = function(){
  let addToBtn = document.getElementById('addToList');
    addToBtn.addEventListener('click', () => {
     let returnObj = convertToObj() // return value becomes the Variable 
      addBookToLibrary(returnObj)
      formObj.closeForm();
      eraseValues()
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

function convertToObj(){
  const titleTextValue = document.getElementById('title').value;
  const authorTextValue = document.getElementById('author').value;
  const pagesNumValue = document.getElementById('pages').value;
  const status = checkboxStatus()

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
      const dltBtn = document.createElement('BUTTON');
      const statusBtn = document.createElement('BUTTON');
        bookCard.id = `book-card`
        bookCard.style.cssText = "text-align: center; font-size: 20px; border: 1px solid black; padding: 10px 0px";
        bookCard.textContent = [`${myLibrary[i].title}, ${myLibrary[i].author}, ${myLibrary[i].pages} Pages, ${myLibrary[i].status}`];
        dltBtn.id = i;
        dltBtn.className = 'deleteBtn'
        dltBtn.setAttribute('onclick', 'deletebookListing(this.id)')
        dltBtn.textContent = 'Delete'
        dltBtn.style.cssText = 'float: right;';
        statusBtn.id = i;
        statusBtn.setAttribute('onclick', 'changeStatus(this.id)')
        statusBtn.textContent = 'Completed';
        statusBtn.style.cssText = 'float: right;';
        bookList.appendChild(bookCard);
        bookCard.appendChild(statusBtn);      
        bookCard.appendChild(dltBtn);
    }
  }
}

function render(){ 
  createCardObj.createBook();
}

function changeStatus(index) {
  const titleStoredValue = myLibrary[index].title;
  const authorStoredValue = myLibrary[index].author;
  const pagesStoredValue = myLibrary[index].pages;
  let status;
  if (myLibrary[index].status === 'Read') {
    status = false

  } else if (myLibrary[index].status === 'Not read') {
    status = true
  }
  myLibrary[index] = new Book(titleStoredValue, authorStoredValue, pagesStoredValue, status)

  redraw()
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
