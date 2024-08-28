import { useState } from "react";

function Bookshelf() {
  const initialBooks = [
    { title: "Fourth Wing", author: "Rebecca Yarros", id: crypto.randomUUID() },
    {
      title: "The Lion, the Witch and the Wardrobe",
      author: "C.S. Lewis",
      id: crypto.randomUUID(),
    },
  ];

  const initialNewBook = { title: "", author: "" };

  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState(initialNewBook);
  const [filterBooks, setFilterBooks] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const updatedBooks = structuredClone(books);
    if (newBook.title) {
      updatedBooks.push(newBook);
      setBooks(updatedBooks);
      setNewBook(initialNewBook);
    }
  }

  function handleChange(e) {
    const addBook = structuredClone(newBook);
    addBook["id"] = crypto.randomUUID();
    addBook[e.target.name] = e.target.value;
    setNewBook(addBook);
  }

  function clearLibrary() {
    setBooks([]);
  }

  function handleDeleteBook(e) {
    const currentBooks = structuredClone(books);
    const bookToDeleteIdx = currentBooks.findIndex(
      (currentBook) => currentBook.id === e.target.dataset.bookId
    );
    currentBooks.splice(bookToDeleteIdx, 1);
    setBooks(currentBooks);
  }

  function handleSearchInput(e) {
    const currentFilteredBooks = structuredClone(books);
    const filteredBooks = currentFilteredBooks.filter((currentBook) =>
      currentBook.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterBooks(filteredBooks);
  }

  function renderBooks(booksToRender) {
    return booksToRender.map((book) => {
      return (
        <div key={book.id} className="bookCard">
          <div className="book-title">{book.title}</div>
          <div className="book-author">by {book.author}</div>
          <button
            className="remove-button"
            onClick={handleDeleteBook}
            data-book-id={book.id}
          >
            Remove Book
          </button>
        </div>
      );
    });
  }

  return (
    <div className="bookshelfDiv">
      <input
        className="search-input"
        type="search"
        name="search"
        id="search"
        onInput={handleSearchInput}
        value={filterBooks.title}
      />
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={newBook.title}
          />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={handleChange}
            value={newBook.author}
          />
          <button>Add Book</button>
        </form>
      </div>
      <button className="remove-button" onClick={clearLibrary}>
        Clear Library
      </button>
      <div className="bookCardsDiv">
        {filterBooks ? renderBooks(filterBooks) : renderBooks(books)}
      </div>
    </div>
  );
}

export default Bookshelf;
