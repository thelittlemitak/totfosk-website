import styles from "./blog.module.css";
import BlogPost from "./BlogPost";
import posts from "../../data/blog";

const Blog = function () {
  return (
    <div className="disappeared">
      {posts.map((x, index) => {
        const adjustedIndex = posts.length - index;

        return (
          <BlogPost
            titleTunnel={x.title}
            bodyTunnel={x.body}
            key={x.key}
            indexTunnel={adjustedIndex}
            picIDTunnel={x.picID}
            commentsTunnel={x.comments}
            dateTunnel={x.date}
          ></BlogPost>
        );
      })}
    </div>
  );
};

export default Blog;
