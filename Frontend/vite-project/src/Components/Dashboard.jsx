import  { useState } from "react";
import { FiUser, FiVideo, FiSettings, FiLogOut, FiCamera } from "react-icons/fi";
import styled from "styled-components";

const Wrapper = styled.div`
position:relative;
left:60rem;
  display: flex;
  height: 100vh;
  background: linear-gradient(to right,rgb(0, 0, 0),rgb(11, 18, 26));
  color: white;
  position: relative;
`;

const SidebarWrapper = styled.div`
  width: 280px;
  background-color: rgba(25, 28, 38, 0.9);
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
`;

const SidebarItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 12px;
  border-radius: 8px;
  transition: 0.3s;
  &:hover {
    background-color: #facc15;
    color: #1e3a8a;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ProfileWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
`;

const FileInput = styled.input`
  display: none;
`;

const defaultAvatars = [
  "https://via.placeholder.com/60/FF5733/FFFFFF?text=A",
  "https://via.placeholder.com/60/33FF57/FFFFFF?text=B",
  "https://via.placeholder.com/60/3357FF/FFFFFF?text=C",
  "https://via.placeholder.com/60/FF33A6/FFFFFF?text=D",
  "https://via.placeholder.com/60/F0E68C/FFFFFF?text=E"
];

const Sidebar = ({ onSelect }) => {
  return (
    <SidebarWrapper>
      <h2 className="text-3xl font-bold mb-6">BioVerse</h2>
      <ul>
        <SidebarItem onClick={() => onSelect("profile")}>
          <FiUser className="mr-2" /> Profile
        </SidebarItem>
        <SidebarItem onClick={() => onSelect("videos")}>
          <FiVideo className="mr-2" /> My Videos
        </SidebarItem>
        <SidebarItem onClick={() => onSelect("settings")}>
          <FiSettings className="mr-2" /> Settings
        </SidebarItem>
        <SidebarItem
          onClick={() => onSelect("logout")}
          style={{ marginTop: "auto", color: "#f87171" }}
        >
          <FiLogOut className="mr-2" /> Logout
        </SidebarItem>
      </ul>
    </SidebarWrapper>
  );
};

const DashboardContent = ({ selectedSection }) => {
  return (
    <ContentWrapper>
      {selectedSection === "profile" && <Heading>User Profile</Heading>}
      {selectedSection === "videos" && <Heading>My Videos</Heading>}
      {selectedSection === "settings" && <Heading>Settings</Heading>}
      {selectedSection === "logout" && <Heading>Logging out...</Heading>}
    </ContentWrapper>
  );
};

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState("profile");
  const [profileImage, setProfileImage] = useState(
    defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)]
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <Wrapper>
      <Sidebar onSelect={setSelectedSection} />
      <DashboardContent selectedSection={selectedSection} />

      <ProfileWrapper>
        <label htmlFor="profile-upload">
          <ProfileImage src='/public/profileimg.png' alt="User Profile" />
          <FiCamera style={{ position: "absolute", bottom: 5, right: 5, color: "white", backgroundColor: "black", borderRadius: "50%", padding: "3px" }} />
        </label>
        <FileInput id="profile-upload" type="file" accept="image/*" onChange={handleImageChange} />
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Dashboard;