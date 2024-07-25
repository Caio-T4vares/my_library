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

const container = document.querySelector(".card-container");
const addBtn = document.querySelector(".addBtn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
addBtn.addEventListener("click", (event) => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
const closeModalBtn = document.querySelector(".closeBtn");
closeModalBtn.addEventListener("click", (event) => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

function addBook() {}
function removeBook() {}
