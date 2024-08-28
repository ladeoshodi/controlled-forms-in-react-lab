import { useState } from "react";

function Bookshelf() {
  const initialBooks = [
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ];

  const initialNewBook = { title: "", author: "" };

  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState(initialNewBook);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedBooks = structuredClone(books);
    updatedBooks.push(newBook);
    setBooks(updatedBooks);
    setNewBook(initialNewBook);
  }

  function handleChange(e) {
    const addBook = structuredClone(newBook);
    addBook[e.target.name] = e.target.value;
    setNewBook(addBook);
  }

  function clearLibrary() {
    setBooks([]);
  }

  return (
    <div className="bookshelfDiv">
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
      <div className="clear-library">
        <button onClick={clearLibrary}>Clear Library</button>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => {
          return (
            <div key={index} className="bookCard">
              <div className="book-title">{book.title}</div>
              <div className="book-author">by {book.author}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bookshelf;
