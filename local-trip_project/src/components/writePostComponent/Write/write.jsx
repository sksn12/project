import React, { useRef } from "react";
import styles from "../Write/write.module.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const Write = ({ setPost, post }) => {
  const contentRef = useRef();

  // 작성할때에는 html태그로 작성해야 글볼때 태그별로 정리가됨
  const onChange = () => {
    let new_post = { ...post };
    new_post.content = contentRef.current.getInstance().getHTML();
    setPost(new_post);
  };
  return (
    <div className={styles.container}>
      <div className={styles.write}>
        <Editor
          placeholder="write..."
          height="100%"
          ref={contentRef}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Write;
