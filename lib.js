const addBookBtn = document.querySelector('.addBookBtn');
const dialogBox = document.querySelector('#dialogBox');
const addBtn = document.querySelector('.addBtn');
const form = document.querySelector('form');



addBookBtn.addEventListener('click', () => {
    dialogBox.showModal();//shows the dialogBox when Add Book btn is clicked
});

function closeDialog(event){
    if(!event.target.contains(dialogBox)) return;
    dialogBox.close();
}
document.addEventListener('click', closeDialog);


const library = [];

function Book(title,author,page,read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLib(){

}


