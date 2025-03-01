import { useEffect, useState } from "react";
import styled from "styled-components";

const ShopCard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=encyclopedia+biodiversity+habitat+animals+nature&maxResults=36&key=AIzaSyAe5aMW9pXA56BgYOeATZw9WCgdqEtsLG4`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setBooks(
            data.items.map((book) => ({
              id: book.id,
              title: book.volumeInfo.title || "No Title Available",
              price: book.saleInfo?.listPrice?.amount
                ? `$${book.saleInfo.listPrice.amount}`
                : "Free",
              image: book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150",
            }))
          );
        }
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <StyledWrapper>
        <div className="display-container"> <h2 className="S-Head">Read the Best You Want<br/>Check out all the amazing Encyclopedias to read</h2></div>
        <div className="container">
      {books.map((book) => (
        
        <div className="card" key={book.id}>
          <div className="image">
            <img src={book.image} alt={book.title} />
          </div>
          <span className="title">{book.title}</span>
          <span className="price">{book.price}</span>
        </div>
        
      ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .display-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

.S-Head {

margin-top:4rem;
z-index:1;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
}

.container {

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.card {
top:13rem;
left:2.5rem;

position:relative;
  width: 16em; /* Set only one width property */
  max-width: 90vw;
  height: 15em;
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 120ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0F1014;
  padding: 0.1em;
  
  text-align: center;
  border-radius: 8px;
}

.card .image img {
  max-width: 100%;
  height: 10em;
  object-fit: cover;
  border-radius: 8px;
}

.card .title {
  font-size: 0.7em;
  margin-top: 0.5em;
  font-weight: 600;
  color: white;
}

.card .price {
  font-size: 0.9em;
  margin-top: 0.2em;
  color: #00AC7C;
  font-weight: bold;
}

.card:hover {
  transform: scale(1.05);
}

`;

export default ShopCard;
