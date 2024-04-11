import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { slug, title, id } = props.data;
  const { setTopicFilter } = props;

  return (
    <div className="topic-list__item" onClick={() => setTopicFilter(id)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
