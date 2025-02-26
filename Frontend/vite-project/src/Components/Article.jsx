import { useEffect, useState } from 'react';
import styled from 'styled-components';

const API_KEY = '4dd7e7c9d01242b29d265f1b27ffc291'; // Replace with your actual API key
const API_URL = `https://www.biodiversitylibrary.org/api3?op=GetTitleMetadata&titleid=1&format=json&apikey=${API_KEY}`;

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.Result) {
        setArticles(data.Result);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  return (
    <StyledWrapper>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div className="card" key={index}>
            <h3>{article.Title}</h3>
          </div>
        ))
      ) : (
        <p>Loading articles...</p>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  .card {
    width: 190px;
    height: 254px;
    background: transparent;
    border: 2px solid #07ff07;
    box-shadow: 2px 2px 15px #000000 inset;
    text-align: center;
    color: #e8e8e8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Pacifico';
    padding: 1rem;
  }

  .card:hover {
    color: #07ff07;
    box-shadow: 2px 2px 15px #07ff07 inset;
  }
`;

export default Article;
