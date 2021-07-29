import Image from "next/image";

import styles from "../styles/Post.module.scss";

const Post = ({ date, image, title }) => {
  let { file, description } = image;

  return (
    <div className="post">
      <Image alt={description} src={`https:${file.url}`} />
      <div className="description">{description}</div>
      <div className="text">
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
      </div>
    </div>
  );
};

export default Post;
