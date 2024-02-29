const books = [];

function addBook(
    name, //название
    author, //автор
    publication, //год издания
    genre, //жанр
    pages, //количество страниц
) {
    const book = {name, author, publication, genre, pages};
    books.push(book);
    return books
}

function removeBook(removeBookName) {
    for(let i = 0; i < books.length; i++) {
        if(books[i].name === removeBookName) {
            books.splice(i, 1);
        };
    };
    return books
}

function findBooksByAuthor(author) {
    const foundBook = books.filter((book) => book.author === author);
    return foundBook
}

function filterBooksByGenre(genre) {
    const filteredBooks = books.filter((book) => book.genre === genre)
    return filteredBooks
}

function genreReport() {
    const booksByGenre = (acc, book) => {
        if (!Object.hasOwn(acc, book.genre)) {
          acc[book.genre] = 0;
        }
        acc[book.genre] += 1;
        return acc;
      };
    
    const filteredBooksByGenre = books.reduce(booksByGenre, {})
    return filteredBooksByGenre
}

function averagePagesReport() {
    const averageNumberOfPages = books.reduce((acc, book) => 
        acc += book.pages, 0)
    return averageNumberOfPages / books.length
}

function booksList() {
    const filteredBooksByPublication = books.sort(
        (book1, book2) => book1.publication < book2.publication ? 1 : -1)
    return filteredBooksByPublication
}


addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310); 
addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328); 
console.log(findBooksByAuthor("Дж. Р. Р. Толкиен")); 
console.log(filterBooksByGenre("Фэнтези")); 
console.log(genreReport()); 
console.log(`Среднее количество страниц: ${averagePagesReport()}`); 
console.log(booksList()); 
removeBook("1984");
console.log(books);