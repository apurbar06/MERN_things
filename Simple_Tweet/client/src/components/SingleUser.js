import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import "./SingleUser.css";

const SingleUser = ({ userCode, userName, isFollowing, followers, onFollowClick }) => {
  return (
    <ListGroup.Item className="user-list-content">
      <div className="user-list-text-container">
        <div>
        <img src={require("../images/defaultuser.png")} alt="user" className="user-list-avathar" />
        </div>
        <div>
          <h4> {userName} </h4> 
          {/* <p> Following {followers} </p> */}
        </div>
      </div>
      {isFollowing ? (
        <p className="following-text"> Following </p>
      ) : (
        <Button onClick={() => onFollowClick(userCode)}>Follow</Button>
      )}
    </ListGroup.Item>
  );
};

export default SingleUser;
