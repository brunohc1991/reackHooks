import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';
import P from 'prop-types';

const Post = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  console.log('Pai renderizou');
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  //Component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => setPosts(response));
  }, []);
  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </p>
      {useMemo(() => {
        return posts.map((post) => <Post key={post.id} post={post} />);
      }, [posts])}
    </div>
  );
}

export default App;
