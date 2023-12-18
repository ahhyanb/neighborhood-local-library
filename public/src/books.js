function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOutBooks = books.filter(book => !book.borrows[0].returned);
  const returnedBooks = books.filter(book => book.borrows[0].returned);

  return [checkedOutBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
 const borrowers = [];
  for (let i = 0; i < book.borrows.length && borrowers.length < 10; i++) {
    const borrow = book.borrows[i];
    const account = accounts.find(acc => acc.id === borrow.id);
    if (account) {
      borrowers.push({ ...account, returned: borrow.returned });
    }
  }
  return borrowers;

}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
