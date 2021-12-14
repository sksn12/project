import axios from "axios";
class Like {
  async Pushlike(Login, postId) {
    try {
      const success = await axios({
        method: "post",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/posts/${postId}/goods`,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
      });
      return success;
    } catch (err) {
      return "error";
    }
  }

  async CancelLike(Login, postId) {
    try {
      const success = await axios({
        method: "delete",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/posts/goods/${postId}`,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
      });
      return success;
    } catch (err) {
      return "error";
    }
  }
}
export default Like;
