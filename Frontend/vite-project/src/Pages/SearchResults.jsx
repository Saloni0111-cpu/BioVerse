import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        // Fetch description from Wikipedia API
        const wikiRes = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${query}`
        );
        const wikiData = await wikiRes.json();
        setDescription(wikiData.extract || "No description found.");

        // Fetch images from Unsplash API
        const unsplashRes = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&per_page=4&client_id=L70C7mwJpSXEu6KYs-PyEJVx50rsNaXVu9dOyZuY7M0`
        );
        const unsplashData = await unsplashRes.json();
        setImages(unsplashData.results || []);

        // Fetch videos from Pexels API
        const pexelsRes = await fetch(
          `https://api.pexels.com/videos/search?query=${query}&per_page=5`,
          {
            headers: {
              Authorization: "kp6M8KdO0NZemmYXJBSyaAVO0XtSiqN1EKjnMhxPAgqPlSne4y2waXIj",
            },
          }
        );
        const pexelsData = await pexelsRes.json();
        setVideos(pexelsData.videos || []);
      
      const landscapeVideos = pexelsData.videos
        .map((video) => {
          const landscapeFile = video.video_files.find(
            (file) => file.width > file.height // Ensures landscape videos
          );
          return landscapeFile ? { ...video, selectedFile: landscapeFile } : null;
        })
        .filter((video) => video !== null); // Remove null values

      setVideos(landscapeVideos);
    }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <Navbar />
      <Banner/>
      <StyledWrapper>
        <div className="content-container">
          <div className="description">
            <h1>Results for: {query}</h1>
            <p>{description}</p>
          </div>

          {/* Display images */}
          <div className="image-container">
            {images.map((img) => (
              <img key={img.id} src={img.urls.small} alt={img.alt_description} />
            ))}
          </div>
        </div>

        {/* Video Section (Placed Below) */}
        <div className="video-container">
          {videos.map((video) => (
            <div className="video-wrapper" key={video.id}>
              <video controls>
                <source src={video.video_files[0].link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  padding: 20px;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position:relative;
  left:10rem;
  top:4rem;

  /* Row Layout for Description + Images */
  .content-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    width: 100%;
    max-width: 1200px;
  }

  .description {
    flex: 1;
    max-width: 500px;
    text-align: left;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
  }

  /* Image Section */
  .image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    max-width: 400px;
    top:6rem;
    position:relative;
    left:3rem;
  }

  img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.1);
  }

  /* Video Section (Placed Below) */
  .video-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    margin-top: 30px;
    width: 100%;
    max-width: 80rem;
    height:20rem;
    

  }

  .video-wrapper {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
  }

  .video-wrapper:hover {
    transform: scale(1.05);
  }

  video {
    width: 100%;
    
    border-radius: 10px;
  }
`;

export default SearchResults;
