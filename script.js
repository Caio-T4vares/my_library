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
function addBook() {}
function removeBook() {}
