const library = {
  
  storage: localStorage,

  getData: function () {
    if (this.storage.getItem('libraryData')) { 
      return JSON.parse(this.storage.getItem('libraryData')); 
    } else {
      return [];
    }
  },

  saveData: function (books) {
    this.storage.setItem('libraryData', JSON.stringify(books));
  }
}
/////local storage test

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
      redraw()
  });
  render()
}

let myLibrary = [new Book('The Woman in the Window', 'A. J. Finn', 500, false), new Book('The Great Alone', 'Kristin Hannah', 500, false)];

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
  myLibrary.unshift(obj)
}

const createCardObj = {
  bookListDom: document.querySelector('#bookList'),
  createBook: function(bgColour1, bgColour2){
    for(i = 0; i < myLibrary.length; ++i){
      this.bookListDom;
      const bookCard = document.createElement('div');

      const div1 = document.createElement('div');
      const div2 = document.createElement('div');
      const div3 = document.createElement('div');
      const div4 = document.createElement('div');

      const dltBtn = document.createElement('BUTTON');
      const statusBtn = document.createElement('BUTTON');

        bookCard.id = `book-card`
        bookCard.style.cssText = `background: linear-gradient(to right, ${bgColour1}, ${bgColour2});`
      
        div1.style.cssText = "width: 40%; float: left; color: white; text-shadow: 2px 2px #2E2E2E;";
        div2.style.cssText = "width: 20%; float: left; color: white; text-shadow: 2px 2px #2E2E2E;";
        div3.style.cssText = "width: 10%; float: left; color: white; text-shadow: 2px 2px #2E2E2E;";
        div4.style.cssText = "width: 10%; float: left; color: white; text-shadow: 2px 2px #2E2E2E;";

        div1.textContent = `${myLibrary[i].title}`;
        div2.textContent = `${myLibrary[i].author}`;
        div3.textContent = `${myLibrary[i].pages}`;
        div4.textContent = `${myLibrary[i].status}`;

        //bookCard.textContent = [`${myLibrary[i].title} || ${myLibrary[i].author} || ${myLibrary[i].pages} Pages || ${myLibrary[i].status}`];
        dltBtn.id = i;
        dltBtn.setAttribute('onclick', 'deletebookListing(this.id)')
        dltBtn.style.cssText = "width: 20px; height: 10px; float: left;";
        dltBtn.innerHTML = '<i class="fa fa-trash"></i>'
        //dltBtn.textContent = 'X'
        dltBtn.style.cssText = 'float: right;';

        statusBtn.id = i;
        statusBtn.setAttribute('onclick', 'changeStatus(this.id)')
        statusBtn.innerHTML = '<i class="fa fa-folder"></i>'
        statusBtn.style.cssText = 'float: right; ';
        
        bookList.appendChild(bookCard);

        bookCard.appendChild(div1)
        bookCard.appendChild(div2)
        bookCard.appendChild(div3)
        bookCard.appendChild(div4)

        bookCard.appendChild(statusBtn);      
        bookCard.appendChild(dltBtn);
    }
  }
}

function render(){ 
  createCardObj.createBook(generateBgcolor(),generateBgcolor());
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
};


//generate random color for book card
function generateBgcolor(){
const bgColorArray = ['#F2AFAF','#F8D090','#B1F9E9','#B1F9E9','#97A6F6','#97A6F6','#97A6F6', '#FFC300', '#FFC300'];
  return bgColorArray[Math.floor(Math.random()*bgColorArray.length)];

}