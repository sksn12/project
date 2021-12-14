import axios from "axios";

class Auth {
  logIn() {
    return new Promise((resolve, reject) => {
      window.Kakao.Auth.login({
        // 사용자 닉네임과 프로필을 일단 받아오는 걸로 설정해놓음
        scope: "profile_nickname,profile_image,account_email",
        success: (authObj) => {
          resolve(authObj.access_token);
        },
        fail: function (err) {
          reject(JSON.stringify(err));
        },
      });
    });
  }
  logOut() {
    window.Kakao.Auth.logout(function () {
      // console.log(window.Kakao.Auth.getAccessToken());
    });
  }
  async getBearer(accessToken) {
    try {
      const Bearer = await axios({
        method: "post",
        url: "http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/members/login",
        headers: {
          kakaoToken: accessToken,
        },
      });
      return Bearer;
    } catch (err) {
      throw err;
    }
  }
  async logOutPost(Login) {
    console.log(Login.userId);
    try {
      await axios({
        method: "get",
        url: "http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/members/logout",
        headers: { Authorization: `Bearer ${Login.userId}` },
      });
    } catch (err) {
      throw err;
    }
  }

  async accessToken_rerendering(refresh) {
    try {
      const access = await axios({
        method: "post",
        url: "http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/members/refresh",
        headers: { Authorization: `Bearer ${refresh}` },
      });
      return access;
    } catch (err) {
      throw err;
    }
  }
}
export default Auth;
