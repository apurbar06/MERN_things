import React, { useState, useEffect } from "react";
import FeedCard from "./FeedCard";
import Loading from "./Loading";
import { Button, Form, Alert } from "react-bootstrap";
import api from "../api/index";
import "./FeedList.css";
import { useLocalStorage } from "usehooks-ts";

export const FeedList = ({ isOwn }) => {
  const [feeds, setFeeds] = useState([]);
  const [tweet, setTweet] = useState("");
  const [showNewTweet, setShowNewTweet] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    fetchFeeds();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchFeeds = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await api.tweet.all(token);
      // console.log(response);
      setFeeds(response.data.data.tweets);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    setShowNewTweet(false);
    event.preventDefault();
    try {
      setError(false);
      setLoading(true);
      const newFeed = {
        tweet: tweet,
      };
      const response = await api.tweet.post(newFeed, token);
      // debugger;

      if (response.data.success) {
        fetchFeeds()
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="feed-list-outer">
      {loading && <Loading />}
      {error && (
        <Alert variant="danger"> Something went wrong, Please reload </Alert>
      )}
      {!isOwn && !error && (
        <>
          {showNewTweet ? (
            <section>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="What is happening?"
                    value={tweet}
                    required
                    onChange={(e) => {
                      setTweet(e.target.value);
                    }}
                  />
                </Form.Group>
                <Button
                  variant="secondary"
                  onClick={() => setShowNewTweet(false)}
                >
                  Discard
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  className="submit-tweet"
                >
                  Submit
                </Button>
              </Form>
            </section>
          ) : (
            <Button onClick={() => setShowNewTweet(true)}>Write</Button>
          )}
        </>
      )}
      {feeds.map((feed) => (
        <FeedCard {...feed} key={feed.id} />
      ))}
    </div>
  );
};

export default FeedList;
