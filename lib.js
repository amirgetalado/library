const addBookBtn = document.querySelector('.addBookBtn');
const dialogBox = document.querySelector('#dialogBox');
const overlay = document.querySelector('#overlay');
const addBtn = document.querySelector('.addBtn');
const form = document.querySelector('form');



addBookBtn.addEventListener('click', () => {
    dialogBox.showModal();//shows the dialogBox when Add Book btn is clicked
    overlay.style.display = 'block';
    dialogBox.style.display = 'block';
});


overlay.addEventListener('click', (event) => {
    overlay.style.display = 'none';
    dialogBox.close();
    // when the overlay is clicked, the dialogBox closes
    // if (event.target === overlay) {
    //     overlay.style.display = 'none';
    //     dialogBox.close();
    //   }
});

// dialogBox.addEventListener('click', (event) => {
//     event.stopPropagation(); // Stop click event propagation
// });

dialogBox.addEventListener('close',() => {
    overlay.style.display = 'none';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
});



const library = [];

function Book(title,author,page,read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLib(){

}