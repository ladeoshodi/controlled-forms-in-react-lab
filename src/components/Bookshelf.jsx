import { useState } from "react";

function Bookshelf() {
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
      <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>
  );
}

export default Bookshelf;
