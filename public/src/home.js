function getTotalBooksCount(books) {
 return books.length;
}

function getTotalAccountsCount(accounts) {
return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter(book => !book.borrows[0].returned).length;
}

function getMostCommonGenres(books) {
  const genreCount = {};
  for (let i = 0; i < books.length; i++) {
    const genre = books[i].genre;
    if (genreCount[genre]) {
      genreCount[genre] += 1;
    } else {
      genreCount[genre] = 1;
    }
  }
  const sortedGenres = [];
  for (let genre in genreCount) {
    sortedGenres.push({ name: genre, count: genreCount[genre] });
  }
  sortedGenres.sort((a, b) => b.count - a.count);
  const topFiveGenres = [];
  const maxGenres = 5 < sortedGenres.length ? 5 : sortedGenres.length;
  for (let i = 0; i < maxGenres; i++) {
    topFiveGenres.push(sortedGenres[i]);
  }
  return topFiveGenres;
}

function getMostPopularBooks(books) {
  const popularBooks = [];
  for (const { title, borrows } of books) {
    popularBooks.push({ name: title, count: borrows.length });
  }
  popularBooks.sort((a, b) => b.count - a.count);
  const topFive = popularBooks.slice(0, 5);
  return topFive;
}

function getMostPopularAuthors(books, authors) {
  const authorBorrows = [];
  for (const author of authors) {
    let borrowCount = 0;
    for (const book of books) {
      if (book.authorId === author.id) {
        borrowCount += book.borrows.length;
      }
    }
    authorBorrows.push({ name: `${author.name.first} ${author.name.last}`, count: borrowCount });
  }
  return authorBorrows.sort((a, b) => b.count - a.count).filter((author, index) => index < 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
