import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AdminService from "./service/admin_service";
import Auth from "./service/auth_service";
import Comments from "./service/comments_service";
import ErrorLogic from "./service/error_Logic";
import Like from "./service/like_service";
import PostUploader from "./service/post_uploader";
import ProfileService from "./service/profile_service";

const auth = new Auth();
const profileService = new ProfileService();
const postUploader = new PostUploader();
const errorLogic = new ErrorLogic();
const like = new Like();
const comment_service = new Comments();
const admin_service = new AdminService();

ReactDOM.render(
  <React.StrictMode>
    <App
      auth={auth}
      profileService={profileService}
      postUploader={postUploader}
      errorLogic={errorLogic}
      like={like}
      comment_service={comment_service}
      admin_service={admin_service}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
