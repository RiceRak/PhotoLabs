import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { setTopicFilter, topics } = props

  const renderedTopics = topics.map(item => <TopicListItem key={item.id} data={item} setTopicFilter={setTopicFilter} />)
  
  return (
    <div className="top-nav-bar__topic-list">
      {renderedTopics}
    </div>
  );
};

export default TopicList;
