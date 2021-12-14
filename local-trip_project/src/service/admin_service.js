import axios from "axios";

class AdminService {
  async MemeberInquire(Login, pageNum) {
    try {
      const success = await axios({
        method: "get",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/admin/members/all?page=${pageNum}&size=10 `,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
      });
      return success;
    } catch (err) {
      return false;
    }
  }

  // 회원삭제
  async MemeberDelete(Login, memberId) {
    try {
      const success = await axios({
        method: "delete",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/admin/members/${memberId}`,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
      });
      return success;
    } catch (err) {
      return false;
    }
  }

  // 관리자 권한으로 게시글 삭제
  async AdminPostDelete(Login, postId) {
    try {
      const success = await axios({
        method: "delete",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/admin/posts/${postId}`,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
      });
      return success;
    } catch (err) {
      return false;
    }
  }

  // 카테고리 조회
  async CategroyInquire(Login) {
    try {
      const success = await axios({
        method: "get",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/categories`,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
      });
      return success;
    } catch (err) {
      return false;
    }
  }

  // 카테고리 추가
  async CartegoryAdd(Login, cartegory) {
    try {
      const success = await axios({
        method: "post",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/admin/categories`,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
        data: { name: cartegory },
      });
      return success;
    } catch (err) {
      return false;
    }
  }

  // 카테고리 삭제
  async CartegoryDelete(Login, categoryId) {
    try {
      const success = await axios({
        method: "delete",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/admin/categories/${categoryId}`,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
      });
      return success;
    } catch (err) {
      return false;
    }
  }
}
export default AdminService;
