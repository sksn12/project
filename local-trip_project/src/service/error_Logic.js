class ErrorLogic {
  // 로그인 여부 에러처리
  LoginVal(login) {
    const val = isEmptyObj(login);
    if (val) {
      return val;
    }
  }

  // 게시글을 생성할때 기입하지 않은 항목이 있는지 확인
  PostVal(post) {
    let emptyObj = [];
    if (post.content === "") {
      emptyObj.push("content");
    } else if (post.address === "") {
      emptyObj.push("address");
    } else if (post.score === "") {
      emptyObj.push("score");
    } else if (post.isOpen === "") {
      emptyObj.push("isOpen");
    } else if (post.category === "") {
      emptyObj.push("category");
    }
    return emptyObj;
  }

  // 게시글 작성시 선택지역과 세부 지역이 다른지 검사
  AreaVal(clickArea, detailArea) {
    console.log(clickArea);
    console.log(detailArea);
  }
}

function isEmptyObj(obj) {
  if (obj.constructor === Object && Object.keys(obj).length === 0) {
    return true;
  }

  return false;
}
export default ErrorLogic;
