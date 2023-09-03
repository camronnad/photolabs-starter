import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic, index) => (
        <TopicListItem
          key={index}
          topic={topic}
          topicId={topic.id}
          onTopicSelection={props.onTopicSelection}
        />
      ))}
    </div>
  );
};

export default TopicList;
