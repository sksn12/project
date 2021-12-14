import axios from "axios";
class ProfileService {
  async memberInfoInquire(Login) {
    try {
      if (isEmptyObj(Login)) {
        return;
      }
      const Info = await axios({
        method: "get",
        url: "http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/members",
        headers: { Authorization: `Bearer ${Login.userId}` },
      });
      return Info;
    } catch (err) {
      throw err;
    }
  }

  async profileImageChange(Login, file) {
    try {
      const data = new FormData();
      data.append("image", file);
      const newProfileImage = await axios({
        method: "patch",
        url: "http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/members/profileimg",
        headers: { Authorization: `Bearer ${Login.userId}` },
        data: data,
      });
      return newProfileImage;
    } catch (err) {
      throw err;
    }
  }

  async profileNicknameChange(Login, Newnickname) {
    try {
      const profileNicknameChange = await axios({
        method: "patch",
        url: "http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/members/nickname",
        headers: { Authorization: `Bearer ${Login.userId}` },
        data: { nickname: Newnickname },
      });
      return profileNicknameChange;
    } catch (err) {
      throw err;
    }
  }

  async profileBackgroundChange(Login, image) {
    try {
      const data = new FormData();
      data.append("image", image);
      const profileNicknameChange = await axios({
        method: "patch",
        url: "http://ec2-3-34-121-57.ap-northeast-2.compute.amazonaws.com:8080/members/backgroundimg",
        headers: { Authorization: `Bearer ${Login.userId}` },
        data: data,
      });
      return profileNicknameChange;
    } catch (err) {
      throw err;
    }
  }
}

// 빈객체인지 확인
function isEmptyObj(obj) {
  if (obj.constructor === Object && Object.keys(obj).length === 0) {
    return true;
  }

  return false;
}

export default ProfileService;
