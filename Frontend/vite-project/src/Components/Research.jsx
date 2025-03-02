import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const UNSPLASH_ACCESS_KEY = "L70C7mwJpSXEu6KYs-PyEJVx50rsNaXVu9dOyZuY7M0";

const Research = () => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await axios.get(
          "http://export.arxiv.org/api/query?search_query=all:biodiversity&start=0&max_results=10"
        );

        const parser = new DOMParser();
        const xml = parser.parseFromString(response.data, "text/xml");
        const entries = xml.getElementsByTagName("entry");

        let papersList = [];
        for (let i = 0; i < entries.length; i++) {
          let title = entries[i].getElementsByTagName("title")[0].textContent;
          let authorTags = entries[i].getElementsByTagName("author");
          let authors = [];
          for (let j = 0; j < authorTags.length; j++) {
            authors.push(authorTags[j].getElementsByTagName("name")[0].textContent);
          }
          let link = entries[i].getElementsByTagName("id")[0].textContent;
          let published = entries[i].getElementsByTagName("published")[0].textContent.slice(0, 10);

          // Fetch Image for the paper
          const imageUrl = await fetchImage(title);

          papersList.push({ title, authors, link, published, imageUrl });
        }

        setPapers(papersList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching research papers:", error);
        setLoading(false);
      }
    };

    fetchPapers();
  }, []);

  // Function to fetch images from Unsplash
  const fetchImage = async (query) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=1`
      );
      return response.data.results[0]?.urls?.small || "";
    } catch (error) {
      console.error("Error fetching image:", error);
      return "";
    }
  };

  return (
    <StyleWrapper>
      <h2>Research Papers</h2>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="grid-container">
          {papers.map((paper, index) => (
            <div key={index} className="card">
              {paper.imageUrl && <img src={paper.imageUrl} alt={paper.title} className="paper-image" />}
              <h3>{paper.title}</h3>
              <p className="date">📅 {paper.published}</p>
              <p><strong>Authors:</strong> {paper.authors.join(", ")}</p>
              <a href={paper.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </StyleWrapper>
  );
};

const StyleWrapper = styled.div`
  position: relative;
  top:18rem;
  overflow:hidden;
  background: rgb(32, 34, 43);
  padding: 2px;
  text-align: center;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
  }

  .grid-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .card {
    background: transparent;
    width: 300px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    text-align: left;

    h3 {
      font-size: 18px;
      color: #0077cc;
    }

    .date {
      font-size: 14px;
      color: gray;
    }

    .paper-image {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    a {
      display: inline-block;
      margin-top: 10px;
      padding: 8px 12px;
      background: #0077cc;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      transition: 0.3s;
    }

    a:hover {
      background: #005fa3;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  .loader {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #0077cc;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: auto;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;


export default Research;
