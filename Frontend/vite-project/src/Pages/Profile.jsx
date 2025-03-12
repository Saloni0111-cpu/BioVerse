import 'react'
import  Navbar from '../Components/Navbar'
import ProfilePic from '../Components/ProfilePic.jsx'
import LoginB from '../Components/LoginForm'
import Banner from '../Components/Banner'
const Profile = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <ProfilePic/>
        <LoginB/>
    </>
  )
}

export default Profile
