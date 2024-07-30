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
let booksArr = [
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
  document.querySelector("form").reset();
  event.preventDefault();
});

function loadBooks(books) {
  for (book of books) {
    addBook(book);
  }
}
const form = document.querySelector("form");
form.addEventListener(
  "submit",
  (event) => {
    const bookName = document.querySelector("#book-name");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const bookStatus = document.querySelector("#book-status");
    booksArr.push(
      new Book(bookName.value, author.value, pages.value, bookStatus.value)
    );
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    event.target.reset();
    addBook(booksArr[booksArr.length - 1]);
    event.preventDefault();
  },
  false
);
function addBook(book) {
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
  const numberOfPages = document.createElement("p");
  numberOfPages.textContent = `${book.numberOfPages} pages`;
  const bookStatus = document.createElement("p");
  bookStatus.textContent = "read?";
  const spanStatus = document.createElement("span");
  if (book.hasBeenRead) {
    spanStatus.textContent = " yes";
    spanStatus.classList.add("read");
  } else {
    spanStatus.textContent = " no";
    spanStatus.classList.add("not-read");
  }
  bookStatus.appendChild(spanStatus);
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
  changeStatusBtn.addEventListener("click", (event) => {
    const bookStatusSpan = newCard.querySelector("span");
    book.changeStatus();
    if (book.hasBeenRead) {
      bookStatusSpan.classList.remove("not-read");
      bookStatusSpan.textContent = " yes";
      bookStatusSpan.classList.add("read");
    } else {
      bookStatusSpan.classList.remove("read");
      bookStatusSpan.textContent = " no";
      bookStatusSpan.classList.add("not-read");
    }
  });

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn", "remove-btn");
  removeBtn.textContent = "Remove";

  buttons.appendChild(changeStatusBtn);
  buttons.appendChild(removeBtn);
  newCard.appendChild(cardInfo);
  newCard.appendChild(buttons);

  removeBtn.addEventListener("click", (event) => {
    const title = newCard.querySelector(".title");
    container.removeChild(newCard);
    booksArr = booksArr.filter((book) => book.title !== title.textContent);
  });
  container.appendChild(newCard);
}
