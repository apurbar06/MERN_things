import React from "react";
import "./FeedCard.css";
import { Card } from "react-bootstrap";
import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const FeedCard = (props) => {
  const { userName, createdAt, message } = props;
  console.log(props);
  return (
    <Card className="feed-card">
      <div className="feed-card-content">
        <div>
          <img
            src={require("../images/defaultuser.png")}
            alt="user"
            className="feed-card-avathar"
          />
        </div>
        <Card.Body>
          <div className="feed-card-header">
            <Card.Title> {userName} </Card.Title>{" "}
            <p> {dayjs().to(createdAt)} </p>
          </div>
          <Card.Text> {message} </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};

export default FeedCard;
