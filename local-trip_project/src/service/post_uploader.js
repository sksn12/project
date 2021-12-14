import axios from "axios";
class PostUploader {
  // Post 생성
  async createPost(file, post, Login) {
    try {
      const data = new FormData();
      for (let i = 0; i < file.length; i++) {
        data.append("image", file[i]);
      }
      const json = JSON.stringify(post);
      const jsonRequest = new Blob([json], { type: "application/json" });
      data.append("request", jsonRequest);

      const success = await axios({
        method: "post",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/posts/categories/${post.category}`,
        data: data,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
      });
      return success;
    } catch (err) {
      throw err;
    }
  }

  // 다른사람 게시글 조회
  async postInquire(firstAddress, secondAddress, Login, pageNum) {
    try {
      const success = await axios({
        method: "get",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/posts?firstAddress=${firstAddress}&secondAddress=${secondAddress}&page=${pageNum}&size=5`,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
      });

      return success;
    } catch (err) {
      throw err;
    }
  }

  // 내 모든 글 조회
  async allMyPostInquire(Login, pageNum) {
    try {
      const success = await axios({
        method: "get",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/members/posts?page=${pageNum}&size=5 `,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
      });
      return success;
    } catch (err) {
      return "error";
    }
  }

  // 선택 지역의 내 글 보기  아직 안만들어서 재권이가 로직 추가하면 주소 변경!!!
  async myPostInquire(firstAddress, secondAddress, Login) {
    try {
      const success = await axios({
        method: "get",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/members/posts/address?firstAddress=${firstAddress}&secondAddress=${secondAddress}&page=0&size=20  `,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
      });
      return success;
    } catch (err) {
      return "error";
    }
  }

  // 내 글 삭제
  async myPostDelete(postId, Login) {
    try {
      const success = await axios({
        method: "delete",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/posts/${postId}`,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
      });
      return success;
    } catch (err) {
      throw err;
    }
  }

  // 내 글 수정
  async myPostUpdate(postId, Login, post) {
    try {
      const success = await axios({
        method: "patch",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/posts/${postId}/categories/${post.category.id}`,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
        data: {
          content: post.content,
          address: post.address,
          score: post.score,
          isOpen: post.isOpen,
        },
      });
      return success;
    } catch (err) {
      throw err;
    }
  }

  // 내 글 이미지 수정
  // 이미지를 수정하면 파일형식으로 값을 보내야하는데 기존값을 url배열로 줘 기존값에서 변경 불가능
  // 그냥 통채로 사진이 수정됨
  async myPostImageUploader(postId, Login, imageUrl) {
    try {
      const data = new FormData();
      for (let i = 0; i < imageUrl.length; i++) {
        data.append("image", imageUrl[i]);
      }
      const success = await axios({
        method: "patch",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/posts/${postId}/images`,
        headers: {
          Authorization: `Bearer ${Login.userId}`,
        },
        data: data,
      });
      return success;
    } catch (err) {
      throw err;
    }
  }

  // 해시태그로 글가져오기
  async PostHashTagInquire(hashtag) {
    try {
      const success = await axios({
        method: "get",
        url: `http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/posts/hashtag?page=0&size=5&hashtag=${hashtag}`,
      });
      return success;
    } catch (err) {
      return "err";
    }
  }
}
export default PostUploader;
