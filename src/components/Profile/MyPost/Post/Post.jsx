import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (

    <div className={s.item}>
      <img src='https://avatars.mds.yandex.net/i?id=5f01c7b4b641b91b052f87be76e9b6aead348452-7570978-images-thumbs&n=13' alt='ava' />
      {props.message}

      <span>like:</span>
      {props.likeCount}
    </div>


  );
}

let sum = 0;
for (let i = 1; i <= 4; i = i + 1) {
  sum += 4;
}
console.log(sum);

export default Post;