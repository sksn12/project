import axios from "axios";
class Comments {
  async InquireComments(Login, data) {
    try {
      const success = await axios({
        method: "get",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/posts/${data.id}/comments?page=0&size=20`,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
      });
      return success;
    } catch (err) {
      return "error";
    }
  }

  async AddComment(Login, data, comment) {
    try {
      const success = await axios({
        method: "post",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/posts/${data.id}/comments`,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
        data: {
          content: `${comment}`,
        },
      });
      return success;
    } catch (err) {
      return "error";
    }
  }

  async DeleteComment(Login, commentId) {
    try {
      const success = await axios({
        method: "delete",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/comments/${commentId}`,
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
export default Comments;
