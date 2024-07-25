function Book(title, author, numberOfPages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.hasBeenRead = hasBeenRead;
  this.creationData = Date.now();
}
Book.prototype.changeStatus = function () {
  this.hasBeenRead = !this.hasBeenRead;
};
const booksArr = [
  new Book("Perdido em marte", "Andy Weir", 332, false),
  new Book("Example2", "Unkown", 999, true),
  new Book("Example3", "John Doe", 222, false),
  new Book("Example4", "Mister potato", 999, true),
];
const container = document.querySelector(".card-container");
loadBooks(booksArr);

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", (event) => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
const closeModalBtn = document.querySelector(".close-btn");
closeModalBtn.addEventListener("click", (event) => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

const removeBtn = document.querySelector("remove-btn");
const confirmBtn = document.querySelector(".confirm-add");
confirmBtn.addEventListener("click", (event) => {});
function removeBook(event) {}
function loadBooks(books) {
  console.log(books);
  for (book of books) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("info");

    const bookName = document.createElement("p");
    bookName.textContent = book.title;
    bookName.classList.add("title");

    const descContainer = document.createElement("div");
    descContainer.classList.add("desc");
    const author = document.createElement("p");
    author.textContent = `by ${book.author}`;
    console.log(book.author);
    const numberOfPages = document.createElement("p");
    numberOfPages.textContent = `${book.numberOfPages} pages`;
    const bookStatus = document.createElement("p");
    if (book.hasBeenRead) bookStatus.textContent = "read? yes";
    else bookStatus.textContent = "read? no";
    descContainer.appendChild(author);
    descContainer.appendChild(numberOfPages);
    descContainer.appendChild(bookStatus);

    cardInfo.appendChild(bookName);
    cardInfo.appendChild(descContainer);

    const buttons = document.createElement("div");
    buttons.classList.add("btns");
    const changeStatusBtn = document.createElement("button");
    changeStatusBtn.classList.add("btn", "changeStatus-btn");
    changeStatusBtn.textContent = "Mark as read";
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("btn", "remove-btn");
    removeBtn.textContent = "Remove";

    buttons.appendChild(changeStatusBtn);
    buttons.appendChild(removeBtn);

    newCard.appendChild(cardInfo);
    newCard.appendChild(buttons);
    container.appendChild(newCard);
  }
}
