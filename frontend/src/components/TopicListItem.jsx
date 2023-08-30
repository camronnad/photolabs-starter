import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      {props.topic.title}
    </div>
  );
};

export default TopicListItem;
