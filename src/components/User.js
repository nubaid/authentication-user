import React, { useEffect, useState } from "react";
import _ from "lodash";
import { fetchPosts } from "../services/testApi";

const User = props => {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    const res = await fetchPosts();
    console.log(" fata ", res.data);

    if (!_.isEqual(posts, res.data)) {
      setPosts(res.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      hello user{" "}
      {posts.map(item => (
        <>
          {item.title.slice(10)}
          <br />
        </>
      ))}
    </div>
  );
};

export default User;
