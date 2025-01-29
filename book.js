const book = {
	title : "The Great Gatsby",
	author : "F. Scott Fitzgerald",
	yearPublished : 1925
};

function author(book){
	return `${book.title} by ${book.author}`
}

console.log(author(book).toString())

