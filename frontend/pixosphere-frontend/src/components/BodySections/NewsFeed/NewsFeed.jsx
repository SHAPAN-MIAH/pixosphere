import "./NewsFeed.css";
import { GrLike } from "react-icons/gr";
import { BiCommentDetail } from "react-icons/bi";
import { RiShareForwardBoxFill } from "react-icons/ri";

const NewsFeed = () => {
  return (
    <>
      <div className="news_feed_section">
        <div className="news_feed_container">
          <div className="news_feed_content">
            <div className="news_feed_heading">
              <div className="user_img">
                <img src="user5.jpg" alt="" />
              </div>
              <div>
                <span>Meenaakshi</span>
                <button>Follow</button>
                <br />
                <small>Published: Sep 14 2024</small>
              </div>
            </div>
            <div className="post_title_des">
              <p>Lorem ipsum dolor sit amet.</p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto incidunt, mollitia itaque commodi laudantium
                voluptate ab iusto eveniet veniam magni!
              </small>
            </div>
            <div className="img_video">
              <img src="meenaakshi_banner.webp" alt="" />
            </div>

            <div className="like_comment_share mt-4">
              <button className="like">
                <span>
                  <GrLike />
                </span>{" "}
                Like
              </button>
              <button className="comment">
                <span>
                  <BiCommentDetail />
                </span>{" "}
                Comment
              </button>
              <button className="share">
                <span>
                  <RiShareForwardBoxFill />
                </span>{" "}
                Share
              </button>
            </div>
          </div>
          <div className="news_feed_content">
            <div className="news_feed_heading">
              <div className="user_img">
                <img src="user5.jpg" alt="" />
              </div>
              <div>
                <span>Meenaakshi</span>
                <button>Follow</button>
                <br />
                <small>Published: Sep 14 2024</small>
              </div>
            </div>
            <div className="post_title_des">
              <p>Lorem ipsum dolor sit amet.</p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto incidunt, mollitia itaque commodi laudantium
                voluptate ab iusto eveniet veniam magni!
              </small>
            </div>
            <div className="img_video">
              <img src="meenaakshi_banner.webp" alt="" />
            </div>

            <div className="like_comment_share mt-4">
              <button className="like">
                <span>
                  <GrLike />
                </span>{" "}
                Like
              </button>
              <button className="comment">
                <span>
                  <BiCommentDetail />
                </span>{" "}
                Comment
              </button>
              <button className="share">
                <span>
                  <RiShareForwardBoxFill />
                </span>{" "}
                Share
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default NewsFeed;
