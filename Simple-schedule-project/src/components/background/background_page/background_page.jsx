import React, { useEffect, useState } from "react";
import BackgroundAddBtn from "../background_addBtn/background_addBtn";
import BackgroundDelete from "../background_delete/background_delete";
import styles from "../background_page/background_page.module.css";
import ImageItem from "../imageItem/iamge_item";
const BackgroundPage = ({
  setBackgroundVis,
  ImageUploader,
  ImageRepository,
  userId,
  setChangeBackgourd,
}) => {
  const [file, setFile] = useState({});
  useEffect(() => {
    const stopSync = ImageRepository.syncImage(userId, (file) => {
      setFile(file);
    });
    return () => {
      stopSync();
    };
  }, [userId, ImageRepository]);

  const ItmeDelete = (id) => {
    const update = { ...file };
    delete update[id];
    setFile(update);
    ImageRepository.deleteImage(userId, id);
  };

  return (
    <div className={styles.page}>
      <BackgroundDelete setBackgroundVis={setBackgroundVis} />
      <h2>사진 리스트</h2>
      <div className={styles.ImageList}>
        <ImageItem
          file={file}
          ItmeDelete={ItmeDelete}
          setChangeBackgourd={setChangeBackgourd}
        />
      </div>
      <BackgroundAddBtn
        ImageUploader={ImageUploader}
        setFile={setFile}
        file={file}
        ImageRepository={ImageRepository}
        userId={userId}
      />
    </div>
  );
};

export default BackgroundPage;
