import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";
import NoteRepository from "./service/note_Repository";
import ImageUploader from "./service/image_uploader";
import ImageRepository from "./service/image_Repository";

const authService = new AuthService();
const noteRepository = new NoteRepository();
const imageRepository = new ImageRepository();
const imageUploader = new ImageUploader();

ReactDOM.render(
  <React.StrictMode>
    <App
      AuthService={authService}
      NoteRepository={noteRepository}
      ImageUploader={imageUploader}
      ImageRepository={imageRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
