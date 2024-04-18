import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { setTopicFilter, topics } = props

  const renderedTopics = topics.map((item, index) =>
    <TopicListItem
      key={item.id}
      data={item}
      setTopicFilter={setTopicFilter}
    />
  )

  return (
    <div className="top-nav-bar__topic-list">
      {topics.length > 0 ? renderedTopics : <img src='https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif' alt='loading' />}
    </div>
  );
};

export default TopicList;
