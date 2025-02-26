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
        <div className="S-Head"> Read the Best You Want</div>
      {books.map((book) => (
        <div className="card" key={book.id}>
          <div className="image">
            <img src={book.image} alt={book.title} />
          </div>
          <span className="title">{book.title}</span>
          <span className="price">{book.price}</span>
        </div>
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  
  left:5rem;

  .S-Head{
  font-size: 2rem;
  top:1rem;
  position:relative;
  }
  .card {
    
    position: relative;
  top: 15%;
    width: 12em;
    height: 17em;
    box-shadow: 0px 1px 13px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: all 120ms;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    padding: 0.5em;
    padding-bottom: 3.4em;
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
