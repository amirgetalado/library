const addBookBtn = document.querySelector('.addBookBtn');
const dialogBox = document.querySelector('#dialogBox');
const addBtn = document.querySelector('.addBtn');

// user data
let title;
let author;
let page;
let read;
let newBook;
const library = [];

addBookBtn.addEventListener('click', () => {
    //for clearing the input area from previous entries
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').checked = false;

    dialogBox.showModal();//shows the dialogBox when Add Book btn is clicked
});

function closeDialog(event){
    if(!event.target.contains(dialogBox)) return;
    dialogBox.close();
}
document.addEventListener('click', closeDialog);

addBtn.addEventListener('click', () => {
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    page = document.querySelector('#pages').value;
    read = document.querySelector('#read').checked;

    newBook = new Book(title,author,page,read);

    library.push(newBook);
});



function Book(title,author,page,read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLib(){

}


