import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message + ' '} likeCount={' ' + p.likeCount} />);
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPost(text);

  }

  return (
    <div className='s.postsBlock'>
      <h3> My posts </h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} className={s.textarea__posts} />
        </div>
        <div>

          <button className={s.postBtn} onClick={onAddPost}> Add post </button>
        </div>
      </div>

      <div className={s.posts}>
        {postsElement}
      </div>
    </div>);

}

export default MyPosts;