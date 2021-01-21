import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
const Posts = () => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src="/images/profile.jpeg" alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>Mohamed El Sayed</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @mohamedelsayed179 <span>6m</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
        A photo shoot is a term that describes the process taken by creatives and models that results in a predetermined visual objective being obtained. An example could be a model posing for a photographer at a studio or an outdoor location.
        </div>
        <div className="postss__details__img">
          <img src="/images/mee.jpeg" alt="post" />
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" /> 45
          </span>
          <span>
            <FaRegChartBar className="re" /> 4
          </span>
          <span>
            <FaHeart className="re" /> 345
          </span>
          <span>
            <FaLeaf className="re" /> 234
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;