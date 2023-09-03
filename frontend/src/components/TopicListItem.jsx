import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div
      className="topic-list__item"
      onClick={() => {
        props.onTopicSelection(props.topicId);
      }}
    >
      <span>{props.topic.title}</span>
    </div>
  );
};

export default TopicListItem;
