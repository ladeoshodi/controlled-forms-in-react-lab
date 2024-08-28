import { useState } from "react";

function Bookshelf() {
  const initialBooks = [
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ];

  const initialNewBook = { title: "", author: "" };

  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState(initialNewBook);

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" />
          <label htmlFor="author">Author:</label>
          <input type="text" name="author" id="author" />
          <button>Add Book</button>
        </form>
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
