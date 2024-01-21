import React, { useState, useEffect } from "react";
import SingleUser from "./SingleUser";
import { ListGroup, Alert } from "react-bootstrap";
import Loading from "./Loading";
import apis from "../api";
import { useLocalStorage } from "usehooks-ts";

export const UserList = ({ api }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [token, setToken] = useLocalStorage("token");

  const onFollowClick = async (id) => {
    try {
      setError(false);
      setLoading(true);
      const response = await apis.user.follow({
        followinguserCode: id,
      }, token);

      if (response.data.success) {
        fetchFeeds()
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchFeeds = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await api(token);
      setUsers(response.data.data.users);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    
    fetchFeeds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && (
        <Alert variant="danger"> Something went wrong, Please reload </Alert>
      )}
      <ListGroup>
        {users.map((user) => (
          <SingleUser key={user.id} onFollowClick={onFollowClick} {...user} />
        ))}
      </ListGroup>
    </>
  );
};

export default UserList;
