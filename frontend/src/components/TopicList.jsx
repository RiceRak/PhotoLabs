import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const renderedTopics = props.topics.map(item => <TopicListItem key={item.id} data={item}/>)
  
  return (
    <div className="top-nav-bar__topic-list">
      {renderedTopics}
    </div>
  );
};

export default TopicList;
