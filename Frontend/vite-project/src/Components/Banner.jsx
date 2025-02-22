import { useEffect, useState } from "react";
import styled from "styled-components";

const API_KEY = "kp6M8KdO0NZemmYXJBSyaAVO0XtSiqN1EKjnMhxPAgqPlSne4y2waXIj";
const SEARCH_QUERY = ["earth", "trees", "animals", "rivers"];

const Banner = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch(
        `https://api.pexels.com/videos/search?query=${SEARCH_QUERY}&per_page=5`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );

      const data = await response.json();
      setVideos(data.videos || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval);
  }, [videos]);

  return (
    <VideoContainer>
      <VideoWrapper currentIndex={currentIndex}>
        {videos.map((video) => (
          <video
            key={video.id}
            className="video"
            src={video.video_files[0]?.link}
            autoPlay
            muted
            loop
          />
        ))}
      </VideoWrapper>
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  margin-left: -60;
  width: 100vw;
  height: 20rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  z-index: -1;
  transparency:0.7;
`;

const VideoWrapper = styled.div`
position:fixed;
  display: flex;
  width: 100%;
  height: 100%;
  transparency:0.7;
  transition: transform 1s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}vw)`};

  .video {
    min-width: 100vw;
    height: 100vh;
    object-fit: cover;
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 90%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 90%);
  }
`;

export default Banner;
