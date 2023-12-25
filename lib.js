const addBookBtn = document.querySelector('.addBookBtn');
const dialogBox = document.querySelector('#dialogBox');
const addBtn = document.querySelector('.addBtn');
const cardGrid = document.querySelector('.card-grid');
const removeBtn = document.querySelector('.removeBtn');


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

    if (title === '' || author === '' || page === '' || page <= 0 || page > 9999) {
       
        return;//exits the eventlistener if the three fields are empty and doesnt let it create a book and a card
    }
    newBook = new Book(title,author,page,read);

    library.push(newBook);
    createCard(newBook);
});


//constructor for Book
function Book(title,author,page,read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function createCard(newBook){
    let div = document.createElement('div');
    div.classList.add('card', 'grid', 'grid-cols-1', 'gap-3', 'px-6', 'py-7', 'bg-gray-100', 'rounded-lg', 'shadow-lg', 'shadow-gray-900')
    cardGrid.appendChild(div);

    let p1 = document.createElement('p');
    p1.classList.add('font-semibold' ,'text-base','p-3');
    p1.innerText = `Title: ${newBook.title}`
    div.appendChild(p1);

    let p2 = document.createElement('p');
    p2.classList.add('font-semibold' ,'text-base','p-3');
    p2.innerText = `Author: ${newBook.author}`;
    div.appendChild(p2);
    
    let p3 = document.createElement('p');
    p3.classList.add('font-semibold' ,'text-base','p-3');
    p3.innerText = `Pages: ${newBook.page}`;
    div.appendChild(p3);

    let readBtn = document.createElement('button');
    if(newBook.read === true){
        readBtn.classList.add('hasReadBtn','text-lg','font-bold','text-white','bg-green-500' , 'hover:bg-green-400' , 'rounded-xl');
        readBtn.innerText = `Read`;
    }else{
        readBtn.classList.add('notReadBtn','text-lg','font-bold','text-white','bg-red-500' , 'hover:bg-red-400' , 'rounded-xl');
        readBtn.innerText = `Not Read`;
    }
    div.appendChild(readBtn);
    
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn','text-lg','font-bold','text-white','bg-gray-500' , 'hover:bg-gray-400' , 'rounded-xl');
    removeBtn.innerText = `Remove`
    div.appendChild(removeBtn);

    // Add event listener to readBtn
    readBtn.addEventListener('click', () => {
        readBtn.classList.toggle('hasReadBtn');
        readBtn.classList.toggle('notReadBtn');
        readBtn.classList.toggle('bg-green-500');
        readBtn.classList.toggle('bg-red-500');
        readBtn.classList.toggle('hover:bg-green-400');
        readBtn.classList.toggle('hover:bg-red-400');

        // Toggle read status in the newBook object
        newBook.read = !newBook.read;//Changes the current value of newBook.read with toggle, if it is true, it will be false, and vice versa

        //Update innerText of readBtn
        if(readBtn.innerText === 'Read'){
            readBtn.innerText = 'Not Read';
        }else{
            readBtn.innerText = 'Read';
        }
    });

    // Add event listener to removeBtn
    removeBtn.addEventListener('click', () => {
        div.remove(); // Remove the card element from the DOM
        const index = library.indexOf(newBook);
        if (index !== -1) {
        library.splice(index, 1); // Remove the newBook object from the library array
        }
    });
 
}


