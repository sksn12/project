import { firebaseDatabase } from "./firebase";

class ImageRepository {
  syncImage(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/image`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveImage(userId, updatedFile) {
    firebaseDatabase.ref(`${userId}/image`).set(updatedFile);
  }
  deleteImage(userId, id) {
    firebaseDatabase.ref(`${userId}/image/${id}`).remove();
  }
}
export default ImageRepository;
