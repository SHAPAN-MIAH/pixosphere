import "./CreateNewPost.css";
import { IoMdPhotos } from "react-icons/io";
// import { MdOutlineEmojiEmotions } from "react-icons/md";
// import { RiLiveFill } from "react-icons/ri";
import { LuPenSquare } from "react-icons/lu";
import { PiArticleNyTimes } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";


const CreateNewPost = () => {
  return (
    <>
      <div className="create_new_post_section">
        <div className="create_new_post_container">
          <h6>Create New Post</h6>

          <div className="create_new_post_input">
            <input type="text" placeholder="Create New Post" />
            <span>
              <LuPenSquare />
            </span>
          </div>

          <div className="Photos_Videos_jobs_LiveStream">
            <div className="Photos_Videos">
              <span>
                <IoMdPhotos />
              </span>{" "}
              Photos/Videos
            </div>
            <div className="jobs">
              <span>
              <FaBriefcase />
              </span>{" "}
              Job
            </div>
            <div className="LiveStream">
              <span>
                {/* <RiLiveFill /> */}
                <PiArticleNyTimes />
              </span>{" "}
              Write Article
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewPost;
