import { useState } from 'react';
import './style.css';

let id = 1;

export default function Posts() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = { id, title };
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function deletePost(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }

  return (
    <>
      <Input addPost={addPost} />
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} deletePost={deletePost} />
      ))}
    </>
  );
}

function Input({ addPost }) {
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleKeyDown(e) {
    const title = e.target.value;
    if (e.keyCode === 13 && title) {
      addPost(title);
      setInput('');
    }
  }

  return (
    <div className="Input">
      <div className="Input__header">Create Post</div>
      <input
        className="Input__field"
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

function Post({ id, title, deletePost }) {
  return (
    <div className="Post">
      <button className="Post__delete" onClick={() => deletePost(id)}>
        X
      </button>
      <div className="Post__title"> {title}</div>
      <img
        className="Post__image"
        src={`https://source.unsplash.com/random?sid=${id}`}
        alt="Random"
      />
    </div>
  );
}
