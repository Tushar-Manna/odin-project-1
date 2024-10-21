
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author=author;
    this.pages= pages;
    this.read=read;
}


function addBook(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read))
}

function removeBook(index) {
    myLibrary.splice(index,1)
    renderLibrary()
}

function handleSubmit(event) {
    event.preventDefault();
    const title = document.getElementById('title').value ;
    const author = document.getElementById('author').value ;
    const pages = document.getElementById('pages').value ;
    const read = document.getElementById('read').value ;

    if (!title || !author || !pages || !read) {
        alert("all fields much be filled out.");
        return;
    }

    addBook(title, author, pages, read);
    renderLibrary()
    document.getElementById('bookForm').reset();
}



console.log(myLibrary);

function renderLibrary() {
    document.querySelector('#myTable tbody').innerHTML = myLibrary.map((book, index) => `<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.read}</td>
    <td><button onclick="removeBook(${index})">Remove</button></td>
    </tr>`
).join('')
}