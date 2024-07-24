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
addBtn.addEventListener("click", (event) => {
  console.log("Clicked");
});
function addBook() {}
function removeBook() {}
