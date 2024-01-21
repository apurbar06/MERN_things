import React, { useState } from "react";
import Header from "../components/Header";
import TabsContainer from "../components/TabsContainer";
import Container from "../components/Container";
import { Nav } from "react-bootstrap";
import UserList from "../components/UserList";
import FeedList from "../components/FeedList";
import ProfileHead from "../components/ProfileHead";
import "./Profile.css";
import api from "../api";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("post");
  return (
    <Container>
      <Header displayLinks />
      <TabsContainer>
        <ProfileHead />
        <Nav
          className="user-tabs"
          fill
          variant="tabs"
          activeKey={activeTab}
          onSelect={(eventKey) => {
            setActiveTab(eventKey);
          }}
        >
          <Nav.Item>
            <Nav.Link eventKey="post"> Post </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="followers"> Followers </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="following"> Following </Nav.Link>
          </Nav.Item>
        </Nav>
        {activeTab === "post" && <FeedList isOwn />}
        {activeTab === "followers" && <UserList api={api.user.followers} />}
        {activeTab === "following" && <UserList api={api.user.following} />}
      </TabsContainer>
    </Container>
  );
};

export default Profile;
