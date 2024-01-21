import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import FeedList from "../components/FeedList";
import TabsContainer from "../components/TabsContainer";
import "./Feed.css";

const Feed = () => {
  return (
    <Container>
      <Header displayLinks />
      <TabsContainer>
        <FeedList />
      </TabsContainer>
    </Container>
  );
};

export default Feed;
