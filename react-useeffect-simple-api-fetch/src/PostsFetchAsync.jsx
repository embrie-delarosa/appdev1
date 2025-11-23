import { useEffect, useState } from "react";

function PostsFetchAsync() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostsFetchAsync;
