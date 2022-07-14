import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const [pending, setPending] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {title, body, author};

    setPending(true);

    fetch('http://localhost:8000/blogs', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setPending(false);
      history.push('/');
    })
  }

  return (
    <div className='create'>
        <h2>ADD A BLOG</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input type="text"
          value={title}
          onChange = {(e) => setTitle(e.target.value)} 
          required
          />
          <label>Blog Body:</label>
          <textarea type="text" 
          value={body}
          onChange = {(e) => setBody(e.target.value)}
          required
          />
          <label>Blog Author</label>
          <select 
          value={author}
          onChange = {(e) => setAuthor(e.target.value)}
          >
            <option value="mario">Mario</option>
            <option value="yoshi">Yoshi</option>
          </select>
          { !pending && <button>Add Blog</button> }
          { pending && <button disabled>Adding Blog...</button> }
        </form>
    </div>
  )
}

export default Create;