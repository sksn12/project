import React, { useRef } from "react";
import styles from "../Write/write.module.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const Write = ({ setPost, post }) => {
  const contentRef = useRef();

  const onChange = () => {
    let new_post = { ...post };
    new_post.content = contentRef.current.getInstance().getHTML();
    setPost(new_post);
  };
  return (
    <div className={styles.container}>
      <div className={styles.write}>
        <Editor
          height="100%"
          ref={contentRef}
          onChange={onChange}
          initialValue={post.content}
          initialEditType="wysiwyg"
        />
      </div>
    </div>
  );
};

export default Write;
