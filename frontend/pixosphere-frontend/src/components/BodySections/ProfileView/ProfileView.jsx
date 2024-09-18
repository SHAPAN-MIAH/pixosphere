import './ProfileView.css';
import { SlUserFollowing } from "react-icons/sl";
import { PiUsersThree } from "react-icons/pi";


const ProfileView = () => {
  return (
    <>
      <div className="profile_view_section">
        <div className="profile_view_container">
          <div className="profile_view_content">
            <div className="cover_img">
              <img src="coverImg.jpeg" alt="" />
            </div>
            <div className="profile_img">
              <img src="user2.jpg" alt="" />
            </div>

            <div className='profile_info'>
              <span>Shwpon Mahmud</span>
              <br />
              <small>Programmer</small>

              <div className="following_follower">
                <div className="following">
                  <span><SlUserFollowing /> Following</span>
                </div>
                <div className="follower">
                  <span><PiUsersThree /> Follower</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
