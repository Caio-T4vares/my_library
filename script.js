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
});

function loadBooks(books) {
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
      console.log("changing");
      book.changeStatus();
      if (book.hasBeenRead) {
        console.log("uhul");
        bookStatus.classList.remove("not-read");
        bookStatusSpan.textContent = " yes";
        bookStatusSpan.classList.add("read");
      } else {
        console.log("uhul 2");
        bookStatus.classList.remove("read");
        bookStatusSpan.textContent = " no";
        bookStatusSpan.classList.add("not-read");
      }
    });

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("btn", "remove-btn");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", (event) => {
      container.removeChild(newCard);
      const title = container.querySelector(".title");
      booksArr = booksArr.filter((book) => book.title !== title.textContent);
    });

    buttons.appendChild(changeStatusBtn);
    buttons.appendChild(removeBtn);
    newCard.appendChild(cardInfo);
    newCard.appendChild(buttons);

    container.appendChild(newCard);
  }
}
