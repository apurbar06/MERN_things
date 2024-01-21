import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import "./ProfileHead.css";
import api from "../api";
import { useLocalStorage } from "usehooks-ts";

const ProfileHead = () => {
  const [user, setUser] = useState("")
  const [token, setToken] = useLocalStorage("token")

  const getUser = async () => {
    const data = await api.user.me(token)
    setUser(data.data.data.user.userName)
    console.log(data)
  }

  useEffect(() => {
    
    getUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListGroup.Item className="user-list-content">
      <div className="user-list-text-container">
        <div>
          <img src={require("../images/defaultuser.png")} alt="user" className="profile-head-avathar" />
        </div>
        <div>
          <h4>{user}</h4>
          <div className="user-list-details">
            {/* <p className="user-details-item">Post: {userDetails?.followers}</p>
            <p className="user-details-item">
              Followers: {userDetails?.followers}
            </p>
            <p className="user-details-item">
              Following: {userDetails?.following}
            </p> */}
          </div>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default ProfileHead;
