import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics";

const TopicList = () => {

  const renderedTopics = topics.map(item => <TopicListItem key={item.id} data={item}/>)
  
  return (
    <div className="top-nav-bar__topic-list">
      {renderedTopics}
    </div>
  );
};

export default TopicList;
