import CreateNewPost from "./CreateNewPost/CreateNewPost";
import NewsFeed from "./NewsFeed/NewsFeed";
import ProfileView from "./ProfileView/ProfileView";
import SuggestedConnections from "./SuggestedConnections/SuggestedConnections";

const BodySection = () => {
  return (
    <>
      <div className="body_section mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
             <ProfileView/>
            </div>
            <div className="col-md-6">
              <CreateNewPost/>
              <SuggestedConnections/>
              <NewsFeed/>
            </div>
            <div className="col-md-3">
              contact 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodySection;
