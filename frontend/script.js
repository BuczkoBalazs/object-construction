/* 
const currentDate = new Date("1999/01/02")

console.log(currentDate)

 */

function Book(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.age = function () {
        const d = new Date()
        const currentYear = d.getFullYear()
        return currentYear - this.year
    }
}

const myFavouriteBook = new Book("Háború és Béka", "Tolsztoj", 1867, "Historical novel");

console.log(myFavouriteBook.title);

const mySecondFavouriteBook = new Book("Az algebra alapjai", "Joe Algebra", 1992, "Sci-fi");
console.log(mySecondFavouriteBook.age());



