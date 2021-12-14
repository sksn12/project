import styles from "./app.module.css";
import defalut_background from "./images/background.png";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Main from "./components/Main/main";
import { useState } from "react";

function App({ AuthService, NoteRepository, ImageUploader, ImageRepository }) {
  const [ChangeBackground, setChangeBackgourd] = useState(null);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className={styles.flex}>
            <Login AuthService={AuthService}></Login>
          </div>
        </Route>
        <Route path="/study">
          <div className={styles.container}>
            <img
              src={ChangeBackground ? ChangeBackground : defalut_background}
              alt="background"
              className={styles.img}
            />
            <Main
              AuthService={AuthService}
              NoteRepository={NoteRepository}
              ImageUploader={ImageUploader}
              ImageRepository={ImageRepository}
              setChangeBackgourd={setChangeBackgourd}
            />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
