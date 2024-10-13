import { useState } from 'react'
import './App.css'

// Sample books data with points requirement
const books = [
  { id: 1, name: "Book 1", pointsRequired: 5 },
  { id: 2, name: "Book 2", pointsRequired: 10 },
  { id: 3, name: "Book 3", pointsRequired: 15 },
];

// Main Component
function BookStore() {
  const [userPoints, setUserPoints] = useState(20); // initialize user's points as 20
  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState("");

  const handleSelectBook = (book) => {
    if (userPoints >= book.pointsRequired) {
      setUserPoints(userPoints - book.pointsRequired);
      setSelectedBook(book);
      setError("");
    } else {
      setError("Not enough points to buy this book.");
    }
  };

  return (
    <div>
      <h1>Book Store</h1>
      <p>Your Points: {userPoints}</p>

      <div>
        {books.map((book) => (
          <div key={book.id}>
            <p>{book.name} - {book.pointsRequired} points</p>
            <button onClick={() => handleSelectBook(book)}>Buy</button>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div>
          <h2>Congratulations! You bought {selectedBook.name}</h2>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default BookStore;
