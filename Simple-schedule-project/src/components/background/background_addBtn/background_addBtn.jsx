import React, { useRef } from "react";
import styles from "../background_addBtn/background_addBtn.module.css";
const BackgroundAddBtn = ({ ImageUploader, file, ImageRepository, userId }) => {
  const inputRef = useRef();
  const onAdd = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    const upload = await ImageUploader.upload(event.target.files[0]);
    const updatedFile = {
      ...file,
      [Date.now()]: { fileName: upload.original_filename, fileURL: upload.url },
    };

    ImageRepository.saveImage(userId, updatedFile);
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.add} onClick={onAdd}>
        image uploader
      </button>
      ;
    </div>
  );
};

export default BackgroundAddBtn;
