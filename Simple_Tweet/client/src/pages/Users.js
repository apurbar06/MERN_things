import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import UserList from "../components/UserList";
import api from "../api";

import TabsContainer from "../components/TabsContainer";

export const Users = () => {
  return (
    <Container>
      <Header displayLinks />
      <TabsContainer>
        <UserList api={api.user.all} />
      </TabsContainer>
    </Container>
  );
};

export default Users;
