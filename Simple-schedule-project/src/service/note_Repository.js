import { firebaseDatabase } from "./firebase";

class NoteRepository {
  syncCards(userId, month, date, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/list/${month}/${date}`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveList(userId, updateList, month, day) {
    firebaseDatabase.ref(`${userId}/list/${month}/${day}`).set(updateList);
  }
  deleteList(userId, id, month, day) {
    firebaseDatabase.ref(`${userId}/list/${month}/${day}/${id}`).remove();
  }
}
export default NoteRepository;
