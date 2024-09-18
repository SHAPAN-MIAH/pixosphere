import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SuggestedConnections.css";
import { SlUserFollow } from "react-icons/sl";

const SuggestedConnections = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="suggested_connection_section">
        <div className="suggested_connection_container">
          <div className="suggested_connection_title">
            <span><SlUserFollow /></span>
            <div>
              <h6>Suggested for you</h6>
              <small>Follow similar people</small>
            </div>
          </div>
          <div className="suggested_connection_slider">
            <Slider {...settings}>
              <div className="suggested_connection_card">
                <div className="user_img">
                  <img src="user.jpg" alt="" />
                </div>
                <div className="mt-2">
                  <span>Minaksy</span>
                  <br />
                  <small>Actor</small>
                </div>

                <button>Follow</button>
              </div>
              <div className="suggested_connection_card">
                <div className="user_img">
                  <img src="user1.jpg" alt="" />
                </div>
                <div className="mt-2">
                  <span>Minaksy</span>
                  <br />
                  <small>Actor</small>
                </div>

                <button>Follow</button>
              </div>
              <div className="suggested_connection_card">
                <div className="user_img">
                  <img src="user2.jpg" alt="" />
                </div>
                <div className="mt-2">
                  <span>Shwpon</span>
                  <br />
                  <small>Programmer</small>
                </div>

                <button>Follow</button>
              </div>
              <div className="suggested_connection_card">
                <div className="user_img">
                  <img src="user3.jpeg" alt="" />
                </div>
                <div className="mt-2">
                  <span>Anisha</span>
                  <br />
                  <small>Student</small>
                </div>

                <button>Follow</button>
              </div>
              <div className="suggested_connection_card">
                <div className="user_img">
                  <img src="user4.jpg" alt="" />
                </div>
                <div className="mt-2">
                  <span>Jerin</span>
                  <br />
                  <small>Enterprenure</small>
                </div>

                <button>Follow</button>
              </div>
              <div className="suggested_connection_card">
                <div className="user_img">
                  <img src="user5.jpg" alt="" />
                </div>
                <div className="mt-2">
                  <span>Minaksy</span>
                  <br />
                  <small>Actor</small>
                </div>

                <button>Follow</button>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestedConnections;
