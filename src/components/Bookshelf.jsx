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

  function handleSubmit(e) {
    e.preventDefault();
    const updatedBooks = structuredClone(books);
    updatedBooks.push(newBook);
    setBooks(updatedBooks);
    setNewBook(initialNewBook);
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
      <button className="remove-button" onClick={clearLibrary}>
        Clear Library
      </button>
      <div className="bookCardsDiv">
        {books.map((book) => {
          return (
            <div key={book.id} className="bookCard">
              <div className="book-title">{book.title}</div>
              <div className="book-author">by {book.author}</div>
              <button className="remove-button">Remove Book</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bookshelf;
