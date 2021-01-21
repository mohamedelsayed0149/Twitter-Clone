import React from "react";
import { FaHashtag } from "react-icons/fa";

const TrendsKeyword = () => {
  const [state] = React.useState([
    {
      id: 1,
      country: "Trend in Egypt",
      keyword: "EGY",
      totalKeywords: "2000k",
    },
    {
      id: 2,
      country: "Trend in America",
      keyword: "USA",
      totalKeywords: "6000k",
    },
    {
      id: 3,
      country: "Trend in Asia",
      keyword: "Youtube in Asian",
      totalKeywords: "2560k",
    },
  ]);
  return (
    <div className="keywords">
      <div className="key">
        <div className="keyword__heading">
        <FaHashtag className="icons" id="home"/>
          <h4 id="home">Trends for you</h4>
        </div>
        {state.map((keyword) => (
          <div key={keyword.id}>
            <div className="country">{keyword.country}</div>
            <div className="keyword__name">
              <strong>{keyword.keyword}</strong>
            </div>
            <div className="keyword__tweets">{keyword.totalKeywords}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendsKeyword;