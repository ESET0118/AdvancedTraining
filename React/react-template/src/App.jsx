import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n"; // initialize i18n
import Form from "./Components/Form";

function App() {
  const { t, i18n } = useTranslation();

  return (
    // <div style={{ textAlign: "center", marginTop: "100px" }}>
    //   <h1>{t("title")}</h1>
    //   <p>{t("description")}</p>

    //   <button onClick={() => i18n.changeLanguage("en")}>🇬🇧 English</button>
    //   <button onClick={() => i18n.changeLanguage("fr")}>🇫🇷 French</button>


    // </div>
    <Form/>
  );
}

export default App;
